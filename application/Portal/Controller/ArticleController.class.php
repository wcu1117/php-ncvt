<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
namespace Portal\Controller;

use Common\Controller\HomebaseController;

class ArticleController extends HomebaseController {
    //文章内页
    public function index() {
    	$article_id=I('get.id',0,'intval'); //获取文章ID
    	$term_id=I('get.cid',0,'intval');   //获取分类ID
    	
    	$posts_model=M("Posts");    //实例化文章数据库
    	
    	$article=$posts_model   //查询数据
    	->alias("a")    //使用别名
    	->field('a.*,c.user_login,c.user_nicename,b.term_id')   //过滤字段
    	->join("__TERM_RELATIONSHIPS__ b ON a.id = b.object_id")    //联表查询
		->join("__USERS__ c ON a.post_author = c.id")
		->where(array('a.id'=>$article_id,'b.term_id'=>$term_id))   //指定条件
		->find();

        //如果数据为空
    	if(empty($article)){
    	    header('HTTP/1.1 404 Not Found');
    	    header('Status:404 Not Found');
    	    if(sp_template_file_exists(MODULE_NAME."/404")){
    	        $this->display(":404");
    	    }
    	    
    	    return;
    	}
    	
    	$terms_model= M("Terms"); //实例化分类表
    	$term=$terms_model->where(array('term_id'=>$term_id))->find(); //查询数据
        //更新点击数
    	$posts_model->save(array("id"=>$article_id,"post_hits"=>array("exp","post_hits+1")));
    	//更新日期
    	$article_date=$article['post_date'];
    	//联表查询
    	$join = '__POSTS__ as b on a.object_id =b.id';
    	$join2= '__USERS__ as c on b.post_author = c.id';

        //实例化关系表
    	$term_relationships_model= M("TermRelationships");
    	//安大于时间查询
    	$next=$term_relationships_model
    	->alias("a")
    	->join($join)->join($join2)
    	->where(array("post_date"=>array("egt",$article_date), "object_id"=>array('neq',$article_id), "a.status"=>1,'a.term_id'=>$term_id,'post_status'=>1))
    	->order("post_date asc")
    	->find();
    	//按小于日期
    	$prev=$term_relationships_model
    	->alias("a")
    	->join($join)->join($join2)
    	->where(array("post_date"=>array("elt",$article_date), "object_id"=>array('neq',$article_id), "a.status"=>1,'a.term_id'=>$term_id,'post_status'=>1))
    	->order("post_date desc")
    	->find();
    	//模版赋值
    	$this->assign("next",$next);
    	$this->assign("prev",$prev);

    	$smeta=json_decode($article['smeta'],true);//获取图片数据
    	$content_data=sp_content_page($article['post_content']);//获取文章内容
    	$article['post_content']=$content_data['content'];

        //模版赋值
    	$this->assign("page",$content_data['page']);
    	$this->assign($article);
    	$this->assign("smeta",$smeta);
    	$this->assign("term",$term);
    	$this->assign("article_id",$article_id);
    	
    	$tplname=$term["one_tpl"];
    	$tplname=empty($smeta['template'])?$tplname:$smeta['template'];
    	$tplname=sp_get_apphome_tpl($tplname, "article");
    	
    	$this->display(":$tplname");
    }

    //点赞功能
    public function do_like(){
    	$this->check_login(); //检查用户是否登录
    	
    	$id=intval($_GET['id']);//posts表中id
    	
    	$posts_model=M("Posts");    //模型实例化
    	
    	$can_like=sp_check_user_action("posts$id",1);
        //检查用户对某个url,内容的可访问性，用于记录如是否赞过，是否访问过等等;
    	
    	if($can_like){
    		$posts_model->save(array("id"=>$id,"post_like"=>array("exp","post_like+1")));
    		$this->success("赞好啦！");
    	}else{
    		$this->error("您已赞过啦！");
    	}
    }


    //发表文章帖子
    public function add(){
        $this->check_login();
        $this->_getTermTree();
        $this->display();
    }
    
    /**
     * 提交话题
     */
    public function add_post(){
        if(IS_POST){
            $this->check_login();//检查登录
            //选择分类，必须选
            if(empty($_POST['term'])){
                $this->error("请至少选择一个分类！");
            }
            $posts_model=M('Posts');//文章表
            $term_relationships_model=M('TermRelationships');//文章分类关系表

            //输出数据库保存的文件路径（都是相对于data/upload文件夹的）
            $_POST['smeta']['thumb'] = sp_asset_relative_url($_POST['smeta']['thumb']);
            
            $_POST['post']['post_date']=date("Y-m-d H:i:s",time());//格式化时间戳
            $_POST['post']['post_modified']=date("Y-m-d H:i:s",time());//获取修改时间
            $_POST['post']['post_author']=sp_get_current_userid();//获取当前作者
            $article=I("post.post");
            $article['smeta']=json_encode($_POST['smeta']); //图片转格式
            //过滤提交的代码
            $article['post_content']=safe_html(htmlspecialchars_decode($article['post_content']));
            //创建数据
            if ($posts_model->field('post_date,post_author,post_content,post_title,post_modified,smeta')->create($article)!==false) {
                $result=$posts_model->add();
                if ($result) {
                    $result=$term_relationships_model->add(array("term_id"=>intval($_POST['term']),"object_id"=>$result));
                    if($result){
                        $this->success("文章添加成功！");
                    }else{
                        $posts_model->delete($result);
                        $this->error("文章添加失败！");
                    }
                
                } else {
                    $this->error("文章添加失败！");
                }
            }else{
                $this->error($posts_model->getError());
            }
            
            
        }
    
    }
    
    public function edit(){
        $this->check_login();
        $id=I("get.id",0,'intval');
        $terms_model=M('Terms');
        $posts_model=M('Posts');
        
        $term_relationship = M('TermRelationships')->where(array("object_id"=>$id,"status"=>1))->getField("term_id",true);
        $this->_getTermTree();
        $post=$posts_model->where(array('id'=>$id,'post_author'=>sp_get_current_userid()))->find();
        if(!empty($post)){
            $this->assign("post",$post);
            $this->assign("smeta",json_decode($post['smeta'],true));
            $this->display();
        }else{
            $this->error('您编辑的文章不存在！');
        }
        
    }
    
    
    public function edit_post(){
        if(IS_POST){
            $this->check_login();

            $posts_model=M('Posts');
            $term_relationships_model=M('TermRelationships');
            
            $_POST['smeta']['thumb'] = sp_asset_relative_url($_POST['smeta']['thumb']);
            $_POST['post']['post_modified']=date("Y-m-d H:i:s",time());
            $article=I("post.post");
            $article['smeta']=json_encode($_POST['smeta']);
            $article['post_content']=safe_html(htmlspecialchars_decode($article['post_content']));
            if ($posts_model->field('id,post_author,post_content,post_title,post_modified,smeta')->create($article)!==false) {
                $result=$posts_model->where(array('id'=>$article['id'],'post_author'=>sp_get_current_userid()))->save($article);
                if ($result!==false) {
                    $this->success("文章编辑成功！");
                } else {
                    $this->error("文章编辑失败！");
                }
            }else{
                $this->error($posts_model->getError());
            }
            
        }
    }
    
    private function _getTermTree($term=array()){
        $result =M('Terms')->order(array("listorder"=>"asc"))->select();
    
        $tree = new \Tree();
        $tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
        $tree->nbsp = '&nbsp;&nbsp;&nbsp;';
        foreach ($result as $r) {
            $r['str_manage'] = '<a href="' . U("AdminTerm/add", array("parent" => $r['term_id'])) . '">添加子类</a> | <a href="' . U("AdminTerm/edit", array("id" => $r['term_id'])) . '">修改</a> | <a class="js-ajax-delete" href="' . U("AdminTerm/delete", array("id" => $r['term_id'])) . '">删除</a> ';
            $r['visit'] = "<a href='#'>访问</a>";
            $r['taxonomys'] = $this->taxonomys[$r['taxonomy']];
            $r['id']=$r['term_id'];
            $r['parentid']=$r['parent'];
            $r['selected']=in_array($r['term_id'], $term)?"selected":"";
            $r['checked'] =in_array($r['term_id'], $term)?"checked":"";
            $array[] = $r;
        }
    
        $tree->init($array);
        $str="<option value='\$id' \$selected>\$spacer\$name</option>";
        $terms = $tree->get_tree(0, $str);
        $this->assign('terms', $terms);
    }
}

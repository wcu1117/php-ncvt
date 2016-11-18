<?php
namespace Forum\Controller;
use Common\Controller\HomebaseController;

class IndexController extends HomebaseController{
    protected $posts;
    protected $terms;
    protected $reply;
    protected $small_reply;
    function _initialize(){
        $this->posts = M('posts');
        $this->terms = M('terms');
        $this->reply = M('post_reply');
        $this->small_reply = M('post_small_reply');
    }
    function index(){
        $count = $this->posts->count(); //总数量
        $page = $this->page($count,5);
        $post = $this->posts->order('id desc')->limit($page->firstRow . ',' . $page->listRows)->select();
        //$post = $this->posts->order("id desc")->select();
        $this->assign('posts',$post);
        $this->assign('page',$page->show('Index'));
        $this->display(':index');
    }
    function add(){
        $term = $this->terms->select();//取出数据库的值
        $this->assign('terms',$term);
        $this->display(':add');
    }

    function add_post(){
        if(IS_POST){
            //默认自动选中一个分类不为空

            //多图上传的接受截取
            if(!empty($_POST['photos_alt']) && !empty($_POST['photos_url'])){
                foreach ($_POST['photos_url'] as $key=>$url){
                    $photourl=sp_asset_relative_url($url);
                    //获取域名后的地址，如http://thinkcmf.com/news.html,转化后为/news.html
                    $_POST['smeta']['photo'][]=array("url"=>$photourl,"alt"=>$_POST['photos_alt'][$key]);
                }
            }
            //缩略图获取
            $_POST['smeta']['thumb'] = sp_asset_relative_url($_POST['smeta']['thumb']);
            //var_dump($_POST['smeta']);
            $_POST['post']['post_date']=date("Y-m-d H:i:s",time());
            $_POST['post']['post_author']=get_current_admin_id() ? get_current_admin_id() : 'anyone';
            //$_POST['post']['post_author']=get_current_admin_id();

            $article=I("post.post");
            $article['smeta']=json_encode($_POST['smeta']);//对变量进行JSON编码
            //var_dump($article['smeta']);
            $article['post_content']=htmlspecialchars_decode($article['post_content']);//格式化网页编码
            $result=$this->posts->add($article);
            if ($result) {
                $this->success("添加成功！",U("index/index"));
            } else {
                $this->error("添加失败！");
            }
        }
    }

    function detail(){
        $id= I('get.id');   //获取ID
        $post = $this->posts->where("id={$id}")->select();
        //回复信息
        $reply = $this->reply->select();
        //楼中楼
        $small_r = $this->small_reply->select();
        $this->assign('small',$small_r);//模版输出
        $this->assign('reply',$reply);
        $this->assign('posts',$post);
        $this->display(':detail');
    }
    //帖子回复功能
    function reply_post(){

        if(IS_POST){
            //多图上传的接受截取
            if(!empty($_POST['photos_alt']) && !empty($_POST['photos_url'])){
                foreach ($_POST['photos_url'] as $key=>$url){
                    $photourl=sp_asset_relative_url($url);
                    //获取域名后的地址，如http://thinkcmf.com/news.html,转化后为/news.html
                    $_POST['smeta']['photo'][]=array("url"=>$photourl,"alt"=>$_POST['photos_alt'][$key]);
                }
            }
            $content = I('post.post_content');
            $reply['post_id'] = I('post.post_id');//能否可以同时进行两张方式提交
            $reply['post_author'] =get_current_admin_id() ? get_current_admin_id() : 0;
            $reply['post_content'] = htmlspecialchars_decode($content);//内容
            $reply['smeta'] =json_encode($_POST['smeta']);//对变量进行JSON编码
            $reply['reply_time'] =I('post.reply_time');   //时间
            $result = $this->reply->add($reply);
            if ($result) {
                $this->success("添加成功！",U("index/detail",array('id'=>$reply['post_id'])));
            } else {
                $this->error("添加失败！");
            }
        }
    }

    function small_reply_post(){
            $reply['reply_id'] = I('get.id');  //获取当前回复ID
            $post_id = I('get.post_id');  //获取朱帖子ID
            $reply['post_content'] = I('post.post_content');
            $reply['post_author'] =get_current_admin_id() ? get_current_admin_id() : 0;
            $reply['reply_time'] = date("Y-m-d H:i:s",time());
            //var_dump($reply);
            $result = $this->small_reply->add($reply);
            if($result){
                $this->success("添加成功！",U("index/detail",array('id'=>$post_id)));
            } else {
                $this->error("添加失败！");
            }


    }
}
<?php
namespace Content\Controller;
use Common\Controller\AdminbaseController;
class IndexadminController extends AdminbaseController{
    protected $news;
    function _initialize(){
        $this->news=M('news');
    }
    function index(){

        $posts=$this->news->select();
        $count=$this->news->count();
        $page = $this->page($count, 10);
        $show = $page->show("Admin");// 分页显示输出
// 进行分页数据查询 注意limit方法的参数要使用Page类的属性
        $list  = $this->news->order('id desc')->limit($page->firstRow . ',' . $page->listRows)->select();
        $this->assign('posts',$list);// 赋值数据集
        $this->assign('page',$show);// 赋值分页输出
        $this->display(":index"); // 输出模板
    }
    function add(){
        $this->display();
    }
    function add_post()
    {

        if (IS_POST) {
            $upload = new \Think\Upload();
            $data1 = array();
            $upload->maxSize = 3145728;
            $upload->exts = array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
            $upload->saveName = array('uniqid','');
            $upload->subName = array('date','Ymd');
            //$upload->saveRule = "unique";//这个是改变图片名称的，可同时改变多张图片的名称，实现图片的不同名 这样也就不会出现覆盖的现象了。
            $upload->rootPath = './Data/';  //跟路径
            $upload->savePath = 'upload/news/';
            $info = $upload->upload(); //取得成功上传的文件信息
            if(!$info){
                //$this->error($upload->getError());die;//输出错误提示
            }else{
                foreach($info as $key => $value){
                    $data1[$key]['path'] = $upload->rootPath . $value['savepath'] . $value['savename'];//这里以获取在本地的保存路径为例
                    $data1['image'] .= ';'.$data1[$key]['path'];
//                    echo $value['savename'].'<br>';
//                    echo $data1[$key]['path'].'<br>';
//                    echo $data1['image'];
                }
                $data1['title'] = I('post.title');
                $data1['content'] = htmlspecialchars_decode(I('post.content'));
                $data1['times'] = I('post.times');
                $data1['excerpt'] = I('post.excerpt');
                $data1['keywords'] = I('post.keywords');
                //$data1['image'] = &$data['image'];
                $result = $this->news->add($data1);
                if ($result) {
                    //$this->success("添加成功！",U('Indexadmin/index'));
                } else {
                    $this->error("添加失败！");
                }
            }

        }
    }

    function edit(){
        $id = I('get.id');
        $news = $this->news->where("id={$id}")->select();
        //$news['content'] = htmlspecialchars_decode($news['content']);
        $this->assign('news',$news);

        $this->display();
    }

    function edit_post(){
        if(IS_POST){
            $upload = new \Think\Upload();
            $data1 = array();
            //$data1['image'] = I('post.image');
            $data1['image'] = implode(';',$_REQUEST['image']);  //接收传过来的相片集
            //var_dump($data1['image']);
            $upload->maxSize = 3145728;
            $upload->exts = array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
            $upload->saveName = array('uniqid','');
            $upload->subName = array('date','Ymd');
            $upload->rootPath = './Data/';  //跟路径
            $upload->savePath = 'upload/news/';
            $info = $upload->upload(); //取得成功上传的文件信息
            if(!$info){
                //$this->error($upload->getError());//输出错误提示
            }else {
                foreach ($info as $key => $value) {
                    $data1[$key]['path'] = $upload->rootPath . $value['savepath'] . $value['savename'];
                    //这里以获取在本地的保存路径为例
                    $data1['image'] .= ';' . $data1[$key]['path'];
//                    var_dump($value);
//                    var_dump($data1['image']);
                }
            }
                $id = I("post.id");
                $data1['title'] = I('post.title');
                $data1['content'] = htmlspecialchars_decode(I('post.content'));
                $data1['times'] = I('post.times');
                $data1['excerpt'] = I('post.excerpt');
                $data1['keywords'] = I('post.keywords');
                //var_dump($data1);

                $result = $this->news->where("id={$id}")->save($data1);
                if ($result) {
                    return $this->success("添加成功！",U('Indexadmin/index'));
                } else {
                    return $this->error("添加失败！");
                }

        }

    }

    function delete(){
        $id=I('get.id');
        $result = $this->news->where("id={$id}")->delete();
        if ($result) return $this->success("删除成功",U('Indexadmin/index'));
        return $this->error("删除失败");
    }



}

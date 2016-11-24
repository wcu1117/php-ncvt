<?php
namespace Forum\Controller;
use Common\Controller\AdminbaseController;

class IndexadminController extends AdminbaseController{
    function index(){
        $posts = M("posts");//实例化文章表
        $count = $posts->count();//总数
        $page = $this->page($count, 10);
        $post = $posts->order("id desc")->limit($page->firstRow . ',' . $page->listRows)->select();
        $show = $page->show("Admin");// 分页显示输出
        $this->assign("post",$post);
        $this->assign('page',$show);// 赋值分页输出
        $this->display();
    }
    function add(){
        $this->display();
    }
    function delete(){
        $id=I('get.id');
        $post = M('posts');
        $result= $post->delete($id);
        if ($result){
            $this->success('删除成功');
        }
    }
}
<?php
namespace Content\Controller;
use Common\Controller\HomebaseController;
class IndexController extends HomebaseController{
    protected $news;
    function _initialize(){
        $this->news = M('news');
//        $this->check_login();
        $u_id=session('user')['id'];
        if ($u_id){
            $user = M("users");
            $avatar = $user->where("id={$u_id}")->find();
            $this->assign('login',$avatar);
        }
        //未读消息
        $m = M('message');//实例化
        $email = session('user')['user_email'];
        $rec_count = $m->where("email='".$email."' and status=0")->count();
        $this->assign('news_count',$rec_count);//模版赋值

    }
    //资讯新闻列表页
    function index(){
        $count = $this->news->count();    //获取数量
        $page = $this->page($count, 8);//使用分页类
        $show = $page->show('index');//分页显示输出
        $new=$this->news->order("id desc")->limit($page->firstRow . ',' . $page->listRows)->select();   //分页
        $this->assign('news',$new);
        $this->assign('page',$show);//赋值分页输出
        $this->display(':index');
    }

    //详细页
    function detail(){
        $id= I('get.id');
        $id1 = $id+1;
        $id2 = $id-1;

        $clicks=$this->news->where("id={$id}")->getField('clicks');
        $clicks+=1;
        $new = $this->news->where("id={$id}")->setField('clicks',$clicks);
        $new = $this->news->where("id={$id}")->select();    //获取数据
        $new1= $this->news->where("id={$id1}")->select();   //下面一条
        $new2 = $this->news->where("id = {$id2}")->select();    //上一条
        $all = $this->news->order("id desc")->limit(4)->select();
        $this->assign('news',$new); //模版赋值
        $this->assign('news1',$new1); //模版赋值
        $this->assign('news2',$new2); //模版赋值
        $this->assign('all',$all); //模版赋值
        $this->display(':detail');//显示模版
    }

}
<?php

/**
 * 会员注册登录
 */
namespace Organ\Controller;
use Common\Controller\HomebaseController;
class IndexController extends HomebaseController  {
    protected $guest1;
    protected $posts;
    function _initialize() {
        $this->check_login();
        $u_id=session('user')['id'];
        if ($u_id){
            $user = M("users");
            $avatar = $user->where("id={$u_id}")->find();
            $this->assign('login',$avatar);
        }
        //实例化
        $this->guest1 = M('guestbook');
        $this->posts = M('posts');
        //留言
        $book_count = $this->guest1->where("host_id={$u_id}")->count();
        $this->assign('count',$book_count);
        //帖子
        $post_count = $this->posts->where("post_author={$u_id}")->count();
        $this->assign('post_count',$post_count);
        //帖子回复
        $reply = M("post_reply");
        $re_count = $reply->where("post_author={$u_id}")->count();
        $this->assign('re_count',$re_count);

        //未读消息
        $m = M('message');//实例化
        $email = session('user')['user_email'];
        $rec_count = $m->where("email='".$email."' and status=0")->count();
        $this->assign('news_count',$rec_count);//模版赋值
    }
    //登录
	public function index() {
		$id=session('user')['id'];

		$users_model=M("Users");

		$user=$users_model->where(array("id"=>$id))->find();
        $contact = M("contact");
        $con = $contact->where(array("user_id"=>$id))->find();

		if(empty($user)){
			$this->error("查无此人！");
		}
		//var_dump($user);
		$this->assign('user',$user);
		$this->assign('con',$con);
		$this->display(":index");

    }
    //活动详细页
    function active(){
        $this->display(":active");
    }
    //社团的详细页面
    function detail(){
        $this->display(":detail");
    }
    //社团发布大的活动
    function active_post(){
        $this->display(":active_post");
    }
    //社团里发表内容等
    function release(){
        $this->display(":release");
    }

}

<?php
/**
 * Created by PhpStorm.
 * User: pangxiaox
 * Date: 11/19/2016
 * Time: 12:33 AM
 */
namespace User\Controller;
use Common\Controller\HomebaseController;

class MenuController extends HomebaseController{
    protected $user;
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
    function index(){
        $this->display("index/index");
    }
        //信息
    function message(){
        $m = M('message');//实例化
        //收件箱
        $email = session('user')['user_email'];
        $m->where("email='".$email."'")->setField('status',1);//把状态标记为已读
        $rec = $m->where("email='".$email."'")->select();
        $rec_count = $m->where("email='".$email."'")->count();
        $this->assign('re',$rec);//模版赋值
        $this->assign('re_c',$rec_count);//模版赋值
        //发件箱
        $sen = $m->where("sender_email='".$email."'")->select();
        $sen_count = $m->where("sender_email='".$email."'")->count();
        $this->assign('se',$sen);
        $this->assign('se_c',$sen_count);
        $this->display(":mymessage");
    }
    //发送信息
    function send_post(){
        $msg = I("post.");
        $msg['sender_email'] = session('user')['user_email'];//发送者邮箱
        $msg['time'] = date('Y-m-d h:i:s',time());//时间
        //存进数据库
        $m = M('message');
        $result = $m->add($msg);
        if($result){
            $this->success("发送成功",U("menu/message"),0);
        }
    }
    //留言板
    function guestbook(){
            $guest = M("guestbook");
            $id = session('user')['id'];  //获取主人ID
            $book = $guest->where("host_id={$id}")->select();
            $this->assign("book",$book);
        $this->display(":myguestbook");
    }
    //论坛
    function forum(){
        //发帖
        $id = session('user')['id'];
        $post_count = $this->posts->where("post_author={$id}")->select();
        $this->assign('post',$post_count);
        //回帖
        $reply = M("post_reply");
        $reply = $reply->join("cmf_posts on cmf_post_reply.post_id = cmf_posts.id")->where
        ("cmf_post_reply.post_author={$id}")
            ->select();
        $this->assign("re",$reply);
        $this->display(":myforum");
    }
    //社团
    function organize(){
        $this->display(":myorganize");
    }


}
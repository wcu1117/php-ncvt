<?php
namespace User\Controller;
use Common\Controller\HomebaseController;
class PersonController extends HomebaseController{
    protected $user;
    protected $id;
    protected $users;
    protected $guest1;
    protected $posts;
    protected $name;
    function _initialize() {

        $this->user = M("users");   //实例化模型
        $this->guest1 = M('guestbook');
        $this->posts = M('posts');
        //判断传过来的是ID还是name
        $this->id = I("get.id");
        if(I('get.name')){
            $this->name = I('get.name');
            $this->id = $this->user->where("user_nicename='".$this->name."'")->getField('id',true);
        }
        //var_dump($this->id);
        if($this->id){
            //获取传过来的ID，直接赋值
            $this->users = $this->user->join("cmf_education on cmf_users.id=cmf_education.user_id")->join("cmf_contact on cmf_users.id=cmf_contact.user_id")
                ->where("cmf_users.id={$this->id[0]}")->find();
            $this->assign('user',$this->users);
            //留言
            $book_count = $this->guest1->where("host_id={$this->id[0]}")->count();
            $this->assign('count',$book_count);
            //帖子
            $post_count = $this->posts->where("post_author={$this->id[0]}")->count();
            $this->assign('post_count',$post_count);

            //登录状态
            $u_id=session('user')['id'];
            if ($u_id){
                $avatar = $this->user->where("id={$u_id}")->find();
                $this->assign('login',$avatar);
            }
            //未读消息
            $m = M('message');//实例化
            $email = session('user')['user_email'];
            $rec_count = $m->where("email='".$email."' and status=0")->count();
            $this->assign('news_count',$rec_count);//模版赋值
        }

    }

    function index(){
        $this->display();
    }

    //留言板
    function guest(){
        $guest = M("guestbook");
        $id = I('get.id');  //获取主人ID
        $book = $guest->where("host_id={$id}")->select();
        $this->assign("book",$book);
        $this->display("myguestbook");
    }
    //提交留言
    function guest_post(){
        $guest = M("guestbook");
        $id= I('get.id');
        $gu['host_id'] = $id;  //获取主人ID
        $gu['guest_id'] = session('user')['id'];//留言人ID
        $gu['guest_name'] = session('user')['user_nicename'];
        $gu['time'] = date('Y-m-d h:i:s',time());
        $gu['content'] = I('post.content');
        $result = $guest->add($gu);
        if($result){
            $this->success("留言成功",U('person/guest',array('id'=>$id)));
        }else{
            $this->error("留言失败");
        }
    }
    //论坛
    function forum(){
        //帖子
        $post_count = $this->posts->where("post_author={$this->id[0]}")->select();
        $this->assign('post',$post_count);
        //回帖
        $reply = M("post_reply");
        $reply = $reply->join("cmf_posts on cmf_post_reply.post_id = cmf_posts.id")->where
        ("cmf_post_reply.post_author={$this->id[0]}")
            ->select();
        $this->assign('reply',$reply);
        $this->display("myforum");
    }
    //社团
    function organize(){
        $this->display("myorganize");
    }
}
<?php

/**
 * 会员注册登录
 */
namespace Organ\Controller;
use Common\Controller\HomebaseController;
class IndexController extends HomebaseController  {

    protected $guest1;
    protected $posts;
    protected $ogan;
    function _initialize() {
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
        $this->organ = M("organ");//实例化

    }
    //登录
	public function index() {

        $count = $this->organ->where("organ_status=1")->count();
        //分页
        $page = $this->page($count,10);
        $or = $this->organ->where("organ_status=1")->order("organ_id desc")->limit($page->firstRow . ',' .
            $page->listRows)
            ->select();
        $show = $page->show("Admin");// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出

        $this->assign('organ',$or);
        $this->assign('count',$count);
        //联表查询活动
        $a = M("organ_act");
        $act = $a->order("act_id desc")->select();
        $this->assign('act',$act);
		$this->display(":index");

    }
    //创建社团
    function create(){
        $this->check_login();
        $this->display(":create");
    }
    function add(){
        //获取登录状态
        $this->check_login();

        //实例化模型
        $organ = M("organ");
        //获取提交的数据
        if(IS_POST){
            $insert = I("post.");//获取所有提交数据
            //接收图片
            if(isset($_FILES)){
                //var_dump($_FILES);
                //echo $_FILES['organ_logo']['name'].'aa';
                $path = "./Data/upload/organ/".mt_rand(1,100).time().'.jpg';//定义保存路径
                if(move_uploaded_file($_FILES['organ_logo']['tmp_name'],$path)){
                    $insert['organ_logo'] = $path;//取到当前路径文件名
                    //$this->ajaxReturn(array('filepath'=>$path,'status'=>1,'message'=>'success'));
                }
            }
            //拼接标签
            $insert['organ_tag'] = implode('-',$insert['organ_tag']);
            $insert['organ_create'] = date("Y-m-d H:i:s",time());   //创建时间

            //插入数据
            $result = $organ->add($insert);
            //var_dump($insert);
            if($result){
                $this->success("申请已发送，等待审核",U('index/index'),0);
            }else{
                $this->error("申请失败，请刷新后填写",U('index/add'));
            }

        }
    }

    //活动详细页
    function active(){
        $id= I('get.actid');
        //输出活动列表
        $act = M('organ_act');
        $a = $act->where("act_id={$id}")->find();
        //var_dump($a);
        $this->assign('act',$a);
        //输出社团
        $or_id = $a['organ_id'];
        $or = $this->organ->where("organ_id={$or_id}")->find();
        //var_dump($or);
        $this->assign("or",$or);    //输出社团

        //输出数量，活动。人数，排名
        $act_count = $act->where("organ_id={$or_id}")->count();
        $this->assign('act_count',$act_count);

        //公告
        $info = M("organ_info");
        $i = $info->where("organ_id ={$or_id}")->select();
        $this->assign('info',$i);
        //输出评论
        $comm = M("organ_comm");
        $comm = $comm->where("comm_post_id={$id} and comm_select='act'")->select();
        $this->assign("comm",$comm);

        //输出模版
        $this->display(":active");
    }

    //社团的详细页面
    function detail(){
        $id = I('get.id');//获取社团ID
        $or = $this->organ->where("organ_id={$id}")->find();
        $this->assign("or",$or);    //输出社团
        //输出动态
        $news = M("organ_news");
        $new = $news->where("organ_id={$id}")->select();
        $this->assign('news',$new);//赋值模版
        //输出活动列表
        $act = M('organ_act');
        $a = $act->where("organ_id={$id}")->select();
        $this->assign('act',$a);
        //公告
        $info = M("organ_info");
        $i = $info->where("organ_id ={$id}")->select();
        $this->assign('info',$i);

        $this->display(":detail");
    }

    //添加评论
    function comment(){
        $this->check_login();
        $id = I('get.id');//获取当前的活动活动动态ID
        $flag = I("get.flag");//判断是活动还是动态
        $comm = M("organ_comm");//实例化
        if($flag == 'act'){
            //活动
            $act = I('post.');
            $act['comm_time'] = date('Y-m-d H:i:s',time());
            $act['comm_select'] = $flag;
            $act['comm_post_id'] = $id;
            $result = $comm->add($act);
            if($result){
                $this->success("评论成功");
            }
        }else{

        }
    }

    //社团发布大的活动
    function active_post(){
        $this->check_login();//判断登录
        $id = I('get.id');//获取ID
        $this->assign('id',$id);
        $this->display(":active_post");
    }
    function active_add(){
        $id = I('get.id');//获取社团ID
        if(IS_POST){
            $act = I("post.");//获取所有提交数据
            //接收图片
            if(isset($_FILES)){
                $path = "./Data/upload/organ/".mt_rand(1,100).time().'.jpg';//定义保存路径
                if(move_uploaded_file($_FILES['act_image']['tmp_name'],$path)){
                    $act['act_image'] = $path;//取到当前路径文件名
                    //$this->ajaxReturn(array('filepath'=>$path,'status'=>1,'message'=>'success'));
                }
            }
            //拼接标签
            $act['act_tag'] = implode('-',$act['act_tag']);
            $act['act_conetn'] = htmlspecialchars_decode($act['act_conetn']);
            $act['organ_id'] = $id;
            //$act['act_starttime'] = date("Y-m-d H:i:s",time());   //创建时间

            //实例化数据库。插入数据
            $a = M("organ_act");
            $result = $a->add($act);
            //var_dump($act);
            if($result){
                $this->success("活动已发布",U('index/detail',array('id'=>$id)),0);
            }else{
                $this->error("发布失败，请刷新后填写");
            }

        }
    }
    //社团里发表内容等
    function release(){
        $this->check_login();//判断登录
        $id = I('get.id');//获取社团ID
        $or = $this->organ->where("organ_id={$id}")->find();
        $this->assign("or",$or);    //输出社团
        $this->display(":release");
    }
    //发表动态内容
    function new_post(){
        $news['organ_id'] = I('get.id');//获取当前社团的ID
        $news['news_author'] = session('user')['user_nicename'];
        $news['news_time'] = date('Y-m-d H:i:s',time());
        $news['new_image'] = I('post.img0');
        $news['news_content'] = htmlspecialchars_decode(I('post.new_content'));
        $new = M('organ_news');
        //var_dump($news);
        $result = $new->add($news);
        if($result){
            $this->success("发布成功");
        }else{
            $this->error("发布失败");
        }
    }
    //发布通知
    function info_post(){
        $info = I('post.');
        $info['organ_id'] = I('get.id');//获取当前社团的ID
        $info['info_author'] = session('user')['user_nicename'];//作者
        $info['info_time'] = date('Y-m-d',time());
        //var_dump($info);
        $infos = M("organ_info");
        $result = $infos->add($info);
        if($result){
            $this->success("发布成功");
        }else{
            $this->error("发布失败");
        }
    }
}

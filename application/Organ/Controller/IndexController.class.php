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
//        $this->check_login();
        $u_id=session('user')['id'];
        if ($u_id){
            $user = M("users");
            $avatar = $user->where("id={$u_id}")->find();
            $this->assign('login',$avatar);
        }
        //实例化

    }
    //登录
	public function index() {

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
        $u_id=session('user')['id'];
        if ($u_id){
            $user = M("users");
            $avatar = $user->where("id={$u_id}")->find();
            $this->assign('login',$avatar);
        }
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
    function upload(){
        //接收图片
        if(isset($_FILES)){
            //var_dump($_FILES);
            //echo $_FILES['organ_logo']['name'].'aa';
            $path = "./Data/upload/organ/".mt_rand(1,100).time().'.jpg';//定义保存路径
            if(move_uploaded_file($_FILES['organ_logo']['tmp_name'],$path)){
                //$insert['organ_logo'] = $path;//取到当前路径文件名
                $this->ajaxReturn(array('filepath'=>$path,'status'=>1,'message'=>'success'));
            }
        }
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

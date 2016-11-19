<?php

/**
 * 会员注册登录
 */
namespace User\Controller;
use Common\Controller\HomebaseController;
class IndexController extends HomebaseController  {
    function _initialize() {
        $this->check_login();
        if(sp_is_user_login()){
            $session_user=session('user');
        }
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

    //编辑信息
    function edit_post(){
        $id=I('get.id');
        if(IS_POST){
            //拼接日期
            $birthday['year'] = I('post.year');
            $birthday['month'] = I('post.month');
            $birthday['day'] = I('post.day');
            $birthday = implode('-',$birthday);

            //拼接数据
            $users['user_nicename'] = I('post.user_nicename');
            $users['username'] = I('post.user_name');
            $users['school_id'] = I('post.school_id');
            $users['sex'] = I('post.sex');
            $users['constellation'] = I('post.constellation');
            $users['constellation'] = I('post.constellation');
            $users['signature'] = I('post.signature');
            $users['birthday'] = $birthday;
            //更新数据
            $users_model=M("Users");
            $result=$users_model->where(array("id"=>$id))->save($users);
            if($result){
                $this->success("更新成功！", U("index/index",array('id'=>$id)));
            }else{
                $this->error("更新失败");
            }


        }
    }

    //上传头像
    public function uploadImg(){
        $upload = new \Think\Upload(C('UPLOAD_CONFIG'));	// 实例化上传类
        //头像目录地址
        //$path = './avatar/';
        if(!$upload->upload()) {						// 上传错误提示错误信息
            $this->ajaxReturn(array('status'=>0,'info'=>$upload->getError()));
        }else{											// 上传成功 获取上传文件信息
//            $temp_size = getimagesize($path.'temp.jpg');
//            if($temp_size[0] < 100 || $temp_size[1] < 100){//判断宽和高是否符合头像要求
//                $this->ajaxReturn(array('status'=>0,'info'=>'图片宽或高不得小于100px！'));
//            }
            $this->ajaxReturn(array('status'=>1,'path'=>__ROOT__.'/data/upload/avatar/'.'temp.jpg'));
        }
    }

    //裁剪并保存用户头像
    public function cropImg(){
        //获取用户ID
        $id = I('get.id');
        //图片裁剪数据
        $params = I('post.');						//裁剪参数

        var_dump($params);
        if(!isset($params) && empty($params)){
            $this->error('参数错误！');
        }

        //头像目录地址
        $path = './Data/upload/avatar/';
        //要保存的图片
        $real_path = $path.'1.jpg';
        //临时图片地址
        $pic_path = $path.'temp.jpg';
        //取一个唯一名字
        $name = date('Ymdhis',time()).rand(1,2);
        //实例化裁剪类
        $Think_img = new \Think\Image();
        //裁剪原图得到选中区域
        $Think_img->open($pic_path)->crop($params['w'],$params['h'],$params['x'],$params['y'])->save($real_path);
        //$Think_img->open($pic_path)->crop(100,100,100,0)->save($real_path);
        //生成缩略图
        $Think_img->open($real_path)->thumb(100,100, 1)->save($path.$name.'_100.jpg');
        $Think_img->open($real_path)->thumb(60,60, 1)->save($path.$name.'_60.jpg');
        $Think_img->open($real_path)->thumb(30,30, 1)->save($path.$name.'_30.jpg');

        //把图像路径存到数据库
        $user = M('users');
        $avatar = $path.$name;
        $result = $user->where(array('id'=>$id))->setField("avatar",$avatar);
//        if($result){
//            $this->success("上传头像成功",U("index/index",array('id'=>$id)));
//        }else{
//            $this->error("上传头像失败");
//        }

    }

    //更新学历信息和联系方式
    function edu_post(){
        $id = I('get.id');//用户ID
        $ed = M("education");//实例化表

        //把用户ID插入到信息表去
        $field = $ed->getField('user_id',true);//取出当前表中的字段
        //判断是否有相同的字节
        if($field != null){
            for($i=0;$i<=count($field);$i++){
                //echo $field[$i].'for';
                if($field[$i] == $id)
                    break;
                while($i == count($field) || count($field) == 0){
                    $education['user_id'] = $id;
                    $ed->add($education);//添加用户ID
                    break;
                }
            }
        }else{
            $education['user_id'] = $id;
            $ed->add($education);//添加用户ID
        }


            $education = I("post.");
            $result = $ed ->where("user_id={$id}")->save($education);
        if($result){
            $this->success("更新成功",U("index/index",array('id'=>$id)),0);
        }else{
            //var_dump($education);
            $this->error("更新失败");
        }

    }

    function con_post(){
        $id = I('get.id');//用户ID
        $ed = M("contact");//实例化表

        //把用户ID插入到信息表去
        $field = $ed->getField('user_id',true);//取出当前表中的字段
        //判断是否有相同的字节
        if($field != null){
            for($i=0;$i<=count($field);$i++){
                //echo $field[$i].'for';
                if($field[$i] == $id)
                    break;
                while($i == count($field) || count($field) == 0){
                    $education['user_id'] = $id;
                    $ed->add($education);//添加用户ID
                    break;
                }
            }
        }else{
            $education['user_id'] = $id;
            $ed->add($education);//添加用户ID
        }
        $education = I("post.");
        $result = $ed->where("user_id={$id}")->save($education);
        if($result){
            $this->success("更新成功",U("index/index",array('id'=>$id)),0);
        }else{
            $this->error("更新失败失败");
        }
    }


    
    function is_login(){
    	if(sp_is_user_login()){
    		$this->ajaxReturn(array("status"=>1,"user"=>sp_get_current_user()));
    	}else{
    		$this->ajaxReturn(array("status"=>0,"info"=>"此用户未登录！"));
    	}
    }

    //退出
    public function logout(){
    	$login_success=false;
    	session("user",null);//只有前台用户退出
    	redirect(__ROOT__."/");
    }
	
	public function logout2(){
    	$ucenter_syn=C("UCENTER_ENABLED");
    	$login_success=false;
    	if($ucenter_syn){
    		include UC_CLIENT_ROOT."client.php";
    		echo uc_user_synlogout();
    	}
    	$session_user=session('user');
		if(!empty($session_user)){
		$referer=$_SERVER["HTTP_REFERER"];
			session("user",null);//只有前台用户退出
			session('login_http_referer',$referer);
			$this->success("退出成功！",__ROOT__."/");
		}else{
			redirect(__ROOT__."/");
		}
    }

}

<?php
/**
 * 会员注册
 */
namespace User\Controller;
use Common\Controller\HomebaseController;
class LoginController extends HomebaseController {
	
	function index(){
	    $redirect=I('get.redirect','');
	    if(!empty($redirect)){
	        $redirect=base64_decode($redirect);
	        $redirect ? session('login_http_referer',$redirect):'';
	    }
	    if(sp_is_user_login()){ //已经登录时直接跳到首页
	        redirect(__ROOT__."/");
	    }else{
	        $this->display(":login");
	    }
	}
	function login1(){
	    $this->display(":login123");
    }


	
	function password(){
        $this->check_login();
        $u_id=session('user')['id'];
        if ($u_id){
            $user = M("users");
            $avatar = $user->where("id={$u_id}")->find();
            $this->assign('login',$avatar);
        }
		$this->display(":mypasswd");
	}
	

	
	function reset()
    {

        if (IS_POST) {
            $pass1 = I("post.password1");//获取提交数据
            $pass2 = I("post.password2");//获取提交数据
            $pass = I("post.password");//获取提交数据

            $id = session('user')['id'];
            $users_model = M("Users");
            $old_pass = $users_model->where("id={$id}")->getField('user_pass',true);//获取密码
            $rules = array(
                //array(验证字段,验证规则,错误提示,验证条件,附加规则,验证时间)
                array('password1', 'require', '密码不能为空！', 1),
                array('password1', '5,20', "密码长度至少5位，最多20位！", 1, 'length', 3),
                array('password2', 'require', '重复密码不能为空！', 1),
                array('password2', 'password1', '确认密码不正确', 0, 'confirm'),
            );
            if ($users_model->validate($rules)->create() === false) {
                $this->error($users_model->getError());
            }else{
                if (sp_compare_password($pass,$old_pass[0])) {
                    $password = sp_password($pass1);
                    $result = $users_model->where("id={$id}")->save(array("user_pass" => $password));
                    if ($result) {
                        $this->success("密码重置成功，请登录！", U("user/login/index"));
                    } else {
                        $this->error("密码重置失败，重置码无效！");
                    }
                } else {
                    $this->error("原密码错误!请重新输入");
                }

            }
        }
    }
	
	
    //登录验证
    function dologin(){


    	if(!sp_check_verify_code()){
    		$this->error("验证码错误！",null);
    	}


    	$users_model=M("Users");
    	$rules = array(
    			//array(验证字段,验证规则,错误提示,验证条件,附加规则,验证时间)
    			array('username', 'require', '手机号/邮箱/用户名不能为空！', 1 ),
    			array('password','require','密码不能为空！',1),

    	);
    	if($users_model->validate($rules)->create()===false){
    		$this->error($users_model->getError());
    	}

        $username=I('post.username');
        $password=I('post.password');

        if(strpos($username,"@")>0){//邮箱登陆
            $where['user_email']=$username;
        }else{
            $where['user_login']=$username;
        }
        $users_model=M('Users');
        $result = $users_model->where($where)->find();

        //exit();
        if(!empty($result)){
            if(sp_compare_password($password, $result['user_pass'])){
                session('user',$result);
                //写入此次登录信息   ,array('id'=>$result['id'])
                $this->success("登录验证成功！",U("index/index"));
            }else{
                $this->error("密码错误！",null);
            }
        }else{
            $this->error("用户名不存在！");
        }
    	
    	
    	 
    }

    //注册页面
    function register(){
        if(sp_is_user_login()){ //已经登录时直接跳到首页
            redirect(__ROOT__."/");
        }else{
            $this->display(":register");
        }
    }

    function doregister(){
        if(!sp_check_verify_code()){
            $this->error("验证码错误！");
        }

        $rules = array(
            //array(验证字段,验证规则,错误提示,验证条件,附加规则,验证时间)
            array('email', 'require', '邮箱不能为空！', 1 ),
            array('password','require','密码不能为空！',1),
            array('password','5,20',"密码长度至少5位，最多20位！",1,'length',3),
            array('repassword', 'require', '重复密码不能为空！', 1 ),
            array('repassword','password','确认密码不正确',0,'confirm'),
            array('email','email','邮箱格式不正确！',1), // 验证email字段格式是否正确

        );


        $users_model=M("Users");

        if($users_model->validate($rules)->create()===false){
            $this->error($users_model->getError());
        }

        $password=I('post.password');
        $email=I('post.email');
        $username=str_replace(array(".","@"), "_",$email);
        //用户名需过滤的字符的正则
        $stripChar = '?<*.>\'"';
        if(preg_match('/['.$stripChar.']/is', $username)==1){
            $this->error('用户名中包含'.$stripChar.'等非法字符！');
        }

        $where['user_login']=$username;
        $where['user_email']=$email;
        $where['_logic'] = 'OR';

        $users_model=M("Users");
        $result = $users_model->where($where)->count();
        if($result){
            $this->error("用户名或者该邮箱已经存在！");
        }else{
            $uc_register=true;

            if($uc_register){
                $need_email_active=C("SP_MEMBER_EMAIL_ACTIVE");
                $data=array(
                    'user_login' => $username,
                    'user_email' => $email,
                    'user_nicename' =>$username,
                    'user_pass' => sp_password($password),
                    'last_login_ip' => get_client_ip(0,true),
                    'create_time' => date("Y-m-d H:i:s"),
                    'last_login_time' => date("Y-m-d H:i:s"),
                    'user_status' => $need_email_active?2:1,
                    "user_type"=>2,//会员
                );
                $rst = $users_model->add($data);
                if($rst){
                    //注册成功页面跳转
                    $data['id']=$rst;
                    session('user',$data);
                    //var_dump(session('user'));
                    //把用户ID写进关联表
                    $id['user_id'] = session('user')['id'];
                    $edu = M("education");
                    $edu->add($id);
                    $con = M('contact');
                    $con->add($id);
                    $this->success("注册成功！",__ROOT__."/");


                }else{
                    $this->error("注册失败！",U("user/register/index"));
                }

            }else{
                $this->error("注册失败！",U("user/register/index"));
            }

        }

    }



}
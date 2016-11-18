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


	
	function forgot_password(){
		$this->display(":forgot_password");
	}
	
	
	function doforgot_password(){
		if(IS_POST){
			if(!sp_check_verify_code()){
				$this->error("验证码错误！");
			}else{
				$users_model=M("Users");
				$rules = array(
						//array(验证字段,验证规则,错误提示,验证条件,附加规则,验证时间)
						array('email', 'require', '邮箱不能为空！', 1 ),
						array('email','email','邮箱格式不正确！',1), // 验证email字段格式是否正确
						
				);
				if($users_model->validate($rules)->create()===false){
					$this->error($users_model->getError());
				}else{
					$email=I("post.email");
					$find_user=$users_model->where(array("user_email"=>$email))->find();
					if($find_user){
						$this->_send_to_resetpass($find_user);
						$this->success("密码重置邮件发送成功！",__ROOT__."/");
					}else {
						$this->error("账号不存在！");
					}
					
				}
				
			}
			
		}
	}
	

	

	
	
	function password_reset(){
	    $users_model=M("Users");
	    $hash=I("get.hash");
	    $find_user=$users_model->where(array("user_activation_key"=>$hash))->find();
	    if (empty($find_user)){
	        $this->error('重置码无效！',__ROOT__."/");
	    }else{
	        $this->display(":password_reset");
	    }
	}
	
	function dopassword_reset(){
		if(IS_POST){
			if(!sp_check_verify_code()){
				$this->error("验证码错误！");
			}else{
				$users_model=M("Users");
				$rules = array(
						//array(验证字段,验证规则,错误提示,验证条件,附加规则,验证时间)
						array('password', 'require', '密码不能为空！', 1 ),
						array('password','5,20',"密码长度至少5位，最多20位！",1,'length',3),
						array('repassword', 'require', '重复密码不能为空！', 1 ),
						array('repassword','password','确认密码不正确',0,'confirm'),
						array('hash', 'require', '重复密码激活码不能空！', 1 ),
				);
				if($users_model->validate($rules)->create()===false){
					$this->error($users_model->getError());
				}else{
					$password=sp_password(I("post.password"));
					$hash=I("post.hash");
					$result=$users_model->where(array("user_activation_key"=>$hash))->save(array("user_pass"=>$password,"user_activation_key"=>""));
					if($result){
						$this->success("密码重置成功，请登录！",U("user/login/index"));
					}else {
						$this->error("密码重置失败，重置码无效！");
					}
					
				}
				
			}
		}
	}
	
	
    //登录验证
    function dologin(){

    	if(!sp_check_verify_code()){
    		$this->error("验证码错误！");
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
                //session('user',$result);
                //写入此次登录信息
                $this->success("登录验证成功！", U("index/index",array('id'=>$result['id'])));
            }else{
                $this->error("密码错误！");
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

// 	    $banned_usernames=explode(",", sp_get_cmf_settings("banned_usernames"));

// 	    if(in_array($username, $banned_usernames)){
// 	        $this->error("此用户名禁止使用！");
// 	    }

        $where['user_login']=$username;
        $where['user_email']=$email;
        $where['_logic'] = 'OR';
//
//        $ucenter_syn=C("UCENTER_ENABLED");
//        $uc_checkemail=1;
//        $uc_checkusername=1;
//        if($ucenter_syn){
//            include UC_CLIENT_ROOT."client.php";
//            $uc_checkemail=uc_user_checkemail($email);
//            $uc_checkusername=uc_user_checkname($username);
//        }

        $users_model=M("Users");
        $result = $users_model->where($where)->count();
        if($result){
            $this->error("用户名或者该邮箱已经存在！");
        }else{
            $uc_register=true;
//            if($ucenter_syn){
//
//                $uc_uid=uc_user_register($username,$password,$email);
//                //exit($uc_uid);
//                if($uc_uid<0){
//                    $uc_register=false;
//                }
//            }
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
                    //session('user',$data);

                    //发送激活邮件
//                    if($need_email_active){
//                        $this->_send_to_active();
//                        session('user',null);
//                        $this->success("注册成功，激活后才能使用！",U("user/login/index"));
//                    }else {
                    $this->success("注册成功！",__ROOT__."/");
//                    }

                }else{
                    $this->error("注册失败！",U("user/register/index"));
                }

            }else{
                $this->error("注册失败！",U("user/register/index"));
            }

        }

    }



}
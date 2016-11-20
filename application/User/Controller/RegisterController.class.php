<?php
/**
 * 会员注册
 */
namespace User\Controller;
use Common\Controller\HomebaseController;
class RegisterController extends HomebaseController {
	
	function index(){
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
                    session('user',$data);

                    //发送激活邮件
//                    if($need_email_active){
//                        $this->_send_to_active();
//                        session('user',null);
//                        $this->success("注册成功，激活后才能使用！",U("user/login/index"));
//                    }else {
                       $this->success("注册成功！",__ROOT__."/");
                        //把用户ID写进另外关联的表
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
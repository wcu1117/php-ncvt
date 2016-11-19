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
    function _initialize() {
        $this->check_login();
        if(sp_is_user_login()){
            $session_user=session('user');
            if ($session_user){
                $this->assign('login',$session_user);
            }
        }
    }
    function index(){
        $this->display("index/index");
    }
        //信息
    function message(){
        $this->display(":mymessage");
    }
    //留言板
    function guestbook(){
        $this->display(":myguestbook");
    }
    //论坛
    function forum(){
        $this->display(":myforum");
    }
    //社团
    function organize(){
        $this->display(":myorganize");
    }


}
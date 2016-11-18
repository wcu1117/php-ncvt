<?php
namespace Portal\Controller;
use Common\Controller\HomebaseController;
class EmptyController extends HomebaseController{
    public function index(){
        echo "没有控制器".CONTROLLER_NAME."方法操作名".ACTION_NAME;
    }
    public function _empty($name){
    	$this->show($name."操作不存在");
    }
   
}
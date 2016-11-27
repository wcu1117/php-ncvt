<?php
namespace Organ\Controller;

use Common\Controller\AdminbaseController;

class IndexadminController extends AdminbaseController {

    public function index(){
        $organ = M("organ");
        $count = $organ->count();
        $page = $this->page($count,10);

    	$list = $organ
    	->order("organ_create DESC")
    	->limit($page->firstRow . ',' . $page->listRows)
    	->select(); //分页输出

    	$this->assign('list', $list);//输出数据
    	$this->assign("page", $page->show('Admin'));//输出页码

    	$this->display(":index");
    }
    //社团列表
    function active(){

    }
//审核
    function verify(){
        $this->display(":verify");
    }

    //删除
    function delete(){
        $id = I('get.id');
        $organ = M("organ");
        $result = $organ->where("organ_id={$id}")->delete();
        if($result){
            $this->success('删除成功');
        }
    }

}

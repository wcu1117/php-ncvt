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
        $organ = M("Organ");
        $or = $organ->where("organ_status =0 ")->select();
        $this->assign("data",$or);
        $this->display(":verify");
    }
    //通过审核
    function allow(){
        $id = I("get.id");
        $organ = M("Organ");
        $res = $organ->where("organ_id={$id}")->setField('organ_status',1);
        if($res){
            $this->success('通过审核');
        }else{
            $this->error("审核失败");
        }
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

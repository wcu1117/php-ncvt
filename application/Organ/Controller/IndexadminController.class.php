<?php
namespace Organ\Controller;

use Common\Controller\AdminbaseController;

class IndexadminController extends AdminbaseController {

    public function index(){
        $where=array();
        $request=I('request.');

        if(!empty($request['uid'])){
            $where['id']=intval($request['uid']);
        }

        if(!empty($request['keyword'])){
            $keyword=$request['keyword'];
            $keyword_complex=array();
            $keyword_complex['user_login']  = array('like', "%$keyword%");
            $keyword_complex['user_nicename']  = array('like',"%$keyword%");
            $keyword_complex['user_email']  = array('like',"%$keyword%");
            $keyword_complex['_logic'] = 'or';
            $where['_complex'] = $keyword_complex;
        }

    	$users_model=M("Users");

    	$count=$users_model->where($where)->count();
    	$page = $this->page($count, 20);

    	$list = $users_model
    	->where($where)
    	->order("create_time DESC")
    	->limit($page->firstRow . ',' . $page->listRows)
    	->select();

    	$this->assign('list', $list);
    	$this->assign("page", $page->show('Admin'));

    	$this->display(":index");
    }
    //社团列表
    function active(){

    }

    function apply(){

    }

}

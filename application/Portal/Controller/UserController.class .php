<?php
namespace Portal\Controller;
use Common\Controller\MemberbaseController;

class UserController extends MemberbaseController {
    //文章内页
    protected $user_model;
	
	// public function _initialize() {
	// 	parent::_initialize();
	// 	$this->user_model=D("User");
	// }
	
	public function index(){
		$this->display('User:articles');
	}

    public function articles(){
  //   	$uid=sp_get_current_userid();
		// $where=array("post_author"=>$uid);
		
		// $count=$this->user_model->where($where)->count();
		
		// $page=$this->page($count,10);
		
		// $comments=$this->user_model->where($where)
		// ->limit($page->firstRow . ',' . $page->listRows)
		// ->select();
		
		// $this->assign("page",$page->show("default"));
		// $this->assign("articles",$comments);
		$this->display('/User/articles.html');
    }
      
}

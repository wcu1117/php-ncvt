<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tuolaji <479923197@qq.com>
// +----------------------------------------------------------------------
namespace Portal\Controller;

use Common\Controller\HomebaseController;

class PostController extends HomebaseController {
    
	protected $posts_model;
	protected $term_relationships_model;
	protected $terms_model;
	
	function _initialize() {
		parent::_initialize();
		$this->posts_model = D("Portal/Posts");
		$this->terms_model = D("Portal/Terms");
		$this->term_relationships_model = D("Portal/TermRelationships");
	}
	
	public function index(){
		$id = I('get.id');
		// $this->_lists(array("id"=>$id));
		$this->_getTree();
		$posts = $this->posts_model->where("id={$id}")->select();
		$this->assign('posts',$posts);
		$this->display(':article');
	}
	
	private function _lists($where=array()){
		$term_id=I('request.term',0,'intval');
		
		$where['post_type']=array(array('eq',1),array('exp','IS NULL'),'OR');
		
		if(!empty($term_id)){
		    $where['b.term_id']=$term_id;
			$term=$this->terms_model->where(array('term_id'=>$term_id))->find();
			$this->assign("term",$term);
		}
		
		$start_time=I('request.start_time');
		if(!empty($start_time)){
		    $where['post_date']=array(
		        array('EGT',$start_time)
		    );
		}
		
		$end_time=I('request.end_time');
		if(!empty($end_time)){
		    if(empty($where['post_date'])){
		        $where['post_date']=array();
		    }
		    array_push($where['post_date'], array('ELT',$end_time));
		}
		
		$keyword=I('request.keyword');
		if(!empty($keyword)){
		    $where['post_title']=array('like',"%$keyword%");
		}
			
		$this->posts_model
		->alias("a")
		->where($where);
		
		if(!empty($term_id)){
		    $this->posts_model->join("__TERM_RELATIONSHIPS__ b ON a.id = b.object_id");
		}
		
		$count=$this->posts_model->count();
			
		$page = $this->page($count, 20);
			
		$this->posts_model
		->alias("a")
		->join("__USERS__ c ON a.post_author = c.id")
		->where($where)
		->limit($page->firstRow , $page->listRows)
		->order("a.post_date DESC");
		if(empty($term_id)){
		    $this->posts_model->field('a.*,c.user_login,c.user_nicename');
		}else{
		    $this->posts_model->field('a.*,c.user_login,c.user_nicename,b.listorder,b.tid');
		    $this->posts_model->join("__TERM_RELATIONSHIPS__ b ON a.id = b.object_id");
		}
		$posts=$this->posts_model->select();
		
		$this->assign("page", $page->show('Admin'));
		$this->assign("formget",array_merge($_GET,$_POST));
		$this->assign("posts",$posts);
	}
	
	private function _getTree(){
		$term_id=empty($_REQUEST['term'])?0:intval($_REQUEST['term']);
		$result = $this->terms_model->order(array("listorder"=>"asc"))->select();
		
		$tree = new \Tree();
		$tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
		$tree->nbsp = '&nbsp;&nbsp;&nbsp;';
		foreach ($result as $r) {
			$r['str_manage'] = '<a href="' . U("AdminTerm/add", array("parent" => $r['term_id'])) . '">添加子类</a> | <a href="' . U("AdminTerm/edit", array("id" => $r['term_id'])) . '">修改</a> | <a class="js-ajax-delete" href="' . U("AdminTerm/delete", array("id" => $r['term_id'])) . '">删除</a> ';
			$r['visit'] = "<a href='#'>访问</a>";
			$r['taxonomys'] = $this->taxonomys[$r['taxonomy']];
			$r['id']=$r['term_id'];
			$r['parentid']=$r['parent'];
			$r['selected']=$term_id==$r['term_id']?"selected":"";
			$array[] = $r;
		}
		
		$tree->init($array);
		$str="<option value='\$id' \$selected>\$spacer\$name</option>";
		$taxonomys = $tree->get_tree(0, $str);
		$this->assign("taxonomys", $taxonomys);
	}
	
	private function _getTermTree($term=array()){
		$result = $this->terms_model->order(array("listorder"=>"asc"))->select();
		
		$tree = new \Tree();
		$tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
		$tree->nbsp = '&nbsp;&nbsp;&nbsp;';
		foreach ($result as $r) {
			$r['str_manage'] = '<a href="' . U("AdminTerm/add", array("parent" => $r['term_id'])) . '">添加子类</a> | <a href="' . U("AdminTerm/edit", array("id" => $r['term_id'])) . '">修改</a> | <a class="js-ajax-delete" href="' . U("AdminTerm/delete", array("id" => $r['term_id'])) . '">删除</a> ';
			$r['visit'] = "<a href='#'>访问</a>";
			$r['taxonomys'] = $this->taxonomys[$r['taxonomy']];
			$r['id']=$r['term_id'];
			$r['parentid']=$r['parent'];
			$r['selected']=in_array($r['term_id'], $term)?"selected":"";
			$r['checked'] =in_array($r['term_id'], $term)?"checked":"";
			$array[] = $r;
		}
		
		$tree->init($array);
		$str="<option value='\$id' \$selected>\$spacer\$name</option>";
		$taxonomys = $tree->get_tree(0, $str);
		$this->assign("taxonomys", $taxonomys);
	}
	
	
}
<?php
namespace Forum\Controller;
use Common\Controller\AdminbaseController;

class TermAdminController extends AdminbaseController{
    protected $terms;
    protected $relation;
    function _initialize(){
        $this->terms = M('terms');
        $this->relation = M('term_relationships');
    }
    public function index(){
        $result = $this->terms->select();
        $this->assign('data',$result);
        $this->display();
    }
    public function add(){
        $this->display();
    }
    function add_post(){
        if(IS_POST){
            $data['name'] = I('post.name');
            $data['description'] = I('post.description');
            $result = $this->terms->add($data);
            if($result){
                //F('data',null);
                return $this->success("添加成功！",U("Termadmin/index"));
            }else{
                return $this->error('添加失败');
            }
        }
    }

    function edit(){
        if(IS_GET){
            $id = I('get.id');//    获取提交ID
            $result = $this->terms->where("term_id={$id}")->select();
            if($result){
                $this->assign('data',$result);
                //$this->show($result);
                //var_dump($result);
                $this->display();
            }

        }
    }
    function edit_post(){
        if(IS_POST){
            $id = I('post.term_id');
            $data['name'] = I('post.name');
            $data['description'] = I('post.description');
            $res = $this->terms->where("term_id={$id}")->save($data);//更新数据
            if($res)
                return $this->success("更新成功",U("Termadmin/index"));
            else
                return $this->error("更新失败");
        }
    }

    function delete(){
        if(IS_GET){
            $id = I('get.id');//    获取提交ID
            $result = $this->terms->where("term_id={$id}")->delete();
            if($result)
                return $this->success();
        }
    }
}
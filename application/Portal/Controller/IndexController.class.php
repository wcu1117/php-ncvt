<?php
/*
 *      _______ _     _       _     _____ __  __ ______
 *     |__   __| |   (_)     | |   / ____|  \/  |  ____|
 *        | |  | |__  _ _ __ | | _| |    | \  / | |__
 *        | |  | '_ \| | '_ \| |/ / |    | |\/| |  __|
 *        | |  | | | | | | | |   <| |____| |  | | |
 *        |_|  |_| |_|_|_| |_|_|\_\\_____|_|  |_|_|
 */
/*
 *     _________  ___  ___  ___  ________   ___  __    ________  _____ ______   ________
 *    |\___   ___\\  \|\  \|\  \|\   ___  \|\  \|\  \ |\   ____\|\   _ \  _   \|\  _____\
 *    \|___ \  \_\ \  \\\  \ \  \ \  \\ \  \ \  \/  /|\ \  \___|\ \  \\\__\ \  \ \  \__/
 *         \ \  \ \ \   __  \ \  \ \  \\ \  \ \   ___  \ \  \    \ \  \\|__| \  \ \   __\
 *          \ \  \ \ \  \ \  \ \  \ \  \\ \  \ \  \\ \  \ \  \____\ \  \    \ \  \ \  \_|
 *           \ \__\ \ \__\ \__\ \__\ \__\\ \__\ \__\\ \__\ \_______\ \__\    \ \__\ \__\
 *            \|__|  \|__|\|__|\|__|\|__| \|__|\|__| \|__|\|_______|\|__|     \|__|\|__|
 */
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
namespace Portal\Controller;
use Common\Controller\HomebaseController; 
/**
 * 首页
 */
class IndexController extends HomebaseController {
	
    //首页
	public function index() {
        //登录状态
        $u_id=session('user')['id'];
        if ($u_id){
            $user = M("users");
            $avatar = $user->where("id={$u_id}")->find();
            $this->assign('login',$avatar);
        }
        //未读消息
        $m = M('message');//实例化
        $email = session('user')['user_email'];
        $rec_count = $m->where("email='".$email."' and status=0")->count();
        $this->assign('news_count',$rec_count);//模版赋值

        $news=M('news');
        $new=$news->order("id desc")->limit(0,6)->select();
        $this->assign('news',$new);

        //活动
        $act = M("organ_act");
        $a = $act->order("act_id desc")->limit(8)->select();
        $this->assign("act",$a);

        //社团
        $or = M('organ');
        $organ=$or->order("organ_id desc")->limit(6)->select();
        $this->assign("organ",$organ);


        $this->display(":index");
    }

    public function test()
    {
        // $posts= sp_sql_posts_paged('field:posts.post_title;cid:1;',1);
        // print_r($posts);
        // $terms= sp_get_all_child_terms(2);
        // print_r($terms);
        // $terms = sp_get_child_terms(3);
        // print_r($terms);
        // $term = sp_get_term(1);
        // print_r($term);
        // $terms=sp_get_terms('field:term_id,path;order:path asc;',array('term_id'=>array('gt',2)));
        // print_r($terms);
        // $page=sp_sql_page(9);
        // print_r($page);
        // $pages=sp_sql_pages('field:post_title;where:`id`=1;',array());
        // $post=sp_sql_post(11, 'field:post_title');
        // print_r($post);
//         $posts=sp_sql_posts('field:posts.post_title,posts.id as post_id;where:posts.post_status=1;',array('posts.id'=>10));
//         print_r($posts);
//         $posts=sp_sql_posts_bycatid(1,'field:posts.post_title;',array('posts.id'=>array('gt',2)));
//         print_r($posts);
//         $posts=sp_sql_posts_paged_bycatid(1,'field:posts.post_title;',1);
//         print_r($posts);
//         $posts=sp_sql_posts_paged_bykeyword("delete from cmf_posts where 1;'\n",'field:posts.post_title;',1);
//         print_r($posts);
        $breadcrumd=sp_get_breadcrumb(3);
        print_r($breadcrumd);
        // $post=M('posts')
        // ->alias('posts')
        // ->join('__USERS__ as users on posts.post_author = users.id')
        // ->find();
        // print_r($post);
    }

}



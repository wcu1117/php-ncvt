<!--{template common/header}-->

<style type="text/css">
.parentcat {}
.cat { margin-left: 20px; }
.lastchildcat, .childcat { margin-left: 40px; }
</style>
<!--{if $op == 'push'}-->
	<h3 class="flb">
	<em>{lang article_push}</em>
	<!--{if $_G[inajax]}--><span><a href="javascript:;" onclick="hideWindow('$_GET[handlekey]');" class="flbc" title="{lang close}">{lang close}</a></span><!--{/if}-->
	</h3>

	<div class="c" style="width:220px; height: 300px; overflow: hidden; overflow-y: scroll;">
		<p>{lang category_push_select}</p>
		<table class="mtw dt">
			$categorytree
		</table>
	</div>

<!--{else}-->
<div id="pt" class="bm cl">
	<div class="z">
		<a href="./" class="nvhm" title="{lang homepage}">$_G[setting][bbname]</a> <em>&rsaquo;</em>
		<!--{if $_G['setting']['portalstatus'] }--><a href="portal.php">{lang portal}</a> <em>&rsaquo;</em><!--{/if}-->
		<a href="portal.php?mod=portalcp"><!--{if $_G['setting']['portalstatus'] }-->{lang portal_manage}<!--{else}-->{lang portal_block_manage}<!--{/if}--></a> <em>&rsaquo;</em>
		{lang login}
	</d
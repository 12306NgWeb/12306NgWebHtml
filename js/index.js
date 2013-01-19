/*
*Email:wfengchzu@gmail.com
*date:2013-01-15
*/
$().ready(function(){
	$(".body_container").css("height",($(window).height()-40));
	$(".center_container").css("height",($(window).height()-40));
	$(".bottom_info").css("width",$(window).width());
	
	
	
	$(".reg_sucess").css("height",($(window).height()-340));
	$(".login_div").css("height",($(window).height()-190));

	
	/*鼠标点击之后变成黑色，同时移除下划线*/
	$(".header_nav > a").click(function(){
		$(".header_nav > a").css({
			"color":"#3388ee",
			"text-decoration":"underline"
		});
		$(".header_nav > a.R_NO_LINE").css({
			"color":"red",
			"text-decoration":"none"
		});
		$(this).css({
			"color":"#000",
			"text-decoration":"none"
		
		})
	
	
	})
})



























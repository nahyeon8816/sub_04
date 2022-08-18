//서브메뉴슬라이드



$(function(){
	$(".header_inner").mouseenter(function(){
		$("#sub").stop().slideDown();
	});
	$(".header_inner").mouseleave(function(){
		$("#sub").stop().slideUp();
	});
	
});
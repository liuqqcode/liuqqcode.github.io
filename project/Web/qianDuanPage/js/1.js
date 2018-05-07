// JavaScript Document
//鼠标移入移除商品分类特效
$("#shopClass_show dl").mouseover(function() {
     $(this).addClass("shopClass_active").siblings("dl").removeClass("shopClass_active");
	 $(".navBox .shopClass_list").removeClass("hide");
});

$("#shopClass_show dl").mouseout(function() {
     $(this).removeClass("shopClass_active");
	 $(".navBox .shopClass_list").addClass("hide");
});

$("#shopClass_show dl dt>a").hover(function(){
	 $(this).siblings("a").removeClass("aLink");
	  $(this).addClass("aLink");
});

$(".navBox .shopClass_list").mouseover(function() {
    $(this).removeClass("hide");
});

$(".navBox .shopClass_list").mouseout(function() {
    $(this).addClass("hide");
});
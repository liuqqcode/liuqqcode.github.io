// JavaScript Document
DD_belatedPNG.fix('div,ul,ol,li,dt,dd,dl,span,img,a,em,strong,h1,h2,h3,h4,h5,h6,p');
//尽量少偷懒，不要用*，性能是很低的
/*
$("#shopClass_show dl").hover(function(){
	 $(this).addClass("shopClass_active").siblings("dl").removeClass("shopClass_active");
	 $(".navBox .shopClass_list").removeClass("hide");
});
*/

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

//图片轮播
$(function(){
	var i = 0;
	var clone =$(".gywm_img_big .gywm_img li").first().clone();
	$(".gywm_img_big .gywm_img").append(clone);
	var size = $(".gywm_img_big .gywm_img li").size();
	
	
	for(var j = 0 ; j<size-1;j++){
		$("#num").append("<li></li>");
	}
	
	//$(".banner .num li").first().addClass("on");
	
	$("#num>li").first().addClass("on");//初始化时给圆点添加颜色

	
	/*鼠标划入圆点*/
	$(".gywm_img_big .num li").hover(function(){
		var index = $(this).index();
		i = index;
		$(".gywm_img_big .gywm_img").stop().animate({left:-index*810},500);
		$(this).addClass("on").siblings().removeClass("on");	
	})
	
	/*自动轮播*/
	var t = setInterval(moveL,2000)	;
	
	/*对banner的定时器的操作*/
	$(".gywm_img_big").hover(function(){
		clearInterval(t);
	},function(){
		t = setInterval(moveL,2000)	;
	})
		
	/*向左的按钮*/
	$(".gywm_img_big .btn_l").click(function(){
		moveL();
	})
	
	/*向右的按钮*/
	$(".gywm_img_big .btn_r").click(function(){
		moveR();
	})
	
	
	//点击左移动函数
	function moveL(){
		
		i++;
		if(i == size){
			$(".gywm_img_big .gywm_img").css({left:0})
			i=1;
		}
		
		$(".gywm_img_big .gywm_img").stop().animate({left:-i*810},500);
		
		if(i == size-1){
			$(".gywm_img_big .num li").eq(0).addClass("on").siblings().removeClass("on");
		}else{
			$(".gywm_img_big .num li").eq(i).addClass("on").siblings().removeClass("on");		
		}
		
	}
	
	//点击右移动函数
	function moveR(){
		
		i--;
		if(i == -1){
			$(".gywm_img_big .gywm_img").css({left:-(size-1)*810})
			i=size-2;
		}
		
		$(".gywm_img_big .gywm_img").stop().animate({left:-i*810},500);
		$(".gywm_img_big .num li").eq(i).addClass("on").siblings().removeClass("on");		
		
	}
		
	
});

//招牌菜banner轮播
$(function(){
	var i = 0;
	var clone =$(".zpc_img_big .gywm_img li").first().clone();
	$(".zpc_img_big .gywm_img").append(clone);
	var size = $(".zpc_img_big .gywm_img li").size();
	
	
	for(var j = 0 ; j<size-1;j++){
		$("#zpc_num").append("<li></li>");
	}
	
	//$(".banner .num li").first().addClass("on");
	
	$("#zpc_num>li").first().addClass("on");//初始化时给方条添加颜色

	
	/*鼠标划入圆点*/
	$(".zpc_img_big .num li").hover(function(){
		var index = $(this).index();
		i = index;
		$(".zpc_img_big .gywm_img").stop().animate({left:-index*190},400);
		$(this).addClass("on").siblings().removeClass("on");	
	})
	
	/*自动轮播*/
	var t = setInterval(moveL,1600)	;
	
	/*对banner的定时器的操作*/
	$(".zpc_img_big").hover(function(){
		clearInterval(t);
	},function(){
		t = setInterval(moveL,1600)	;
	})
	
	//点击左移动函数
	function moveL(){
		
		i++;
		if(i == size){
			$(".zpc_img_big .gywm_img").css({left:0})
			i=1;
		}
		
		$(".zpc_img_big .gywm_img").stop().animate({left:-i*190},400);
		
		if(i == size-1){
			$(".zpc_img_big .num li").eq(0).addClass("on").siblings().removeClass("on");
		}else{
			$(".zpc_img_big .num li").eq(i).addClass("on").siblings().removeClass("on");		
		}
		
	}

});

//每日推荐banner轮播
$(function(){
	var i = 0;
	var clone =$(".mrtj_img_big .gywm_img li").first().clone();
	$(".mrtj_img_big .gywm_img").append(clone);
	var size = $(".mrtj_img_big .gywm_img li").size();
	
	
	for(var j = 0 ; j<size-1;j++){
		$("#mrtj_num").append("<li></li>");
	}
	
	//$(".banner .num li").first().addClass("on");
	
	$("#mrtj_num>li").first().addClass("on");//初始化时给方条添加颜色

	
	/*鼠标划入圆点*/
	$(".mrtj_img_big .num li").hover(function(){
		var index = $(this).index();
		i = index;
		$(".mrtj_img_big .gywm_img").stop().animate({left:-index*190},400);
		$(this).addClass("on").siblings().removeClass("on");	
	})
	
	/*自动轮播*/
	var t = setInterval(moveL,1600)	;
	
	/*对banner的定时器的操作*/
	$(".mrtj_img_big").hover(function(){
		clearInterval(t);
	},function(){
		t = setInterval(moveL,1600)	;
	})
	
	//点击左移动函数
	function moveL(){
		
		i++;
		if(i == size){
			$(".mrtj_img_big .gywm_img").css({left:0})
			i=1;
		}
		
		$(".mrtj_img_big .gywm_img").stop().animate({left:-i*190},400);
		
		if(i == size-1){
			$(".mrtj_img_big .num li").eq(0).addClass("on").siblings().removeClass("on");
		}else{
			$(".mrtj_img_big .num li").eq(i).addClass("on").siblings().removeClass("on");		
		}
		
	}

});

//时令食材banner轮播
$(function(){
	var i = 0;
	var clone =$(".slsc_img_big .gywm_img li").first().clone();
	$(".slsc_img_big .gywm_img").append(clone);
	var size = $(".slsc_img_big .gywm_img li").size();
	
	
	for(var j = 0 ; j<size-1;j++){
		$("#slsc_num").append("<li></li>");
	}
	
	//$(".banner .num li").first().addClass("on");
	
	$("#slsc_num>li").first().addClass("on");//初始化时给方条添加颜色

	
	/*鼠标划入圆点*/
	$(".slsc_img_big .num li").hover(function(){
		var index = $(this).index();
		i = index;
		$(".slsc_img_big .gywm_img").stop().animate({left:-index*190},400);
		$(this).addClass("on").siblings().removeClass("on");	
	})
	
	/*自动轮播*/
	var t = setInterval(moveL,1600)	;
	
	/*对banner的定时器的操作*/
	$(".slsc_img_big").hover(function(){
		clearInterval(t);
	},function(){
		t = setInterval(moveL,1600)	;
	})
	
	//点击左移动函数
	function moveL(){
		
		i++;
		if(i == size){
			$(".slsc_img_big .gywm_img").css({left:0})
			i=1;
		}
		
		$(".slsc_img_big .gywm_img").stop().animate({left:-i*190},400);
		
		if(i == size-1){
			$(".slsc_img_big .num li").eq(0).addClass("on").siblings().removeClass("on");
		}else{
			$(".slsc_img_big .num li").eq(i).addClass("on").siblings().removeClass("on");		
		}
		
	}

});






	
//个人中心 mouseover
$("#grzx").mouseover(function (){
	//alert(1);
	$("#grzx_big").addClass("grzx_big_show");
}).mouseout(function(){
	$("#grzx_big").removeClass("grzx_big_show");
})

//检查关闭窗口事件
window.onbeforeunload = function(){
	return " "; 
} 

	
	


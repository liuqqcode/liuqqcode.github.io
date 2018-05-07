// JavaScript Document
//下载土之源购物app


//查看购物车特效

	//设置购物车高度
	$(function(){
		$(".carbox .box").height($(window).height());	
	})
	
	//判断$(".carbox .box")下面是否有子节点 display:block;
	/*$(function(){
		var children = $(".carbox .box").children();
			if(children.length>0){
			alert(1);
			$(".carbox .car p").height(100);
		}	
	})*/
	
	//设置购物车点击事件
	$(".carbox .car span").mouseover(function(){
		//alert(1);
		$(this).text("点击查看购物车列表");
	}).mouseout(function(){
		$(this).text("查看购物车列表");
	})
	
	var kg = 0;
	$(".carbox .car span").click(function(){
		if(kg==0){
			$(".carbox").animate({right:0},500);
				kg = 1;
			$(this).mouseover(function(){
				//alert(1);
				$(this).text("关闭购物车列表");
		})
		}else{
			$(".carbox").animate({right:"-220px"},500);
			kg = 0;
			$(this).mouseover(function(){
				//alert(1);
				$(this).text("点击查看购物车列表");
			})
		}
		
	});
	
//点击加入购物车特效
	$("#products_list .addCar").click(function(){
		//var _img = $(this).parent().siblings("img").attr("src");
		//var _text = $(this).parent().siblings("p.title").html();
		//var _money = $(this).siblings("font").html();
		//JQ: parent():找父节点 prev():找兄节点 next():找弟节点 children():找子节点
		$(".carbox .car p").height(100);//单击后设置p标签的高度
		
		var _img = $(this).parent().prev().prev().prev().children().children().attr("src");
		var _text = $(this).parent().prev().prev().children().html();
		var _money = $(this).parent().prev().html();
		
		$(".box").append("<dl><dt><img src='"+_img+"' width='60' height='60'></dt><dd>"+_text+"</dd><dd class='money'>"+_money+"</dd></dl>");
		addproduct(event,_img);
	})

	function addproduct(event,_img){
		//设置开始点
		var _this = $(event.target);
		var s_l = _this.offset().left;
		var s_t = _this.offset().top;
		//落点位置
		var e_l = $(".carbox .car span").offset().left;
		var e_t = $(".carbox .car span").offset().top;
		//抛物线的图片
		var _src =_img;
		//创建对象
		var flyer =$("<img src='"+_src+"' width='60' height='60' style='border-radius:50%;border:2px solid #F00'>")
		flyer.fly({
			start:{
				left:s_l,
				top:s_t
			},
			end:{
				left:e_l,
				top:e_t
			},
			onEnd:function(){
				flyer.fadeOut("50",function(){
					 $("#tip").show().animate({width: '200px'}, 300).fadeOut(500);//成功加入购物车动画效果
					$(this).remove();
				});
			}
		
		})
	}
	

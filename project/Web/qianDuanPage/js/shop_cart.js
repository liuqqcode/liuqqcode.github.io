// JavaScript Document
//返回到顶部
	window.onload = function ()
		{
			var oBtn = document.getElementById('btn');
			var b = 0;
			var timer = null;
			
			oBtn.style.display = 'none';
			window.onscroll = function()
			{
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

				if( scrollTop >= document.documentElement.clientHeight )
				{
					
					oBtn.style.display = 'block';
				}
				else
				{
					oBtn.style.display = 'none';
				}
				if(b!=1)
				{
					clearInterval ( timer );
				}
				b = 2;
			}
				
				
			oBtn.onclick = function ()
			{
				//alert(1);
				clearInterval( timer );
				var iCur = iSpeed = 0;
				timer = setInterval(function()
				{
					iCur = document.documentElement.scrollTop || document.body.scrollTop;
					iSpeed = Math.floor( (0 - iCur ) /8 );
					//alert(iSpeed);
					if(iCur == 0)
					{
						clearInterval(timer );
					}
					else
					{
						document.documentElement.scrollTop = document.body.scrollTop = iCur + iSpeed ;
					}
					b = 1;
				},30)
			}		
			
	}
	


	//购物车数量添加，价格增加
	$(function(){

		// parent():找父节点	 prev():找兄节点	 next():找弟节点	 children():找子节点
		$(".jia").click(function(){ 
			var danjia = $(this).parent().parent().prev().prev().children().next().text();//单价
			var fanxian = $(this).parent().parent().prev().children().next().text();//返现
			var t=$(this).parent().find('input[class*=text]'); //数量
			t.val(parseInt(t.val())+1) 
			var text = $(this).prev().val();//数量
			var xiaoji = (danjia - fanxian)*text;
			$(this).parent().parent().next().children().next().text(xiaoji);//小计
			setTotal(); 
		}) 
		$(".jian").click(function(){ 
			var danjia = $(this).parent().parent().prev().prev().children().next().text();//单价
			var fanxian = $(this).parent().parent().prev().children().next().text();//返现
			var t=$(this).parent().find('input[class*=text]'); 
			t.val(parseInt(t.val())-1) 
			if(parseInt(t.val())<0){ 
			t.val(0); 
			} 
			var text = $(this).next().val();//数量
			var xiaoji = (danjia - fanxian)*text;
			$(this).parent().parent().next().children().next().text(xiaoji);//小计
			setTotal(); 
		}) 
		
		function setTotal(){ 
			var s=0; 
			$(".total").each(function(){ 
			s+=parseInt($(this).text());
			}); 
			$("#tjdd").text(s); 
			} 
		
	})
	
//个人中心 mouseover
$("#grzx").mouseover(function (){
	//alert(1);
	$("#sx_grzx_big").addClass("grzx_big_show");
}).mouseout(function(){
	$("#sx_grzx_big").removeClass("grzx_big_show");
})
	
	

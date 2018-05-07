// JavaScript Document
//返回到顶部
	window.onload = function ()
		{
			var oBtn = document.getElementById('fanhui');
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
	
	
//确定收货地址

function shop_order_test(){
	if($("#address").val().trim() == "" ){//去除空格
		alert("详细地不能为空！请重新输入！");
		return false ;
	}
	if($("#name").val().trim() == ""){//去除空格
		alert("收货人名不能为空！请重新输入！");
		return false;
	}
	if($("#phone").val().trim() == ""){//去除空格
		alert("收货人手机号不能为空！请重新输入！");
		return false;
	}
	return true;
}

//提交订单
function ok_shop_order(){
	alert(1);
	if($("#r1").val().trim() == "" || $("#r2").val().trim() == "" ){//去除空格
		alert("请选择支付类型！");
		return false ;
	}
	return true;
}


//个人中心 mouseover
$("#grzx").mouseover(function (){
	//alert(1);
	$("#sx_grzx_big").addClass("grzx_big_show");
}).mouseout(function(){
	$("#sx_grzx_big").removeClass("grzx_big_show");
})
	



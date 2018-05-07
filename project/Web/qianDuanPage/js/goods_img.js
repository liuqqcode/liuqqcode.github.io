// JavaScript Document

	
	
//产品的增加
	var text = $("#text").val();
	var count = parseInt(text);
	

	
	/*点击减按钮*/
	$("#jian").click(function(){
		jian();
	});
	
	/*点击加按钮*/
	$("#jia").click(function(){
		jia();
	});

	function jian(){
		count--;
		$("#text").val(count);
		if(parseInt($("#text").val())<0){
			count = 0;
			$("#text").val(count);
		}
	}

	function jia(){
		count++;
		$("#text").val(count);
	}
	

//鼠标移动上去添加样式
$("#des_tit_1 li").mouseover(function() {
	 $(this).addClass("active_2");
});


$("#des_tit_1 li").mouseout(function() {
     $(this).removeClass("active_2");
});
	

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

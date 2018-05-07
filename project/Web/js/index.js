// JavaScript Document
//设置系统时间
var myInterval = setInterval(function(){
		var showtime ;
		var date = new Date();//获取系统时间
		var myyear = date.getFullYear();//获取年份
		var mymonth = date.getMonth()+1;//获取月份
		(mymonth<10)?mymonth="0"+mymonth:mymonth;
		//alert(mymonth);
		
		var mydate = date.getDate();//获取天数
		(mydate<10)?mydate="0"+mydate:mydate;
		
		var myhour = date.getHours();//获取时
		(myhour<10)?myhour="0"+myhour:myhour;
		
		var myminute = date.getMinutes();//获取分
		(myminute<10)?myminute="0"+myminute:myminute;
		
		var mysecond = date.getSeconds();//获取秒
		(mysecond<10)?mysecond="0"+mysecond:mysecond;
		
		var myday = date.getDay();//获取星期
		switch(myday){
			case 0:myday="日";break;
			case 1:myday="一";break;
			case 2:myday="二";break;
			case 3:myday="三";break;
			case 4:myday="四";break;
			case 5:myday="五";break;
			case 6:myday="六";break;
		}
		
	    showtime = "欢迎光临蜀一蜀二官方网站！今天是:"+myyear+"年"+mymonth+"月"+mydate+"日&nbsp;"+myhour+":"+myminute+":"+mysecond+"&nbsp;&nbsp;"+"星期:"+myday;
		
		//document.getElementById("mytime").innerHTML = showtime;
	    $("#mytime").html(showtime);
		
		
	},1000);
	

//左边菜单按钮
$(function(){
	$(".mList>li").addClass("li");
	$(".mList>li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(this).addClass("li1").siblings().removeClass("li1");
		$(this).addClass("li_color").siblings().removeClass("li_color");
	});	
	
})

//商品操作特效 show_search_box
$("#submit").hover(function (){
	//alert(1)
	$(".search_Criteria>.search_box").stop().animate({right:"129px"},1200);
	
})

//商品上架
function test(){
	if($("#goods_id").val().trim() == "" ){//去除空格
		alert("商品编号不能为空！请重新输入！");
		return false ;
	}
	if($("#goods_name").val().trim() == ""){//去除空格
		alert("商品名称不能为空！请重新输入！");
		return false;
	}
	if($("#stock").val().trim() == ""){//去除空格
		alert("商品库存量不能为空！请重新输入！");
		return false;
	}
	
	if($("#price").val().trim() == ""){//去除空格
		alert("商品单价不能为空！请重新输入！");
		return false;
	}
	return true;
}

//订单修改
function test_goods(){
	if($("#goods_id").val().trim() == "" ){//去除空格
		alert("商品编号不能为空！请重新输入！");
		return false ;
	}
	if($("#buyrname").val().trim() == ""){//去除空格
		alert("买家账户不能为空！请重新输入！");
		return false;
	}
	if($("#number").val().trim() == ""){//去除空格
		alert("商品数量不能为空！请重新输入！");
		return false;
	}
	
	if($("#amount").val().trim() == ""){//去除空格
		alert("总额不能为空！请重新输入！");
		return false;
	}
	
	if($("#order_date").val().trim() == ""){//去除空格
		alert("订单日期不能为空！请重新输入！");
		return false;
	}
	return true;
}
//修改密码
function test_pass(){
	if($("#password").val().trim() == "" ){//去除空格
		alert("旧密码不能为空！请重新输入！");
		return false ;
	}
	if($("#newpassword").val().trim() == ""){//去除空格
		alert("新密码不能为空！请重新输入！");
		return false;
	}
	if($("#ok_newpassword").val().trim() == ""){//去除空格
		alert("确定新密码不能为空！请重新输入！");
		return false;
	}
	
	if($("#password").val().trim() == $("#newpassword").val().trim()){//去除空格
		alert("新密码不能与旧密码相同！请重新输入！");
		return false;
	}
	
	if($("#newpassword").val().trim() != $("#ok_newpassword").val().trim()){//去除空格
		alert("两次输入的新密不相同！请重新输入！");
		return false;
	}
	
	return true;
}


//用户基本资料修改
function test_buyer(){
	if($("#phone").val().trim() == "" ){//去除空格
		alert("联系电话不能为空！请重新输入！");
		return false ;
	}
	if($("#address").val().trim() == ""){//去除空格
		alert("联系地址不能为空！请重新输入！");
		return false;
	}
	if($("#ok_newpassword").val().trim() == ""){//去除空格
		alert("确定新密码不能为空！请重新输入！");
		return false;
	}
	
	if($("#password").val().trim() == $("#newpassword").val().trim()){//去除空格
		alert("新密码不能与旧密码相同！请重新输入！");
		return false;
	}
	
	if($("#newpassword").val().trim() != $("#ok_newpassword").val().trim()){//去除空格
		alert("两次输入的新密不相同！请重新输入！");
		return false;
	}
	
	return true;
}

//上架商品的Ajax判断该商品编号是否被用
function validate(){
	//alert("我是validate,我被执行了");
	//利用id找到要进行设置Ajax对象Ajaxusername
	var goods_id = document.getElementById("goods_id");
	//alert(username.value);
	
	//如果用户名为空，这不将请求发送到服务器上面，并弹出用户名不能为空的警告框
	if(goods_id.value==""){
		alert("用户名不能为空！");
		return;
	}
	//1、创建一个XMLHttpRequest 对象（这里不支持IE6-）
	var XMLHttpReq = new XMLHttpRequest();

	//var url = "registerAJAX.jsp?account="+escape(account.value);
	var url = "../goodsAdd_AjaxServlet?goods_id="+escape(goods_id.value);
	//2、向服务器发送请求，使用get/post方法
	XMLHttpReq.open("GET", url, true);
	//发送请求的状态的改变
	
	XMLHttpReq.onreadystatechange = callback;
	
	XMLHttpReq.send();
	
	function callback(){
		//alert(XMLHttpReq.readyState);
		//alert(XMLHttpReq.status);
		if(XMLHttpReq.readyState==4 && XMLHttpReq.status==200){
			//alert("yse!请求已经发送成功！等待服务器的响应");
			
			var recieveMessage = XMLHttpReq.responseXML.getElementsByTagName("message")[0];
			//alert(recieveMessage.childNodes[0].nodeValue);
			
			setMessage(recieveMessage.childNodes[0].nodeValue);
		}
	}
	
	function setMessage(message){
		//获取显示验证通过与否的标签的id
		var isPass = document.getElementById("goodsidmsg");
		if(message!=goods_id.value){
			isPass.innerHTML = "<font color='blue' size='3'>该编号已经通过检验，可用</font>";
		}
		else{
			isPass.innerHTML = "<font color='red' size='3'>该编号存在，不可用</font>";
		}
	}
}

//判断查询条件不为空
function select_test(){
	var goods_name = document.getElementById("goods_name");
	var addtime = document.getElementById("addtime");
	if(goods_name.value.trim() == "" && addtime.value.trim() == ""){//去除空格
		alert("查询条件不能同时为空进行查询！请重新输入！");
		return false ;
	}
	
	return true;
}


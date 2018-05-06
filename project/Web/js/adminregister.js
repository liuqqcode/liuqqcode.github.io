$(function admin(){
	var $logins=$(".login_input");
	$logins[0].focus();
	
	$(".login_btn").click(function(){
		
		var text1=$.trim($logins[0].value);
		if(text1==""){
			$(".admin1").css("display","block");
			$(".admin1").html("请输入注册账号！");
			$(".admin1").css("color","red");
			return false;
		}
		if(text1!=""){
			$(".admin1").css("display","none");
		}
		

		var text2=$.trim($logins[1].value);
		if(text2==""){
			$(".admin2").css("display","block");
			$(".admin2").html("请输入注册密码！");
			$(".admin2").css("color","red");
			return false;
		}if(text2!=""){
			$(".admin2").css("display","none");
		}
		
	
		var zz=/\w{6,16}/;
		var text3=$.trim($logins[2].value);
		if(text3==""){
			$(".admin3").css("display","block");
			$(".admin3").html("请输入确认密码！");
			$(".admin3").css("color","red");
			return false;
		}
		if(($.trim($logins[1].value))!=($.trim($logins[2].value))){
			$(".admin3").css("display","block");
			$(".admin3").html("两次密码不一致！");
			$(".admin3").css("color","red");
			return false;
		}
		if(!(zz.test(text3))){
			$(".admin3").css("display","block");
			$(".admin3").html("密码长度在6~16之间,由字母数字下滑线组成！");
			$(".admin3").css("color","red");
			return false;
		}if(($.trim($logins[1].value))==($.trim($logins[2].value))&&(zz.test(text3))){
			$(".admin3").css("display","none");
		}
	
		var zz=/\d{18}/;
		var text4=$.trim($logins[3].value);
		if(text4==""){
			$(".admin4").css("display","block");
			$(".admin4").html("请输入身份证号码！");
			$(".admin4").css("color","red");
			return false;
		}
		if(!(zz.test(text4))){
			$(".admin4").css("display","block");
			$(".admin4").html("身份证号码输入不正确！");
			$(".admin4").css("color","red");
			return false;
		}
		if((text4!="")&&(zz.test(text4))){
			$(".admin4").css("display","none");
		}
	
		var zz=/\d{11}/;
		var text5=$.trim($logins[4].value);
		if(text5==""){
			$(".admin5").css("display","block");
			$(".admin5").html("请输入电话号码！");
			$(".admin5").css("color","red");
			return false;
		}
		if(!(zz.test(text5))){
			$(".admin5").css("display","block");
			$(".admin5").html("电话号码输入不正确！");
			$(".admin5").css("color","red");
			return false;
		}
		if((text5!="")&&((zz.test(text5)))){
			$(".admin5").css("display","none");
		}
	
		
		var text6=$.trim($logins[0].value);
		if(text6==""){
			$(".admin6").css("display","block");
			$(".admin6").html("请输入注册账号！");
			$(".admin6").css("color","red");
			return false;
		}
		if(text6!=""){
			$(".admin6").css("display","none");
		}
	
 		if($("input[type='checkbox']").is(':checked')!=true){
			return false;
 		}
 		
 		//register.submit();
		return true;
 	});	
});


function validate(){
	//alert("我是validate,我被执行了");
	//利用id找到要进行设置Ajax对象Ajaxusername
	var account = document.getElementById("account");
	//alert(username.value);
	
	//如果用户名为空，这不将请求发送到服务器上面，并弹出用户名不能为空的警告框
	if(account.value==""){
		alert("用户名不能为空！");
		return;
	}
	//1、创建一个XMLHttpRequest 对象（这里不支持IE6-）
	var XMLHttpReq = new XMLHttpRequest();

	//var url = "registerAJAX.jsp?account="+escape(account.value);
	var url = "../adminregister_AjaxServlet?account="+escape(account.value);
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
		var isPass = document.getElementById("accountmsg");
		if(message!=account.value){
			isPass.innerHTML = "<font color='blue' size='3'>	用户名已经通过检验，可用</font>";
		}
		else{
			isPass.innerHTML = "<font color='red' size='3'>	用户名存在，不可用</font>";
		}
	}
}


//检查关闭窗口事件
window.onbeforeunload = function(){
	return " "; 
} 

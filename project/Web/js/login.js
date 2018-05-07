$(function button(){
	var $logins=$(".login_input");
	$logins[0].focus();
	
	$(".login_btn").click(function(){
		var $tishi="请输入账号！";
		var text=$.trim($logins[0].value);
		if(text==""){
			$(".userspan").css("display","block");
			$(".userspan").html($tishi);
			$(".userspan").css("color","red");
			return false;
		}
		if(text!="")
		{
			$(".userspan").css("display","none");
		}
			
		var $tish="请输入密码！";
		var text1=$.trim($logins[1].value);
		if(text1==""){
			$(".userspan1").css("display","block");
			$(".userspan1").html($tish);
			$(".userspan1").css("color","red");
			return false;
		}if(text1!=""){
			$(".userspan1").css("display","none");	
		}
		
	//	var url="index.html";
	//	window.location.href=url;
		
	});
		
})
	
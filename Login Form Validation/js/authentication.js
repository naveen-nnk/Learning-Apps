// JavaScript Document
var output = false;

//Declaring validation images
var loaderImage = '<img id="dynamicImage2" src="images/simplepreloader-white.gif" width="18px;" height="18px;" />';
var loaderImage1 = '<img id="dynamicImage3" src="images/simplepreloader-red.gif" width="18px;" height="18px;" />';
var validImage = '<img id="dynamicImage" src="images/valid-button.png" width="18px;" height="18px;" />';
var validImage1 = '<img id="dynamicImage1" src="images/valid-button.png" width="18px;" height="18px;" />';
var invalidImage = '<img id="dynamicImage" src="images/invalid-button.png" width="18px;" height="18px;" />';
var invalidImage1 = '<img id="dynamicImage1" src="images/invalid-button.png" width="18px;" height="18px;" />';

//Declaring Validation Messages
var passwordValidText = '<span id="pwdText">Valid Password</span>';
var passwordInValid = '<span id="pwdText">Invalid Password</span>';
var passwordInValidEmpty = '<span id="pwdText">Password cannot be empty</span>';
var passwordInValidText = '<span id="pwdText">Minimum 8 Characters</span>';
var passwordInValidTextMax = '<span id="pwdText">Maximum 50 Characters</span>';
var passwordInValidTextNoDigits = '<span id="pwdText">Minimum 1 Numeric Character needed</span>';
var passwordInValidTextNoSpecialChar = '<span id="pwdText">Minimum 2 Special Character needed</span>';

var unameValidText = '<span id="unameText">Valid User name</span>';
var unameInValidEmpty = '<span id="unameText">UserName cannot be empty</span>';
var unameInValidText = '<span id="unameText">Invalid User name</span>';


var num = 0;
var num2 = 0;
function formvalidation(){
	var uname = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(uname.length<1)
	{
		if(password.length<1)
		{
		$("#dynamicImage").remove();
		$("#dynamicImage2").remove();
		$("#unameText").remove();
		$(".message#unameMsg").prepend(unameInValidEmpty).css("color","#FF0000");
		$(".dynamicImageField#imageUname").prepend(invalidImage);
		num=0;
		$("#pwdText").remove();
		$("#dynamicImage1").remove();
		$("#dynamicImage3").remove();
		$(".dynamicImageField#imagePassword").prepend(invalidImage1);
		$(".message#pwdMsg").prepend(passwordInValidEmpty).css("color","#FF0000");
		num2=0;
		}else
		{
			$("#dynamicImage").remove();
			$("#dynamicImage2").remove();
			$("#unameText").remove();
			$(".message#unameMsg").prepend(unameInValidEmpty).css("color","#FF0000");
			$(".dynamicImageField#imageUname").prepend(invalidImage);
			num=0;
		}
	}else if(password.length<1)
	{
		$("#pwdText").remove();
		$("#dynamicImage1").remove();
		$("#dynamicImage3").remove();
		$(".dynamicImageField#imagePassword").prepend(invalidImage1);
		$(".message#pwdMsg").prepend(passwordInValidEmpty).css("color","#FF0000");
		num2=0;
	}
	if(num==1){
	if(num2==1){
	output = true;
}}
	return output;
	}
	
function changeTheme()
{
	$("div#colors span:nth-child(1)").click(function()
	{
		$("body").css("background-color","#C5FFA8");
	});
	$("div#colors span:nth-child(2)").click(function()
	{
		$("body").css("background-color","#EBBEE2");
	});
	$("div#colors span:nth-child(3)").click(function()
	{
		$("body").css("background-color","#51B9F0");
	});
	$("div#colors span:nth-child(4)").click(function()
	{
		$("body").css("background-color","#DBDBDB");
	});
}
$(document).ready(function() {
		
    $("#formValidation input.editableFields#username").focus(function(){
		$("#dynamicImage").remove();
		$("#dynamicImage2").remove();
		$("#unameText").remove();
		$(".dynamicImageField#imageUname").prepend(loaderImage);
		$("#formValidation input.editableFields#username").keyup(function(){
			var userName = $(this).val();
			if(userName.length>3)
			{
				$("#dynamicImage").remove();
				$("#dynamicImage2").remove();
				$("#unameText").remove();
				$(".dynamicImageField#imageUname").prepend(validImage);
				$(".message#unameMsg").prepend(unameValidText).css("color","#00CC66");
				num=1;
			}else
			{
				$("#dynamicImage").remove();
				$("#dynamicImage2").remove();
				$("#unameText").remove();
				$(".message#unameMsg").prepend(unameInValidText).css("color","#FF0000");
				$(".dynamicImageField#imageUname").prepend(invalidImage);
				num=0;
			}
		});
	});
	
	 $("#formValidation input.editableFields#username").blur(function(){
		 $("#dynamicImage2").remove();
		if(num==0)
		{
			$("#dynamicImage").remove();
			$("#unameText").remove();
			$(".message#unameMsg").prepend(unameInValidText).css("color","#FF0000");
			$(".dynamicImageField#imageUname").prepend(invalidImage);
		}else
		{
			$("#dynamicImage").remove();
			$("#dynamicImage2").remove();
			$("#unameText").remove();
			$(".dynamicImageField#imageUname").prepend(validImage);
			$(".message#unameMsg").prepend(unameValidText).css("color","#00CC66");
		}
	 });

 $("#formValidation input.editableFields#password").focus(function(){
		$("#dynamicImage1").remove();
		$("#dynamicImage3").remove();
		$("#pwdText").remove();
		$(".dynamicImageField#imagePassword").prepend(loaderImage1);
		$("#formValidation input.editableFields#password").keyup(function(){
			var password = $(this).val();
			//regular Expression for minium one digit globally(g)
			var numberPattern = /\d+/g;
			//regular Expression for minium two Special Characters globally
			var specialCharPattern = /\W{2,}/g;
			if(password.length<8)
			{
				$("#pwdText").remove();
				$("#dynamicImage1").remove();
				$("#dynamicImage3").remove();
				$(".dynamicImageField#imagePassword").prepend(invalidImage1);
				$(".message#pwdMsg").prepend(passwordInValidText).css("color","#FF0000");
				num2=0;
			}else if(password.length>50)
			{
				$("#pwdText").remove();
				$("#dynamicImage1").remove();
				$("#dynamicImage3").remove();
				$(".dynamicImageField#imagePassword").prepend(invalidImage1);
				$(".message#pwdMsg").prepend(passwordInValidTextMax).css("color","#FF0000");
				num2=0;
			}else if(!password.match(numberPattern))
			{
				$("#pwdText").remove();
				$("#dynamicImage1").remove();
				$("#dynamicImage3").remove();
				$(".dynamicImageField#imagePassword").prepend(invalidImage1);
				$(".message#pwdMsg").prepend(passwordInValidTextNoDigits).css("color","#FF0000");
				num2=0;
			}else if(!password.match(specialCharPattern))
			{
				$("#pwdText").remove();
				$("#dynamicImage1").remove();
				$("#dynamicImage3").remove();
				$(".dynamicImageField#imagePassword").prepend(invalidImage1);
				$(".message#pwdMsg").prepend(passwordInValidTextNoSpecialChar).css("color","#FF0000");
				num2=0;
			}else
			{
				$("#pwdText").remove();
				$("#dynamicImage1").remove();
				$("#dynamicImage3").remove();
				$(".dynamicImageField#imagePassword").prepend(validImage1);
				$(".message#pwdMsg").prepend(passwordValidText).css("color","#00CC66");
				num2=1;
			}
		});
	});
	
	$("#formValidation input.editableFields#password").blur(function(){
		$("#dynamicImage3").remove();
		if(num2==0)
		{
		$("#pwdText").remove();
		$("#dynamicImage1").remove();
		$("#dynamicImage3").remove();
		$(".dynamicImageField#imagePassword").prepend(invalidImage1);
		$(".message#pwdMsg").prepend(passwordInValid).css("color","#FF0000");
		}else
		{
		$("#pwdText").remove();
		$("#dynamicImage1").remove();
		$("#dynamicImage3").remove();
		$(".dynamicImageField#imagePassword").prepend(validImage1);
		$(".message#pwdMsg").prepend(passwordValidText).css("color","#00CC66");
		}
	});
});
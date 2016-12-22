//var users=[{email:"a1@hotmail.com", password:123456}]

function logged() {
	window.localStorage.loggedin=false;
	var usermail=$('.Email').val();
	var userpass=$('.psw').val();
	var arr=window.localStorage.users.split('/');
	if(usermail != "" && userpass!=""){	
		for (var i = 0; i < arr.length; i++) {
			// if(arr[i]['emailAddress']==usermail && arr[i]['password']==userpass){
			// 	alert('true')
			// 	window.location = 'index.html'
			// }
			if(arr[i].indexOf(usermail)>-1 && arr[i].indexOf(userpass)>-1){
				window.localStorage.loggedin=true;
				return window.location = 'index.html'
			}
		}
		alert("wrong passwrod")		
	}
}

$(document).ready(function() {
	checklogin();
})
function checklogin() {
	if(window.localStorage.loggedin=="true"){
		$('#login').css('display','none');
		$('#register').css('display','none');
		$('#Welcome').css('display','inline');
	}else{
		$('#login').css('display','inline');
		$('#register').css('display','inline');
		$('#Welcome').css('display','none');
	}

}



function addUser() {
	var username=$('.username').val();
	var password=$('.passwordd').val();
	var phonenum=$('.phoneNumber').val();
	var emailAddress=$('.emailAddress').val();
	var counter=0
	if(username!=''&&password!=''&&phonenum!=''&&emailAddress!=''){
		var obj={
			username:username,
			password:password,
			phonenum:phonenum,
			emailAddress:emailAddress,
			counter:counter++
		}
		window.localStorage.users+="/"+JSON.stringify(obj);
		alert('successfully registered')
		window.location = 'index.html'
	}
}


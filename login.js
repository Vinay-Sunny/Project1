window.onload = function() {
	var name = document.getElementById("name");
	var password = document.getElementById("password");
	var button = document.getElementById("btn");

	var auth = localStorage.getItem("auth");
	if(auth){
		location.href = "index.html";
	}
	
	var isValid = function() {
		console.log("clicked",name.value,password.value);
		var errNameRef = document.getElementById("js-name-err-msg");
		var errpasswordRef = document.getElementById("js-password-err-msg");
		var match = name.value.match(/^[a-zA-z0-9_.]+@[a-zA-Z]+\.[a-z]{2,3}$/);
		
		
			if(!match){
				 errNameRef.innerHTML = "enter valid email id";
				return false;
			}
			else if(!password.value) {
				errNameRef.innerHTML = "" ;
				errpasswordRef.innerHTML = "enter password";
				return false;
			}
			else {
				errNameRef.innerHTML = errpasswordRef.innerHTML = "";
				return true;
			}
			

		

	}
	name.onkeypress = function(e){
		isValid();
	}	
	password.onkeypress = function(e) {
		isValid();
	}

	button.onclick = function(){
		if(isValid()){
			alert("Login Sucessful");
			localStorage.setItem("auth" , name.value);
			location.href = "index.html" ;
		}
	}

	
}


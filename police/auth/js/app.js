// alert("connected");
var config = {
  	apiKey: "AIzaSyAZRmQHfS8zG4I8c44MsKcNN60dJzKr-o0",
  	authDomain: "toll-d2ece.firebaseapp.com",
  	databaseURL: "https://toll-d2ece.firebaseio.com",
  	projectId: "toll-d2ece",
  	storageBucket: "toll-d2ece.appspot.com",
  	messagingSenderId: "554609518469"
  };
  firebase.initializeApp(config);
  
function checkValidity(branchId,email,login_password){
	console.log(branchId);
	console.log(email);
	console.log(login_password);	
	var email = firebase.database().ref().child("Police").child(branchId).child("Officer").child("email");
  	email.once('value',em => {
  		 if(email == em.val()){
  		 	var pass = firebase.database().ref().child("Police").child(branchId).child("Officer").child("password");
  		 	pass.once('value',pss => {
  		 		if(login_password == pss.val()){
  		 			return true;
  		 		}
  		 		else{
  		 			return false;
  		 		}
  		 	});
  		 }
  		 else{
  		 	return false;
  		 }
  	});
}


var loginButton =  document.querySelector("#login_button")
loginButton.addEventListener("click",function() {
	// body...
	var branchId = document.querySelector("#branch_id").value;
	var email = document.querySelector("#email").value;
	var login_password = document.querySelector("#login_password").value;
	if(checkValidity(branchId,email,login_password)){
	alert("sucess");	
	}
	else{
	alert("failed");	
	}
});
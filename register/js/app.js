
  var config = {
    apiKey: "AIzaSyAZRmQHfS8zG4I8c44MsKcNN60dJzKr-o0",
    authDomain: "toll-d2ece.firebaseapp.com",
    databaseURL: "https://toll-d2ece.firebaseio.com",
    projectId: "toll-d2ece",
    storageBucket: "toll-d2ece.appspot.com",
    messagingSenderId: "554609518469"
  };
  firebase.initializeApp(config);
var messagesRef=firebase.database().ref('messages');

function submitForm()
 {
    var firstname=getInputVal('first');
    var lastname=getInputVal('last');
    var email=getInputVal('email');
    var phone_no=getInputVal('phone_no');
    var car_no=getInputVal('vehicle_no');
    var vehicle_type=getInputVal('vehicle_type');
    var vehicle_category=getInputVal('vehicle_category');
    var vehicle_company=getInputVal('vehicle_company');
    var vehicle_model=getInputVal('vehicle_model');
    var vehicle_color=getInputVal('vehicle_color');
    var rfid_no=getInputVal('rfid_no');
    arr = document.getElementById("vehicle_image").value.split("\\");
    var vehicle_image=arr[arr.length-1];
    var balance=getInputVal('balance');
    var key = email.split("@")[0];
    key = key.split(".")[0];
    saveMessage(firstname,lastname,email,phone_no,car_no,vehicle_type,vehicle_category,vehicle_company,vehicle_model,vehicle_color,vehicle_image,rfid_no,balance,key);
    alert("Registration done Sucessfully... You can check your dashboard");
 }


$(document).ready(function() {
  
setTimeout(function() {

var image = document.querySelector("#vehicle_image");
    image.addEventListener('change', function(e){
    // Get file
    var file = e.target.files[0];

    // create a storage reference
    var storageRef = firebase.storage().ref('images/' + file.name);

    // upload file
    var task = storageRef.put(file);
   });


var jj=document.getElementById("dsingh");
jj.addEventListener('click',submitForm);
}, 4000); 

});


 //function to get form values
 function getInputVal(id)
 {
 	return document.getElementById(id).value;
 }

function saveMessage(firstname,lastname,email,phone_no,vehicle_no,vehicle_type,vehicle_category,vehicle_company,vehicle_model,vehicle_color,vehicle_image,rfid_no,balance,key)
{
	messagesRef=firebase.database().ref().child("vehicles").child(rfid_no);
	//var newMessageRef=messagesRef.push();
	messagesRef.set({

    balance : balance,
    rfid_no : rfid_no,
    stolen : false,
    user : {
      email : email,
      name : {
        first : firstname,
        last : lastname
      },
      phone_no : phone_no,
    },
    vehicle : {
      vehicle_category : vehicle_category,
      vehicle_color : vehicle_color,
      vehicle_company : vehicle_company,
      vehicle_image : vehicle_image,
      vehicle_model : vehicle_model,
      vehicle_no : vehicle_no,
      vehicle_type : vehicle_type
    }

    });
  messagesRef=firebase.database().ref("username").child(key);
  messagesRef.set({
    id : rfid_no
  });        
}

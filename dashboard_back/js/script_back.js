$("#navbar").load("../imports/navbar.html");
var config = {
    apiKey: "AIzaSyAZRmQHfS8zG4I8c44MsKcNN60dJzKr-o0",
    authDomain: "toll-d2ece.firebaseapp.com",
    databaseURL: "https://toll-d2ece.firebaseio.com",
    projectId: "toll-d2ece",
    storageBucket: "toll-d2ece.appspot.com",
    messagingSenderId: "554609518469"
  };
  firebase.initializeApp(config);
  var rfid_key = cookie.get("key");;

  var balance_selector = document.querySelector("#balance");
  var car_no_selector = document.querySelector("#car_no");
  var rfid_no_selector = document.querySelector("#rfid_no");
  var stolen_selector = document.querySelector("#stolen");


  var email_selector = document.querySelector("#email");
  var f_name_selector = document.querySelector("#f_name");
  var f_name_selector_1 = document.querySelector("#f_name_1");
  var l_name_selector = document.querySelector("#l_name");
  var phone_no_selector = document.querySelector("#phone_no");


  var vehicle_category_selector = document.querySelector("#vehicle_category");
  var vehicle_color_selector = document.querySelector("#vehicle_color");
  var vehicle_company_selector = document.querySelector("#vehicle_company");
  var vehicle_company_selector_1 = document.querySelector("#vehicle_company_1");
  var vehicle_image_selector = document.querySelector("#vehicle_image");
  var vehicle_model_selector = document.querySelector("#vehicle_model");
  var vehicle_model_selector_1 = document.querySelector("#vehicle_model_1");
  var vehicle_no_selector = document.querySelector("#vehicle_no");
  var vehicle_no_selector_1 = document.querySelector("#vehicle_no_1");
  var vehicle_type_selector = document.querySelector("#vehicle_type");

  var balance = firebase.database().ref().child(rfid_key).child("balance");
  balance.on('value',x => balance_selector.innerHTML = x.val());
  var car_no = firebase.database().ref().child(rfid_key).child("car_no");
  // TODO: check these ASAP
  // car_no.on('value',x => car_no_selector.innerHTML = x.val());
  var rfid_no = firebase.database().ref().child(rfid_key).child("rfid_no");
  rfid_no.on('value',x => rfid_no_selector.innerHTML = x.val());
  var stolen = firebase.database().ref().child(rfid_key).child("stolen");
  // TODO: check these ASAP
  stolen.on('value',x => {
    if(x.val()!==false){
      stolen_selector.classList.remove("hide");
    }
    else{
      stolen_selector.classList.add("hide");
    }
  });
  
  // user
  var email = firebase.database().ref().child(rfid_key).child("user").child("email");
  email.on('value',x => email_selector.innerHTML = x.val());
  var f_name = firebase.database().ref().child(rfid_key).child("user").child("name").child("first");
  f_name.on('value',x => {
  	f_name_selector.innerHTML = x.val()
  	f_name_selector_1.innerHTML = x.val()
  });
  var l_name = firebase.database().ref().child(rfid_key).child("user").child("name").child("last");
  l_name.on('value',x => l_name_selector.innerHTML = x.val());
  var phone_no = firebase.database().ref().child(rfid_key).child("user").child("phone_no");
  phone_no.on('value',x => phone_no_selector.innerHTML = x.val());

  // vehicle
  var vehicle_category = firebase.database().ref().child(rfid_key).child("vehicle").child("vehicle_category");
  vehicle_category.on('value',x => vehicle_category_selector.innerHTML = x.val());
  var vehicle_color = firebase.database().ref().child(rfid_key).child("vehicle").child("vehicle_color");
  vehicle_color.on('value',x => vehicle_color_selector.innerHTML = x.val());
  var vehicle_company = firebase.database().ref().child(rfid_key).child("vehicle").child("vehicle_company");
  vehicle_company.on('value',x => {
  	vehicle_company_selector.innerHTML = x.val()
  	vehicle_company_selector_1.innerHTML = x.val()
  });
  var vehicle_image = firebase.database().ref().child(rfid_key).child("vehicle").child("vehicle_image");
  vehicle_image.on('value',x => {
    var image = firebase.storage().ref("images/"+x.val()).getDownloadURL().then(function(url){
      vehicle_image_selector.src = url;
      vehicle_image_selector.alt = x.val();
    })
  });
  var vehicle_model = firebase.database().ref().child(rfid_key).child("vehicle").child("vehicle_model");
  vehicle_model.on('value',x => {
  	vehicle_model_selector.innerHTML = x.val()
  	vehicle_model_selector_1.innerHTML = x.val()
  });
  var vehicle_no = firebase.database().ref().child(rfid_key).child("vehicle").child("vehicle_no");
  vehicle_no.on('value',x => {
  	vehicle_no_selector.innerHTML = x.val()
  	vehicle_no_selector_1.innerHTML = x.val()
  });
  var vehicle_type = firebase.database().ref().child(rfid_key).child("vehicle").child("vehicle_type");
  vehicle_type.on('value',x => vehicle_type_selector.innerHTML = x.val());



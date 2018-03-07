alert("dwjgfisd");
$("#navbar").load("../../imports/navbar.html");
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
  // var vehicle_image_selector = document.querySelector("#vehicle_image");
  var vehicle_model_selector = document.querySelector("#vehicle_model");
  var vehicle_model_selector_1 = document.querySelector("#vehicle_model_1");
  var vehicle_no_selector = document.querySelector("#vehicle_no");
  var vehicle_no_selector_1 = document.querySelector("#vehicle_no_1");
  var vehicle_type_selector = document.querySelector("#vehicle_type");

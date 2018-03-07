// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZRmQHfS8zG4I8c44MsKcNN60dJzKr-o0",
    authDomain: "toll-d2ece.firebaseapp.com",
    databaseURL: "https://toll-d2ece.firebaseio.com",
    projectId: "toll-d2ece",
    storageBucket: "toll-d2ece.appspot.com",
    messagingSenderId: "554609518469"
  };
  firebase.initializeApp(config);

const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const pass_auth = document.querySelector("#pass_auth");
const signUpButton = document.querySelector("#signUpButton");
const logInButton = document.querySelector("#logInButton");

logInButton.addEventListener("click", e=>{
  const emailVal = email.value;
  const passVal = pass.value; 
  var key = emailVal.split("@")[0];
  key = key.split(".")[0];
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(emailVal,passVal);
  promise
  .then(user =>{
    var balance = firebase.database().ref().child("username").child(key).child("id");
      balance.once('value',x =>{
       paise = x.val()
      console.log(paise);
      cookie.set('key',  paise, { path: '/' });
      window.open('../dashboard','_self');
      });
  })
  .catch(err => alert(err.message));
});

signUpButton.addEventListener("click", e=>{
  const emailVal = email.value;
  const passVal = pass.value;
  if(passVal!==pass_auth.value){
    alert("entered passwords does not match");
  }
  else{

  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(emailVal,passVal);
  promise
  .then(user =>{
    alert("Sign Up sucessful");
    window.open('.','_self');
  })
  .catch(err => alert(err.message));
  }
});


/*firebase.auth().onAuthStateChanged(user =>{
  if(user){
    alert("user logged in");
    console.log(user);
  }
  else{
    alert("user is not registered and logged in");
  }
});*/
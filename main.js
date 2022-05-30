var config = {
  apiKey: "AIzaSyCb9sMzJTwZfHXNA21st649nmsjoTAX_oI",
  authDomain: "lifecare-96cce.firebaseapp.com",
  databaseURL: "https://lifecare-96cce-default-rtdb.firebaseio.com",
  projectId: "lifecare-96cce",
  storageBucket: "lifecare-96cce.appspot.com",
  messagingSenderId: "606021408485",
  appId: "1:606021408485:web:806383605e59bbd245660c"
  };

  firebase.initializeApp(config);
  
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var vacname = getInputVal('vaccine');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, vacname, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, vacname, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    vacname: vacname,
    email:email,
    phone:phone,
    message:message
  });
}
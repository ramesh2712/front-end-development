// Get the Signup modal
var signupModal = document.getElementById('signupModal');

// Get the SignIn modal
var signinModal = document.getElementById('signinModal');

// Get the signup button that opens the modal
var signupbtn = document.getElementById("signupBtn");

// Get the signin button that opens the modal
var signinbtn = document.getElementById("signinBtn");

// Get the <span> element that closes the modal
var signInSpan = document.getElementById("signinClose");

// Get the <span> element that closes the modal
var signUpSpan = document.getElementById("signUpClose");

// When the user clicks on the signup button, open the modal
signupbtn.onclick = function() {
  signupModal.style.display = "block";
}

// When the user clicks on the signin button, open the modal
signinbtn.onclick = function() {
  signinModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
signInSpan.onclick = function() {
  signinModal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
signUpSpan.onclick = function() {
  signupModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
  if (event.target == signinModal){
    signinModal.style.display = "none";
  }
}

// on click when user is not a member and go to signup screen
function gotosignUp() {
  signinModal.style.display = "none";
  signupModal.style.display = "block";
}

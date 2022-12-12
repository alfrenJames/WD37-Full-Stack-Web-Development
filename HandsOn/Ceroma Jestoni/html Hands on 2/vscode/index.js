// Get the modal
var modal = document.getElementById('id01');


//login form parent to get the values of its elements
const lgform = document.getElementById('formLogIn');



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Hides div starting login


// login form validation
function validateform() {
  //get usenName input text or values
  var usrname2 = lgform.uName.value;
  var pssword = lgform.pWord.value;

  let x = 'jest';
  let y = '1234';
  if (usrname2 == x && pssword == y) {
    alert('correct');
    return true;
  }
  else {
    alert('Wrong credentials');
    
    return false;
    
  }
  


}


const formVar = document.getElementById('formSignUp');

function validateform(){
    var x = formVar.fName.value;
    var y = formVar.lastName.value;
    alert('You have Successfuly Register ' + x + ' ' + y);
    return false;
} 
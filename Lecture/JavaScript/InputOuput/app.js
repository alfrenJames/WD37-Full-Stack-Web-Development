//testing purpose
console.log('test');

//change the value of element
function changeValue(){
    //get value and change the value 
    document.getElementById('header').innerHTML = 'Hello WD37 👀';
}
function compute(){
    let firstInput = parseFloat(document.getElementById('fNumber').value);
    let secondInput = parseFloat(document.getElementById('sNumber').value);
    //console.log(firstInput, secondInput);
    let outputAdd = firstInput + secondInput; 
    let outputDiff = firstInput - secondInput; 
    let outputQuotient = firstInput * secondInput; 
    let outputProduct = firstInput / secondInput; 
    // document.getElementById('outputAdd').innerHTML = outputAdd;
    // document.getElementById('outputDiff').innerHTML = outputDiff;
    // document.getElementById('outputQuotient').innerHTML = outputQuotient;
    // document.getElementById('outputProduct').innerHTML = outputProduct;

    // if(outputAdd>=10){
    //     document.getElementById('moreThanTen').innerHTML = "The number you Enter is more than ten";
    // }else{
    //     document.getElementById('moreThanTen').innerHTML = "The number you Enter is Less than ten";
    // }

    (outputAdd>=10) ?
    document.getElementById('moreThanTen').innerHTML = "The number you Enter is more than ten" :
    document.getElementById('moreThanTen').innerHTML = "The number you Enter is Less than ten";

    //get the and insert to array
    let arr = [];
    arr.push(outputAdd, outputDiff, outputQuotient, outputProduct);
    console.log(arr);
    for(let index=0; index<arr.length; index++){
        document.getElementById(`output${index}`).innerHTML = arr[index]; 
        
    }
    
}
function getMessage(){
    let name = document.getElementById('name').value;
    var stringArr = name.split(' ');
    console.log(stringArr);
    alert(`Hi ${name}`);
 
}
function validateEmail(){
    let email = document.getElementById('email').value;
    let emailChecked = /\b[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3,5}\b/;
    if(email === ''){
        alert('Please Fillout Email');
    }else{
        if(emailChecked.test(email)==true){
            alert('valid');
        }
        else{
            alert('invalid');
        }
    }
}

function main(){
    validateEmail();
    getMessage();
    
}

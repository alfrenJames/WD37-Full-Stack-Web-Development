let myInfo = require ('./getInformation');

function setLegalAge(){
    if(myInfo().Age>=18){
        myInfo().isLegalAge = true;
    }
    else{
        myInfo().isLegalAge = false;
    }
    console.log(myInfo());
}
 module.exports = setLegalAge;

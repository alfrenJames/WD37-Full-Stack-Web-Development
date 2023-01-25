const userInfo = require("./getInfo");

function checkAge(){
    if (userInfo ().age > 18)
    {
        userInfo().islegalAge = true; 
    }
    else
    {
         userInfo().islegalAge = false; 
    }  
   console.log(userInfo());
}

module.exports = checkAge;

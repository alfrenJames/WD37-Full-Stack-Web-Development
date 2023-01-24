// const info = require('./getInfo');

function checkAge(){
    let user = {name: 'Khayelee Samara', age: 16};
    if (user.age >= 18)
    {
        user.islegalAge = true; 
        console.log(user);
    }
    else
    {
        user.islegalAge = false;
        console.log(user); 
    }  
    
}

module.exports = checkAge;

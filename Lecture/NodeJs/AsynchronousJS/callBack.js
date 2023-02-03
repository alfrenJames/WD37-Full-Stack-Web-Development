console.log('start');
//function created
function userLogin(userName, userPass, result){
    setTimeout(()=>{
    console.log('user data is now Available')
    result({
        userName: userName,
        userPass: userPass
    });   
    }, 2000)
}
userLogin('alfren', '123', result =>{
    console.log(result);
});
console.log('end');

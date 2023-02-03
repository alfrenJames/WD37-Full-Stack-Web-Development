//execute Promise > onSuccess onError
const promise = new Promise((onSuccess, onError)=>{
    setTimeout(()=>{
     console.log('The Promise is working');
     onSuccess({
         userID: '1',
         userName: 'Alfren',
         userPass: '123'
     });
     onError(new Error('User Id Does not Exist!'));   
    },5000)
})
promise
.then(onSuccess=>{
    console.log(onSuccess);
})
.catch(onError=>{console.log(onError.message)});



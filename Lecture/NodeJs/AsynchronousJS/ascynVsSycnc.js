//asynchronous
console.log('start');
//function created
setTimeout(()=>{
    function functionSum(a,b){
        return sum = a+ b;
    }
    //function executed
    console.log(functionSum(2,10));
}, 2000)
console.log('end');

//synchronous
console.log('start');
//function created
function functionSum(a,b){
    return sum = a+b;
}
//function executed
console.log(functionSum(2,10));
console.log('end');

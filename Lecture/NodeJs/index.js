//import the created module
const print = require('./talkToMyMachine');
const getRecord = require('./records');
const sub = require('./calculate');
//sub(1,4);
//print();
getRecord(1,print(),'sample');

let user = {
    name: "john paul baldonado",
    age: 21 
};
user.isValid = true;

console.log(user);

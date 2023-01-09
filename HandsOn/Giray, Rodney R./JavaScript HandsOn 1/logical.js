let grade = 75;
let age = 18;
let isBoolean = true;

// example of && (AND)
if(grade >=75 && grade < 74 ) // 1st condition: true / 2nd condition: false
{
    console.log("Passed!");    
}else{
    console.log("failed");
}

// example of || (OR) 
if(age >=19 || age <= 17) // the condition both condition is false it will display Minor
{
    console.log("Adult");
}else{
    console.log("Minor");
}
// example of ! (NOT) isBoolean is to True
console.log(!isBoolean);
// example of !! (NOT) isBoolean the last value is False because !(NOT) after using !! it will inverse to True
console.log(!!isBoolean);

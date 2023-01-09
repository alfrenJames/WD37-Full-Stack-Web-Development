let x = 10;
let y = 4;
let z = x = y;
let a = 4;
let b = 3;


console.log("By using '=' or equal sign' it can set a value, the y = 4 variable set a new value for x variable", z);
x+=y;
console.log("Addition: (x = x+y) is  same as (x+=y) =", x);
x-=y;
console.log("Subratction: (x = x-y) is same as (x-=y) =", x);
x*=y;
console.log("Multiplication: (x = x*y) is same as (x*=y) =", x);
x/=y;
console.log("Division: (x = x/y) is same as (x/=y) =", x);
x%=y;
console.log("Modulus(Division Remainder): (x = x %y ) is same as (x%=y) =", y);
a**=b;
console.log("Exponentiation: (x = x**y) is same as (x**=y) =", a);
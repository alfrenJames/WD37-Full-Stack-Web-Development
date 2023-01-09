// array switching
let x = [7,3,5,6,8,2.5];
let temp = x[x.length-1]; //temp = 2.5 variable first to get the value of last index of array
x[x.length-1] = x[0]; //x[6] = 7 computation first to get the first value of index array
x[0] = temp;

console.log(x);


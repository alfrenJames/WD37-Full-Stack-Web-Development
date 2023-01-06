var arrColors = ['blue', 'green', 'red'];
arrColors[1] = 'yellow';
arrColors[5]= 'cyan';
//console.log(arrColors[3]);
console.log(arrColors);
arrColors.pop();
console.log(arrColors);
arrColors.pop();
console.log(arrColors);
arrColors.push('cyan');
console.log(arrColors);

arrColors.unshift('navy');
console.log(arrColors);
arrColors.shift();
console.log(arrColors);

//traverse elements of array
// for(var index=0;index < arrColors.length; index++){
//     console.log(`Elements: ${arrColors[index]} Index: ${index}`);
// }

for(let color of arrColors){
    console.log(`Elements: ${color}`);
}
//console.log(arrColors.at(0));

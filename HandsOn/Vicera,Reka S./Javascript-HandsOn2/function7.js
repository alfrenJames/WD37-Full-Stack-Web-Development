function printPositiveIndex(arr){
    let result = ``;
    for (index in arr) {
        if (arr[index] > 0) {
            result += ` ${index}`;
        }
    }
    console.log(result);
}

printPositiveIndex([1, 3, -10]);
printPositiveIndex([10, 5, -5, 15]);
printPositiveIndex([10, 5, 5, 15]);
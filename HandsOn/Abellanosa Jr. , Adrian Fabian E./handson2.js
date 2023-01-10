//#1
function print1to20(){
    for (var i = 1; i <= 20; i++){
        console.log(i);
    }
}

//#2
function print3to20(){
    for (var i = 3; i <= 20; i+=2){
        console.log(i);
    }
}

//#3
function print4to22(){
    for (var i = 4; i <= 22; i+=2){
        console.log(i);
    }
}

//#4
function print7to62(){
    for (var i = 7; i <= 22; i+=7){
        console.log(i);
    }
}

//#4
function print7to62(){
    for (var i = 7; i <= 62; i+=7){
        console.log(i);
    }
}

//#5
function print50to5(){
    for (var i = 50; i >= 5; i-=5){
        console.log(i);
    }
}

//#6
function firstPlusLength(arr){
    var sum = arr[0] + arr.length;
    console.log(sum);
    }

    firstPlusLength([1,2,5]);
    firstPlusLength([3,0,2,5]);
    firstPlusLength([-5,0,2,5]);
    firstPlusLength([1]);

//#7
function printPositiveIndex(arr){
    let positiveIndex = 0;
    for(let i=0; i < arr.length; i++){
        arr[i] > 0 ? positiveIndex = positiveIndex + i + ' ':null;
    }
    console.log(positiveIndex);
}

printPositiveIndex([1,3-10]);
printPositiveIndex([10,5,-5,15]);
printPositiveIndex([10,5,5,15]);
let grade = 74;


if(grade == 75){
    console.log("Grade D");
}else if(grade == 80){
    console.log("Grade C");
}else if(grade == 85){
    console.log("Grade B");
}else if(grade ==90 ){
    console.log("Grade A");
}else{
    console.log("Failed");
}
//ternary
let remarks =   (grade == 75) ? 'Grade D' :
                (grade == 80) ? 'Grade C' :
                (grade == 85) ? 'Grade B' :
                (grade == 90) ? 'Grade A' : 
                'Failed';
console.log(remarks);



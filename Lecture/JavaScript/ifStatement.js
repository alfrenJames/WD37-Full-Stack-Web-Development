var age = '100';
if(age===100 || age==='100'){
    console.log("Legend Age!");
    if(age==10){
        console.log('true');
    }else{
        console.log('false');
    }
}
else if(age>=60){
    console.log(`The age ${age} Retirement Stage`); //1
}else if(age>=20){
    console.log(`The age ${age} is Legal age!`);;//0
}else if(age<=19 && age>=13){
    console.log(`The age ${age} is Teen Stage!`);
}
else{
    console.log(`The age ${age} is Young Stage!`);
}

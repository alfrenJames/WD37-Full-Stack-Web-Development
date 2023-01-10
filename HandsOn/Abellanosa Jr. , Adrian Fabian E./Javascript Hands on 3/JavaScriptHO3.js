let sub1;
let sub2;
let sub3;
let sub4;
let sub5;
let sub6;
let sub7;
let sub8;
let scores = [];
let sum = 0;
let fSubjects = '';
let pSubjects = '';

//#1

function displayStudentname(){
    sName = document.getElementById('studentName').value;
    document.getElementById('displayName').innerHTML = sName;
}

//#2 getting values

function declareVariables(){
    
    sub1 = (document.getElementById('subject1').value);
    sub2 = (document.getElementById('subject2').value);
    sub3 = (document.getElementById('subject3').value);
    sub4 = (document.getElementById('subject4').value);
    sub5 = (document.getElementById('subject5').value);
    sub6 = (document.getElementById('subject6').value);
    sub7 = (document.getElementById('subject7').value);
    sub8 = (document.getElementById('subject8').value);
    scores = [];
     for(x = 1; x <= 8; x++){
       scores.push(parseInt(document.getElementById('subject'+x).value)) ;
            // sum+=((scores[x]=='Nan') ? 0:scores[x]);     
        }
}

//#3

function getAverage(){
    declareVariables();
        for(x = 0; x < scores.length; x++){  
            sum += scores[x];
            average = sum/scores.length;     
        }
       console.log(average);

//#8
    if (average>=50 && average<=68){
        console.log("Retake/Failed")
    }
    else if (average>=69 && average<=74){
        console.log("Remedial");
    }
    else if (average>=75 && average<=100){
        console.log("Passed");
    }
    else{
        console.log("Invalid");
    }
}

//#4

function getFailedGrade(subject,grade){
    if (grade<75){
        fSubjects += subject + ': ' + grade + ', ';
    }
}

//#5

function displayFailedSubjects(){
    declareVariables();
    getFailedGrade('sub1',sub1);
    getFailedGrade('sub2',sub2);
    getFailedGrade('sub3',sub3);
    getFailedGrade('sub4',sub4);
    getFailedGrade('sub5',sub5);
    getFailedGrade('sub6',sub6);
    getFailedGrade('sub7',sub7);
    getFailedGrade('sub8',sub8);
    console.log(`Failed On:\n ${fSubjects}`);
}

//#6

function getPassedGrade(subject,grade){
    if (grade>75){
        fSubjects += subject + ': ' + grade + ', ';
    }
}

//#7

function displayPassedSubjects(){
    declareVariables();
    getPassedGrade('sub1',sub1);
    getPassedGrade('sub2',sub2);
    getPassedGrade('sub3',sub3);
    getPassedGrade('sub4',sub4);
    getPassedGrade('sub5',sub5);
    getPassedGrade('sub6',sub6);
    getPassedGrade('sub7',sub7);
    getPassedGrade('sub8',sub8);
    console.log(`Passed On:\n ${fSubjects}`);
}

//#9

function ComputeGrade(){
    displayStudentname();
    getAverage();
    alert(`Student Name: ${sName}  Average: ${average}`);
}

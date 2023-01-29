var gradeElements = [];

function getGradeElements(){
    gradeElements = document.getElementById('gradesDiv').querySelectorAll('input');
}

function displayStudentName(){
    let studentName = document.getElementById('studentNameInput').value;
    document.getElementById('studentNameDisplay').innerHTML = studentName;
}

function getAverage(){
    let sum = 0.0;
    let average = 0.0;

    for (let index = 0; index < gradeElements.length; index++) {
        sum += parseFloat(gradeElements[index].value);
    }
    average = sum / gradeElements.length;
    let message = `Your Average Grade: ${average} -- `;

    if (average < 50 || average > 100){
        message += `Invalid`;
    }else if (average < 68) {
        message += `Retake/Failed`;
    }
    else if (average >= 69 && average <=74){
        message += `Remedial`;
    }
    else if (average >= 75 && average <=100){
        message += `Passed`;
    }
    console.log(message);
    return message;
}

function getFailedGrade(){
    for (let index = 0; index < gradeElements.length; index++) {
        if (gradeElements[index].value < 75) {
            console.log(`You failed in ${gradeElements[index].id}: ${gradeElements[index].value}`);
        }
    }
}

function getPassedGrade(){
    for (let index = 0; index < gradeElements.length; index++) {
        if (gradeElements[index].value >= 75) {
            console.log(`You passed in ${gradeElements[index].id}: ${gradeElements[index].value}`);
        }
    }
}

function computeGrade(){
    getGradeElements();
    getFailedGrade();
    getPassedGrade();
    alert(getAverage() + `-- ` + document.getElementById('studentNameInput').value);
}
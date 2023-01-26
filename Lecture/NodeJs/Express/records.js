//import 
const express = require('express');
const empRecordsRouter = express.Router();

// array of object to represent JSON
let empRecords = [
{id: 1, name: 'Jose', position: 'Web Dev', salary: 30000, isActive: true},
{id: 2, name: 'JP', position: 'Web Dev', salary: 35000, isActive: false},
{id: 3, name: 'Elsa', position: 'Web Dev', salary: 35000, isActive: true}
];

//get all data
//localhost:8000/records/getallEmp
empRecordsRouter.get('/getallEmp', (req, res)=>{
    res.status(200).json(empRecords);
    console.log(empRecords);
    console.log('getting all emp records is successful!');
});

//get by id
//localhost:8000/records/getallEmp/id
empRecordsRouter.get('/getallEmp/:id', (req, res)=>{
    let check =  empRecords.find((empId)=>{
        return empId.id === parseInt(req.params.id)
    });
    //verify if id exist
    if(check){
        res.status(200).json(check);
        console.log('Id was Search');
    }else{
        res.status(400).send('Id does not Exist');
        console.log('Id not found');
    }
});

// add new emp records
//localhost:8000/records/postNewRecord
empRecordsRouter.post('/postNewRecord', (req, res)=>{
    //res.status(201).send('get data from body');
    let param = req.query;
    let body = req.body;
    res.status(201).send('get data from param');
    empRecords.push(param);
    console.log("added new Record: ",param);
});
//update record by id
////localhost:8000/records/putEmpRecordById/id 
empRecordsRouter.put('/putEmpRecordById/:id', (req, res)=>{
    let paramId = +req.params.id
    let body = req.body
    let index = empRecords.findIndex((emp)=> emp.id===paramId);
    if(index>=0){
        let updateEmpRecord = {id: paramId, ...body};
        empRecords[index] = updateEmpRecord;
        res.status(201).json(updateEmpRecord);
        console.log(`id: ${paramId} was updated!`);
    }else{
        res.status(404).send('Id does not Exist!');
    }

    });
//delete by id
//localhost:8000/records/deleteEmpRecordById/id 
empRecordsRouter.delete('/deleteEmpRecordById/:id', (req, res)=>{
    let paramId = +req.params.id
    let index = empRecords.findIndex((emp)=> emp.id===paramId);
    if(index>=0){
        empRecords.splice(index, 1);
        res.status(201).json(empRecords);
        console.log(`id: ${paramId} was deleted!`);
    }else{
        res.status(404).send('Id does not Exist!');
    }
    // res.status(201).send(`I got the ${req.params}`);
    // console.log('working');
});

module.exports = empRecordsRouter;

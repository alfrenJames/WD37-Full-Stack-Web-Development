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
    empRecords.push(body);
    console.log("added new Record: ",body);
});

module.exports = empRecordsRouter;

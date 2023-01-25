//import modules
const express = require('express');
// module of express use for routing
const dataRouter = express.Router();

let records = [
    {id: 1, name: 'JP' , jobTitle: 'Web Dev'},
    {id: 2, name: 'Alfren' , jobTitle: 'Web Designer'},
    {id: 3, name: 'Jose' , jobTitle: 'Soft Eng'}
]
//get all records
dataRouter.get('/',(req, res) =>{
    //res.send(`<h1>Hi Im From The server 👀🦾</h1>`);
    res.status(200).send(records);
})

//get record by id
dataRouter.get('/:id', (req, res)=>{
let check = records.find((item)=>{
 return item.id === parseInt(req.params.id);
});
if(check){
    res.status(201).send(check);
}else{
    res.status(404).send('No Record Found');
}
});

// dataRouter.get("/test", (req,res)=>{
//  let paramTest = req.params.name;
//  console.log(paramTest);
//  res.send('all goods');
// });

// add new data
dataRouter.post('/addData', (req ,res)=>{
let body = req.body;
console.log(req.params);
res.status(200).send('got the info from params');
///let param = req.params;
//records.push(body);
//res.status(200).send('param successfully added');
});

//export module 
module.exports = dataRouter;

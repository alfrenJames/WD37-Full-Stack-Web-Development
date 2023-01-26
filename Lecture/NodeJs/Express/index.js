//import 
const express = require('express');
const app = express();
const empRecordsRouter = require('./routes/routerRecordEmp');
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let name = 'alfren';
//routes
// app.get('/records', (req, res)=>{
//     res.send(`<h1> This is from server response hi! ${name}</h1>`);
// });
app.use('/records', empRecordsRouter);
//check if my server is working
let port = 8000;
app.listen(port, ()=>{
 console.log(`The server is now running in the port: ${port}`);
});

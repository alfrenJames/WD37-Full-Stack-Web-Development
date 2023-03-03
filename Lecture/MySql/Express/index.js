//import modules
const express = require('express');
const record = require('./routes/record');
const sql = require('./database/mySql');

//middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true,}));
//routes
app.use('/', record);

//check connection of database and server if running
const port = 3001
app.listen(port, ()=>{
    console.log(`Running in port ${port}`);
});

sql.connect((err)=>{
    !err ? console.log('Database Connected') : console.log('Failed Connection Due:', JSON.stringify(err))
});

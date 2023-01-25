//import modules
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/record');
const app = express();

//middleware(interpreter)
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/record', routes);
// app.get() //get data
// app.post() //add data
// app.patch() // udpdate data
// app.put()
// app.delete() //delete data

//checking of server connection
const port=8080;
app.listen(port, ()=>{
 console.log(`The server is running at port: ${port}`);
});

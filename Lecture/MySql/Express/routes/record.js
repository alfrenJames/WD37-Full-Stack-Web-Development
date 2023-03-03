const routesRecord = require('express').Router();
const sql = require('../database/mySql')
routesRecord.get('/record/getAllProduct', async(req, res )=>{
    try {
        await sql.query('CALL GetProducts()', (err, rows)=>{
            res.status(201).send(rows[0]);
        });
    } catch (error) {
        console.log(error)
    }
   });
routesRecord.get('/record/products/:id',(req, res) => {
        const id = req.params.id;
        try {
            sql.query(`CALL GetProductsByID(${id})`, (err, rows) => {
                res.status(201).send(rows[0]);
            });
        } catch (error) {
            console.log(error);
        }
    })
 routesRecord.post('/record/addProducts', async (req,res)=>{
        const id = parseInt(req.body.ProductID)
        const productName = req.body.ProductName
        const supId = parseInt(req.body.SupplierID)
        const catId = parseInt(req.body.CategoryID)
        const unit = req.body.Unit
        const price = parseFloat(req.body.Price)
     try {
         await sql.query(`CALL AddProduct(${id},'${productName}',${supId},${catId},'${unit}',${price})`, (err, rows)=>{
         res.status(201).send(rows);   
         });
     } catch (error) {
         console.log(error)
     }
    // res.send('test');
    // console.log(products);

 })   

module.exports = routesRecord;

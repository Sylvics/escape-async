const express = require('express');
const massive = require('massive');
require('dotenv').config();
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;
app.use(express.json());
massive(CONNECTION_STRING).then(db=>{
    app.set('db', db);
    console.log('database Connect');
})
app.get('/api/products', async(req, res) => {
    const db = await req.app.get('db');
    let products = await db.get.getProducts();
    res.send(products).status(200);
})
app.post('/api/cartpost', async(req,res) =>{
const db = await req.app.get('db');
let result = await db.post.postCart(req.body.id, req.body.quantity)
res.sendStatus(200)
})

app.listen(SERVER_PORT, () => {
    console.log(`Selling black market Old School Runescape Items on ${SERVER_PORT}`)
})
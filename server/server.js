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

await db.post.postCart(req.body.id, req.body.quantity)
res.sendStatus(200)
})
app.get('/api/cart', async(req, res) =>{
    console.log('hit the cart endpoint')
    const db = await req.app.get('db');
    let results = await db.get.getCart();

    res.send(results).status(200);
})
app.put('/api/cart/add/:id', async(req,res) => {
    const db = await req.app.get('db');
await db.put.addQuantity(req.params.id)
 
    res.sendStatus(200);
    
})
app.delete('/api/cart', async(req, res)=>{
    const db = await req.app.get('db');
    db.delete.deleteAll();
    res.sendStatus(200);
})
app.delete('/api/cart/:id', async(req, res) =>{
    const db = await req.app.get('db');
    console.log(req.params.id)
    db.delete.deleteOne(req.params.id)
    res.sendStatus(200);
})
app.get('/api/cartupdated/:id', async(req, res) =>{

    const db = await req.app.get('db');
    let [results] = await db.get.getCartItem(req.params.id);

    res.send(results).status(200);
})

app.listen(SERVER_PORT, () => {
    console.log(`Selling black market Old School Runescape Items on ${SERVER_PORT}`)
})
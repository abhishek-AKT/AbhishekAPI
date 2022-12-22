// first creating server
require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./db/connect');


const PORT = process.env.PORT || 5000;
const product_routes = require('./routes/products')

app.get('/',(req,res)=>{
    res.send('hi abhishek i am live')
})

// midderware
app.use("/api/products",product_routes);

const start = async () =>{
    try{    
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
           console.log( `${PORT} yes i am connected`);
        });
    }catch(error){
        console.log(error);
    }
}

start();
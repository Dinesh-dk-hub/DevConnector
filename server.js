const express = require('express');
const req = require('express/lib/request');
const app = express();
app.get('/', (req,res)=>res.send('App is Running'));
const PORT=process.env.PORT||5000;
app.listen(PORT, ()=> console.log(`Server Started on Port ${PORT}`));
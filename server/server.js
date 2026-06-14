require('dotenv').config();
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Backend working fine!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("Server is running at port " + PORT);
});
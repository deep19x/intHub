require('dotenv').config();
const express = require('express');
const app = express();

const testRoutes = require('./routes/testRoute');

app.use('/',testRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("Server is running at port " + PORT);
});
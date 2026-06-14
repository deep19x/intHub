require('dotenv').config();
const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect')

const testRoutes = require('./routes/testRoute');

dbConnect();

app.use('/',testRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("Server is running at port " + PORT);
});
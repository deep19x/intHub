require('dotenv').config();
const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect')

const testRoutes = require('./routes/testRoute');
const authRoutes = require('./routes/auth');
const questionRoutes = require('./routes/question')

app.use(express.json());

dbConnect();

app.use('/',testRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/questions',questionRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("Server is running at port " + PORT);
});
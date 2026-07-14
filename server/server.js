require('dotenv').config();
const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect');
const cors = require('cors');

const testRoutes = require('./routes/testRoute');
const authRoutes = require('./routes/auth');
const questionRoutes = require('./routes/question');
const progressRoutes = require('./routes/progress');
const statsRoutes = require('./routes/statistics');
const aiRoutes = require('./routes/ai');

app.use(cors({
    origin : "http://localhost:5173",
}));

app.use(express.json());

dbConnect();

app.use('/',testRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/questions',questionRoutes);
app.use('/api/progress',progressRoutes);
app.use('/api/stats',statsRoutes);
app.use('/api/ai',aiRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("Server is running at port " + PORT);
});
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
//database connection
mongoose.connect(process.env.DB_URI);
app.get('/',(req,res)=>{
    res.send('Hello World')
}); 

app.listen(PORT,(err)=>{
    if(err) return console.log(err);
    console.log(`Server Started at https://localhost:${PORT}`);
});
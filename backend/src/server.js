import express from 'express';
import ConnectDB from './config/db.js';
import dotenv from 'dotenv';
import app from './app.js';
dotenv.config();
ConnectDB();
const server=express();

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})
export default server;


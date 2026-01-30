import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const port=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
const ConnectDB=async()=>{
    try {
        mongoose.connect(MONGO_URL);
        console.log("database connected successfully");
        
    } catch (error) {
        console.log("database connection failed");
        
    }
}
export default ConnectDB;
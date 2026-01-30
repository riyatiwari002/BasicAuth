import express from "express";
import authRouter from "./routes/authRoutes.js";
import cors from 'cors';
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/auth',authRouter);

export default app;



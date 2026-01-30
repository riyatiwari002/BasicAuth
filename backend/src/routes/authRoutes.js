import {Register,Login} from "../controllers/authController.js";
import express from "express";

const authRouter=express.Router();

authRouter.post('/register',Register);
authRouter.post('/login',Login);

export default authRouter;
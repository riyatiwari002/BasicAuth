import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET=process.env.JWT_SECRET;
const EXPIREIN=process.env.EXPIREIN;

const generateToken=(user)=>{
    return jwt.sign(
        {id:user._id,email:user.email},
        JWT_SECRET,
        {expiresIn:EXPIREIN}
    );
}

const verifyToken=(req,res,next)=>{
    try {
        const token=req.headers.authorization;
        if(!token)
        {
          let error=new Error("token not provided");
           return error;
        }
        const cleanToken=token.split(" ")[1];
        const decoded=jwt.verify(cleanToken,JWT_SECRET);
        req.user=decoded;
        next();
       
    } catch (error) {
      next(error);  
    }
}
export {generateToken,verifyToken};


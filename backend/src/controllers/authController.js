import { generateToken } from "../middleware/authmiddleware.js";
import authModel from "../models/authModel.js";

const Register=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password)
        {
            res.status(400).json({
                status:400,
                message:'All fields are required'
            })
        }
        const alreadyExist=await authModel.findOne({email});
        if(alreadyExist)
        {
           res.status(400).json({
            status:400,
            message:"email already exisit"
           }) 
        }
      
        const createNewUser=new authModel({
            name,
            email,
            password
        })

        await createNewUser.save();
        res.status(201).json({
            status:201,
            message:"user registered successfully"
        })
    } catch (error) {
        res.status(500).json({
            status:500,
            message:error.message,
        })
    }
} 
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: 401,
        message: "all fields are required",
      });
    }

    const user = await authModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        status: 400,
        message: "user not found",
      });
    }

    // ✅ Correct comparison
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({
        status: 400,
        message: "invalid password",
      });
    }

    const token = generateToken(user);

    res.status(200).json({
      status: 200,
      message: "user login successfully",
      user:user,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export {Register,Login};

import { Request,Response } from "express"
import bcrypt from 'bcrypt'
import { ApiError } from "../helper/ApiError"
import User from '../database/models/userModel';
import { generateToken } from "../services/token";
import { ApiResponse } from "../helper/ApiResponse";
import { asyncHandler } from "../helper/AsyncHandler";


class UserController{
    public static loginUser = asyncHandler(async(req:Request,res:Response):Promise<void>=>{
        const {email,password} = req.body

        if (!email || !password ) {
            throw new ApiError(400,"please provide email and password")
            
        }

        //check user exist or not
        const [user] = await User.findAll({
            where:{
                email:email
            }
        })

        if (!user) {
            throw new ApiError(400,"User not found!")
        }
        else{
            //check password is matched or not
            const isMatched = bcrypt.compareSync(password,user.password)
            if (!isMatched) {
                throw new ApiError(200,"Password is not correct")
            }
            else{
                //generate token
                const token = generateToken(user.id)
                res.json(new ApiResponse("User logged in successfully",200,token))
                
            }
        }
    })
}

export default UserController
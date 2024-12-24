import  jwt  from "jsonwebtoken";
import { envConfig } from "../config/config";

export const generateToken = (userId:string)=>{
    jwt.sign({userId:userId},envConfig.jwt_secret_key as string,{
        expiresIn:envConfig.jwt_expires_in
    })
}
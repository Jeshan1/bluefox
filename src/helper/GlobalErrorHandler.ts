import { Response } from "express";
import { ApiError } from "./ApiError";

export const globalErrorHandler = (err:ApiError,res:Response)=>{
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            error:err.message,
            statusCode:err.statusCode,
            success:err.success
        })
    }
    else{
        res.status(500).json({
            error:"Internal Server Error",
            statusCode:500,
            success:false
        })
    }
}
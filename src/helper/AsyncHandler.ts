
import { Request,Response,NextFunction } from "express";

type FuntionType = (
    req:Request,
    res:Response,
    next:NextFunction
)=>Promise<void>

export const asyncHandler = (requestHandler:FuntionType)=>{
    return(req:Request,res:Response,next:NextFunction)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}
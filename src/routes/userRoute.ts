
import express, { Router } from "express";
import UserController from "../controllers/userController";

export const userRoute:Router = express.Router()


userRoute.route('/user').post(UserController.loginUser)
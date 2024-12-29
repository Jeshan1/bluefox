
import User from "../database/models/userModel";
import { ApiError } from "../helper/ApiError";
import { asyncHandler } from "../helper/AsyncHandler";
import bcrypt from 'bcrypt'

export const adminSeeder = asyncHandler(async():Promise<void>=>{
    const [user] = await User.findAll({
        where:{
            email:"admin@gmail.com"
        }
    })

    if (user) {
        throw new ApiError(200,"Admin already exist")
    }
    else{
        try {
            await User.create({
                username:"admin",
                email:"admin@gmail.com",
                password:bcrypt.hashSync("password",10),
                role:"admin"
            })

            console.log("admin seeded successfully")
        } catch (error) {
            console.error(error)
        }

    }
})
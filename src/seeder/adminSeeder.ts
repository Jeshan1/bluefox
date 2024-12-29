
import User from "../database/models/userModel";
import bcrypt from 'bcrypt'

export const adminSeeder = async():Promise<void>=>{
    const [user] = await User.findAll({
        where:{
            email:"admin@gmail.com"
        }
    })

    if (user) {
        console.log("Admin already exists. Skipping seeding.");
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
}
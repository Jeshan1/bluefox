
import { Sequelize } from "sequelize-typescript";
import path from 'path'
import User from "./models/userModel";

export const sequelize = new Sequelize({
    database:'hrdemo',
    dialect:'postgres',
    username:'postgres',
    password:'admin',
    host:'localhost',
    port:Number(5432),
    models: [path.join(__dirname,'./models')],
    
});

export const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
    
    await sequelize.sync({ force: false }); 
    console.log("Models synchronized successfully!");
  } catch (error: any) {
    console.error("Error connecting to the database: ", error.message || error);
  }
}







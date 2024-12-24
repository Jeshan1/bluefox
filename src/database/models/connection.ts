import { Sequelize } from "sequelize-typescript";
import path from "path";
import { envConfig } from "../../config/config";

const sequelize = new Sequelize({
    database:'hrdemo',
    dialect:'postgres',
    username:'postgres',
    password:'admin',
    host:'localhost',
    port:Number(5432),
    models:[__dirname + '/models']
});

export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");

    await sequelize.sync({ force: false }); // Ensure you're not unintentionally dropping tables
    console.log("Models synchronized successfully!");
  } catch (error: any) {
    console.error("Error connecting to the database: ", error.message || error);
  }
};



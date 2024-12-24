import * as dotenv from 'dotenv'
dotenv.config()

export const envConfig = {
    server_port:process.env.SERVER_PORT,
    db_port:process.env.DB_PORT,
    db_name:process.env.DB_NAME,
    db_username:process.env.DB_USERNAME,
    db_host:process.env.DB_HOST,
    db_password:process.env.DB_PASSWORD,
    jwt_secret_key:process.env.JWT_SECRET_KEY,
    jwt_expires_in:process.env.JWT_EXPIRES_IN
}
import app from './app'
import { envConfig } from './config/config'
import { connection } from './database/connection'


async function startServer(){

    try {
         connection()
        const port = envConfig.server_port || 4000

        app.listen(port,()=>{
            console.log(`server is started at port: ${port}`)
        })
    } catch (error) {
        console.error("Failed to start the server:", error)
        process.exit(1)
    }
}

startServer()
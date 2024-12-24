import { Request,Response,NextFunction } from 'express';
import express from 'express'
import { ApiError } from './helper/ApiError'
import { globalErrorHandler } from './helper/GlobalErrorHandler';
import * as dotenv from 'dotenv'
import { userRoute } from './routes/userRoute';
dotenv.config()
const app = express()

app.use(express.json())

app.use('/api/',userRoute)


app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    globalErrorHandler(err, res);
  });



export default app
import "express-async-errors"
import express, { NextFunction, Request, Response } from 'express';
import { routes } from "./routes"
import { AppError } from './errors/AppError';
import cors from 'cors'

const options: cors.CorsOptions ={
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
} 


const app = express();

app.use(express.json())

app.use(cors(options))

app.use(routes)


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    })
  }

  return response.status(500).json({
    stattus: "error",
    message: `Internal server error - ${err.message}`
  })
})

app.listen(3001, () => {
  console.log("Server is running in port 3001")
})
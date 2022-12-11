import express from 'express'
import { userRouter } from './routers'
import 'express-async-errors'
import { errorHandler } from './errors'

const app = express()

app.use(express.json())
app.use('', userRouter);
app.use(errorHandler)

export default app;
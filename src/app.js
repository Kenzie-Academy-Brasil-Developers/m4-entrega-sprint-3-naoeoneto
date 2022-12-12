import express from 'express'
import { categoryRouter, productRouter } from './routers'
import 'express-async-errors'
import { errorHandler } from './errors'

const app = express()

app.use(express.json())
app.use('', categoryRouter);
app.use('', productRouter);
app.use(errorHandler)

export default app;
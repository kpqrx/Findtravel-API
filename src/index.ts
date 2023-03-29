import express, { Router } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const { PORT } = process.env

const app = express()
const router = Router()

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => console.log(`🚀 Listening on port ${PORT}...`))

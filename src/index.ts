import express, { Router } from 'express'
import cors from 'cors'
import { CityRouter } from '@/routers'
import 'dotenv/config'

const { PORT } = process.env

const app = express()
const router = Router()

router.use('/city', CityRouter)

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => console.log(`🚀 Listening on port ${PORT}...`))

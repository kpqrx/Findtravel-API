import express, { Router } from 'express'
import cors from 'cors'
import { CityRouter } from '@/routers'

const app = express()
const router = Router()

router.use('/city', CityRouter)

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(3000, () => console.log('🚀 Listening on port 3000...'))

import { CityController } from '@/controllers'
import { Router } from 'express'

const router = Router()
const controller = new CityController()

router.get('/:cityName', controller.getData)

export default router

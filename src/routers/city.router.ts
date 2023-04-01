import { CityController } from '@/controllers'
import { Router } from 'express'

const router = Router()
const controller = new CityController()

router.get('details/:cityName', controller.getDetails)

export default router

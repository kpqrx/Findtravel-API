import { CityController } from '@/controllers'
import { Router } from 'express'

const router = Router()
const controller = new CityController()

router.get('/details/:cityName', controller.getDetails)
router.get('/listing/:query', controller.getListing)

export default router

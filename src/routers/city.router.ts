import { CityController } from '@/controllers'
import { Router } from 'express'

const router = Router()
const controller = new CityController()

router.get('/details/:geonameId', controller.getDetails)
router.get('/listing/:query', controller.getListing)

export default router

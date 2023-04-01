import { CityService } from '@/services'
import type { Request, Response } from 'express'

const service = new CityService()

class CityController {
  async getDetails(req: Request, res: Response) {
    const { cityName } = req.params
    const data = await service.getDetails({ cityName })

    res.send({
      data,
    })
  }
}

export default CityController

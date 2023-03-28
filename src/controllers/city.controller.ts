import CityService from '@/services/city.service'
import type { Request, Response } from 'express'

const service = new CityService()

class CityController {
  async getDescription(req: Request, res: Response) {
    const { cityName } = req.params
    const data = await service.getData({ cityName })

    res.send({
      data,
    })
  }
}

export default CityController

import { CityService } from '@/services'
import type { Request, Response } from 'express'

const service = new CityService()

class CityController {
  async getDetails(req: Request, res: Response) {
    const { geonameId } = req.params
    const data = await service.getDetails({ geonameId })

    res.send({
      data
    })
  }
  async getListing(req: Request, res: Response) {
    const { query } = req.params
    const data = await service.getListing({ query })

    res.send(data)
  }
}

export default CityController

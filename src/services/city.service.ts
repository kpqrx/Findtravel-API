import type {
  CityDetailsParametersType,
  CityListingParametersType,
  DBPediaResponseType,
  GeonamesResponseType
} from '@/types'
import { getSPARQLQuery } from '@/utils'
import axios from 'axios'

class CityService {
  language

  constructor(language = 'pl') {
    this.language = language
  }

  async getDetails(paremeters: CityDetailsParametersType) {
    const { geonameId } = paremeters
    // TODO: to fix env variables resolving (null assertion)
    const { data: rawData }: DBPediaResponseType = await axios.get(process.env.DBPEDIA_ENDPOINT!, {
      params: {
        format: 'json',
        query: getSPARQLQuery({ geonameId, language: this.language })
      }
    })

    const {
      results: {
        bindings: [cityData]
      }
    } = rawData

    console.log(rawData)

    const data = Object.entries(cityData).reduce(
      (previousEntries, [key, { value }]) => ({
        ...previousEntries,
        [key]: value
      }),
      {}
    )

    return data
  }
  async getListing(paremeters: CityListingParametersType) {
    const { query } = paremeters

    const { data: rawData }: GeonamesResponseType = await axios.get(process.env.GEONAMES_ENDPOINT!, {
      params: {
        type: 'json',
        featureClass: 'P',
        featureCode: ['PPLC', 'PPLS', 'PPLX'],
        name_startsWith: query,
        maxRows: 10,
        orderby: 'score',
        lang: this.language,
        username: process.env.GEONAMES_USERNAME!
      }
    })

    const { geonames } = rawData

    const data = geonames.map(({ name, countryName, geonameId, lng, lat }) => ({
      city: name,
      country: countryName,
      geonameId,
      long: parseFloat(lng),
      lat: parseFloat(lat)
    }))

    return data
  }
}

export default CityService

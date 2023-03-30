import type { CityDataParametersType, DBPediaResponseType } from '@/types'
import { getSPARQLQuery } from '@/utils'
import axios from 'axios'

class CityService {
  language

  constructor(language = 'pl') {
    this.language = language
  }

  async getData(paremeters: CityDataParametersType) {
    const { cityName } = paremeters
    console.log(getSPARQLQuery({ cityName, language: this.language }))
    // TODO: to fix env variables resolving (null assertion)
    const { data }: DBPediaResponseType = await axios.get(process.env.DBPEDIA_ENDPOINT!, {
      params: {
        format: 'JSON',
        query: getSPARQLQuery({ cityName, language: this.language }),
      },
    })

    const {
      results: {
        bindings: [unparsedData],
      },
    } = data

    const parsedData = Object.entries(unparsedData).reduce(
      (previousEntries, [key, { value }]) => ({
        ...previousEntries,
        [key]: value,
      }),
      {},
    )

    return parsedData
  }
}

export default CityService

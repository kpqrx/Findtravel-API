import type { CityDataParametersType } from '@/types'
import axios from 'axios'

class CityService {
  #API_ENDPOINT
  language

  constructor(language = 'pl') {
    this.#API_ENDPOINT = `https://${language}.wikipedia.org/w/api.php`
    this.language = language
  }

  async getData(paremeters: CityDataParametersType) {
    const { cityName } = paremeters
    const {
      data: {
        query: {
          pages: [data],
        },
      },
    } = await axios.get(this.#API_ENDPOINT, {
      params: {
        action: 'query',
        format: 'json',
        prop: 'extracts|pageimages|info',
        titles: cityName,
        exintro: 1,
        explaintext: 1,
        exsentences: 8,
        piprop: 'original',
        pithumbsize: 500,
        formatversion: 2,
        redirects: 1,
        inprop: 'url',
      },
    })

    const {
      title: city,
      extract: description,
      fullurl: wikiPageUrl,
      original: { source: photoUrl },
    } = data

    return {
      city,
      description,
      photoUrl,
      wikiPageUrl,
    }
  }
}

export default CityService

export type CityDetailsParametersType = { geonameId: string }

export type CityListingParametersType = { query: string }

export type SPARQLQueryParametersType = {
  geonameId: string
  language: string
}

export type DBPediaResponseType = {
  data: {
    results: {
      bindings: [
        {
          [K: string]: {
            [K: 'value' | string]: string
          }
        }
      ]
    }
  }
}

export type GeonamesResponseType = {
  data: {
    geonames: {
      name: string
      countryName: string
      geonameId: number
      lng: string
      lat: string
    }[]
  }
}

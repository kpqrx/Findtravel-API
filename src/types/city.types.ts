export type CityDataParametersType = { cityName: string }
export type SPARQLQueryParametersType = {
  cityName: string
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
        },
      ]
    }
  }
}

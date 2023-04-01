export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      DBPEDIA_ENDPOINT: string
      GEONAMES_ENDPOINT: string
      GEONAMES_USERNAME: string
    }
  }
}

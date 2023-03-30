export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      DBPEDIA_ENDPOINT: string
    }
  }
}

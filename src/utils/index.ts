import type { SPARQLQueryParametersType } from '@/types/city.types'

export const getSPARQLQuery = (parameters: SPARQLQueryParametersType) => {
  const { cityName, language } = parameters

  const query = `
    PREFIX dbo: <http://dbpedia.org/ontology/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>

    SELECT DISTINCT 
        ?city ?country ?description ?image ?latitude ?longitude ?wikipediaLink
    WHERE {
        ?x  rdf:type dbo:City ;
            rdfs:label "${cityName}"@${language} ;
            dbo:country ?y .
        ?x  rdfs:label ?city ;
            rdfs:comment ?description ;
            foaf:depiction ?image ;
            geo:lat ?latitude ;
            geo:long ?longitude ;
            foaf:isPrimaryTopicOf ?wikipediaLink .
        ?y  rdfs:label ?country .
        FILTER(
            LANG(?description) = "${language}" && 
            LANG(?country) = "${language}" && 
            LANG(?city) = "${language}"
        )
    } 
    LIMIT 1
  `

  return query.replaceAll(/\s+/g, ' ').trim()
}

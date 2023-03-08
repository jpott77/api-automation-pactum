const { spec } = require('pactum');

const starWarsSchema = require('./schema/starWarsSchema')

describe('Star Wars People and Film Query -', ()=>{
    it('positive call', async ()=>{

        let url = 'https://swapi-graphql.netlify.app/.netlify/functions/index'
        await spec()
        .post(url)
        .withHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          })
        .withGraphQLQuery(
            `{
                allFilms {
                  films {
                    title
                  }
                }
                allPeople {
                  people {
                    homeworld {
                      name
                    }
                    name
                    species {
                      name
                    }
                  }
                }
              }`
        )
        .expectStatus(200)
        .expectBodyContains('Return of the Jedi')
        .expectJsonSchema(starWarsSchema)
    })
})
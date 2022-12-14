const { spec } = require('pactum');

describe('Space X Query -', ()=>{
    it('positive call', async ()=>{

        let url = 'https://api.spacex.land/graphql'
        await spec()
        .post(url)
        .withHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          })
        .withGraphQLQuery(
            `{
                launchesPast(limit: 10) {
                    mission_name
                    launch_date_local
                    launch_site {
                        site_name_long
                    }
                    links {
                        article_link
                        video_link
                    }
                }
            }`
        )
        .expectStatus(200)
    })
})
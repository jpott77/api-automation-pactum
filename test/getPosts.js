const { spec } = require('pactum');
const postSchema = require('./schema/postSchema')

describe('Get all posts', ()=>{
    it('verify correct response for valid get posts', async ()=>{
        await spec()
        .get('https://jsonplaceholder.typicode.com/posts')
        .expectStatus(200)
        .expectJsonSchema(postSchema)
    })
  })
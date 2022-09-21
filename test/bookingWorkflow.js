let bookingId = 0
const { spec } = require('pactum');
const bookingSchema = require('./schema/bookingSchema')

describe('Full Booking Path', ()=>{
    it('verify multistep API workflow', async () =>{
        let url = 'https://restful-booker.herokuapp.com/booking'
        
        let res = await spec()
        .post(url)
        .withHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        })
        .withJson({
        "firstname" : "Julia",
            "lastname" : "Brown",
            "totalprice" : 567,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2020-01-01",
                "checkout" : "2021-01-01"
            },
            "additionalneeds" : "Breakfast,Lunch"
        })
        .expectStatus(200)
        .expectJsonSchema(bookingSchema)

        bookingId = res.body.bookingid

        // Use Id to update booking details
        url = `https://restful-booker.herokuapp.com/booking/${bookingId}`
        await spec()
        .get(url)
        .withHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        .expectStatus(200)
        .expectBodyContains('Julia')
        .expectBodyContains('Brown')
        .expectBodyContains('Breakfast,Lunch')

        // Use Id to update booking details
        url = `https://restful-booker.herokuapp.com/booking/${bookingId}`

        await spec()
        .put(url)
        .withHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
        })
        .withJson({
            "firstname": "JuliaUpdate",
            "lastname": "Browns",
            "totalprice": 567,
            "depositpaid": true,
            "bookingdates": {
            "checkin": "2020-01-01",
            "checkout": "2021-01-01"
            },
            "additionalneeds": "Breakfast,Dinner"
        })
        .expectStatus(200)
        .expectBodyContains('JuliaUpdate')
        .expectBodyContains('Brown')
        .expectBodyContains('Breakfast,Dinner')
        })
})
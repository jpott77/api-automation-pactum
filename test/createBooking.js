const { spec } = require('pactum');
const bookingSchema = require('./schema/bookingSchema')

describe('Positive Booking Scenario -', ()=>{
  it('verify creating a sucessful booking', async () =>{
    let url = 'https://restful-booker.herokuapp.com/booking'

    await spec()
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
  })
})
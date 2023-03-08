const { spec} = require('pactum');

describe('Update Booking Scenario -', () => {
  it('verify sucessfully updating a booking', async () => {
    let url = 'https://restful-booker.herokuapp.com/booking/9083'

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

describe('Update Booking',() =>{
    it('Verify that the booking is not updated with an invalid token', async ()=>{
        let url = 'https://restful-booker.herokuapp.com/booking/76'

    await spec()
      .put(url)
      .withHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxM'
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
      .expectStatus(403)
      .expectBody('Forbidden')
    })

    it('Verify that the booking is not updated with an invalid body', async ()=>{
        let url = 'https://restful-booker.herokuapp.com/booking/76'

    await spec()
      .put(url)
      .withHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
      })
      .withJson({
        "lastname": "Browns",
        "totalprice": 567,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2020-01-01",
          "checkout": "2021-01-01"
        },
        "additionalneeds": "Breakfast,Dinner"
      })
      .expectStatus(400)
      .expectBody('Bad Request')
    })
})
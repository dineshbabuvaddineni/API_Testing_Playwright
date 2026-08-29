/*
Test : Create Booking
Request Type :Post
Request Body :Static
*/

import { test, expect } from '@playwright/test';

const BASE_URL="https://restful-booker.herokuapp.com";

test("Create booking with static data", async ({ request }) => {

    // Payload
    const requestPayload = {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    };

    //send the request
    const response= await request.post(`${BASE_URL}/booking`,{data:requestPayload});
    const responseBody=await response.json();

    //print the response
    console.log(responseBody);

    //Validate status code/response
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");

    //Validating response Body
    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody).toHaveProperty("booking");
    expect(responseBody.bookingid).toEqual(expect.any(Number));

    //Validate booking fields
    const booking=await responseBody.booking

    expect(booking).toMatchObject({
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    });

    expect(booking.bookingdates).toMatchObject({
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        })
});
/*
Test : Create Booking
Request Type :Post
Request Body :Static
*/

import { test, expect } from '@playwright/test';
import fs from 'fs';

const BASE_URL="https://restful-booker.herokuapp.com";

test("Create booking with JSON Data", async ({ request }) => {

    //Reading data from json
    const jsonFile="test_data/post_request_body.json";
    const requestPayload=JSON.parse(fs.readFileSync(jsonFile,'utf-8'));

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
        "firstname": requestPayload.firstname,
        "lastname": requestPayload.lastname,
        "totalprice": requestPayload.totalprice,
        "depositpaid": requestPayload.depositpaid,
        "bookingdates": {
            "checkin": requestPayload.bookingdates.checkin,
            "checkout": requestPayload.bookingdates.checkout
        },
        "additionalneeds": requestPayload.additionalneeds,
    });

    //validate booking dates
    expect(booking.bookingdates).toMatchObject({
            "checkin": requestPayload.bookingdates.checkin,
            "checkout": requestPayload.bookingdates.checkout
        })
});
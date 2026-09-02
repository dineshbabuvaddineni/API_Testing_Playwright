//Create booking --> booking id (post)
//booking id ---> get the booking (optional) (get)
//booking id + request payload(json) -----> partial updatethe booking(patch)
//booking id + request payload(json) ------> full update booking(put)
//booking id ---> delete the booking -->(delete)

import { test, expect, request } from "@playwright/test";
import fs from 'fs';

// Utility function to read JSON data from file
function readJson(filePath: string) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

const BASE_URL = "https://restful-booker.herokuapp.com"

test("Update Booking - Create, Get, and Updae a Booking Record", async ({ request }) => {

    //step:1: create a new booking using post request
    const createBookingData = readJson("./test_data/post_request_body.json");
    const createResponse = await request.post(`${BASE_URL}/booking`, { data: createBookingData });

    //Validate status code/response
    expect(createResponse.status()).toBe(200);
    expect(createResponse.statusText()).toBe("OK");

    const createdBooking = await createResponse.json();
    const bookingId = createdBooking.bookingid; //extracting bookingID from json response body
    console.log(bookingId);

    //step2: Get the created booking using GET request
    const getResponse = await request.get(`${BASE_URL}/booking/${bookingId}`);

    //Validate status code/response
    expect(getResponse.status()).toBe(200);
    expect(getResponse.statusText()).toBe("OK");

    const bookingDetails = await getResponse.json();
    console.log("Booking details before update:", bookingDetails);
    expect(getResponse.ok()).toBeTruthy();

    //Create token - this is request for put/patch/delete request
    const tokenData = readJson("./test_data/token_request_body.json"); //username ,password
    const tokenResponse = await request.post(`${BASE_URL}/auth`, { data: tokenData });

    //Validate status code/response
    expect(tokenResponse.status()).toBe(200);
    expect(tokenResponse.statusText()).toBe("OK");

    const tokenJson = await tokenResponse.json();
    const token = tokenJson.token
    console.log("Token generated:", token);

    //Step:3 Partial update the booking using PATCH request with token in headers
    const partial_updateData = readJson("./test_data/patch_request_body.json");
    const partial_updateResponse = await request.patch(`${BASE_URL}/booking/${bookingId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`,
        },
        data: partial_updateData,
    });

    //Validate status code/response
    expect(partial_updateResponse.status()).toBe(200);
    expect(partial_updateResponse.statusText()).toBe("OK");

    const partial_updatedBooking = await partial_updateResponse.json();
    console.log("partial update Booking successfully:", partial_updatedBooking);

    //Step-4 :Full update the booking using PUT request with token in headers
    const Full_updateData = readJson("./test_data/put_request_body.json");
    const updateResponse = await request.put(`${BASE_URL}/booking/${bookingId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`,
        },
        data: Full_updateData,
    });

    //Validate status code/response
    expect(updateResponse.status()).toBe(200);
    expect(updateResponse.statusText()).toBe("OK");

    const Full_updatedBooking = await updateResponse.json();
    console.log("partial update Booking successfully:", Full_updatedBooking);


    //Step5: Delete Booking
    const deleteResponse = await request.delete(`${BASE_URL}/booking/${bookingId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`,
    }
    });

    //Validate status code/response
    expect(deleteResponse.status()).toBe(201);
    expect(deleteResponse.statusText()).toBe("Created");

    console.log("Booking details are Deleted");

});
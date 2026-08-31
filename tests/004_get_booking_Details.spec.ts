import {test,expect} from 'playwright/test';

//https://restful-booker.herokuapp.com/booking/1

const BASE_URL="https://restful-booker.herokuapp.com";

test("GET Booking Details by ID -Path param",async({request})=>{

    //https://restful-booker.herokuapp.com/booking?firstname=Jim&lastname=Brown

    const bookingId=1
    const response=await request.get(`${BASE_URL}/booking/${bookingId}`);
    const responseBody=await response.json();
    console.log(responseBody);

    //validate status code/response
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK")

    //optionally validate expected fields if known
    expect(responseBody).toHaveProperty("firstname");
    expect(responseBody).toHaveProperty("lastname");



});

test("GET Booking Details by Name- Query Params",async({request})=>{

    //https://restful-booker.herokuapp.com/booking?firstname=Jim&lastname=Brown

    const firstname="Jim";
    const lastname="Brown";

    const response=await request.get(`${BASE_URL}/booking`,
        {
            params:{
                firstname,
                lastname
            }
        }
    );

    const responseBody=await response.json();
    console.log(responseBody);

    //validate status code/response
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");

    //verify booking id sould be a number and should be greeater than 0
    
    for(const item of responseBody){ //{bookingid:1062},
        expect(item).toHaveProperty("bookingid");
        expect(typeof item.bookingid).toBe("number");
        expect(item.bookingid).toBeGreaterThan(0);
        
    }

});
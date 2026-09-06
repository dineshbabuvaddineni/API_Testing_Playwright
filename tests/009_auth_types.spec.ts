import { test, expect } from '@playwright/test';
import {Buffer} from 'buffer';

import dotenv from 'dotenv';
dotenv.config(); //Load environment variables from .env file


test.describe('API Authentication Examples', () => {
  test('1. No Authentication', async ({ request }) => {
    
    // Step 1: Send GET request
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    // Step 2: Verify the response
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    //step3: Read Response body
    const responseBody=await response.json();
    console.log(responseBody);

    //step:4 Validate Response
    expect(responseBody.userId).toBe(1);
    expect(responseBody.id).toBe(1);
    expect(responseBody).toHaveProperty('title');
    expect(responseBody).toHaveProperty('body');
  });

  //Example2: Basic Auth
  //https://postman-echo.com/basic-auth
  //username:postman
  //password:password

  test('2. Basic Authentication', async({request})=>{
    const username=process.env.BASIC_AUTH_USERNAME;
    const password=process.env.BASIC_AUTH_PASSWORD;

    //this will convert data to encoded string format
    const base64Credentials=Buffer.from(`${username}:${password}`).toString('base64');
    console.log("Encoded String: ",base64Credentials); //JHt1c2VybmFtZX06JHtwYXNzd29yZH0=

    const response=await request.get('https://postman-echo.com/basic-auth',{
      headers:{
        'Authorization':`Basic ${base64Credentials}`
      }
    });

    expect(response.status()).toBe(200);
    const responseBody=await response.json();
    console.log(responseBody);
    expect(responseBody.authenticated).toBe(true);
  })
});
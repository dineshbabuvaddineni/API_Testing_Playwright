/*
API Mocking & Network interception Demo

https://demo.playwright.dev/api-mocking/


https://demo.playwright.dev/api-mocking/api/v1/fruits

*/

import {test, expect} from '@playwright/test';

test('Mocking Api Responnse',async({page})=>{
    //Step1: Intercept the API URL pattern before navigating
    //https://demo.playwright.dev/api-mocking/api/v1/fruits

    await page.route('**/api/v1/fruits',async(route)=>{
        const fakeresjson=[
            {name:'XYZ',id:1},
            {name:'ABC',id:2}
        ];

        //Step2: Fulfill the request with your mock data
        await route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify(fakeresjson) //convert java script object into json
        })
    })

    //Step3: Go to the page and verify the UI displays the mocked data
    await page.goto('https://demo.playwright.dev/api-mocking/');
    await page.waitForTimeout(3000);
    await expect(page.getByText('XYZ')).toBeVisible();
    await expect(page.getByText('ABC')).toBeVisible();

})

//Example2: Modify a live API response using API request
//we cannot mock directly API request

test('Modify API response',async({request})=>{

    // we canot directly mock api request
    const response=await request.get('https://demo.playwright.dev/api-mocking/api/v1/fruits');
    
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const fruits=await response.json();
    console.log('Fruits:',fruits);

})

//Example3: Modify a live API response using API request
test.only('Modify a live API response',async({page})=>{
    await page.route('**/api/v1/fruits',async(route)=>{
        const response=await route.fetch();
        let json=await response.json();
        console.log(json);

        //2. Append or patch the real data
        json.push({name:'XYZ',id:100});
        console.log(json);
        await page.waitForTimeout(3000);
  

        //3. Fulfill the route with the modified data
       await route.fulfill({
        response,
        json
       })
       
    });

    await page.goto('https://demo.playwright.dev/api-mocking');
    await expect(page.getByText('XYZ')).toBeVisible();
})

//Example 4 : Network Interception - Block specific image extensions

test('Blocking of images', async({page})=>{

    //Block the image request with specific extension .png .jpg .jpeg gif svg webp
    //**/*.{png,jpg,jpeg,gi,svg, webp}

    await page.route("**/*.{png,jpg,jpeg,gif,svg,webp}",async(route)=>{
        console.log(route.request().url());
        await route.abort();
    })

    await page.goto('https://demoblaze.com');
    //await page.goto('https://www.amazon.com/');
    

})
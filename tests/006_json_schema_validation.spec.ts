/*
Prerequisites:
Install the required packages:
    npm install ajv

AJV is used for JSON Schema validation.
AJV Stands for "Another JSON Schema Validator".

ajv.compile(schema) returns a validator function.
validate(data) checks if the response matches the schema
*/

import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

test("Schema validation", async ({ request }) => {

    //step1: send request and get the response
    const response = await request.get("https://mocktarget.apigee.net/json");
    const responsebody = await response.json();
    console.log(responsebody);

    //step2: define the schema
    const schema = {
        "type": "object",
        "properties": {
            "firstName": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "state": {
                "type": "string"
            }
        },
        "required": [
            "firstName",
            "lastName",
            "city",
            "state"
        ]
    }

    //step3: check response against schema
    const ajv = new Ajv(); //Initalize Ajv
    const validate = ajv.compile(schema); //returns a validator function
    const isValid = validate(responsebody); //checks if the response matches the schema 

    expect(isValid).toBeTruthy(); //assertion
    console.log("Schema validation passed!");

});

//Example 2: 
test("Validate json response with schema2", async ({ request }) => {
    //step1: send request and get the response
    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    const responsebody = await response.json();
    console.log(responsebody);

    //step2: define the schema
    const schema = {
        "type": "object",
        "properties": {
            "userId": {
                "type": "number"
            },
            "id": {
                "type": "number"
            },
            "title": {
                "type": "string"
            },
            "body": {
                "type": "string"
            }
        },
        "required": [
            "userId",
            "id",
            "title",
            "body"
        ]
    }

    //step3: check response against schema
    const ajv = new Ajv(); //Initalize Ajv
    const validate = ajv.compile(schema); //returns a validator function
    const isValid = validate(responsebody); //checks if the response matches the schema 

    expect(isValid).toBeTruthy(); //assertion
    console.log("Schema validation passed!");

});

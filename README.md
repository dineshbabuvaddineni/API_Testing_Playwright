# API Testing with Playwright

Personal learning repository for practicing **API test automation using Playwright**. This repo documents my hands-on progress as I explore different aspects of API testing.

## 🎯 Purpose

This project is built to strengthen my skills in API automation testing, covering real-world scenarios that are commonly tested in professional QA/SDET roles.

## 📚 Topics I'm Practicing

### 1. HTTP Requests / Methods
- [ ] GET
- [ ] POST
- [ ] PUT
- [ ] PATCH
- [ ] DELETE

### 2. Schema Testing
- [ ] Validating response structure against JSON schema
- [ ] Handling optional vs required fields
- [ ] Data type validation

### 3. File Upload & Download
- [ ] Uploading files via API (multipart/form-data)
- [ ] Downloading files and verifying content
- [ ] Validating file size/type after upload

### 4. Mocking & Network Interception
- [ ] Intercepting API requests/responses
- [ ] Mocking API responses for isolated testing
- [ ] Simulating error responses (4xx, 5xx)
- [ ] Delaying/throttling network responses

### 5. API Authentication
- [ ] Basic Authentication
- [ ] Bearer Token / JWT
- [ ] OAuth 2.0
- [ ] API Key-based authentication

### 6. Response Validations
- [ ] Status code validation
- [ ] Response body/payload validation
- [ ] Header validation
- [ ] Response time/performance checks

## 🧩 Additional Topics to Explore

- [ ] Data-driven testing (parameterized tests with multiple datasets)
- [ ] Environment/config management (dev, staging, prod)
- [ ] Test reporting (HTML/Allure reports)
- [ ] CI/CD integration (GitHub Actions)
- [ ] Logging request/response for debugging
- [ ] Retry logic for flaky tests
- [ ] Parallel test execution
- [ ] Chaining API requests (using response of one API in another)
- [ ] Rate limiting / throttling scenarios
- [ ] Error handling and negative testing

## 🛠️ Tech Stack

- **Framework:** Playwright
- **Language:** _(JavaScript / TypeScript / Python — update as applicable)_
- **Assertions:** Playwright's built-in expect / custom assertions
- **Schema Validation:** _(e.g., Ajv, Joi — update as applicable)_

## 📂 Project Structure

```
API_Testing_Playwright/
├── tests/
│   ├── http-methods/
│   ├── schema-validation/
│   ├── file-upload-download/
│   ├── mocking-interception/
│   ├── authentication/
│   └── response-validation/
├── utils/
├── fixtures/
├── config/
└── README.md
```

## 🚀 Progress Log

| Date | Topic Completed | Notes |
|------|-----------------|-------|
| 29-08-2026|API Testing Basics |1.  Explored Restful Booker: https://restful-booker.herokuapp.com/apidoc/index.html <br> 2. Covered POST request creation <br> 3. Applied assertions on response status and body <br> 4. Validated `bookingid` as dynamic Number type using `expect.any()`<br> 5.Validated response fields using `toMatchObject` for partial matching |
| 30-08-2026|POST Requests with Static & JSON Data |1. Test 001: Created booking with hardcoded static data<br> 2. Test 002: Implemented JSON file reading using `fs` module <br> 3. Created `test_data/post_request_body.json` for external data management <br> 4. Validated nested objects and arrays in response <br> 5. Implemented reusable data-driven approach |
| 31-08-2026|Dynamic Data Generation with Faker.js |1. Test 003.1: Explored Faker.js library for generating realistic test data <br> 2. Installed @faker-js/faker and luxon libraries <br> 3. Test 003.2: Implemented dynamic booking creation with faker-generated data <br> 4. Generated dynamic values: names, numbers, boolean, dates <br> 5. Practiced date manipulation using DateTime from luxon |
| 01-09-2026|GET Requests & Query Parameters |1. Test 004: Implemented GET booking details by ID (path parameter) <br> 2. Implemented GET booking search by name (query parameters) <br> 3. Practiced parameterized requests using `params` object <br> 4. Validated response arrays and performed loop-based assertions <br> 5. Verified data type validation for numeric fields |
| 03-09-2026|PATCH, PUT & DELETE Requests with Token Auth |1. Test 005: Implemented full booking update lifecycle — Create → Get → Patch → Put → Delete <br> 2. Generated auth token via `/auth` endpoint using `token_request_body.json` <br> 3. Passed token as `Cookie` header for authenticated PATCH/PUT/DELETE requests <br> 4. Test 005a: Partial update using PATCH with `patch_request_body.json` <br> 5. Test 005b: Full update using PUT with `put_request_body.json` <br> 6. Test 005c: Deleted booking and validated `201 Created` status code (restful-booker's non-standard DELETE response) <br> 7. Practiced chaining multiple API calls within a single test (booking ID + token reused across requests) |

## 📌 How to Run Tests

```bash
npm install
npx playwright test
```

## 📖 Learning Goals

By the end of this repo, I aim to confidently:
- Automate end-to-end API test suites
- Handle authentication flows in automated tests
- Validate complex API responses and schemas
- Mock and intercept network calls for reliable, isolated tests
- Build a scalable, maintainable API test framework

---

*This is a living document — updated as I progress through each topic.*

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
| | | |

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

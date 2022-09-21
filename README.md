### Api Automation with PactumJS
Pactum API Test Automation Suite for TestBash UK

### Dependencies
1. NodeJS
2. NPM

## Getting Started
Clone the repository & install dependencies
```sh
$ git clone 
$ cd api-automation-pactum
$ npm install
```

# Folder Structure
- **data:** Data files with test data used in the tests. *E.g. [credentials, error messages, etc.]*
- **test:** Test files which include the actual tests.
- **test/schema:** Schema files that are used for validation in the tests.

# Executing tests

## Execute all tests
`npm test`
## Execute tests by test file
examples

`npm run test --spec test/createBooking.js`

`npm run test --spec test/updateBooking.js`
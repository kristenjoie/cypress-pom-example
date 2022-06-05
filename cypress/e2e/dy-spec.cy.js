/**
 * Specs to demonstrate how we can use fixtures to create dynamic tests
 */

import { queryingPage } from "../support/pages/querying.page"

// import fixture file
const suites = require('../fixtures/dynamic.json')

describe('Demo Fixture Test Data', () => {
  // from the fixture file, only select the one with testsuiteID defined on cypress.config.js
  suites.forEach((suite) => {
    if (suite.testsuiteID === Cypress.env('testsuiteID')) {

      context(`Test for testsuite '${suite.testsuiteID}'`, () => {

        // for each item for the test suite, create a test case with associated data set
        suite.data.forEach((testcase) => {
          it(`login for user ${testcase.name}`, () => {
            queryingPage.visit()
            queryingPage.getNameField().type(testcase.name)
            queryingPage.getMailField().type(testcase.mail)
            queryingPage.getPwdField().type(testcase.pwd)
          })
        })
      
      })
    
    }

  })
})

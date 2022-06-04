/**
 * Specs to demonstrate how we can use page objects
 */

import { actionsPage } from "../support/pages/actions.page"
import { apiPage } from "../support/pages/api.page"
import { homePage } from "../support/pages/home.page"
import { queryingPage } from "../support/pages/querying.page"


describe('Demo Page Object Specs', () => {

  it('visit home page', () => {
    homePage.visit()
    homePage.getTitle().should('have.text', 'Kitchen Sink')
  })

  it('navigate using UI', () => {
    homePage.visit()

    homePage.gotoMenu('Actions')                            // Thanks to the inheritance of class BasePage, we use function gotoMenu()
    actionsPage.getEmailField().should('be.visible')

    actionsPage.gotoMenu('Querying')
    queryingPage.getQueryBtn().should('contain', 'Button')
  })

  it('visit others page directly', () => {
    apiPage.visit()                                         // Because each page override the visit() function, we can use it directly
    apiPage.getCookiesBtn().should('have.attr', 'href')
      .and('contains', 'on.cypress.io')
  })

})

import BasePage from "./base.page";

class APIPage extends BasePage {

    visit() {
        super.visit('/cypress-api')
    }

    getCookiesBtn() {
        return cy.get('#Cookies\\.debug > a')
    }
}

export const apiPage = new APIPage()

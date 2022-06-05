import BasePage from "./base.page";

class QueryingPage extends BasePage {
    visit() {
        super.visit('/commands/querying')
    }

    getQueryBtn() {
        return cy.get('#query-btn')
    }

    getNameField() {
        return cy.get('#inputName')
    }

    getMailField() {
        return cy.get('#inputEmail')
    }

    getPwdField() {
        return cy.get('#inputPassword')
    }
}

export const queryingPage = new QueryingPage()

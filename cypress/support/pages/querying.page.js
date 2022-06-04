import BasePage from "./base.page";

class QueryingPage extends BasePage {
    visit() {
        super.visit('/commands/querying')
    }

    getQueryBtn() {
        return cy.get('#query-btn')
    }
}

export const queryingPage = new QueryingPage()

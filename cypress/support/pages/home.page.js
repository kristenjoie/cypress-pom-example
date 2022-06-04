import BasePage from "./base.page";

class HomePage extends BasePage {
    getTitle() {
        return cy.get('h1')
    }
}

export const homePage = new HomePage()

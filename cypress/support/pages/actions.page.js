import BasePage from "./base.page";

class ActionsPage extends BasePage {
    visit() {
        super.visit('/commands/actions')
    }
    getEmailField() {
        return cy.get('.action-email')
    }

    getSubmitFiled() {
        return cy.get('.action-form')
    }
}

export const actionsPage = new ActionsPage()

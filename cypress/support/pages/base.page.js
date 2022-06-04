class BasePage {

    visit(url= "") {
        // can add action here : for example clear/set cookies
        cy.visit(`${Cypress.env('url')}${url}`)
    }

    getHomeBtn() {
        return cy.get('.navbar-brand')
    }

    getCommnandsMenuBtn() {
        return cy.get('.dropdown-toggle')
    }

    getMenuSubBtn(index) {
        return cy.get(`.dropdown-menu > :nth-child(${index}) > a`)
    }

    getApiBtn() {
        return cy.get('#navbar > :nth-child(1) > :nth-child(3) > a')
    }

    gotoMenu(menu) {
        switch (menu) {
            case 'Querying':
                this.getCommnandsMenuBtn().click()
                this.getMenuSubBtn(1).click()
                break;
            case 'Actions':
                this.getCommnandsMenuBtn().click()
                this.getMenuSubBtn(3).click()
                break;
            case 'Waiting':
                this.getCommnandsMenuBtn().click()
                this.getMenuSubBtn(12).click()
                break;
            case 'API':
                this.getApiBtn().click()
                break;
            default:
                break;
        }
    }

    getGithubBtn() {
        return cy.get('.pull-right > li > a')
    }
}

export default BasePage;
describe('Login', () => {
    beforeEach(() => {
        cy.openWebPage()
        cy.fixture('users').as('user')
        cy.accessLoginPage()
    });
    
    it.only('Login with valid credentials', function () {
        cy.fillLoginFields(this.user.validUser)
        cy.wait(2000)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span')
         .click()
    })

})
describe('User Login', () => {
    beforeEach(() => {
        cy.openWebPage()
        cy.fixture('generatedUser').as('user');
        cy.accessLoginPage()
    });
    
    it('Login with valid credentials', function () {
        cy.fillLoginFields(this.user)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span')
         .click()
    })

})
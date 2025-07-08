describe('Login', () => {
    beforeEach(() => {
        cy.openWebPage()
        cy.fixture('users').as('user')
        cy.accessLoginPage()
    });
    
    it.only('Login with valid credentials', function () {
        // Wait 'forgot password' appears and click
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span')
            .should('exist')
            .click()

        // Wait the text field appears, input data and validates of it was typed correctly
        cy.get('#email_address').type(this.user.validUser.email)
            .should('exist')
            .should('have.value',this.user.validUser.email )

        // Click on 'Reset My Password' button and validates if the behavior is correct
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-success > div') 
            .should('exist')   
            .should('have.text','If there is an account associated with joao.silva6667@example.com you will receive an email with a link to reset your password.')
    })

})
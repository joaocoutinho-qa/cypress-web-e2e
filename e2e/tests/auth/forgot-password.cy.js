

describe('Forgot Password', () => {
    beforeEach(() => {
        cy.openWebPage()
        cy.fixture('generatedUser').as('user')
        cy.accessLoginPage()
    });
    
    it('Validates the forgot password flow', function () {
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span')
            .should('exist')                              // Wait 'forgot password' page appears
            .click()                                      // Clicks on 'Forgot password' button
        cy.get('#email_address')  
            .should('exist')                              // Wait the text field appears, input data and validates of it was typed correctly
            .type(this.user.email)                        // type the user email
            .should('have.value',this.user.email )        // Validate if the email was typed correctly
        
        const expectedText = `If there is an account associated with ${this.user.email} you will receive an email with a link to reset your password.`;
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-success > div', {timeout: 30000}) // Wait message success appear
            .should('have.text', expectedText)             // Validates if the text is correct
    })

})
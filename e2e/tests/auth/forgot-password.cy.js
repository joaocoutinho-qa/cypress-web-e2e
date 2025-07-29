describe('Forgot Password', () => {
    beforeEach(() => {
        cy.openWebPage()
        cy.fixture('generatedUser').as('user')
        cy.accessLoginPage()
    });
    
    it('Validates the forgot password flow', function () {
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span')
            .should('exist')                              
            .click()                                      
            
        cy.get('#email_address')  
            .should('exist')                              
            .type(this.user.email)                        
            .should('have.value',this.user.email )        
        
        const expectedText = `If there is an account associated with ${this.user.email} you will receive an email with a link to reset your password.`;
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-success > div', {timeout: 30000}) 
            .should('have.text', expectedText)             
    })

})
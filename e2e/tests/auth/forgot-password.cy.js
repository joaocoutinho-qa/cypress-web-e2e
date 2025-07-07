describe('Login', () => {
    beforeEach(() => {
        cy.openWebPage()
        cy.fixture('users').as('user')
        cy.accessLoginPage()
    });
    
    it.only('Login with valid credentials', function () {
        //esperar o botão 'forgot password' aparecer e depois clicar
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span')
            .should('exist')
            .click()

        //esperar o campo de texto 'Email' aparecer, inserir os dados e validar se for digitado corretamente
        cy.get('#email_address').type(this.user.validUser.email)
            .should('exist')
            .should('have.value',this.user.validUser.email )
        // clicar no botão 'Reset My Password'e validar se o comportamento está ok
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-success > div') 
            .should('exist')   
            .should('have.text','If there is an account associated with joao.silva6667@example.com you will receive an email with a link to reset your password.')
    })

})
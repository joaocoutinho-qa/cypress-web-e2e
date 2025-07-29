const { validUser } = require('../../../fixtures/users')

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
        cy.get(':nth-child(2) > .greet > .logged-in')
            .should('have.text','Welcome, João Silva 356!')
    })

    it('Login with invalid email', function (){
        const { invalidEmail } = require('../../../fixtures/users')
        cy.fillLoginFields(invalidEmail)   // test invalid email
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get('#email-error')
           .should('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).')
        })

    it('Login with invalid password', function () {
        const { invalidPsw } = require('../../../fixtures/users')
        cy.fillLoginFields(invalidPsw)     // test invalid password
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get('.message-error', {timeout: 15000})
            .should('contain','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
})
const { validUser } = require('../../../fixtures/users')

describe ('Create Account',() => {                       
    beforeEach(() => {
        cy.openWebPage()
        cy.accessCreateAccountTab()  // access the create account tab
    });

    it('create an account with valid credentials', function () { 
        cy.fillCreateAccountFields(validUser)
        cy.writeFile('fixtures/generatedUser.json', validUser)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').first().click()
        cy.get('.message-success > div',{timeout: 30000})
            .should('contain','Thank you for registering with Main Website Store.')

        cy.get('.box-content > p')
            .should('exist')
            .should('contain', validUser.firstName)
            .should('contain', validUser.lastName)
    })

    it('try to create an account that already exists', function () { 
        cy.fillCreateAccountFields(validUser)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').first().click()
        cy.get('.message-error > div').should('have.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    })

    it('create an account with invalid credentials', function () { 
        const { invalidUser } = require('../../../fixtures/users')
        cy.fillCreateAccountFields(invalidUser)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').first().click()
        cy.get('#email_address-error').should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')
    })
})

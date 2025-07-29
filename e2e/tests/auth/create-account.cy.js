const { validUser, invalidUser, invalidPsw, invalidEmail} = require('../../../fixtures/users')

describe ('Create Account',() => {                       
    beforeEach(() => {
        cy.openWebPage()
        cy.accessCreateAccountTab()  
    });

    it('create an account with valid auth', function () { 
        cy.fillCreateAccountFields(validUser)
        cy.clickCreateAccountButton()
        cy.writeFile('fixtures/generatedUser.json', validUser)
        cy.validateCreateAccountSucess(validUser)
    })

    it('create an account that already exists', function () { 
        cy.fillCreateAccountFields(validUser)
        cy.clickCreateAccountButton()
        cy.checkMessageAccountThatAlreadyExists() 
    })

    it('create an account with invalid auth', function () { 
        cy.fillCreateAccountFields(invalidUser)
        cy.clickCreateAccountButton()
        cy.checkMessageInvalidCrendentials()
    })

    it.only('create an account with invalid psw', function () { 
        cy.fillCreateAccountFields(invalidPsw)
        cy.clickCreateAccountButton()
        cy.checkMessageInvalidPsw()
    })

    it('create an account with invalid email', function () { 
        cy.fillCreateAccountFields(invalidEmail)
        cy.clickCreateAccountButton()
        cy.checkMessageInvalidCrendentials()
    })
})

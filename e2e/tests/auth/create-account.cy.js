const { validUser, invalidUser, invalidPsw, invalidEmail} = require('../../../fixtures/users')

describe ('Create Account',() => {                       
    beforeEach(() => {
        cy.openWebPage()
        cy.accessCreateAccountTab()  
    });

    it('should create an account with valid credentials', function () { 
        cy.fillCreateAccountFields(validUser)
        cy.clickCreateAccountButton()
        cy.writeFile('fixtures/generatedUser.json', validUser)
        cy.validateCreateAccountSucess(validUser)
    })

    it('should try to create an account that already exists', function () { 
        cy.fillCreateAccountFields(validUser)
        cy.clickCreateAccountButton()
        cy.checkMessageAccountThatAlreadyExists() 
    })

    it('should create an account with invalid credentials', function () { 
        cy.fillCreateAccountFields(invalidUser)
        cy.clickCreateAccountButton()
        cy.checkMessageInvalidCrendentials()
    })

    it('should create an account with invalid password', function () { 
        cy.fillCreateAccountFields(invalidPsw)
        cy.clickCreateAccountButton()
        cy.checkMessageInvalidCrendentials()
    })

    it('should create an account with invalid email', function () { 
        cy.fillCreateAccountFields(invalidEmail)
        cy.clickCreateAccountButton()
        cy.checkMessageInvalidCrendentials()
    })
})

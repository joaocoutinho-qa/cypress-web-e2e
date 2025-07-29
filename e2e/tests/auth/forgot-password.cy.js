import forgotPasswordPage from "../../../support/pageObjects/forgotPasswordPage"

describe('Forgot Password', () => {
    beforeEach(() => {
        cy.openWebPage()
        cy.fixture('generatedUser').as('user')
        cy.accessLoginPage()
    })
    
    it.only('Validates the forgot password flow', function () {
       forgotPasswordPage.clickForgotPasswordLink()
       forgotPasswordPage.fillEmailField(this.user.email)
       forgotPasswordPage.submitResetPasswordRequest()
       forgotPasswordPage.validateSuccessMessage(this.user.email)
    })

})
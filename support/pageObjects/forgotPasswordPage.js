class ForgotPasswordPage {
  clickForgotPasswordLink() {
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span')
      .should('exist')
      .click()
  }

  fillEmailField(email) {
    cy.get('#email_address')
      .should('exist')
      .type(email)
      .should('have.value', email)
  }

  submitResetPasswordRequest() {
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
  }

  validateSuccessMessage(email) {
    const expectedText = `If there is an account associated with ${email} you will receive an email with a link to reset your password.`
    cy.get('.message-success > div', { timeout: 30000 })
      .should('have.text', expectedText)
  }
}

export default new ForgotPasswordPage();

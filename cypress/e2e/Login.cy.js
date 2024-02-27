describe('Login', () => {
    it('Login', () => {
      cy.visit(' https://magento.softwaretestingboard.com/') // Launching the Website
      cy.get('.panel > .header > .authorization-link > a').click() //clicking on Sign In
      cy.get('#email').type("tanvir60131@gmail.com") // typing username
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass')
      .type("Tanvir131") //typing password
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2')
      .click() //Clicking on sign in

      cy.get(':nth-child(2) > .greet > .logged-in').should('have.text','Welcome, Tanvir Ahmed!') //verifying the login

    })
  })
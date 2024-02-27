describe('Add product to Cart', () => {
    it('Adding Fusion Bacpack to Cart', () => {
      cy.visit(' https://magento.softwaretestingboard.com/') // Launching the Website

      cy.get('.product-items > :nth-child(1)').click() //Clicking on the product

      cy.get('#option-label-size-143-item-167').click() //selecting size

      cy.get('#option-label-color-93-item-56').click() // selecting color

      cy.get('#product-addtocart-button').click() // Clicking on add to cart

      
      cy.get('.showcart > .counter').should('be.visible')  //Cart item is visible
 

    })
  })
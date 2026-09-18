describe('Place Order', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    
    beforeEach(() => {
        cy.fixture('products').as('products');
        cy.fixture('checkoutData').as('checkoutData');
        cy.login(username, password); 
    });    
      
    const addToCartAndGoToCheckout = (index) => {
        cy.get('@products').then((products) => {
          cy.addProductToCart(products[index].name);
          cy.goToCheckout();
        });
    };
  it('should allow user to place an order successfully', () => {
    addToCartAndGoToCheckout(0);
    cy.get('@checkoutData').then((checkoutData) => {
      cy.enterCustomerDetailsAndContinue(
        checkoutData[0].firstName,
        checkoutData[0].lastName,
        checkoutData[0].postalCode
      );
    });
    cy.verifyCheckoutPage();
  });
});
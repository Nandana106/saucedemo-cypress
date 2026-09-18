import CheckoutPage from '../../pages/CheckoutPage';
describe('Checkout Details', () => {
  const checkoutPage = new CheckoutPage();
  const username = Cypress.env('username');
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.fixture('checkoutData').as('checkoutData');
    cy.fixture('products').as('products');
    cy.login(username, password); 
  });    
  
  const addToCartAndGoToCheckout = (index) => {
    cy.get('@products').then((products) => {
      cy.addProductToCart(products[index].name);
      cy.goToCheckout();
    });
  };

  it('should allow user to enter valid customer details', () => {
    addToCartAndGoToCheckout(0);
    cy.get('@checkoutData').then((checkoutData) => {
      cy.enterCustomerDetailsAndContinue(
        checkoutData[0].firstName,
        checkoutData[0].lastName,
        checkoutData[0].postalCode
      );
    });
  });

  it('should test cancel button functionality', () => {
    addToCartAndGoToCheckout(1);
    cy.get('@checkoutData').then((checkoutData) => {
      cy.enterCustomerDetailsAndContinue(
        checkoutData[0].firstName,
        checkoutData[0].lastName,
        checkoutData[0].postalCode
      );
    });
    checkoutPage.clickCancel();
    cy.url().should('include', '/inventory.html');
  });

  it('should display error when first name is missing and test cancel functionality', () => {
    addToCartAndGoToCheckout(2);
    cy.get('@checkoutData').then((checkoutData) => {
      cy.enterCustomerDetailsAndContinue(
        '',
        checkoutData[0].lastName,
        checkoutData[0].postalCode
      );
    });
    checkoutPage.clickContinue();
    checkoutPage.verifyErrorMessage('Error: First Name is required');
    checkoutPage.clickCancel();
    cy.url().should('include', '/cart.html');
  });

  it('should display error when last name is missing', () => {
    addToCartAndGoToCheckout(3);
    cy.get('@checkoutData').then((checkoutData) => {
      cy.enterCustomerDetailsAndContinue(
        checkoutData[0].firstName,
        '',
        checkoutData[0].postalCode
      );
    });
    checkoutPage.clickContinue();
    checkoutPage.verifyErrorMessage('Error: Last Name is required');
  });

  it('should display error when postal code is missing', () => {
    addToCartAndGoToCheckout(4);
    cy.get('@checkoutData').then((checkoutData) => {
      cy.enterCustomerDetailsAndContinue(
        checkoutData[0].firstName,
        checkoutData[0].lastName,
        ''
      );
    });
    checkoutPage.clickContinue();
    checkoutPage.verifyErrorMessage('Error: Postal Code is required');
  });

  it('should display error when all fields are empty', () => {
    addToCartAndGoToCheckout(5);
    checkoutPage.clickContinue();
    checkoutPage.verifyErrorMessage('Error: First Name is required');
  });
});
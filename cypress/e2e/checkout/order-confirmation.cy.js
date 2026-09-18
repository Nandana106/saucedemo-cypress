import CheckoutPage from '../../pages/CheckoutPage';
import checkoutData from '../../fixtures/checkoutData.json';

describe('Order Confirmation Page', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    
    beforeEach(() => {
        cy.fixture('products').as('products');
        cy.login(username, password); 
    });    
      
    const addToCartAndGoToCheckout = (index) => {
        cy.get('@products').then((products) => {
          cy.addProductToCart(products[index].name);
          cy.goToCheckout();
        });
    };

      checkoutData.forEach((customer) => {
        it(`should display the order confirmation page correctly for ${customer.firstName}`, () => {
          const checkoutPage = new CheckoutPage();
          addToCartAndGoToCheckout(0);
          cy.enterCustomerDetailsAndContinue(
            customer.firstName,
            customer.lastName,
            customer.postalCode
          );
          cy.verifyCheckoutPage();
          checkoutPage.verifyConfirmationPage();
        });
      });

    it('should allow user to go back home from the confirmation page', () => {
      const checkoutPage = new CheckoutPage();
      addToCartAndGoToCheckout(0);
      cy.enterCustomerDetailsAndContinue(
        checkoutData[0].firstName,
        checkoutData[0].lastName,
        checkoutData[0].postalCode
      );
      cy.verifyCheckoutPage();
      checkoutPage.clickBackHome();
    });

    it('should allow user to generate PDF from the confirmation page', () => {
      const checkoutPage = new CheckoutPage();
      addToCartAndGoToCheckout(0);
      cy.enterCustomerDetailsAndContinue(
        checkoutData[0].firstName,
        checkoutData[0].lastName,
        checkoutData[0].postalCode
      );
      cy.verifyCheckoutPage();
      checkoutPage.clickGeneratePdf();
    });
});
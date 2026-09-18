import CartPage from "./CartPage";

export default class CheckoutPage {
  elements =  {
    firstNameInput: '[data-test="firstName"]',
    lastNameInput: '[data-test="lastName"]',
    postalCodeInput: '[data-test="postalCode"]',
    continueButton: '[data-test="continue"]',
    cancelButton: '[data-test="cancel"]',
    errorMessage: '.error-message-container',
    title: '[data-test="title"]',
    checkoutSummaryContainer: '[data-test="checkout-summary-container"]',
    paymentInfo: '[data-test="payment-info-value"]',
    shippingInfo: '[data-test="shipping-info-value"]',
    itemTotal: '[data-test="subtotal-label"]',
    tax: '[data-test="tax-label"]',
    total: '[data-test="total-label"]',
    finishButton: '[data-test="finish"]',
    confirmationImage: '[data-test="pony-express"]',
    confirmationHeader: '[data-test="complete-header"]',
    confirmationText: '[data-test="complete-text"]',
    generatePdfButton: '[data-test="generate-pdf-order"]',
    backHomeButton: '[data-test="back-to-products"]'
  }

  enterFirstName(firstName) {
    cy.get(this.elements.firstNameInput).clear();
    if(firstName) {
      cy.get(this.elements.firstNameInput).type(firstName);
    }
  }

  enterLastName(lastName) {
    cy.get(this.elements.lastNameInput).clear();
    if(lastName) {
      cy.get(this.elements.lastNameInput).type(lastName);
    }
  }

  enterPostalCode(postalCode) {
    cy.get(this.elements.postalCodeInput).clear();
    if(postalCode) {
      cy.get(this.elements.postalCodeInput).type(postalCode);
    }
  }

  getErrorMessage() {
    return cy.get(this.elements.errorMessage);
  }

  verifyErrorMessage(message) {
    this.getErrorMessage().should('be.visible').and('contain', message);
  }

  getContinueButton() {
    return cy.get(this.elements.continueButton);
  }

  clickContinue() {
    this.getContinueButton().click();
  }

  getCheckoutTitle() {
    return cy.get(this.elements.title);
  }

  getCheckoutSummaryContainer() {
    cy.url().should('include', '/checkout-step-two.html');
    return cy.get(this.elements.checkoutSummaryContainer);
  }

  getPaymentInfo() {
    return cy.get(this.elements.paymentInfo);
  }

  getShippingInfo() {
    return cy.get(this.elements.shippingInfo);
  }

  getItemTotal() {
    return cy.get(this.elements.itemTotal);
  }

  getTax() {
    return cy.get(this.elements.tax);
  }

  getTotal() {
    return cy.get(this.elements.total);
  }

  verifyItemTotal() {
    const cartPage = new CartPage();
    let itemTotal = 0;
    cartPage.getCartItemPrice().each(($item) => {
      cy.wrap($item).invoke('text').then((priceText) => {
        const price = parseFloat(priceText.replace('$', ''));
        itemTotal += price;
      });
    });
    this.getItemTotal().invoke('text').then((itemTotalText) => {
      expect(itemTotalText).to.eq(`Item total: $${itemTotal}`);
    });
  }

  verifyPriceCalculation() {
    this.getItemTotal().invoke('text').then((itemTotalText) => {
      const itemTotal = parseFloat(itemTotalText.replace('Item total: $', ''));
      this.getTax().invoke('text').then((taxText) => {
        const tax = parseFloat(taxText.replace('Tax: $', ''));
        this.getTotal().invoke('text').then((totalText) => {
          const total = parseFloat(totalText.replace('Total: $', ''));
          expect(total).to.eq(itemTotal + tax);
        });
      });
    });
  }

  verifyCheckoutOverviewAndFinish() {
    this.getCheckoutSummaryContainer().should('be.visible');
    this.getCheckoutTitle().should('be.visible').and('have.text', 'Checkout: Overview');
    this.getPaymentInfo().should('be.visible').and('have.text', 'SauceCard #31337');
    this.getShippingInfo().should('be.visible').and('have.text', 'Free Pony Express Delivery!');
    this.getItemTotal().should('be.visible').and('contain', 'Item total: $');
    this.getTax().should('be.visible').and('contain', 'Tax: $');
    this.getTotal().should('be.visible').and('contain', 'Total: $');
    this.verifyItemTotal();
    this.verifyPriceCalculation();
    this.clickFinish();
  }

  getFinishButton() {
    return cy.get(this.elements.finishButton);
  }

  clickFinish() {
    this.getFinishButton().click();
  }

  getConfirmationImage() {
    return cy.get(this.elements.confirmationImage);
  }

  getConfirmationHeader() {
    return cy.get(this.elements.confirmationHeader);
  }

  getConfirmationText() {
    return cy.get(this.elements.confirmationText);
  }

  verifyConfirmationPage() {
    cy.url().should('include', '/checkout-complete.html');
    this.getCheckoutTitle().should('be.visible').and('have.text', 'Checkout: Complete!');
    this.getConfirmationImage().should('be.visible');
    this.getConfirmationHeader().should('be.visible').and('have.text', 'Thank you for your order!');
    this.getConfirmationText().should('be.visible').and('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }

  getGeneratePdfButton() {
    return cy.get(this.elements.generatePdfButton);
  }

  clickGeneratePdf() {
    this.getGeneratePdfButton().click();
  }

  getBackHomeButton() {
    return cy.get(this.elements.backHomeButton);
  }

  clickBackHome() {
    this.getBackHomeButton().click();
    cy.url().should('include', '/inventory.html');
  }

  getCancelButton() {
    return cy.get(this.elements.cancelButton);
  }

  clickCancel() {
    this.getCancelButton().click();
  }
}
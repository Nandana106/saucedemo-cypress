// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

Cypress.Commands.add('login',(username,password)=>{
    const loginPage = new LoginPage();
    // cy.session([username, password],() => {
        loginPage.login(username,password);
        // cy.url().should('include', '/inventory.html');
    // },
    // // 2. Validate the existing session
    // {
    //     validate() {
    //         cy.visit('/inventory.html');
    //         cy.url().should('include', '/inventory.html');
    //     }
    // });
});

Cypress.Commands.add('addAllProductsToCart', () => {
    cy.fixture('products').as('products');
    const productsPage = new ProductsPage();
    cy.get('@products').then((products) => {  
        productsPage.getProductsPage().should('be.visible').should('have.length', products.length);
        productsPage.getAddProductButton().each(($btn) => {
            cy.wrap($btn).click();
        }); 
    });
});

Cypress.Commands.add('addProductToCart', (productName) => {
    const productsPage = new ProductsPage();
    productsPage.getProductsPage().contains(productName).parent().parent().find('button').click();
});

Cypress.Commands.add('goToCheckout', () => {
    const cartPage = new CartPage();
    const productsPage = new ProductsPage();
    productsPage.getCartButton().click();
    cartPage.clickCheckout();
});

Cypress.Commands.add('enterCustomerDetailsAndContinue', (firstName,lastName,postalCode) => {
    const checkoutPage = new CheckoutPage();
    checkoutPage.getCheckoutTitle().should('be.visible').and('contain', 'Checkout: Your Information');
    checkoutPage.enterFirstName(firstName);
    checkoutPage.enterLastName(lastName);
    checkoutPage.enterPostalCode(postalCode);
    checkoutPage.clickContinue();
});

Cypress.Commands.add('verifyCheckoutPage',()=>{
    const checkoutPage = new CheckoutPage();
    const cartPage = new CartPage();
    const productsPage = new ProductsPage();
    cy.fixture('products').as('products');
    cy.get('@products').then((products) => {
        cartPage.getCartQuantity().should('be.visible').and('have.text', '1');
        cartPage.getCartItemTitle().should('be.visible').and('have.text', products[0].name);
        cartPage.getCartItemDescription().should('be.visible').and('have.text', products[0].description);
        cartPage.getCartItemPrice().should('be.visible').and('have.text', products[0].price);
    });
    checkoutPage.verifyCheckoutOverviewAndFinish();
    productsPage.getCartBadge().should('not.exist');
});
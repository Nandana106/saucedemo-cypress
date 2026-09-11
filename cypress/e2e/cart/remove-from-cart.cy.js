import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';

describe('Remove Product from Cart', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    it('should remove product from cart', () => {
        cy.fixture('products').as('products');
        loginPage.login(username, password);
        cy.get('@products').then((products) => {  
            productsPage.getProductsPage().should('be.visible').should('have.length', products.length);
            productsPage.getAddProductButton().each(($btn) => {
                cy.wrap($btn).click();
            });
            productsPage.clickCartButton();
            cartPage.getCartItems().should('have.length', products.length);
            cartPage.getRemoveProduct().each(($btn) => {
                cy.wrap($btn).click();
            });
            cartPage.getCartItems().should('have.length', 0);
        });
    });
});
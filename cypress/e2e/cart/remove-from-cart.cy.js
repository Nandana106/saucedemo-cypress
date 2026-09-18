import CartPage from '../../pages/CartPage';
import ProductsPage from '../../pages/ProductsPage';

describe('Remove Product from Cart', () => {
    const cartPage = new CartPage();
    const productsPage = new ProductsPage();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    it('should remove product from cart', () => {   
        cy.fixture('products').as('products');
        cy.login(username, password);
        cy.addAllProductsToCart();
        cy.get('@products').then((products) => {
            productsPage.getCartBadge().should('be.visible').and('have.text', products.length);
            productsPage.clickCartButton();
            cartPage.getCartTitle().should('be.visible').and('have.text', 'Your Cart');
            cartPage.getCartItems().should('be.visible').and('have.length', products.length);  
        });
        cartPage.getRemoveProduct().each(($btn) => {
            cy.wrap($btn).click();
        });
        cartPage.getCartItems().should('have.length', 0);
    });
});
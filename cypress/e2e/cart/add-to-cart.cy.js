import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';

describe('Add Product to Cart', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    it('should add product and display it in cart', () => {  
        cy.fixture('products').as('products');
        loginPage.login(username, password);
        cy.get('@products').then((products) => {  
            productsPage.getProductsPage().should('be.visible').should('have.length', products.length);
            productsPage.getAddProductButton().each(($btn) => {
                cy.wrap($btn).click();
            });
            productsPage.getCartBadge().should('be.visible').and('have.text', products.length);
            productsPage.clickCartButton();
            cartPage.getCartTitle().should('be.visible').and('have.text', 'Your Cart');
            cartPage.getCartItems().should('be.visible').and('have.length', products.length);       
            cartPage.getCartQuantity().each(($item)=>{
                cy.wrap($item).should('be.visible').and('have.text', '1');
            });
            cartPage.getCartItemTitle().each(($item, index) => {
                const product = products[index];
                cy.wrap($item).should('be.visible').and('have.text', product.name);
            });
            cartPage.getCartItemDescription().each(($item, index) => {
                const product = products[index];
                cy.wrap($item).should('be.visible').and('have.text', product.description);
            });
            cartPage.getCartItemPrice().each(($item, index) => {
                const product = products[index];
                cy.wrap($item).should('be.visible').and('have.text', product.price);
            });
            cartPage.getCheckoutButton().should('be.visible').and('have.text', 'Checkout');
            cartPage.getContinueShoppingButton().should('be.visible').and('have.text', 'Continue Shopping');
            cartPage.clickContinueShopping();
            productsPage.getProductsPage().should('be.visible').should('have.length', products.length);    
        });
    });
});
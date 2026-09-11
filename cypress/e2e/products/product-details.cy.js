import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import ProductDetailsPage from '../../pages/ProductDetailsPage';

describe('Product Details', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const productDetailsPage = new ProductDetailsPage();
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    it('should display product details correctly', () => {
        cy.fixture('products').as('products');
        loginPage.login(username, password);
        cy.get('@products').then((products) => {
            products.forEach((product) => {
                productsPage.clickProductByName(product.name);
                productDetailsPage.getProductTitle().should('be.visible').and('have.text', product.name);
                productDetailsPage.getProductDescription().should('be.visible').and('have.text', product.description);
                productDetailsPage.getProductPrice().should('be.visible').and('have.text', product.price);
                productDetailsPage.getProductImage().should('be.visible');
                productDetailsPage.getAddProductButton().should('be.visible').and('contain', 'Add to cart');
                productDetailsPage.clickGoBackToProductsButton();
                productsPage.getProductsPage().should('have.length', products.length);
            });
        });
    });
});
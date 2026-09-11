import LoginPage from "../../pages/LoginPage"
import ProductsPage from '../../pages/ProductsPage';
describe('Product Listing Tests', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    beforeEach(() => {//hook
        cy.fixture('products').as('products');
        loginPage.login(username, password);
    });

    it('should display Products page title', () => {
       productsPage.getPageTitle().should('be.visible').and('have.text','Products');
    });

    it('should display the correct number of products', function () {
        productsPage.getProductsPage().should('have.length',this.products.length); // Assuming there are 6 products
    });

    it('should display product names', function () {
        productsPage.getProductsName().each(($product,index) => {
            const expectedProduct = this.products[index];
            cy.wrap($product).should('be.visible').and('have.text',expectedProduct.name);
        });
    });

    it('should display product prices', function() {
        productsPage.getProductsPrice().each(($product,index) => {
            const expectedProduct = this.products[index];
            cy.wrap($product).should('be.visible').and('have.text', expectedProduct.price);
        });
    });

    it('should display product descriptions', function() {
        productsPage.getProductsDescription().each(($product,index) => {
            const expectedProduct = this.products[index];
            cy.wrap($product).should('be.visible').and('have.text',expectedProduct.description);
        });
    });

    it('should display Add to Cart buttons', () => {
        productsPage.getAddProductButton().each(($product) => {
            cy.wrap($product).should('be.visible').and('contain', 'Add to cart');
        });
    });
});
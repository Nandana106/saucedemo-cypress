import LoginPage from "../../pages/LoginPage"
import ProductsPage from '../../pages/ProductsPage';

describe('Product Sorting', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    beforeEach(() => {
        cy.fixture('products').as('products');
        loginPage.login(username, password);
    });

    it('should sort products by name in ascending order', function() {
        productsPage.selectSortOption('Name (A to Z)');
        productsPage.getProductsName().each(($product, index) => {
            const expectedProduct = this.products.sort((a, b) => a.name.localeCompare(b.name))[index];
            cy.wrap($product).should('be.visible').and('have.text', expectedProduct.name);
        });
    });

    it('should sort products by name in descending order', function() {
        productsPage.selectSortOption('Name (Z to A)');
        productsPage.getProductsName().each(($product, index) => {
            const expectedProduct = this.products.sort((a, b) => b.name.localeCompare(a.name))[index];
            cy.wrap($product).should('be.visible').and('have.text', expectedProduct.name);
        });
    });

    it('should sort products by price low to high', function() {
        productsPage.selectSortOption('Price (low to high)');
        productsPage.getProductsPrice().each(($product, index) => {
            const expectedProduct = this.products.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)))[index];
            cy.wrap($product).should('be.visible').and('have.text', expectedProduct.price);
        });
    });
    
    it('should sort products by price high to low', function() {
        productsPage.selectSortOption('Price (high to low)');
        productsPage.getProductsPrice().each(($product, index) => {
            const expectedProduct = this.products.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)))[index];
            cy.wrap($product).should('be.visible').and('have.text', expectedProduct.price);
        });
    });
});
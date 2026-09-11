export default class ProductDetailsPage {
    elements = {
        productTitle: '[data-test="inventory-item-name"]',
        productImage: '.inventory_details_img',
        productPrice: '[data-test="inventory-item-price"]',
        productDescription: '[data-test="inventory-item-desc"]',
        addProduct: '[data-test="add-to-cart"]',
        backButton: '[data-test="back-to-products"]'
    }

    getProductTitle(){
        return cy.get(this.elements.productTitle);
    }

    getProductImage(){
        return cy.get(this.elements.productImage);
    }

    getProductDescription(){
        return cy.get(this.elements.productDescription);
    }

    getProductPrice(){
        return cy.get(this.elements.productPrice);
    }

    getAddProductButton(){
        return cy.get(this.elements.addProduct);
    }

    getGoBackToProductsButton(){
        return cy.get(this.elements.backButton);
    }

    clickGoBackToProductsButton(){
        this.getGoBackToProductsButton().click();
        cy.url().should('include', '/inventory.html');
    }
}
export default class ProductPage {
    elements = {
        pageTitle : '[data-test="title"]',
        inventoryContainer : '[data-test="inventory-container"]',
        productItems : '[data-test="inventory-item"]',
        productNames : '[data-test="inventory-item-name"]',
        productPrices : '[data-test="inventory-item-price"]',
        productDescriptions : '[data-test="inventory-item-desc"]',
        sortDropdown: '[data-test="product-sort-container"]',
        addProduct : '[data-test^="add-to-cart-"]',
        cartBadge : '[data-test="shopping-cart-badge"]',
        cartLink : '[data-test="shopping-cart-link"]',
        menuButton : '#react-burger-menu-btn',
        logoutLink : '[data-test="logout-sidebar-link"]'
    }

    getPageTitle(){
       return cy.get(this.elements.pageTitle);
    }

    getProductsPage(){
       cy.get(this.elements.inventoryContainer).should('be.visible');
       return cy.get(this.elements.productItems);
    }

    getProductsName(){
       return cy.get(this.elements.productNames);
    }

    getProductsPrice(){
       return cy.get(this.elements.productPrices);
    }

    getProductsDescription(){
       return cy.get(this.elements.productDescriptions);
    }

    getSortDropdown(){
       return cy.get(this.elements.sortDropdown);
    }

    selectSortOption(option){
       this.getSortDropdown().select(option);
    }

    getProductByName(name){
       return cy.contains(this.elements.productNames, name);
    }

    clickProductByName(name){
       this.getProductByName(name).click();
    }

    getAddProductButton(){
        return cy.get(this.elements.addProduct);
    }

    getCartBadge(){
        return cy.get(this.elements.cartBadge);
    }

    getCartButton(){
        return cy.get(this.elements.cartLink);
    }

    clickCartButton(){
        this.getCartButton().click();
    }

    getMenuButton() {
        return cy.get(this.elements.menuButton);
    }

    getLogoutLink() {
        return cy.get(this.elements.logoutLink);
    }

    clickLogout(){
        this.getMenuButton().click();
        this.getLogoutLink().click();
    }
}
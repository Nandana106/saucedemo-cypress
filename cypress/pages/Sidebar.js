export default class Sidebar {
    elements = {
        sidebarContainer: '.bm-menu',
        openButton: '#react-burger-menu-btn',
        allItemsMenuItem: '[data-test="inventory-sidebar-link"]',
        dynamicCatalogMenuItem: '[data-test="dynamic-catalog-sidebar-link"]',
        lazyLoadingMenuItem: '[data-test="dynamic-catalog-lazy-load-link"]',
        title: '[data-test="title"]',
        dynamicCatalogContainer: '[data-test="dynamic-catalog-lazy-load-container"]',
        dynamicCatalogItems: '.dynamic_catalog_card',
        spinnerMenuItem: '[data-test="dynamic-catalog-spinner-link"]',
        spinner:'[data-test="dynamic-catalog-spinner"]',
        spinnerCardItems:'.dynamic_catalog_card',
        sliderMenuItem: '[data-test="dynamic-catalog-slider-link"]',
        sliderProductName:'[data-test="dynamic-catalog-slider-item-name"]',
        sliderActiveDot: '.dynamic_catalog_slider_dot[aria-current="true"]',
        aboutMenuItem: '[data-test="about-sidebar-link"]',
        logoutMenuItem: '[data-test="logout-sidebar-link"]',
        resetMenuItem: '[data-test="reset-sidebar-link"]',
        closeButton: '#react-burger-cross-btn',
    }

    getSidebarContainer() {
        return cy.get(this.elements.sidebarContainer);
    }

    getCloseButton() {
        return cy.get(this.elements.closeButton);
    }

    clickCloseButton() {
        this.getCloseButton().click();
    }

    getOpenButton() {
        return cy.get(this.elements.openButton);
    }

    clickOpenButton() {
        this.getOpenButton().click();
    }

    getAllItemsMenuItem() {
        return cy.get(this.elements.allItemsMenuItem);
    }

    clickAllItemsMenuItem() {
        this.getAllItemsMenuItem().click();
    }

    getDynamicCatalogMenuItem() {
        return cy.get(this.elements.dynamicCatalogMenuItem);
    }

    clickDynamicCatalogMenuItem() {
        this.getDynamicCatalogMenuItem().click();
    }

    getLazyLoadingMenuItem() {
        return cy.get(this.elements.lazyLoadingMenuItem);
    }

    clickLazyLoadingMenuItem() {
        this.getLazyLoadingMenuItem().click();    
        cy.url().should('include', '/dynamic-catalog-lazy-load.html');
    }

    getTitle() {
        return cy.get(this.elements.title);
    }

    getDynamicCatalogContainer() {
        return cy.get(this.elements.dynamicCatalogContainer);
    }

    verifyDynamicCatalogContainer() {
        this.getDynamicCatalogContainer().should('be.visible')
    }

    verifyDynamicCatalogItems() {
        return cy.get(this.elements.dynamicCatalogItems);
    }

    getDynamicCatalogItemCount() {
        return this.verifyDynamicCatalogItems().its('length');
    }

    scrollToBottom() {
        cy.window().then((win) => {
            win.scrollTo(0, win.document.body.scrollHeight);
        });
    }

    getSpinnerMenuItem() {
        return cy.get(this.elements.spinnerMenuItem);
    }

    clickSpinnerMenuItem() {
        this.getSpinnerMenuItem().click();
        cy.url().should('include', '/dynamic-catalog-spinner.html');
    }

    getSpinner(){
        return cy.get(this.elements.spinner);
    }

    getSpinnerCardItems() {
        return cy.get(this.elements.spinnerCardItems);
    }

    verifySpinner(){
        this.getSpinner().should('be.visible');
    }

    verifySpinnerCardItems() {
        this.getSpinnerCardItems().should('be.visible').and('have.length', 6);
    }

    getSliderMenuItem() {
        return cy.get(this.elements.sliderMenuItem);
    }

    clickSliderMenuItem() {
        this.getSliderMenuItem().click();
        cy.url().should('include', '/dynamic-catalog-slider.html');
    }

    getSliderProductName() {
        return cy.get(this.elements.sliderProductName);
    }

    getSliderActiveDot() {
        return cy.get(this.elements.sliderActiveDot);
    }

    getAboutMenuItem() {
        return cy.get(this.elements.aboutMenuItem);
    }

    getLogoutMenuItem() {
        return cy.get(this.elements.logoutMenuItem);
    }

    clickLogoutMenuItem() {
        this.getLogoutMenuItem().click();
    }

    getResetMenuItem() {
        return cy.get(this.elements.resetMenuItem);
    }
}
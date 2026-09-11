export default class CartPage {
    elements = {
        cartTitle: '[data-test="title"]',
        cartItems: '[data-test="inventory-item"]',
        cartQuantity: '[data-test="item-quantity"]',
        cartItemTitle: '[data-test="inventory-item-name"]',
        cartItemDescription: '[data-test="inventory-item-desc"]',
        cartItemPrice: '[data-test="inventory-item-price"]',
        removeProduct: '[data-test^="remove-"]',
        continueShoppingButton: '[data-test="continue-shopping"]',
        checkoutButton: '[data-test="checkout"]'
    }

    getCartTitle(){
        return cy.get(this.elements.cartTitle);
    }
    
    getCartItems(){
        return cy.get(this.elements.cartItems);
    }

    getCartQuantity(){
        return cy.get(this.elements.cartQuantity);
    }

    getCartItemTitle(){
        return cy.get(this.elements.cartItemTitle);
    }

    getCartItemDescription(){
        return cy.get(this.elements.cartItemDescription);
    }

    getCartItemPrice(){
        return cy.get(this.elements.cartItemPrice);
    }
    
    getRemoveProduct(){
        return cy.get(this.elements.removeProduct);
    }
    
    getContinueShoppingButton(){
        return cy.get(this.elements.continueShoppingButton);
    }
    
    clickContinueShopping(){
        this.getContinueShoppingButton().click();
    }

    getCheckoutButton(){
        return cy.get(this.elements.checkoutButton);
    }

    clickCheckout(){
        this.getCheckoutButton().click();
    }
}
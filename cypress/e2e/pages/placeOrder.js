/// <reference types = 'cypress'/>

export default class placeOrder{
    selector = {
        url : 'https://www.weightworld.uk/',
        clickOnAccept : '#cookiescript_accept',
        searchBox : '[id="algo_search"]',
        addProduct : '[class="col-7 p-0 mt-auto mb-3" ] > button',
        clickOnCart : '[class="btn btn-secondary arrowRight float-right shadow-none border-0"]',
        img : '[class="product-image-new rounded"] > img',
        checkOutButton : '[id="basketCheckoutBtn"]',
        form : '[id="paymentForm"]',
        email : '[id="email"]',
        checkbox : '[id="newsletter_sms"]',
        postCode : '[id="bill_zipcode"]',
        betaling : '[id="paymentName_2"]',
        cardNumber : '[id="checkout-frames-card-number"]',
        expiryDate : '[id="checkout-frames-expiry-date"]',
        cvv : '[id="checkout-frames-cvv"]',
        placeOrderBut : '[id="place-order"]'





    }
    

    visitUrl(){
        cy.visit(this.selector.url)
        cy.viewport(1280, 720)
        // cy.wait(2000)
        cy.get(this.selector.clickOnAccept).click()
    }

    selectProduct(parameter){
        cy.get(this.selector.searchBox).type(parameter)
        cy.wait(2000)
        cy.get(this.selector.addProduct).click()
        

        
    }

    clickOnCartButton(){
        cy.get(this.selector.clickOnCart).click()
        cy.get(this.selector.img).should('be.visible')        

    }
    checkOut(){
        cy.get(this.selector.checkOutButton).click()
        cy.wait(2000)
        cy.get(this.selector.form).should('be.visible')
    }

    fillForm(){
        cy.get(this.selector.email).type(`helloComfort${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}@gmail.com`)
        cy.get(this.selector.checkbox).check()
        cy.get(this.selector.postCode).type(2000)
        cy.get(this.selector.betaling).click()
        cy.get(this.selector.cardNumber).type(4242424242424242)
        cy.get(this.selector.expiryDate).type(1224)
        cy.get(this.selector.cvv).type(111)
        cy.get(this.selector.placeOrderBut).click()
    }



}
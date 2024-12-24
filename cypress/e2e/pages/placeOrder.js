/// <reference types = 'cypress'/>

export default class placeOrder{
    selector = {
        url : 'https://www.weightworld.dk/',
        clickOnAccept : '#cookiescript_accept',
        searchBox : '[id="algo_search"]',
        addProduct : '[class="col-7 p-0 mt-auto mb-3" ] > button',
        clickOnCart : '[class="btn btn-secondary arrowRight float-right shadow-none border-0"]',
        img : '[class="product-image-new rounded"] > img',
        checkOutButton : '[id="basketCheckoutBtn"]',
        form : '[id="paymentForm"]',
        email : '[id="email"]',
        checkbox : '[id="newsletter_sms"]',
        firstName  : '[id="bill_firstname"]',
        lastName : '[id="bill_lastname"]',
        mobileNumber : '[id="del_mobile"]',
        address : '[id="bill_add1"]',
        city  : '[id="bill_city"]',        
        postCode : '[id="bill_zipcode"]',        
        betaling : '[id="paymentName_2"]',
        iframe1  : '#cardNumber',
        iframe2  : '#expiryDate',
        iframe3  : '#cvv',
        cardNumber : '[id="checkout-frames-card-number"]',
        
        expiryDate : '[id="checkout-frames-expiry-date"]',
        cvv : '[id="checkout-frames-cvv"]',
        placeOrderBut : '[id="place-order"]'

    }
    
    
    

    visitUrl(){
        cy.visit(this.selector.url)
        // cy.wait(2000)
        cy.viewport(1280, 720)
        cy.wait(2000)
        cy.get(this.selector.clickOnAccept).click()
        // cy.get('#cookiescript_accept')
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
        let userData
        cy.fixture('userData').then((data)=>{
            userData = data

        
        cy.get(this.selector.email)
        .type(`helloComfort${Math.floor(Math.random()*100000000)}@gmail.com`)
        cy.get(this.selector.checkbox).check()      
        cy.get(this.selector.firstName).type(userData.firstName)
        cy.get(this.selector.lastName).type(userData.lastName)
        cy.get(this.selector.mobileNumber).type(Math.floor(Math.random() * 10000000000))
        cy.get(this.selector.address).type(userData.address)
        cy.get(this.selector.postCode).type(userData.postalCode)
        cy.get(this.selector.city).type(userData.city)
        cy.get(this.selector.betaling).click()
        cy.wait(2000)

        const iframeBody1 = cy.get(this.selector.iframe1)
        .its('0.contentDocument.body').should('be.visible')
        .then(cy.wrap)        
        iframeBody1.find(this.selector.cardNumber).clear().type(userData.cardNumber)
        
        const iframeBody2 = cy.get(this.selector.iframe2).its('0.contentDocument.body').should('be.visible')
        .then(cy.wrap).find(this.selector.expiryDate).type(userData.expiryDate)

        const iframeBody3 = cy.get(this.selector.iframe3).its('0.contentDocument.body').should('be.visible')
        .then(cy.wrap).find(this.selector.cvv).type(userData.cvv)
        
        cy.get(this.selector.placeOrderBut).click()
    })
    }

    placeOrder(){
        cy.get(this.selector.placeOrderBut).click({force:true})
    }



}
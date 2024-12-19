/// <reference types = 'cypress'/>

import PrintProductName from "./pages/printNameOfProduct.js"
import placeOrder from "./pages/placeOrder.js"



describe("Comfort click Assignment",function(){
    cy.on("uncaught:exception",function(err,runnable){
        return false
    })

    let printNames = new PrintProductName
    let placeOrders = new placeOrder


    it("Task 1 - Write a cypress code to add product to cart",function(){        
        cy.login()

    })

    it.only("Task 2 - Write a cypress code to Print name of products",function(){
        printNames.VisitUrl()
        printNames.reDirectedToCategory()
    })

    it('Task 3 - Write a cypress code to place an order using test credentials',function(){
        placeOrders.visitUrl()
        placeOrders.selectProduct('magnisum glicina')
        placeOrders.clickOnCartButton()
        placeOrders.checkOut()



    })
})
/// <reference types = 'cypress'/>
export default  class PrintProductName{
    selector = {
       url : "https://www.weightworld.uk/",
       superfoods : '[class="list-unstyled list-inline m-0 mm--open"] > li',
       Ashawgandh : '[title="Ashwagandha"]',
       commonText : '[class="product-name text-secondary text-black"]',
       clickOnAccept : '#cookiescript_accept'

   }

   VisitUrl(){
       cy.visit(this.selector.url)
       cy.viewport(1280, 720)
       cy.wait(2000)
       cy.get(this.selector.clickOnAccept).click()      
   }

   reDirectedToCategory(){
    cy.get(this.selector.superfoods).first().click()
    cy.get(this.selector.Ashawgandh).click()
    cy.get(this.selector.commonText).invoke('text').then((text)=>{
        cy.log(text)
    })

   }


}
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => { 
    cy.visit('https://www.weightworld.uk/')
    cy.wait(2000)
    cy.get('#cookiescript_accept').click()
    cy.get('[id="algo_search"]').type("sport nutrition")
    
    cy.wait(2000)
    cy.get(':nth-child(1) > .searchProd-block').click()
    cy.wait(2000)
    cy.get('#ATCQTY').click()
    cy.wait(2000)
    cy.get('.modal-header > .btn').click()    
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
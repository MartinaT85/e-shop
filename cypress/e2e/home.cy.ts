/// <reference types="cypress" />


describe('home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays 5 items by default', () => {

    cy.get('[data-test = "category-container"]').should('have.length', 5)
  })

  it('should have word "Shop"', () => {
    cy.contains('Shop')
  })

  context('Shop', () => {
    it('Navigate to shop page', () => {
      cy.get('[data-test="shop"]').click()
      cy.location('pathname').should('eq', '/shop')
      cy.get('[data-test="category"]').should('have.length', 5)
    })

    
      
   

    it('Navigate back to home page', () => {
      cy.get('[data-test="logo"]').click()
      cy.location()
    })
  })
})
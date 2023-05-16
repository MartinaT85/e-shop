/// <reference types="cypress" />

describe('navigation bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('sholud test the links in navbar', () => {
        const baseUrl = Cypress.config('baseUrl');

        cy.get('[data-test="navbar"]').within(($navigation) => {
            cy.get('[data-test="logo"]').click()
            cy.url().should('eq', `http://localhost:3000/`)

            cy.get('[data-test="shop"]').click()
            cy.url().should('eq', `http://localhost:3000/shop`)

            cy.get('[href="/auth"]').click()
            cy.url().should('eq', `http://localhost:3000/auth`)
            
            

            cy.get('[data-test="logo"]').click()
            cy.location().then((loc) => {
                console.log(loc, 'LOCATION')
            })

            cy.get('.cart-icon-container').click()
            cy.get('.cart-dropdown-container').should('be.visible')
            cy.get('.cart-icon-container').click()
            cy.get('.cart-dropdown-container').should('not.exist')
        })
    })
})

// describe('navigation bar', () => {
//     beforeEach(() => {
//       cy.visit('http://localhost:3000/')
//     })

//     it('should navigate to / when logo link is clicked', () => {
//         cy.get('[data-test="navbar"]').get('[data-test="logo"]').click()
//         cy.url().should('eq', 'http://localhost:3000/')
//     })
  
//     it('should navigate to the shop page when the shop link is clicked', () => {
//         cy.get('[data-test="navbar"]').get('[data-test="shop"]').click()
//         cy.url().should('eq', 'http://localhost:3000/shop')
//     })

//     it('should navigate to the sign in / sign up page when Sign In link is clicked and then go back home', () => {
//         cy.get('[data-test = "navbar"]').get('[href="/auth"]').click()
//         cy.url().should('eq', 'http://localhost:3000/auth').go('back')
//     })

//     it('should open and close the modal when the cart icon is clicked', () => {
//         cy.get('[data-test="navbar"]').get('.cart-icon-container').click()
//         cy.get('.cart-dropdown-container').should('be.visible')
//         cy.get('[data-test="navbar"]').get('.cart-icon-container').click()
//         //hmmm, I should't chceck for not.be.visible but not.exist because element is always destroyed
//         cy.get('.cart-dropdown-container').should('not.exist')
//     })

    // my question: is it possible to do it less verbose? **tried to nest it() but didn't work
    // it can't be nested in Cypress, it's not allowed 

    // it('selecting navbar', () => {
    //     cy.get('[data-test="navbar"]')
        
    //     it('should navigate to / when logo link is clicked', () => {
    //         cy.get('[data-test="logo"]').click()
    //         cy.url().should('eq', 'http://localhost:3000/')
    //     })
    // })


    
            
              
        //   });
    
  
    
    
  
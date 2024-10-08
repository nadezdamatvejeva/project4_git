describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.log("My message")
    cy.log("My new message")
  })
})
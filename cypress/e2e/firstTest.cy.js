describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-testid="cypress-title"]').should("exist").should('have.text', 'HorlaCore');
  })
  it('check-experience-key', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-testkey="check-1"]').should("exist");
  })
})
describe('Freelance Page', () => {
  beforeEach(() => {
    cy.visit('/freelance')
  })

  it('renders the page heading', () => {
    cy.get('h1').should('contain.text', 'Freelance')
  })

  it('shows the How I Work section with 5 steps', () => {
    cy.contains('h2', 'How I Work').should('be.visible')
    cy.contains('Clarify scope and expected deliverables').should('be.visible')
    cy.contains('Deliver runnable code and handoff notes').should('be.visible')
  })

  it('shows the contact section', () => {
    cy.contains('Have a project in mind?').should('be.visible')
    cy.contains('a', /send an email/i).should('be.visible')
  })

  it('does NOT show a LinkedIn Services CTA', () => {
    cy.contains(/request services on linkedin/i).should('not.exist')
  })
})

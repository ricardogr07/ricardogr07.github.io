describe('Teaching Page', () => {
  beforeEach(() => {
    cy.visit('/teaching')
  })

  it('renders the page heading', () => {
    cy.get('h1').should('contain.text', 'Teaching')
  })

  it('shows the Adjunct Professor role at Tec de Monterrey', () => {
    cy.contains(/adjunct assistant professor/i).should('be.visible')
    cy.contains('Tecnológico de Monterrey').should('be.visible')
  })

  it('renders the bioinstrumentation course cards', () => {
    cy.contains('BI2001B').should('be.visible')
    cy.contains('BI3010').should('be.visible')
    cy.contains('BI3014').should('be.visible')
  })

  it('does NOT render the Physics Lab instructor role', () => {
    cy.contains(/physics lab/i).should('not.exist')
  })

  it('links to the Research page', () => {
    cy.get('a[href^="/research"]').should('exist')
  })
})

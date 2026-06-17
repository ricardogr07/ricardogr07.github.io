describe('CV Page', () => {
  beforeEach(() => {
    cy.visit('/cv')
  })

  it('renders the full name', () => {
    cy.contains('Ricardo García Ramírez').should('be.visible')
  })

  it('shows the PDF download button', () => {
    cy.contains('a', /download pdf/i)
      .should('be.visible')
      .and('have.attr', 'download')
  })

  it('renders the Summary section', () => {
    cy.contains(/summary/i).should('be.visible')
    cy.contains('7+ years').should('be.visible')
  })

  it('renders the Experience section with real employers', () => {
    cy.contains(/experience/i).should('be.visible')
    cy.contains('MSCI').should('be.visible')
    cy.contains('Rackspace').should('be.visible')
  })

  it('renders the Education section with real institutions', () => {
    cy.contains(/education/i).should('be.visible')
    cy.contains('Pontificia Universidad Católica').should('be.visible')
    cy.contains('Tecnológico de Monterrey').should('be.visible')
  })

  it('renders the Teaching section', () => {
    cy.contains(/teaching/i).should('be.visible')
    cy.contains('Tecnológico de Monterrey').should('be.visible')
  })

  it('renders the Skills section', () => {
    cy.contains(/skills/i).should('be.visible')
    cy.contains('Python').should('be.visible')
  })

  it('renders the Languages section', () => {
    cy.contains(/languages/i).should('be.visible')
    cy.contains('Spanish').should('be.visible')
  })

  it('renders the Publications section with DOI links', () => {
    cy.contains(/publications/i).should('be.visible')
    cy.contains('a', /DOI/i).should('be.visible')
  })
})

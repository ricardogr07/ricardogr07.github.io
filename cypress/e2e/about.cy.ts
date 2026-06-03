describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('renders the full name heading', () => {
    cy.get('h1').should('contain.text', 'Ricardo García Ramírez')
  })

  it('shows the real profile photo (not initials placeholder)', () => {
    cy.get('img[alt="Ricardo García"]').should('be.visible')
  })

  it('renders the About / bio section with real content', () => {
    cy.contains('h2', 'About').should('be.visible')
    cy.contains('Senior Software Engineer').should('be.visible')
    cy.contains('MSCI').should('be.visible')
  })

  it('renders the Experience section with real employers', () => {
    cy.contains('h2', 'Experience').should('be.visible')
    cy.contains('MSCI').should('be.visible')
    cy.contains('Rackspace').should('be.visible')
  })

  it('renders the Skills section', () => {
    cy.contains('h2', 'Skills').should('be.visible')
    cy.contains('Python').should('be.visible')
  })

  it('renders the Teaching section', () => {
    cy.contains('h2', 'Teaching').should('be.visible')
    cy.contains('Tecnológico de Monterrey').should('be.visible')
  })

  it('renders the Publications section with DOI links', () => {
    cy.contains('h2', 'Publications').should('be.visible')
    cy.contains('a', /DOI/i).should('be.visible')
  })

  it('renders the Writing / Medium section', () => {
    cy.contains('h2', 'Writing').should('be.visible')
    cy.contains('a', /medium/i).should('be.visible')
  })

  it('has a View CV link', () => {
    cy.contains('a', /view cv/i).should('be.visible')
  })

  it('has GitHub, LinkedIn, Medium and Google Scholar links', () => {
    cy.contains('a', 'GitHub').should('be.visible')
    cy.contains('a', 'LinkedIn').should('be.visible')
    cy.contains('a', 'Medium').should('be.visible')
    cy.contains('a', 'Google Scholar').should('be.visible')
  })
})

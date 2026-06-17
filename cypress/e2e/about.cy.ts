describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('renders the full name heading', () => {
    cy.get('h1').should('contain.text', 'Ricardo García Ramírez')
  })

  it('shows the real profile photo (not initials placeholder)', () => {
    cy.get('img[alt="Ricardo García Ramírez"]').should('be.visible')
  })

  it('renders the About / bio section with real content', () => {
    cy.contains('h2', 'About').should('be.visible')
    cy.contains('full-stack engineer').should('be.visible')
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

  it('links to the dedicated Teaching and Research pages (hub)', () => {
    cy.contains('h2', 'Teaching').should('be.visible')
    // trailingSlash: true → hrefs render as /teaching/ and /research/
    cy.get('a[href^="/teaching"]').should('exist')
    cy.get('a[href^="/research"]').should('exist')
  })

  it('does NOT render a full Publications section (moved to /research)', () => {
    cy.contains('h2', 'Publications').should('not.exist')
  })

  it('renders the Writing / Medium section', () => {
    cy.contains('h2', 'Writing').should('be.visible')
    cy.contains('a', /medium/i).should('be.visible')
  })

  it('has a Full CV link', () => {
    cy.get('a[href^="/cv"]').should('exist')
  })

  it('has GitHub, LinkedIn, Medium and Google Scholar links', () => {
    cy.contains('a', 'GitHub').should('be.visible')
    cy.contains('a', 'LinkedIn').should('be.visible')
    cy.contains('a', 'Medium').should('be.visible')
    cy.contains('a', 'Google Scholar').should('be.visible')
  })
})

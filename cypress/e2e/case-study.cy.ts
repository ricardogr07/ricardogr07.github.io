describe('Case Study Page (/projects/linkedin-webscraper)', () => {
  beforeEach(() => {
    cy.visit('/projects/linkedin-webscraper')
  })

  it('renders the project title as h1', () => {
    cy.get('h1').should('contain.text', 'LinkedIn')
  })

  it('shows the Problem section', () => {
    cy.contains('h2', 'Problem').should('be.visible')
  })

  it('shows the Solution section', () => {
    cy.contains('h2', 'Solution').should('be.visible')
  })

  it('shows the Deliverables section', () => {
    cy.contains('h2', 'Deliverables').should('be.visible')
  })

  it('shows Tech Stack sidebar', () => {
    cy.contains(/tech stack/i).should('be.visible')
    cy.contains('Python').should('be.visible')
  })

  it('shows a GitHub link', () => {
    cy.contains('a', /github/i).should('be.visible')
  })

  it('has a back link to /projects', () => {
    cy.contains('a', /all projects/i).should('have.attr', 'href', '/projects')
  })
})

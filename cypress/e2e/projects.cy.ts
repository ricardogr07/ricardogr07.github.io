describe('Projects Page', () => {
  beforeEach(() => {
    cy.visit('/projects')
  })

  it('renders the page heading', () => {
    cy.get('h1').should('contain.text', 'Projects')
  })

  it('renders filter tabs', () => {
    cy.contains('button', 'All').should('be.visible')
    cy.contains('button', 'Automation').should('be.visible')
    cy.contains('button', 'RAG / LLM').should('be.visible')
  })

  it('renders at least 9 project cards', () => {
    cy.get('[data-testid="project-card"]').its('length').should('be.gte', 9)
  })

  it('filters projects when a category is selected', () => {
    cy.contains('button', 'Scientific Python').click()
    cy.get('[data-testid="project-card"]').its('length').should('be.gte', 1)
  })

  it('shows all projects when All is selected after filtering', () => {
    cy.contains('button', 'Scientific Python').click()
    cy.contains('button', 'All').click()
    cy.get('[data-testid="project-card"]').its('length').should('be.gte', 9)
  })

  it('project card title links to the case study page', () => {
    cy.get('[data-testid="project-card"]')
      .first()
      .find('a')
      .first()
      .should('have.attr', 'href')
      .and('include', '/projects/')
  })
})

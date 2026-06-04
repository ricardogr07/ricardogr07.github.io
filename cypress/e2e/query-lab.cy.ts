describe('Portfolio Query Lab', () => {
  it('loads the query lab page', () => {
    cy.visit('/demo/query-lab')
    cy.contains('Portfolio Query Lab').should('be.visible')
  })

  it('shows the demo banner with "synthetic"', () => {
    cy.visit('/demo/query-lab')
    cy.contains(/synthetic/i).should('be.visible')
  })

  it('shows schema panel with table names', () => {
    cy.visit('/demo/query-lab')
    cy.contains('holdings').should('be.visible')
    cy.contains('monthly_returns').should('be.visible')
    cy.contains('goals').should('be.visible')
  })

  it('shows preset query buttons', () => {
    cy.visit('/demo/query-lab')
    cy.contains('button', 'Holdings by value').should('be.visible')
    cy.contains('button', 'vs Benchmark').should('be.visible')
    cy.contains('button', 'Goal progress').should('be.visible')
  })

  it('displays results with DEMO- tickers after SQL engine loads', () => {
    cy.visit('/demo/query-lab')
    cy.contains('DEMO-', { timeout: 10000 }).should('exist')
  })

  it('clicking a preset populates the editor and runs the query', () => {
    cy.visit('/demo/query-lab')
    cy.contains('DEMO-', { timeout: 10000 }).should('exist')
    cy.contains('button', 'vs Benchmark').click()
    cy.get('textarea[aria-label="SQL query"]').should('contain.value', 'alpha')
    cy.contains('alpha').should('exist')
  })

  it('case-study page shows Live Demo button linking to the query lab', () => {
    cy.visit('/projects/query-lab-demo')
    cy.contains('a', /live demo/i).should('have.attr', 'href', '/demo/query-lab')
  })

  it('projects page with Dashboard filter shows the query lab card', () => {
    cy.visit('/projects')
    cy.contains('button', 'Dashboard').click()
    cy.contains('Portfolio Query Lab').should('be.visible')
  })
})

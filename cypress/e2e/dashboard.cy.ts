describe('Financial Dashboard Demo', () => {
  it('loads the dashboard page without errors', () => {
    cy.visit('/demo/financial-dashboard')
    cy.contains('Financial Data Dashboard').should('be.visible')
  })

  it('shows the demo banner containing "synthetic"', () => {
    cy.visit('/demo/financial-dashboard')
    cy.contains(/synthetic/i).should('be.visible')
  })

  it('displays portfolio value in MXN', () => {
    cy.visit('/demo/financial-dashboard')
    cy.contains(/MXN|919/i).should('exist')
  })

  it('shows at least 8 rows in the holdings table', () => {
    cy.visit('/demo/financial-dashboard')
    cy.get('table tbody tr').should('have.length.gte', 8)
  })

  it('shows at least one DEMO- ticker', () => {
    cy.visit('/demo/financial-dashboard')
    cy.contains(/DEMO-/).should('exist')
  })

  it('Rebuild button resets the pipeline log', () => {
    cy.visit('/demo/financial-dashboard')
    cy.contains('button', /rebuild/i).click()
    cy.contains(/Pipeline triggered/).should('not.exist')
    cy.wait(400)
    cy.contains(/Pipeline triggered/).should('exist')
  })

  it('case-study page shows Live Demo button linking to the dashboard', () => {
    cy.visit('/projects/financial-dashboard-demo')
    cy.contains('a', /live demo/i)
      .should('have.attr', 'href', '/demo/financial-dashboard')
  })

  it('projects page with Dashboard filter shows the demo card', () => {
    cy.visit('/projects')
    cy.contains('button', 'Dashboard').click()
    cy.contains('Financial Data Dashboard Demo').should('be.visible')
  })
})

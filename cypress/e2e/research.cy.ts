describe('Research Page', () => {
  beforeEach(() => {
    cy.visit('/research')
  })

  it('renders the page heading', () => {
    cy.get('h1').should('contain.text', 'Research')
  })

  it('shows the M.Sc. thesis with Distinction', () => {
    cy.contains(/M\.Sc\. in Data Science/i).should('be.visible')
    cy.contains(/distinction/i).should('be.visible')
  })

  it('renders the Springer book as a distinct entry', () => {
    cy.contains('BioMEMS: Biosensing Applications').should('be.visible')
    cy.contains(/springer/i).should('be.visible')
  })

  it('renders publications with DOI links', () => {
    cy.contains('h2', /publications/i).should('be.visible')
    cy.contains('a', /DOI/i).should('be.visible')
  })

  it('shows research positions including KAUST', () => {
    cy.contains(/research positions/i).should('be.visible')
    cy.contains('KAUST').should('be.visible')
  })

  it('cross-links to the scientific software projects', () => {
    cy.get('a[href^="/projects/purkinje-uv"]').should('exist')
    cy.get('a[href^="/projects/myocardial-mesh"]').should('exist')
  })

  it('has a Google Scholar link', () => {
    cy.contains('a', /google scholar/i).should('be.visible')
  })
})

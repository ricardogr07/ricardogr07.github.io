describe('Portfolio Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the nav with all links', () => {
    cy.get('[data-testid="nav"]').should('be.visible')
    cy.contains('a', 'Projects').should('be.visible')
    cy.contains('a', 'About').should('be.visible')
    cy.contains('a', 'CV').should('be.visible')
    cy.contains('a', 'Freelance').should('be.visible')
  })

  it('renders the hero section with main heading', () => {
    cy.get('h1').should('be.visible')
    cy.get('h1').should('contain.text', 'AI/ML systems')
  })

  it('shows the four-pillar badge in the hero', () => {
    cy.contains('AI/ML · Data Engineering · Cloud · Full-Stack').should('be.visible')
  })

  it('has a View projects CTA linking to /projects', () => {
    // trailingSlash: true → href renders as /projects/
    cy.contains('a', 'View projects').should('have.attr', 'href', '/projects/')
  })

  it('has a Download CV CTA linking to /cv', () => {
    cy.contains('a', 'Download CV').should('have.attr', 'href', '/cv/')
  })

  it('does NOT have a GitHub CTA in the hero', () => {
    cy.get('section[aria-label="Hero"]').within(() => {
      cy.contains('a', 'GitHub').should('not.exist')
    })
  })

  it('renders the "What I work on" section with the four pillars', () => {
    cy.contains('h2', 'What I work on').should('be.visible')
    cy.contains('AI/ML').should('be.visible')
    cy.contains('Data Engineering').should('be.visible')
    cy.contains('Cloud').should('be.visible')
    cy.contains('Full-Stack').should('be.visible')
  })

  it('renders exactly 4 featured project cards', () => {
    cy.get('[data-testid="project-card"]').should('have.length', 4)
  })

  it('featured projects cover the core domains', () => {
    cy.contains('Rust + Python RAG Chunking Pipeline').should('be.visible')
    cy.contains('Mexico Jobs Analytics Pipeline').should('be.visible')
    cy.contains('PurkinjeUV').should('be.visible')
  })

  it('has a "View all projects" link', () => {
    cy.contains('a', /view all projects/i).should('have.attr', 'href', '/projects/')
  })

  it('renders the footer with GitHub and LinkedIn links', () => {
    cy.get('footer').within(() => {
      cy.contains('GitHub').should('be.visible')
      cy.contains('LinkedIn').should('be.visible')
    })
  })

  it('does NOT show How I Work section on home page', () => {
    cy.contains('h2', 'How I Work').should('not.exist')
  })
})

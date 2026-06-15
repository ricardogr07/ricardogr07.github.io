describe('Case Study Page (/projects/linkedin-webscraper)', () => {
  // linkedin-webscraper now carries full STARL content, so Situation/Action
  // render from the real beats (not the legacy problem/solution fallback).
  beforeEach(() => {
    cy.visit('/projects/linkedin-webscraper')
  })

  it('renders the project title as h1', () => {
    cy.get('h1').should('contain.text', 'LinkedIn')
  })

  it('shows the Situation section (degraded from legacy problem)', () => {
    cy.contains('h2', 'Situation').should('be.visible')
  })

  it('shows the Action section (degraded from legacy solution)', () => {
    cy.contains('h2', 'Action').should('be.visible')
  })

  it('shows Tech Stack sidebar', () => {
    cy.contains(/tech stack/i).should('be.visible')
    cy.contains('Python').should('be.visible')
  })

  it('shows a GitHub link', () => {
    cy.contains('a', /github/i).should('be.visible')
  })

  it('has a back link to /projects', () => {
    // trailingSlash: true → the rendered href is /projects/
    cy.contains('a', /all projects/i).should('have.attr', 'href', '/projects/')
  })

  it('has prev/next project navigation', () => {
    cy.get('nav[aria-label="Project navigation"]')
      .find('a[href^="/projects/"]')
      .should('have.length.greaterThan', 0)
  })
})

describe('Case Study Page — full STARL (/projects/wc26-dashboard)', () => {
  beforeEach(() => {
    cy.visit('/projects/wc26-dashboard')
  })

  it('renders the project title as h1', () => {
    cy.get('h1').should('contain.text', 'WC26')
  })

  it('shows the headline metric in the TL;DR block', () => {
    cy.contains('10,000').should('be.visible')
  })

  it('renders the full STARL beats (Situation, Task, Action, Result, Learning)', () => {
    cy.contains('h2', 'Situation').should('be.visible')
    cy.contains('h2', 'Task').should('be.visible')
    cy.contains('h2', 'Action').should('be.visible')
    cy.contains('h2', 'Result').should('be.visible')
    cy.contains('h2', 'Learning').should('be.visible')
  })

  it('shows the live demo link', () => {
    cy.contains('a', /live demo/i).should('be.visible')
  })

  it('shows role and status in the sidebar', () => {
    cy.contains('h2', /role/i).should('be.visible')
    cy.contains('h2', /status/i).should('be.visible')
  })
})

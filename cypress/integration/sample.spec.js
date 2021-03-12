describe('My First Test', () => {
  it('Visits the Prismic Starter', () => {
    cy.visit('http://localhost:8000')

    //Check the h1 exists
    cy.contains('John Doe')
  })

  it('Navigates to About', () => {
    cy.contains('About').click()

    cy.url().should('include', '/about')
  })

  it('Navigates to More Info', () => {
    cy.contains('More Info').click()

    cy.url().should('include', '/more-info')
  })

  it('Navigates to the homepage', () => {
    cy.contains('Example Site').click()

    cy.contains('John Doe')
  })
})

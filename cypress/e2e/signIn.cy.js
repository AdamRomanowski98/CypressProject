describe('Sign In Page', () => {


  before(()=>{
    cy.visit('/')
  })


  it('should allow to sign in with existing credentials', () => {
    cy.contains('Sign In').click()
    cy.url().should('include', 'sign-in')
  })
})
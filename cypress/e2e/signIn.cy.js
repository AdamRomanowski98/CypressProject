describe('Sign In Page', () => {


  before(()=>{
    cy.visit('/')
  })


  it('should allow to sign in with existing credentials', () => {
    cy.contains('SIGN IN').click()
  })
})
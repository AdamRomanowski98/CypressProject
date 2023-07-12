import profilePage from "../support/pages/profilePage";
import signInPage from "../support/pages/signInPage";

describe('Sign In Page', () => {
  let user;

  before(()=>{
    cy.generateRandomUser().then((generatedUser)=>{
      user = generatedUser;
    }).then(()=>{
      cy.register(user.email, user.password)
      cy.logOut()
    })
   
  })

  beforeEach(()=>{
    signInPage.visit()
  })

  it('should allow to sign in with existing credentials', () => {
    signInPage.typeEmail(user.email)
    signInPage.typePassword(user.password)
    signInPage.clickSignInBtn()
    profilePage.assertUrl()
    cy.logOut()
  })

  it('should not allow to sign in with wrong credentials', ()=>{
    signInPage.typeEmail(user.email)
    signInPage.typePassword('wrongPass')
    signInPage.clickSignInBtn()
    signInPage.assertEmailErrors('Wrong credentials')
    signInPage.assertUrl()
  })

  it('should not allow to sign in with missing required fields', ()=>{
    signInPage.clickSignInBtn()
    signInPage.assertEmailErrors('Email is required')
    signInPage.assertPasswordErrors('Password is required')
  })
})
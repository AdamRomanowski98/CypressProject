import profilePage from "../support/pages/profilePage";

import signUpPage from "../support/pages/signUpPage";


describe('Sign Up Page', () => {
    let user;

    beforeEach(()=>{
      cy.generateRandomUser().then((generatedUser)=>{
        user = generatedUser;
      })
      // Here if I would have an access to DB I would definately try to find and delete the user from DB if exists. Even thought I'm generating random user each time there's still a small chance to generate the same users
    })
  
    it('should allow to create account with valid credentials', () => {
      signUpPage.visit();
      signUpPage.typeEmail(user.email)
      signUpPage.typePassword(user.password)
      signUpPage.repeatPassword(user.password)
      signUpPage.clickCreateAccountButton()
      profilePage.assertUrl()
      cy.logOut()
    })

    it('should not allow to create account if required fields are missing', ()=>{
        signUpPage.visit()
        signUpPage.clickCreateAccountButton()
        signUpPage.assertEmailErrors('Email is required')
        signUpPage.assertPasswordErrors('Password is required')
        signUpPage.assertRepeatPasswordErrors('Please repeat your password')
        signUpPage.assertUrl()
    })

    it('should not allow to create an account with an email in the wrong format', ()=>{
        cy.fixture('wrongFormatEmails').then((data)=>{
            const wrongEmails = data.wrongEmails;

            wrongEmails.forEach((email)=>{
                signUpPage.visit()
                signUpPage.typeEmail(email)
                signUpPage.typePassword(user.password)
                signUpPage.repeatPassword(user.password)
                signUpPage.clickCreateAccountButton()
                signUpPage.assertEmailErrors('Wrong email')
                signUpPage.assertUrl()
            })
        })
    })

    it('should not allow to create account with email that already exists', ()=>{
        cy.register(user.email, user.password)
        cy.logOut()
        signUpPage.visit();
        signUpPage.typeEmail(user.email)
        signUpPage.typePassword(user.password)
        signUpPage.repeatPassword(user.password)
        signUpPage.clickCreateAccountButton()
        signUpPage.assertEmailErrors('Email is already taken.')
        signUpPage.assertUrl()
    })

    it('should not allow to create account when password and repeated password do not match', ()=>{
        signUpPage.visit();
        signUpPage.typeEmail(user.email)
        signUpPage.typePassword(user.password)
        signUpPage.repeatPassword('wrongPass')
        signUpPage.clickCreateAccountButton()
        signUpPage.assertRepeatPasswordErrors('Please make sure your passwords match')
        signUpPage.assertUrl()
    })
  })
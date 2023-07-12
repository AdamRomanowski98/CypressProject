import PageObject from "../PageObject";
import CommonElements from './commonElements';

class signUpPage extends PageObject{

    url = '/sign-up';

    constructor() {
        super();
        this.commonElements = new CommonElements();
    }

    get repeatPasswordField(){
        return cy.get('#repeatPassword')
    }

    get signInButton(){
        return cy.contains('button', 'Create account')
    }

    get repeatPasswordContainer(){
        return cy.get('label[for="repeatPassword"]').parent('div')
    }

    typeEmail(email){
        this.commonElements.emailField.type(email)
    }

    typePassword(password){
        this.commonElements.passwordField.type(password)
    }
    
    repeatPassword(password){
        this.repeatPasswordField.type(password)
    }

    clickCreateAccountButton(){
        this.signInButton.click()
    }

    assertEmailErrors(errorMsg){
        this.commonElements.emailContainer.find(this.commonElements.fieldErrorMsg).should('contain', errorMsg)
    }

    assertPasswordErrors(errorMsg){
        this.commonElements.passwordContainer.find(this.commonElements.fieldErrorMsg).should('contain', errorMsg)
    }

    assertRepeatPasswordErrors(errorMsg){
        this.repeatPasswordContainer.find(this.commonElements.fieldErrorMsg).should('contain', errorMsg)
    } 
}

export default new signUpPage;
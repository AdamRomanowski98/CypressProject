import PageObject from "../PageObject";
import CommonElements from './commonElements';

class signInPage extends PageObject{
    url = '/sign-in';
    constructor() {
        super();
        this.commonElements = new CommonElements();
    }

    get signInButton(){
        return cy.contains('button', 'Sign In')
    }

    typeEmail(email){
        this.commonElements.emailField.type(email)
    }

    typePassword(password){
        this.commonElements.passwordField.type(password)
    }

    clickSignInBtn(){
        this.signInButton.click()
    }

    assertEmailErrors(errorMsg){
        this.commonElements.emailContainer.find(this.commonElements.fieldErrorMsg).should('contain', errorMsg)
    }

    assertPasswordErrors(errorMsg){
        this.commonElements.passwordContainer.find(this.commonElements.fieldErrorMsg).should('contain', errorMsg)
    }

}

export default new signInPage;
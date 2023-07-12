class CommonElements{
    fieldErrorMsg = '.FormField_metaBlock__phf9o';

    get emailField(){
        return cy.get('#email')
    }

    get passwordField(){
        return cy.get('#password')
    }

    get emailContainer(){
        return cy.get('label[for="email"]').parent('div')
    }

    get passwordContainer(){
        return cy.get('label[for="password"]').parent('div')
    }

    get emailContainer(){
        return cy.get('label[for="email"]').parent('div')
    }

    get passwordContainer(){
        return cy.get('label[for="password"]').parent('div')
    }

}

export default CommonElements;
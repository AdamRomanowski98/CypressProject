class PageObject {
    visit(url) {
      cy.visit(url || this.url);
    }

    assertUrl(){
     cy.url().should('include', this.url)
    }
  }
  
  export default PageObject;
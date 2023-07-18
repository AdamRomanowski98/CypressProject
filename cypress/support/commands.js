Cypress.Commands.add('logOut', ()=>{
    cy.request({
        method: 'POST',
        url: '/graphql',
        body: {
          operationName: 'logOut',
          variables: {},
          query: 'mutation logOut {\n logOut\n}\n'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
      });
})

Cypress.Commands.add('generateRandomUser', () => {
    let randomNumber = Math.floor(Math.random() * 100000) + 1;
    return {
      email: 'mateTest' + randomNumber + '@email.com',
      password: 'test123!',
    };
  });


Cypress.Commands.add('register', (email, password)=>{
    const payload = {
        query: `mutation signUp($email: String!, $password: String!, $repeatPassword: String!) {
          signUp(
            email: $email
            password: $password
            repeatPassword: $repeatPassword
          ) {
            id
            firstName
            lastName
            email
          }
        }`,
        variables: {
          email: email,
          password: password,
          repeatPassword: password
        }
      };

    cy.request({
        method: "POST",
        url: "/graphql",
        body: payload
      }).then((response) => {
        expect(response.status).to.eq(200)
      });
})


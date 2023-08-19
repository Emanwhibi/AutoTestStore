/// <reference types= "cypress" />
describe("creat an account", () => {
    it("should creat an account", () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/login");
        cy.get('#accountFrm > fieldset > .btn').click();
        cy.get('#AccountFrm_firstname').type('Eman');
        cy.get('#AccountFrm_lastname').type('Whibi');
        cy.get('#AccountFrm_email').type('emanwhibi26@gmail.com');
        cy.get('#AccountFrm_address_1').type('Jordan'); 
        cy.get('#AccountFrm_city').type("Irbid");
        cy.get('#AccountFrm_zone_id').type("Jordan");
        cy.get('#AccountFrm_postcode').type("20189");
        cy.get('#AccountFrm_country_id').type("Jordan");
        cy.get('#AccountFrm_loginname').type("Name");
        cy.get('#AccountFrm_password').type("*****");
        cy.get('#AccountFrm_password').type("*****");
        cy.get('#AccountFrm_newsletter1').click();
        cy.get('#AccountFrm_agree').click();
        cy.get('.col-md-2 > .btn').click();
      
    });
    it('should log in with a stored data', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login');
    
        cy.get('#loginFrm_loginname').type('username');
        cy.get('#loginFrm_password').type('password');
        cy.get('#loginFrm > fieldset > .btn').click();
    
        
      });

});

/// <reference types="cypress" />

describe("login Successfully And dd to cart ", () => {
  it("Add to cart ", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
    cy.findByPlaceholderText("Username").type("standard_user");
    cy.findByPlaceholderText("Password").type("secret_sauce");
    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/inventory.html");
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".btn_secondary").first().should("have.text", "REMOVE");
    cy.get(".btn_secondary").eq(1).should("have.text", "REMOVE");
    cy.get(".fa-layers-counter").should("have.length", "1");
    //   cy.get(".fa-layers-counter").should("have.text", "2");
  });
});

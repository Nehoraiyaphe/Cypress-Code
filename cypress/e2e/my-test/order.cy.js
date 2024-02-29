/// <reference types="cypress" />

describe("login And Order products Successfully", () => {
  it("Order products", () => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".svg-inline--fa ").click();
    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/checkout-step-one.html");
    cy.get("[data-test=firstName]").type("a");
    cy.get("[data-test=lastName]").type("b");
    cy.get("[data-test=postalCode]").type("123");
    cy.get(".btn_primary").click();
    cy.url("https://www.saucedemo.com/v1/checkout-step-two.html");
    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/checkout-step-two.html");
    cy.get(".complete-header").should("have.text", "THANK YOU FOR YOUR ORDER");
  });
});

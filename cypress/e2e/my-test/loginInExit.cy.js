/// <reference types="cypress" />

describe("login Successfully And Exit ", () => {
  it("Login In Exit ", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html");

    cy.findByPlaceholderText("Username").type("standard_user");
    cy.findByPlaceholderText("Password").type("secret_sauce");
    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");
    cy.get("[class=bm-burger-button]").click();
    cy.get("#logout_sidebar_link").click();
    cy.url("https://www.saucedemo.com/v1/index.html");
    cy.findByPlaceholderText("Username").should("have.text", "");
    cy.findByPlaceholderText("Password").should("have.text", "");
  });
});

/// <reference types="cypress" />

describe(" Try To login ", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
  });

  it("Login with an incorrect username ", () => {
    cy.findByPlaceholderText("Username").type("HI NEHORAI");
    cy.findByPlaceholderText("Password").type("secret_sauce");
    cy.get(".btn_action").click();
    cy.get('[data-test="error"]').should("exist");
  });

  it("Login with an incorrect password ", () => {
    cy.findByPlaceholderText("Username").type("standard_user");
    cy.findByPlaceholderText("Password").type("123abc");
    cy.get(".btn_action").click();
    cy.get('[data-test="error"]').should("exist");
  });

  it("Login with an empty username field ", () => {
    // cy.findByPlaceholderText("Username").clear();
    cy.findByPlaceholderText("Password").type("secret_sauce");
    cy.get(".btn_action").click();
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Epic sadface: Username is required"
    );
  });

  it("Login with an empty password field", () => {
    cy.findByPlaceholderText("Username").type("standard_user");
    // cy.findByPlaceholderText("Password").focus().type("{enter}");
    cy.get(".btn_action").click();
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Epic sadface: Password is required"
    );
  });
});

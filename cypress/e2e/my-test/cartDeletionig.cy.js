/// <reference types="cypress" />

describe("login Successfully And Cart deletion ", () => {
  it("Cart deletion ", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
    cy.findByPlaceholderText("Username").type("standard_user");
    cy.findByPlaceholderText("Password").type("secret_sauce");
    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/inventory.html");
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").eq(1).click();
    cy.get(".btn_primary").eq(3).click();
    cy.get(".bm-burger-button").click();
    cy.get("#reset_sidebar_link").click();
    cy.get(".fa-layers-counter").should("have.length", "0");
    cy.get("#inventory_sidebar_link").click();
    cy.get(".btn_primary ").first().should("have.text", "ADD TO CART");
    cy.get(".btn_primary").eq(1).should("have.text", "ADD TO CART");
    cy.get(".btn_primary").eq(3).should("have.text", "ADD TO CART");
    cy.get(".fa-layers-counter").should("not.exist");
  });
});

/// <reference types="cypress" />

describe("login Successfully", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
  });

  it("Cancel from cart", () => {
    cy.get(".btn_primary").first().click();
    cy.get(".inventory_item_name").first().click();
    cy.url("https://www.saucedemo.com/v1/inventory-item.html?id=4").should(
      "exist"
    );
    cy.get(".btn_secondary").should("have.text", "REMOVE").click();
    cy.get(".inventory_details_back_button").click({ force: true });
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");
    cy.get(".btn_primary").first().should("have.text", "ADD TO CART");
  });
});

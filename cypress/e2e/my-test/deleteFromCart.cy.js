describe("delete From Cart", () => {
  it("delete From Cart", () => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".svg-inline--fa ").click();
    cy.url("https://www.saucedemo.com/v1/cart.html");
    cy.get(".btn_secondary ").first().click();
    cy.get(".btn_secondary ").first().click();
    cy.get(".removed_cart_item").first().should("have.text", "");
    cy.get(".removed_cart_item").eq(1).should("have.text", "");
    cy.get(".btn_secondary").click();
    cy.url("https://www.saucedemo.com/v1/inventory.html");
    cy.get(".fa-layers-counter").should("not.exist");
  });
});

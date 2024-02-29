describe("delete From Cart", () => {
  it("delete From Cart", () => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".svg-inline--fa ").click();
    cy.url("https://www.saucedemo.com/v1/cart.html");
    cy.get(".bm-burger-button").click();
    cy.get("#reset_sidebar_link").click();
    cy.get("#inventory_sidebar_link").click();
    cy.get(".svg-inline--fa ").click();
    cy.url("https://www.saucedemo.com/v1/cart.html");
    cy.get(".cart_quantity_label").should("have.text", "QTY");
    cy.get(".cart_desc_label").should("have.text", "DESCRIPTION");
  });
});

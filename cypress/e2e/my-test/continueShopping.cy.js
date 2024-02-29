describe("continue Shopping", () => {
  it("continue Shopping", () => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
    cy.get(".svg-inline--fa ").click();
    cy.url("https://www.saucedemo.com/v1/cart.html");
    cy.get(".btn_secondary").click();
    cy.url("https://www.saucedemo.com/v1/inventory.html");
  });
});

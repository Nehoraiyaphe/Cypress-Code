describe("login Successfully", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
  });

  it("Sort From A To Z", () => {
    cy.get(".product_sort_container")
      .select("Name (A to Z)")
      .should("have.value", "az");
    cy.get(".inventory_item_name")
      .first()
      .should("have.text", "Sauce Labs Backpack");
    cy.get(".inventory_item_name")
      .last()
      .should("have.text", "Test.allTheThings() T-Shirt (Red)");
  });

  it("Sort From Z To A", () => {
    cy.get(".product_sort_container")
      .select("Name (Z to A)")
      .should("have.value", "za");
    cy.get(".inventory_item_name")
      .first()
      .should("have.text", "Test.allTheThings() T-Shirt (Red)");
    cy.get(".inventory_item_name")
      .last()
      .should("have.text", "Sauce Labs Backpack");
  });

  it("Sort Price From Low To High", () => {
    cy.get(".product_sort_container")
      .select("Price (low to high)")
      .should("have.value", "lohi");
    cy.get(".inventory_item_price").first().should("have.text", "$7.99");
    cy.get(".inventory_item_price").last().should("have.text", "$49.99");
  });

  it("Sort Price From High To Low", () => {
    cy.get(".product_sort_container")
      .select("Price (high to low)")
      .should("have.value", "hilo");
    cy.get(".inventory_item_price").first().should("have.text", "$49.99");
    cy.get(".inventory_item_price").last().should("have.text", "$7.99");
  });
});

/// <reference types="cypress" />

const user = {
  tenant: "admin",
  username: "test1",
  email: "test1@email.com",
  password: "test1",
}
const appID = "45c62df9-ddd6-4744-84d6-50a2d549289d"

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8088/");
  });

  it("Login Page", () => {
    cy.get('[data-cy="portal_auth_login_form_tenantList"]').should("have.text", user.tenant);
    cy.get('[data-cy="portal_auth_login_form_email"]').should("be.visible").type(user.email);
    cy.get('[data-cy="portal_auth_login_form_password"]').should("be.visible").type(user.password);
    cy.get('[data-cy="portal_auth_login_form_submit"]').should("be.visible").click();
    cy.get('[view_id="user_icon"]').should("be.visible").click();
    cy.get('[data-cy="user_profile"]').should("be.visible").click();
    cy.get('[view_id="portal_work_user_profile_window_dataEmail"]').should("have.text", user.email);
    cy.get('[view_id="portal_work_user_profile_window"]').find('button[class="webix_button webix_img_btn"]').eq(0).should("be.visible").click();
    cy.get('[data-cy="portal_work_menu_sidebar"]').should("be.visible").should("be.visible").click();;
    cy.get(`[data-cy="${appID}"]`).should("be.visible").click();
    cy.get('[data-cy="tab Homes d86538b7-d394-4d9c-b7b9-8cf717d304e7 4d0bcb94-bb0d-4179-a325-be1cf7f92399"]').click();
    cy.get('[data-cy="ABViewGrid_6aac7a56-c849-4833-bc7d-85dbadf649be_datatable"]').find(".webix_column").eq(0).should("have.text", "admin");
    cy.get('[data-cy="ABViewGrid_6aac7a56-c849-4833-bc7d-85dbadf649be_datatable"]').find(".wxi-pencil").click({ force: true });
    cy.get('[data-cy="string Home Name 0bcd1570-a629-4a8c-a45c-e3d0de1035b9 8fa8f903-866a-4ca3-a81b-c0249f9b96af"]').clear().type("test2");
    cy.get('[data-cy="button save 8fa8f903-866a-4ca3-a81b-c0249f9b96af"]').click();
    cy.get('[data-cy="ABViewGrid_6aac7a56-c849-4833-bc7d-85dbadf649be_datatable"]').find(".webix_column").eq(0).should("have.text", "test2");
    cy.get('[data-cy="ABViewGrid_6aac7a56-c849-4833-bc7d-85dbadf649be_datatable"]').find(".wxi-pencil").click({ force: true });
    cy.get('[data-cy="string Home Name 0bcd1570-a629-4a8c-a45c-e3d0de1035b9 8fa8f903-866a-4ca3-a81b-c0249f9b96af"]').clear().type("admin");
    cy.get('[data-cy="button save 8fa8f903-866a-4ca3-a81b-c0249f9b96af"]').click();
    cy.get('[data-cy="ABViewGrid_6aac7a56-c849-4833-bc7d-85dbadf649be_datatable"]').find(".webix_column").eq(0).should("have.text", "admin");
  });
})

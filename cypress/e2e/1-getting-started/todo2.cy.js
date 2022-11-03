/// <reference types="cypress" />

const user = {
  tenant: "admin",
  email: "test2@email.com",
  username: "test2",
  password: "test2",
};
const appID = "45c62df9-ddd6-4744-84d6-50a2d549289d";

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8088/')
  })

  it("Login Page", () => {
    cy.get('[data-cy="portal_auth_login_form_tenantList"]').should("have.text", user.tenant);
    cy.get('[data-cy="portal_auth_login_form_email"]').should("be.visible").type(user.email);
    cy.get('[data-cy="portal_auth_login_form_password"]').should("be.visible").type(user.password);
    cy.get('[data-cy="portal_auth_login_form_submit"]').should("be.visible").click();
    cy.get('[view_id="user_icon"]').should("be.visible").click();
    cy.get('[data-cy="user_profile"]').should("be.visible").click();
    cy.get('[view_id="portal_work_user_profile_window_dataEmail"]').should("have.text", user.email);
    cy.get('[view_id="portal_work_user_profile_window"]').find('button[class="webix_button webix_img_btn"]').eq(0).should("be.visible").click();
    cy.get('[data-cy="portal_work_menu_sidebar"]').should("be.visible").click();
    cy.get(`[data-cy="${appID}"]`).should("be.visible").click();
    cy.get('[data-cy="tab Homes d86538b7-d394-4d9c-b7b9-8cf717d304e7 4d0bcb94-bb0d-4179-a325-be1cf7f92399"]').click();
    cy.get('[data-cy="ABViewGrid_6aac7a56-c849-4833-bc7d-85dbadf649be_datatable"]').find(".webix_column").eq(0).should("have.text", user.username);
    cy.get('[data-cy="ABViewGrid_6aac7a56-c849-4833-bc7d-85dbadf649be_datatable"]').find(".webix_column").eq(0).should("have.text", "admin");
  });
})

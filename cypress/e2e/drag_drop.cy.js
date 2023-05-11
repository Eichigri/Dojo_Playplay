describe('template spec', () => {
        before(() => {
                cy.clearCookies();
                cy.visit('/');
                cy.get('#axeptio_btn_acceptAll').click();
                cy.get('#log_in_link').click();
                cy.fixture('dataUser').then(user => {
                        cy.get('#email').type(user.email);
                        cy.get('#password').type(user.password);
                });
                cy.get('[data-cy="authForm_submit_button"]').click();
                cy.wait(7000);

        })
        it('Créer une vidéo et la télécharger', () => {
                cy.get('.pp__start-from-scratch-card').click();
                cy.wait(6000);
                // Soucis click simple / double ?
                cy.get('.pp__screens-timeline__add-screen-cta > .ds__button-wrapper').click();
                //cy.get('.pp__screens-timeline__add-screen-cta > .ds__button-wrapper').click();
                cy.get(':nth-child(1) > .pp__add-a-new-screen-screens-list__category-screens > :nth-child(9) > .pp__add-a-new-screen-catalog-item > .pp__add-a-new-screen-catalog-item__cover').click();
                cy.get('[data-cy="projectNavBar_title_textInput"]').type("Groupe 1 - Cypress");
                cy.get('[data-cy="settingsPanel_library_button"]').click();
                cy.get('[data-cy="library_enterpriseStock_tab"]').click();
                cy.get('[data-heap-label="pp__stock-filters__gif"]').click();
                cy.get('[data-placeholder="New store opening"]').type("Github (encore) en panne");
                cy.get('.search-input__input').type("cartman rage");
                cy.get(".search-input__icon").click();
                cy.get(':nth-child(1) > .media-thumbnail > .media-wrapper > .media-title-tooltip > .media-image-item').trigger('dragstart');
                cy.get('.upload-container')
                  .trigger('dragenter', { force: true })
                  .trigger('dragover', { force: true })
                  .trigger('drop', { force: true })
                cy.get('[data-cy="mediaEdition_keepSize_toggle"] > .ds__switcher__bar').click();
                cy.get('[data-cy="mediaEditionModal_save_button"]').click();
                // SI on veut une deuxième vidéo (plus tard)
                // cy.get(".add-a-media__button-container > .has-tooltip").click();
                // cy.get('.search-input__input').clear();
                // cy.get('.search-input__input').type("issou");
                // cy.get(".search-input__icon").click();
                // cy.get(':nth-child(4) > .media-thumbnail > .media-wrapper > .media-title-tooltip > .media-image-item').trigger('dragstart');
                // cy.get('.upload-container')
                //   .trigger('dragenter', { force: true })
                //   .trigger('dragover', { force: true })
                //   .trigger('drop', { force: true })
                // cy.get('[data-cy="mediaEdition_keepSize_toggle"] > .ds__switcher__bar').click();
                // cy.get('[data-cy="mediaEditionModal_save_button"]').click();
                cy.get('[data-heap-label="pp__generate-button__button-action-medium"]').click();
                cy.get('[data-cy="globalPreview_generate_button"]').click();
                cy.get('[data-cy="projectView_approvalProcessGetApproval_button"]', { timeout: 20000}).should("be.visible").click();
                cy.get('[data-cy="modal_confirm_button"]', { timeout: 15000}).should("be.visible").click();
                cy.get('.pp__projects-list > :nth-child(1)').should("contain", "Groupe 1 - Cypress");
                cy.get(':nth-child(1) > .pp__media-card__content-wrapper > .pp__media-card__content-container > .pp__project-card__draft-thumbnail-container > .pp__project-card__thumbnail').click();
                cy.get('[data-cy="shareLink_approvalProcessApprove_button"]').should("be.visible").click();
                cy.get('[data-cy="modal_confirm_button"]').should("be.visible").click();
                cy.get('.pp__projects-list > :nth-child(1)').should("contain", "Groupe 1 - Cypress");
                cy.get('.pp__project-card__video').click();
                cy.get('[data-cy="projectView_download_button"]').click();
        })
})
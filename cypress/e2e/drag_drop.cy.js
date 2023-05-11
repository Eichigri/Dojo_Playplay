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
                cy.wait(4000);
                // Soucis click simple / double ?
                cy.get('.pp__screens-timeline__add-screen-cta > .ds__button-wrapper').click();
                //cy.get('.pp__screens-timeline__add-screen-cta > .ds__button-wrapper').click();
                cy.get(':nth-child(1) > .pp__add-a-new-screen-screens-list__category-screens > :nth-child(8) > .pp__add-a-new-screen-catalog-item > .pp__add-a-new-screen-catalog-item__cover').click();
                cy.get('[data-cy="projectNavBar_title_textInput"]').type("Groupe 1 - Cypress");
                cy.get('[data-cy="settingsPanel_library_button"]').click();
                cy.get('[data-cy="library_enterpriseStock_tab"]').click();
                cy.get('[data-heap-label="pp__stock-filters__gif"]').click();
                cy.get('.search-input__input').type("panda");
                cy.get(".search-input__icon").click();
                cy.get(':nth-child(3) > .media-thumbnail > .media-wrapper > .media-title-tooltip > .media-image-item').drag('.upload-container');
                cy.wait(2000);
                cy.get('[data-cy="mediaEdition_keepSize_toggle"] > .ds__switcher__bar').click();
                cy.get('[data-cy="mediaEditionModal_save_button"]').click();
        })
})
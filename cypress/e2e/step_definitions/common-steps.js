/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { SignUpPage } from "../../support/pageObjects/sign-up.page";
import { MainPage } from "../../support/pageObjects/main.page";
import { GlobalPage } from "../../support/pageObjects/global.page";
import { PartnerPage } from "../../support/pageObjects/partner.page";
import { ThanksPage } from "../../support/pageObjects/thanks.page";

const mainPage = new MainPage();
const signUpPage = new SignUpPage();
const globalPage = new GlobalPage();
const partnerPage = new PartnerPage();
const thanksPage = new ThanksPage();

// Common steps

Given("A user open site's home page", () => {
    mainPage.navigate();
});
Then(/^A user redirected to the page with Thank you message$/, () => {
    thanksPage.validateThanksMessageExist(($message) => {
        expect($message.text()).to.have.string("Thank you.");
    });
});

// Register form common steps

When(/^A user click Sign Up link$/, () => {
    mainPage.clickSignUpLink();
});
When(/^A user type their email in Email field$/, () => {
    signUpPage.typeEmail();
});
When(/^A user type their first name in the First Name field$/, () => {
    signUpPage.typeFirstName();
});
When(/^A user type their last name in the Last Name field$/, () => {
    signUpPage.typeLastName();
});
When(/^A user type password in the Password field$/, () => {
    signUpPage.typePassword();
});
When(/^A user check Terms & Conditions Box$/, () => {
    signUpPage.checkTermsConditionsBox();
});
When(/^A user click Sign up Button$/, () => {
    signUpPage.clickSingUpBtn();
});

// Global coverage form common steps

When(/^A user scroll down the page to the center$/, () => {
    cy.scrollTo("center");
});
When(/^A user click the Global Coverage Button$/, () => {
    mainPage.clickGlobalCoverageBtn();
});
When(/^A user see First Name field is displayed on the page$/, () => {
    globalPage.getFirstNameField().should("exist");
});
When(/^A user type their First Name$/, () => {
    globalPage.typeFirstName();
});
When(/^A user type their Last Name$/, () => {
    globalPage.typeLastName();
});
When(/^A user type their email in the Business Email field$/, () => {
    globalPage.typeBusinessEmail();
});
When(/^A user click the Submit Button$/, () => {
    globalPage.clickSubmitButton();
});

// Testing recieve a call form

When(/^A user type Bell Company name$/, () => {
    mainPage.typeBellCompanyName();
});
When(/^A user type Mobile phone$/, () => {
    mainPage.typeMobilePhone();
});
When(/^A user type Email$/, () => {
    mainPage.typeEmail();
});
When(/^A user check Terms and Conditions Box$/, () => {
    mainPage.checkTermsAndCondBox();
});
When(/^A user click My Build Voice Bot button$/, () => {
    mainPage.clickBuildMyVoiceBotBtn();
});

// Become a partner

When(/^A user click Why Telnyx Button$/, () => {
    mainPage.clickWhyTelnyxBtn();
});
When(/^A user Partners Link$/, () => {
    mainPage.clickPartnersLink({ force: true });
});
When(/^A user scroll donw to see Become a Partner form$/, () => {
    cy.scrollTo("0%", "75%");
});
When(/^A user type Company Name$/, () => {
    partnerPage.typeCompanyName();
});
When(/^A user select Country extension number$/, () => {
    partnerPage.selectCountry();
    return true;
});
When(/^A user choose Partner Type Option$/, () => {
    partnerPage.getPartnerTypeOption();
});
When(/^A user type additional info$/, () => {
    partnerPage.typeAddInfoRequest();
    return true;
});

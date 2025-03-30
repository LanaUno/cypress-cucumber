/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
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

When("A user open site's home page", () => {
  mainPage.navigate();
});

Then(/^A user redirected to the page with Thank you message$/, () => {
  thanksPage.validateThanksMessageExist(($message) => {
    expect($message.text()).to.have.string("Thank you.");
  });
});

// Register form common steps

Then(/^A user click Sign Up link$/, () => {
  mainPage.clickSignUpLink();
});
Then(/^A user type their email in Email field$/, () => {
  signUpPage.typeEmail();
});
Then(/^A user type their first name in the First Name field$/, () => {
  signUpPage.typeFirstName();
});
Then(/^A user type their last name in the Last Name field$/, () => {
  signUpPage.typeLastName();
});
Then(/^A user type password in the Password field$/, () => {
  signUpPage.typePassword();
});
Then(/^A user check Terms & Conditions Box$/, () => {
  signUpPage.checkTermsConditionsBox();
});
Then(/^A user click Sign up Button$/, () => {
  signUpPage.clickSingUpBtn();
});

// Global coverage form common steps

Then(/^A user scroll down the page to the center$/, () => {
  cy.scrollTo("center");
});
Then(/^A user click the Global Coverage Button$/, () => {
  mainPage.clickGlobalCoverageBtn();
});
Then(/^First Name field is displayed on the page$/, () => {
  globalPage.getFirstNameField().should("exist");
});
Then(/^A user type their First Name$/, () => {
  globalPage.typeFirstName();
});
Then(/^A user type their Last Name$/, () => {
  globalPage.typeLastName();
});
Then(/^A user type their email in the Business Email field$/, () => {
  globalPage.typeBusinessEmail();
});
Then(/^A user click the Submit Button$/, () => {
  globalPage.clickSubmitButton();
});

// Testing recieve a call form

Then(/^A user type Bell Company name$/, () => {
  mainPage.typeBellCompanyName();
});
Then(/^A user type Mobile phone$/, () => {
  mainPage.typeMobilePhone();
});
Then(/^A user type Email$/, () => {
  mainPage.typeEmail();
});
Then(/^A user check Terms and Conditions Box$/, () => {
  mainPage.checkTermsAndCondBox();
});
Then(/^A user click My Build Voice Bot button$/, () => {
  mainPage.clickBuildMyVoiceBotBtn();
});

// Become a partner

Then(/^A user click Why Telnyx Button$/, () => {
  mainPage.clickWhyTelnyxBtn();
});
Then(/^A user Partners Link$/, () => {
  mainPage.clickPartnersLink({ force: true });
});
Then(/^A user scroll donw to see Become a Partner form$/, () => {
  cy.scrollTo("0%", "75%");
});
Then(/^A user type Company Name$/, () => {
  partnerPage.typeCompanyName();
});
Then(/^A user select Country extension number$/, () => {
  partnerPage.selectCountry();
  return true;
});
Then(/^A user choose Partner Type Option$/, () => {
  partnerPage.getPartnerTypeOption();
});
Then(/^A user type additional info$/, () => {
  partnerPage.typeAddInfoRequest();
  return true;
});

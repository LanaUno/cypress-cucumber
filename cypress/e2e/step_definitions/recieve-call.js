/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../../support/pageObjects/main.page";

const mainPage = new MainPage();

// Fill the form with wrong Domain type

Then(/^A user type Domain name in wrong format$/, () => {
    mainPage.typeWrongDomain();
});
Then(/^A user get the Error message about wrong Domain$/, () => {
    mainPage.validateDomainNameErrMsg(($message) => {
        expect($message.text()).to.eq("Please enter a valid Domain name.");
    });
});
Then(/^A user see Error message abour wrong password Domain is in red color$/, () => {
    mainPage.validateDomainNameErrMsgColor();
});
Then(/^A user see Domain field has red border color$/, () => {
    mainPage.validateDomainNameBorderColor();
});

// Fill the form with no checked Captcha

Then(/^A user type Domain name$/, () => {
    mainPage.typeDomainName();
});
Then(/^A user redirected to the Sorry Error message page$/, () => {
    mainPage.validateSorryErrMsg(($message) => {
        expect($message.text()).to.eq("Sorry, there was an error");
    });
});

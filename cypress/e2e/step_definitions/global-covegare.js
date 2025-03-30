/// <reference types="cypress" />
import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { GlobalPage } from "../../support/pageObjects/global.page";

const globalPage = new GlobalPage();

// Explore Global Coverage form with invalid email format

Then(/^A user type their email in wrong format$/, () => {
  globalPage.typeWrongEmailFormat();
});
Then(/^A user get a message about invalid email input$/, () => {
  globalPage.validateErrEmailMsg(($message) => {
    expect($message.text()).to.eq("Must be valid email");
  });
});

// Explore Global Coverage form with empty first name field

Then(/^Warning message about the Error in First Name$/, () => {
  globalPage.validateErrFirstNameMsg(($message) => {
    expect($message.text()).to.eq("This field is required.");
  });
});
Then(/^Warning message about the Error in First Name printed in red$/, () => {
  globalPage.validateErrFirstNameMsgColor();
});

// Explore Global Coverage form with empty last name field

Then(/^Warning message about the Error in Last Name$/, () => {
  globalPage.validateErrLastNameMsg(($message) => {
    expect($message.text()).to.eq("This field is required.");
  });
});
Then(/^Warning message about the Error in Last Name printed in red$/, () => {
  globalPage.validateErrLastNameMsgColor();
});

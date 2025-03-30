/// <reference types="cypress" />
import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { PartnerPage } from "../../support/pageObjects/partner.page";

const partnerPage = new PartnerPage();

// Too long Phone Number in Become a Partner Form

Then(/^A user type too long phone number$/, () => {
  partnerPage.typeLongPhoneNumber();
});
Then(/^A user get warning message about phone number length$/, () => {
  partnerPage.validateInvalidPhoneMsg(($message) => {
    expect($message.text()).to.eq(
      "Phone numbers can have a maximum of 15 digits."
    );
  });
});
Then(/^Warning message abour phone number length is in red color$/, () => {
  partnerPage.validateInvalidPhoneMsgColor();
});

// Become a partner

Then(/^A user type valid phone number$/, () => {
  partnerPage.typePhoneNumber();
});

// Wrong email format in Become a Partner Form

Then(/^A user type invalid email$/, () => {
  partnerPage.typeWrongEmailFormat();
});
Then(/^A user get Error message about invalid email$/, () => {
  partnerPage.verifyInvalidEmailMsg(($message) => {
    expect($message.text()).to.eq("Must be valid email");
  });
});
Then(/^Error message about invalid email printed in red$/, () => {
  partnerPage.verifyInvalidEmailMsgColor();
});
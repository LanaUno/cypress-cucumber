/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SignUpPage } from "../../support/pageObjects/sign-up.page";

const signUpPage = new SignUpPage();

// Register an account with password less then 12 characters long

Then(/^A user type short password in the Password field$/, () => {
    signUpPage.typeShortPassword();
});
Then(/^A user get warning message about the wrong password format$/, () => {
    signUpPage.validatePaswErrorLengthMsg(($message) => {
        expect($message.text()).to.eq(
            "Password must be at least 12 characters."
        );
    });
});
Then(/^A user see warning message abour wrong password format is in red color$/, () => {
    signUpPage.validatePaswErrorMsgColor();
});
Then(/^A user see Password field has red border color$/, () => {
    signUpPage.validatePaswErrBorderColorField();
});

// Register an account with empty First Name field

Then(/^A user get warning message about the Error in First Name$/, () => {
    signUpPage.validateFirstNameErrMgs(($message) => {
        expect($message.text()).to.eq("This field is required");
    });
});
Then(
    /^A user see warning message about the Error in First Name is printed in red$/,
    () => {
        signUpPage.validateFirstNameErrMgsColor();
    }
);
Then(/^A user see First Name field has red border color$/, () => {
    signUpPage.validateFirstNameErrBorderColor();
});

// Register an account with empty Last Name field

Then(/^A user get warning message about the Error in Last Name$/, () => {
    signUpPage.validateLastNameErrMgs(($message) => {
        expect($message.text()).to.eq("This field is required");
    });
});
Then(/^A user see warning message about the Error in Last Name is printed in red$/, () => {
    signUpPage.validateLastNameErrMgsColor();
});
Then(/^A user see Last Name field has red border color$/, () => {
    signUpPage.validateLastNameErrBorderColor();
});

// Register with password contains no upper-case letter

Then(/^A user type invalid password in the Password field$/, () => {
    signUpPage.typeNoUpperCasePsw();
});
Then(/^A user get Error message password have no upper-case letter$/, () => {
    signUpPage.verifyNoUpperCaseErrMsg(($message) => {
        expect($message.text()).to.eq(
            "Password must contain at least one upper-case letter."
        );
    });
});
Then(
    /^A user see Error message password have no upper-case letter is printed in red color$/,
    () => {
        signUpPage.verifyNoUpperCaseErrMsgColor();
    }
);

// Register an account with not accepted Terms & Conditions

Then(/^A user get Error message Terms & Conditions is not accepted$/, () => {
    signUpPage.verifyTermsCondErrMsg(($message) => {
        expect($message.text()).to.have.string(
            "Please accept the terms and conditions"
        );
    });
});
Then(
    /^A user see Error message Terms & Conditions is not accepted is printed in red color$/,
    () => {
        signUpPage.verifyTermsCondErrMsgColor();
    }
);

// Register an account with invalid email

Then(/^A user type invalid email in the Email field$/, () => {
    signUpPage.typeInvalidEmail();
});
Then(/^A user get Error message about wrong email format$/, () => {
    signUpPage.verifyEmailErrMsg(($message) => {
        expect($message.text()).to.eq(
            "That email and password combination is not valid"
        );
    });
});
Then(/^A user see Error message about wrong email format is printed in red color$/, () => {
    signUpPage.verifyEmailErrMsgColor();
});

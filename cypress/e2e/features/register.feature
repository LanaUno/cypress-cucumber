Feature: Testing register form

  Scenario: Register an account with password less then 12 characters long
    When A user open site's home page
    Then A user click Sign Up link
    Then A user type their email in Email field
    Then A user type their first name in the First Name field
    Then A user type their last name in the Last Name field
    Then A user type short password in the Password field
    Then A user check Terms & Conditions Box
    Then A user click Sign up Button
    Then A user get warning message about the wrong password format
    Then Warning message abour wrong password format is in red color
    Then Password field has red border color

  Scenario: Register an account with empty First Name field
    When A user open site's home page
    Then A user click Sign Up link
    Then A user type their email in Email field
    Then A user type their last name in the Last Name field
    Then A user type password in the Password field
    Then A user check Terms & Conditions Box
    Then A user click Sign up Button
    Then A user get warning message about the Error in First Name
    Then Warning message about the Error in First Name is printed in red
    Then First Name field has red border color

  Scenario: Register an account with empty Last Name field
    When A user open site's home page
    Then A user click Sign Up link
    Then A user type their email in Email field
    Then A user type their first name in the First Name field
    Then A user type password in the Password field
    Then A user check Terms & Conditions Box
    Then A user click Sign up Button
    Then A user get warning message about the Error in Last Name
    Then Warning message about the Error in Last Name is printed in red
    Then Last Name field has red border color

  Scenario: Register with password contains no upper-case letter
    When A user open site's home page
    Then A user click Sign Up link
    Then A user type their email in Email field
    Then A user type their first name in the First Name field
    Then A user type their last name in the Last Name field
    Then A user type invalid password in the Password field
    Then A user check Terms & Conditions Box
    Then A user click Sign up Button
    Then A user get Error message password have no upper-case letter
    Then Error message password have no upper-case letter is printed in red color
    Then Password field has red border color

  Scenario: Register an account with not accepted Terms & Conditions
    When A user open site's home page
    Then A user click Sign Up link
    Then A user type their email in Email field
    Then A user type their first name in the First Name field
    Then A user type their last name in the Last Name field
    Then A user type password in the Password field
    Then A user click Sign up Button
    Then A user get Error message Terms & Conditions is not accepted
    Then Error message Terms & Conditions is not accepted is printed in red color

  Scenario: Register an account with invalid email
    When A user open site's home page
    Then A user click Sign Up link
    Then A user type invalid email in the Email field
    Then A user type their first name in the First Name field
    Then A user type their last name in the Last Name field
    Then A user type password in the Password field
    Then A user check Terms & Conditions Box
    Then A user click Sign up Button
    Then A user get Error message about wrong email format
    Then Error message about wrong email format is printed in red color

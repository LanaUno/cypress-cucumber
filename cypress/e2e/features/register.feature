Feature: Testing register form

  Scenario: Register an account with password less then 12 characters long
    Given A user open site's home page
    When A user click Sign Up link
    And A user type their email in Email field
    And A user type their first name in the First Name field
    And A user type their last name in the Last Name field
    And A user type short password in the Password field
    And A user check Terms & Conditions Box
    And A user click Sign up Button
    Then A user get warning message about the wrong password format
    And A user see warning message abour wrong password format is in red color
    And A user see Password field has red border color

  Scenario: Register an account with empty First Name field
    Given A user open site's home page
    When A user click Sign Up link
    And A user type their email in Email field
    And A user type their last name in the Last Name field
    And A user type password in the Password field
    And A user check Terms & Conditions Box
    And A user click Sign up Button
    Then A user get warning message about the Error in First Name
    And A user see warning message about the Error in First Name is printed in red
    And A user see First Name field has red border color

  Scenario: Register an account with empty Last Name field
    Given A user open site's home page
    When A user click Sign Up link
    And A user type their email in Email field
    And A user type their first name in the First Name field
    And A user type password in the Password field
    And A user check Terms & Conditions Box
    And A user click Sign up Button
    Then A user get warning message about the Error in Last Name
    And A user see warning message about the Error in Last Name is printed in red
    And A user see Last Name field has red border color

  Scenario: Register with password contains no upper-case letter
    Given A user open site's home page
    When A user click Sign Up link
    And A user type their email in Email field
    And A user type their first name in the First Name field
    And A user type their last name in the Last Name field
    And A user type invalid password in the Password field
    And A user check Terms & Conditions Box
    And A user click Sign up Button
    Then A user get Error message password have no upper-case letter
    And A user see Error message password have no upper-case letter is printed in red color
    And A user see Password field has red border color

  Scenario: Register an account with not accepted Terms & Conditions
    Given A user open site's home page
    When A user click Sign Up link
    And A user type their email in Email field
    And A user type their first name in the First Name field
    And A user type their last name in the Last Name field
    And A user type password in the Password field
    And A user click Sign up Button
    Then A user get Error message Terms & Conditions is not accepted
    And A user see Error message Terms & Conditions is not accepted is printed in red color

  Scenario: Register an account with invalid email
    Given A user open site's home page
    When A user click Sign Up link
    And A user type invalid email in the Email field
    And A user type their first name in the First Name field
    And A user type their last name in the Last Name field
    And A user type password in the Password field
    And A user check Terms & Conditions Box
    And A user click Sign up Button
    Then A user get Error message about wrong email format
    And A user see Error message about wrong email format is printed in red color

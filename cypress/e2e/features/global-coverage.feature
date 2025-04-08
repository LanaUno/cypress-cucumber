Feature: Testing Global coverage form

  Scenario: Explore Global coverage form
    Given A user open site's home page
    And A user scroll down the page to the center
    When A user click the Global Coverage Button
    And A user see First Name field is displayed on the page
    And A user type their First Name
    And A user type their Last Name
    And A user type their email in the Business Email field
    And A user click the Submit Button
    Then A user redirected to the page with Thank you message

  Scenario: Explore Global Coverage form with invalid email format
    Given A user open site's home page
    And A user scroll down the page to the center
    When A user click the Global Coverage Button
    And A user see First Name field is displayed on the page
    And A user type their First Name
    And A user type their Last Name
    And A user type their email in wrong format
    And A user click the Submit Button
    Then A user get a message about invalid email input

  Scenario: Explore Global Coverage form with empty first name field
    Given A user open site's home page
    And A user scroll down the page to the center
    When A user click the Global Coverage Button
    And A user see First Name field is displayed on the page
    And A user type their Last Name
    And A user type their email in the Business Email field
    And A user click the Submit Button
    Then A user see warning message about the Error in First Name
    And A user see warning message about the Error in First Name printed in red

  Scenario: Explore Global Coverage form with empty last name field
    Given A user open site's home page
    And A user scroll down the page to the center
    When A user click the Global Coverage Button
    And A user see First Name field is displayed on the page
    And A user type their First Name
    And A user type their email in the Business Email field
    And A user click the Submit Button
    Then A user see warning message about the Error in Last Name
    And A user see warning message about the Error in Last Name printed in red

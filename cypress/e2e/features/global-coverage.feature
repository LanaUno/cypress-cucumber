Feature: Testing Global coverage form

  Scenario: Explore Global coverage form
    When A user open site's home page
    Then A user scroll down the page to the center
    Then A user click the Global Coverage Button
    Then First Name field is displayed on the page
    Then A user type their First Name
    Then A user type their Last Name
    Then A user type their email in the Business Email field
    Then A user click the Submit Button
    Then A user redirected to the page with Thank you message

  Scenario: Explore Global Coverage form with invalid email format
    When A user open site's home page
    Then A user scroll down the page to the center
    Then A user click the Global Coverage Button
    Then First Name field is displayed on the page
    Then A user type their First Name
    Then A user type their Last Name
    Then A user type their email in wrong format
    Then A user click the Submit Button
    Then A user get a message about invalid email input

  Scenario: Explore Global Coverage form with empty first name field
    When A user open site's home page
    Then A user scroll down the page to the center
    Then A user click the Global Coverage Button
    Then First Name field is displayed on the page
    Then A user type their Last Name
    Then A user type their email in the Business Email field
    Then A user click the Submit Button
    Then Warning message about the Error in First Name
    Then Warning message about the Error in First Name printed in red

  Scenario: Explore Global Coverage form with empty last name field
    When A user open site's home page
    Then A user scroll down the page to the center
    Then A user click the Global Coverage Button
    Then First Name field is displayed on the page
    Then A user type their First Name
    Then A user type their email in the Business Email field
    Then A user click the Submit Button
    Then Warning message about the Error in Last Name
    Then Warning message about the Error in Last Name printed in red

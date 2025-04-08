Feature: Testing Become a parnter form

  Scenario: Too long Phone Number in Become a Partner Form
    Given A user open site's home page
    And A user click Why Telnyx Button
    When A user Partners Link
    And A user scroll donw to see Become a Partner form
    And A user type their First Name
    And A user type their Last Name
    And A user type Company Name
    And A user type their email in the Business Email field
    And A user select Country extension number
    And A user type too long phone number
    And A user choose Partner Type Option
    And A user type additional info
    And A user click the Submit Button
    Then A user get warning message about phone number length
    And A user see warning message abour phone number length is in red color

  Scenario: Become a Partner
    Given A user open site's home page
    And A user click Why Telnyx Button
    When A user Partners Link
    And A user scroll donw to see Become a Partner form
    And A user type their First Name
    And A user type their Last Name
    And A user type Company Name
    And A user type their email in the Business Email field
    And A user select Country extension number
    And A user type valid phone number
    And A user choose Partner Type Option
    And A user type additional info
    And A user click the Submit Button
    Then A user redirected to the page with Thank you message

  Scenario: Wrong email format in Become a Partner Form
    Given A user open site's home page
    And A user click Why Telnyx Button
    When A user Partners Link
    And A user scroll donw to see Become a Partner form
    And A user type their First Name
    And A user type their Last Name
    And A user type Company Name
    And A user type invalid email
    And A user select Country extension number
    And A user type valid phone number
    And A user choose Partner Type Option
    And A user type additional info
    And A user click the Submit Button
    Then A user get Error message about invalid email
    And A user see Error message about invalid email printed in red

Feature: Testing Become a parnter form

  Scenario: Too long Phone Number in Become a Partner Form
    When A user open site's home page
    Then A user click Why Telnyx Button
    Then A user Partners Link
    Then A user scroll donw to see Become a Partner form
    Then A user type their First Name
    Then A user type their Last Name
    Then A user type Company Name
    Then A user type their email in the Business Email field
    Then A user select Country extension number
    Then A user type too long phone number
    Then A user choose Partner Type Option
    Then A user type additional info
    Then A user click the Submit Button
    Then A user get warning message about phone number length
    Then Warning message abour phone number length is in red color

  Scenario: Become a Partner
    When A user open site's home page
    Then A user click Why Telnyx Button
    Then A user Partners Link
    Then A user scroll donw to see Become a Partner form
    Then A user type their First Name
    Then A user type their Last Name
    Then A user type Company Name
    Then A user type their email in the Business Email field
    Then A user select Country extension number
    Then A user type valid phone number
    Then A user choose Partner Type Option
    Then A user type additional info
    Then A user click the Submit Button
    Then A user redirected to the page with Thank you message

  Scenario: Wrong email format in Become a Partner Form
    When A user open site's home page
    Then A user click Why Telnyx Button
    Then A user Partners Link
    Then A user scroll donw to see Become a Partner form
    Then A user type their First Name
    Then A user type their Last Name
    Then A user type Company Name
    Then A user type invalid email
    Then A user select Country extension number
    Then A user type valid phone number
    Then A user choose Partner Type Option
    Then A user type additional info
    Then A user click the Submit Button
    Then A user get Error message about invalid email
    Then Error message about invalid email printed in red

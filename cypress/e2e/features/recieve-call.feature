Feature: Testing Receive a call from Telnyx form

  Scenario: Fill the form with wrong Domain type
    Given A user open site's home page
    When A user type Bell Company name
    And A user type Domain name in wrong format
    And A user type Mobile phone
    And A user type Email
    And A user check Terms and Conditions Box
    And A user click My Build Voice Bot button
    Then A user get the Error message about wrong Domain
    And A user see Error message abour wrong password Domain is in red color
    And A user see Domain field has red border color

  Scenario: Fill the form with no checked Captcha
    Given A user open site's home page
    When A user type Bell Company name
    And A user type Domain name
    And A user type Mobile phone
    And A user type Email
    And A user check Terms and Conditions Box
    And A user click My Build Voice Bot button
    Then A user redirected to the Sorry Error message page

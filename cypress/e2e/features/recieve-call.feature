Feature: Testing Receive a call from Telnyx form

  Scenario: Fill the form with wrong Domain type
    When A user open site's home page
    Then A user type Bell Company name
    Then A user type Domain name in wrong format
    Then A user type Mobile phone
    Then A user type Email
    Then A user check Terms and Conditions Box
    Then A user click My Build Voice Bot button
    Then A user get the Error message about wrong Domain
    Then Error message abour wrong password Domain is in red color
    Then Domain field has red border color

  Scenario: Fill the form with no checked Captcha
    When A user open site's home page
    Then A user type Bell Company name
    Then A user type Domain name
    Then A user type Mobile phone
    Then A user type Email
    Then A user check Terms and Conditions Box
    Then A user click My Build Voice Bot button
    Then A user redirected to the Sorry Error message page

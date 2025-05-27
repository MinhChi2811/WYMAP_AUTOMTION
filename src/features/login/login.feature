@login
Feature: Login to the admin portal

Scenario: As an admin, I can login the admin portal successfully
  # Given I go to the dashboard page
  Given I go to the login page
  When I enter the email "ptmchi@tma.com.vn"
  Then I enter the password "123456789"
  When I click the login button
  Then I login successfully
 





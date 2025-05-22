
@login
Feature: Login to the admin portal

Scenario: As an admin, I can login the admin portal successfully
   Given I go to the admin portal URL 
   When I enter the valid email
   Then I enter the valid password
   When I click the login button
   Then I login successfully

# @createJob

# Scenario: As an admin, I can create a new local Job
#    Given I go to the Jobs list page
#    When I click the Create Job big button
#    Then I select the city
#    When I select the type
#    Then I enter the Requester Name
#    When I select the customer
#    Then I select the cargo type
#    When I select the driver name
#    Then I select the CTO 
#    When I select the pick up location
#    Then I select the drop off location
#    When I click the pre-load charge checkbox
#    Then I fill the job description
#    When I click the Create Job small button
#    Then I can see a new job has created successfully
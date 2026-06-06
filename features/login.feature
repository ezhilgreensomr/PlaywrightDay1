Feature: Validate The Facebook Login Page

@Smoke
Scenario: Validation Of Facebook Login Page Using Invalid Username and Password
When User Enters Invalid Username and Password
And User Clicks On the Login Button
Then User Validates the Error message after the login
 
@Regression
Scenario: Validation Of Facebook Login Page Using Valid Username and Password
When User Enters Valid Username and Password
And User Clicks On the Login Button
Then User Should Navigates to Home Page



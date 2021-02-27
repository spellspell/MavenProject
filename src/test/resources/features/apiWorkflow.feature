#Author :Instructor
  @apiWorkflow
  Feature: Syntax HRMS API Workflow
    Description:This feature file tests Syntax HRMS API WrokFlow

  Background:
    Given a JWT is generated

    Scenario: Creating an Employee
      Given a request is prepared to create an employee
      When a POST call is made to create an Employee
      Then the status code for creating an employee is 201
      And the employee is created
      And the employeeID is stored in the global variable to be used for other calls



$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/apiWorkflow.feature");
formatter.feature({
  "name": "Syntax HRMS API Workflow",
  "description": "    Description:This feature file tests Syntax HRMS API WrokFlow",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.api.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating an Employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to create an employee",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.a_request_is_prepared_to_create_an_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a POST call is made to create an Employee",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.a_POST_call_is_made_to_create_an_Employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code for creating an employee is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_status_code_for_creating_an_employee_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee is created contains key \"Message\" and value \"Entry Created\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_employee_is_created_contains_key_and_value(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employeeID \"Employee[0].employee_id\" is stored in the global variable to be used for other calls",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_employeeID_is_stored_in_the_global_variable_to_be_used_for_other_calls(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.api.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieving the created employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to retrieve the created employee",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.a_request_is_prepared_to_retrieve_the_created_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a GET call is made to retrieve the created Employee",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.a_GET_call_is_made_to_retrieve_the_created_Employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code for retrieving the created employee is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_status_code_for_retrieving_the_created_employee_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the retrieved EmployeeID \"employee[0].employee_id\" matches the globally stored EmployeeID",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_retrieved_EmployeeID_matches_the_globally_stored_EmployeeID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the retrieved data matches the data used to create the employee",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_retrieved_data_matches_the_data_used_to_create_the_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.api.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Update the created Employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to update the created employee",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.a_request_is_prepared_to_update_the_created_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a PUT call is made to update the employee",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.a_PUT_call_is_made_to_update_the_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the updated employee contains key \"Message\" and value \"Entry updated\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_updated_employee_contains_key_and_value(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.api.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieving the updated employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to retrieve the updated employee",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.a_request_is_prepared_to_retrieve_the_updated_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a GET call is made to retrieve the updated Employee",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.a_GET_call_is_made_to_retrieve_the_updated_Employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code for retrieving the updated employee is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_status_code_for_retrieving_the_updated_employee_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the retrieved Employee_Middle_Name \"employee[0].emp_middle_name\" matches the globally sotred employee middle name",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_retrieved_Employee_Middle_Name_matches_the_globally_sotred_employee_middle_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.api.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Partially updating the employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is preapared to partially update the employee",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.a_request_is_preapared_to_partially_update_the_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a PATCH call is made to partially update the employee",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.a_PATCH_call_is_made_to_partially_update_the_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the partailly updated employee contains key \"Message\" and value \"Entry updated\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_partailly_updated_employee_contains_key_and_value(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the partially update employee \"employee[0].emp_firstname\" matches the globally stored employee first name",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.api.apiTestingFinalSteps.the_partially_update_employee_matches_the_globally_stored_employee_middle_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});
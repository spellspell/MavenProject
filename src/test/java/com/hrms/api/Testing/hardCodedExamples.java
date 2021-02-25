package com.hrms.api.Testing;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;
import org.junit.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.CoreMatchers.*;
//import static org.hamcrest.Matcher.*;

//given()
//when()
//then()


public class hardCodedExamples {

    String baseURI = RestAssured.baseURI = "http://3.237.189.167/syntaxapi/api";
    String token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTQxOTU1MDMsImlzcyI6ImxvY2FsaG9zdCIsImV4cCI6MTYxNDIzODcwMywidXNlcklkIjoiMjQ3NyJ9.4W9GJlXQ4GwZGoMx-RJHOIMw4P0R85QiX-mkwAmqxDo";

    @Test
    public void sampleTest() {
//        RestAssured.baseURI = "http://3.237.189.167/syntaxapi/api";
//        String token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTQxMjY1NDEsImlzcyI6ImxvY2FsaG9zdCIsImV4cCI6MTYxNDE2OTc0MSwidXNlcklkIjoiMjQ3NyJ9.HF6XbGuiUjAo8xa1r6Ttum7lUO6Ww32NXK4xRJ8vINo";
        //presparing request to get one employee
        RequestSpecification preparingGetOneEmployeeRequest = given().header("Authorization", token)
                .header("Content-Type", "Application/json")
                .queryParam("employee_id", "13001").log().all();
        //sending the request to the endpoint
        Response getOneEmployeeResponse = preparingGetOneEmployeeRequest.when().get("/getOneEmployee.php");
        //print the response
        getOneEmployeeResponse.prettyPrint();

        //Assert that status code is 200
        getOneEmployeeResponse.then().assertThat().statusCode(200);

    }


    @Test
    public void aPostCreateEmployee() {
        //Preparing Create an Employee Request
        RequestSpecification createEmployeeRequest = given().header("Authorization", token)
                .header("Content-Type", "Application/json").body("{\n" +
                        "  \"emp_firstname\": \"Mariii\",\n" +
                        "  \"emp_lastname\": \"Romaniuk\",\n" +
                        "  \"emp_middle_name\": null,\n" +
                        "  \"emp_gender\": \"F\",\n" +
                        "  \"emp_birthday\": \"2021-02-11\",\n" +
                        "  \"emp_status\": \"employee\",\n" +
                        "  \"emp_job_title\": \"IT Analyst\"\n" +
                        "}");


        //Making a Post call to Create Employee
        Response createEmployeeResponse = createEmployeeRequest.when().post("/createEmployee.php");
        //Printing the Employee Id
        createEmployeeResponse.prettyPrint();
        //Assert that status code is 201
        createEmployeeResponse.then().assertThat().statusCode(201);
        //Get Employee_id
        String employeeID = createEmployeeResponse.jsonPath().getString("Employee[0].employee_id");
        // Print EmployeeId
        System.out.println(employeeID);
        //Assert that message contains Entry Created
        createEmployeeResponse.then().assertThat().body("Message", equalTo("Entry Created"));

        //Assert that Employee Id is 15845A
        createEmployeeResponse.then().assertThat().body("Employee[0].emp_firstname", equalTo("Mariii"));

    }

    @Test
    public void bGetCreatedEmployee(){
        RequestSpecification getCreatedEmployee = given().header("Authorization",token)
                .header("Content-Type","Application/json")
                .queryParam("employee_id","15862A");
        Response getEmployeeResponse = getCreatedEmployee.when().get("/getOneEmployee.php");
        getEmployeeResponse.prettyPrint();
        // printing whole body
        System.out.println(getEmployeeResponse.getBody().asString());
        // getting empID
        String empID = getEmployeeResponse.body().jsonPath().getString("employee[0].employee_id");
        // printing empID
        System.out.println(getEmployeeResponse.body().jsonPath().getString("employee[0].employee_id"));
        // we are checking if the empID is the same as in the String
        boolean verifyEmployeeID = empID.equalsIgnoreCase("15862A");
        System.out.println(verifyEmployeeID);
        // Assert.assertTrue(verifyEmployeeID);
        getEmployeeResponse.then().assertThat().body("employee[0].employee_id",equalTo("15862A"));
    }


}

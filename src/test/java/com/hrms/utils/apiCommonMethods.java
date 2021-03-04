package com.hrms.utils;

import com.hrms.api.generateTokenSteps;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

public class apiCommonMethods {




public static RequestSpecification getOneEmployeeRequest(String token, String employeeID) {

    return given().header(apiConstants.Header_Content_type, "application/json")
            .header(apiConstants.Header_Authorization,token)
            .queryParam("employee_id", employeeID).log().all();
    }

}

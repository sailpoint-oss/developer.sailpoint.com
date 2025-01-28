---
id: sod-violations
title: SODViolations
pagination_label: SODViolations
sidebar_label: SODViolations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SODViolations', 'SODViolations'] 
slug: /tools/sdk/powershell/v3/methods/sod-violations
tags: ['SDK', 'Software Development Kit', 'SODViolations', 'SODViolations']
---


# SODViolations

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Start-PredictSodViolations**](#start-predict-sod-violations) | **POST** `/sod-violations/predict` | Predict SOD violations for identity.
[**Start-ViolationCheck**](#start-violation-check) | **POST** `/sod-violations/check` | Check SOD violations


## start-predict-sod-violations

This API is used to check if granting some additional accesses would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentityWithNewAccess | [**IdentityWithNewAccess**](../models/identity-with-new-access) | True  | 

### Return type

[**ViolationPrediction**](../models/violation-prediction)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Violation Contexts | ViolationPrediction
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$IdentityWithNewAccess = @"{
  "identityId" : "2c91808568c529c60168cca6f90c1313",
  "accessRefs" : [ {
    "type" : "ENTITLEMENT",
    "id" : "2c918087682f9a86016839c050861ab1",
    "name" : "CN=Information Access,OU=test,OU=test-service,DC=TestAD,DC=local"
  }, {
    "type" : "ENTITLEMENT",
    "id" : "2c918087682f9a86016839c0509c1ab2",
    "name" : "CN=Information Technology,OU=test,OU=test-service,DC=TestAD,DC=local"
  } ]
}"@
# Predict SOD violations for identity.
try {
    $Result = ConvertFrom-JsonToIdentityWithNewAccess -Json $IdentityWithNewAccess
    Start-PredictSodViolations-IdentityWithNewAccess $Result
    
    # Below is a request that includes all optional parameters
    # Start-PredictSodViolations -IdentityWithNewAccess $IdentityWithNewAccess  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-PredictSodViolations"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## start-violation-check

This API initiates a SOD policy verification asynchronously.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentityWithNewAccess1 | [**IdentityWithNewAccess1**](../models/identity-with-new-access1) | True  | 

### Return type

[**SodViolationCheck**](../models/sod-violation-check)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Request ID with a timestamp. | SodViolationCheck
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$IdentityWithNewAccess1 = @"{identityId=2c91808568c529c60168cca6f90c1313, accessRefs=[{type=ENTITLEMENT, id=2c918087682f9a86016839c050861ab1, name=CN=Information Access,OU=test,OU=test-service,DC=TestAD,DC=local}, {type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2, name=CN=Information Technology,OU=test,OU=test-service,DC=TestAD,DC=local}], clientMetadata={additionalProp1=string, additionalProp2=string, additionalProp3=string}}"@
# Check SOD violations
try {
    $Result = ConvertFrom-JsonToIdentityWithNewAccess1 -Json $IdentityWithNewAccess1
    Start-ViolationCheck-IdentityWithNewAccess1 $Result
    
    # Below is a request that includes all optional parameters
    # Start-ViolationCheck -IdentityWithNewAccess1 $IdentityWithNewAccess1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-ViolationCheck"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 



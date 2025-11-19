---
id: beta-connector-rule-management
title: ConnectorRuleManagement
pagination_label: ConnectorRuleManagement
sidebar_label: ConnectorRuleManagement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorRuleManagement', 'BetaConnectorRuleManagement'] 
slug: /tools/sdk/powershell/beta/methods/connector-rule-management
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleManagement', 'BetaConnectorRuleManagement']
---

# ConnectorRuleManagement
  Use this API to implement connector rule management functionality. 
With this functionality in place, administrators can implement connector-executed rules in a programmatic, scalable way. 

In Identity Security Cloud (ISC), [rules](https://developer.sailpoint.com/docs/extensibility/rules) serve as a flexible configuration framework you can leverage to perform complex or advanced configurations. 
[Connector-executed rules](https://developer.sailpoint.com/docs/extensibility/rules/connector-rules) are rules that are executed in the ISC virtual appliance (VA), usually extensions of the [connector](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) itself, the bridge between the data source and ISC. 
This API allows administrators to view existing connector-executed rules, make changes to them, delete them, and create new ones from the available types.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaConnectorRule**](#create-connector-rule) | **POST** `/connector-rules` | Create connector rule
[**Remove-BetaConnectorRule**](#delete-connector-rule) | **DELETE** `/connector-rules/{id}` | Delete a connector-rule
[**Get-BetaConnectorRule**](#get-connector-rule) | **GET** `/connector-rules/{id}` | Connector-rule by id
[**Get-BetaConnectorRuleList**](#get-connector-rule-list) | **GET** `/connector-rules` | List connector rules
[**Update-BetaConnectorRule**](#update-connector-rule) | **PUT** `/connector-rules/{id}` | Update a connector rule
[**Confirm-BetaConnectorRule**](#validate-connector-rule) | **POST** `/connector-rules/validate` | Validate connector rule


## create-connector-rule
Creates a new connector rule.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-connector-rule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ConnectorRuleCreateRequest | [**ConnectorRuleCreateRequest**](../models/connector-rule-create-request) | True  | The connector rule to create

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The created connector rule | ConnectorRuleResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ConnectorRuleCreateRequest = @"{
  "sourceCode" : {
    "version" : "1.0",
    "script" : "return \"Mr. \" + firstName;"
  },
  "signature" : {
    "output" : {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    },
    "input" : [ {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    }, {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    } ]
  },
  "name" : "WebServiceBeforeOperationRule",
  "description" : "This rule does that",
  "attributes" : { },
  "type" : "BuildMap"
}"@

# Create connector rule

try {
    $Result = ConvertFrom-BetaJsonToConnectorRuleCreateRequest -Json $ConnectorRuleCreateRequest
    New-BetaConnectorRule -ConnectorRuleCreateRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaConnectorRule -ConnectorRuleCreateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaConnectorRule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-connector-rule
Deletes the connector rule specified by the given ID.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-connector-rule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector rule to delete

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | ID of the connector rule to delete

# Delete a connector-rule

try {
    Remove-BetaConnectorRule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaConnectorRule -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaConnectorRule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-rule
Returns the connector rule specified by ID.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-connector-rule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector rule to retrieve

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Connector rule with the given ID | ConnectorRuleResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | ID of the connector rule to retrieve

# Connector-rule by id

try {
    Get-BetaConnectorRule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaConnectorRule -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaConnectorRule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-rule-list
Returns the list of connector rules.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-connector-rule-list)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**ConnectorRuleResponse[]**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of connector rules | ConnectorRuleResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# List connector rules

try {
    Get-BetaConnectorRuleList 
    
    # Below is a request that includes all optional parameters
    # Get-BetaConnectorRuleList  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaConnectorRuleList"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-connector-rule
Updates an existing connector rule with the one provided in the request body. Note that the fields 'id', 'name', and 'type' are immutable.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-connector-rule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector rule to update
 Body  | ConnectorRuleUpdateRequest | [**ConnectorRuleUpdateRequest**](../models/connector-rule-update-request) |   (optional) | The connector rule with updated data

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated connector rule | ConnectorRuleResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | ID of the connector rule to update
$ConnectorRuleUpdateRequest = @"{
  "sourceCode" : {
    "version" : "1.0",
    "script" : "return \"Mr. \" + firstName;"
  },
  "signature" : {
    "output" : {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    },
    "input" : [ {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    }, {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    } ]
  },
  "name" : "WebServiceBeforeOperationRule",
  "description" : "This rule does that",
  "attributes" : { },
  "id" : "8113d48c0b914f17b4c6072d4dcb9dfe",
  "type" : "BuildMap"
}"@

# Update a connector rule

try {
    Update-BetaConnectorRule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Update-BetaConnectorRule -Id $Id -ConnectorRuleUpdateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaConnectorRule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## validate-connector-rule
Returns a list of issues within the code to fix, if any.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/validate-connector-rule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SourceCode | [**SourceCode**](../models/source-code) | True  | The code to validate

### Return type
[**ConnectorRuleValidationResponse**](../models/connector-rule-validation-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The status of the code&#39;s eligibility as a connector rule | ConnectorRuleValidationResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceCode = @"{
  "version" : "1.0",
  "script" : "return \"Mr. \" + firstName;"
}"@

# Validate connector rule

try {
    $Result = ConvertFrom-BetaJsonToSourceCode -Json $SourceCode
    Confirm-BetaConnectorRule -SourceCode $Result 
    
    # Below is a request that includes all optional parameters
    # Confirm-BetaConnectorRule -SourceCode $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Confirm-BetaConnectorRule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

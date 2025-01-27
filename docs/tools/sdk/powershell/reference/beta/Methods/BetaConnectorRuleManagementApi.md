---
id: beta-connector-rule-management
title: ConnectorRuleManagement
pagination_label: ConnectorRuleManagement
sidebar_label: ConnectorRuleManagement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorRuleManagement'] 
slug: /tools/sdk/powershell/beta/methods/connector-rule-management
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleManagement']
---


# ConnectorRuleManagement

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaConnectorRule**](#create-connector-rule) | **POST** `/connector-rules` | Create Connector Rule
[**Remove-BetaConnectorRule**](#delete-connector-rule) | **DELETE** `/connector-rules/{id}` | Delete a Connector-Rule
[**Get-BetaConnectorRule**](#get-connector-rule) | **GET** `/connector-rules/{id}` | Connector-Rule by ID
[**Get-BetaConnectorRuleList**](#get-connector-rule-list) | **GET** `/connector-rules` | List Connector Rules
[**Update-BetaConnectorRule**](#update-connector-rule) | **PUT** `/connector-rules/{id}` | Update a Connector Rule
[**Confirm-BetaConnectorRule**](#validate-connector-rule) | **POST** `/connector-rules/validate` | Validate Connector Rule


## create-connector-rule

Creates a new connector rule.
A token with ORG_ADMIN authority is required to call this API.

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
# Create Connector Rule
try {
    $Result = ConvertFrom-JsonToConnectorRuleCreateRequest -Json $ConnectorRuleCreateRequest
    New-BetaConnectorRule-BetaConnectorRuleCreateRequest $Result
    
    # Below is a request that includes all optional parameters
    # New-BetaConnectorRule -BetaConnectorRuleCreateRequest $ConnectorRuleCreateRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaConnectorRule"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-connector-rule

Deletes the connector rule specified by the given ID.
A token with ORG_ADMIN authority is required to call this API.

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
# Delete a Connector-Rule
try {
    Remove-BetaConnectorRule-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaConnectorRule -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaConnectorRule"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-connector-rule

Returns the connector rule specified by ID.
A token with ORG_ADMIN authority is required to call this API.

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
# Connector-Rule by ID
try {
    Get-BetaConnectorRule-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaConnectorRule -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaConnectorRule"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-connector-rule-list

Returns the list of connector rules.
A token with ORG_ADMIN authority is required to call this API.

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
# List Connector Rules
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
# Update a Connector Rule
try {
    Update-BetaConnectorRule-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Update-BetaConnectorRule -BetaId $Id -BetaConnectorRuleUpdateRequest $ConnectorRuleUpdateRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaConnectorRule"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## validate-connector-rule

Returns a list of issues within the code to fix, if any.
A token with ORG_ADMIN authority is required to call this API.

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
# Validate Connector Rule
try {
    $Result = ConvertFrom-JsonToSourceCode -Json $SourceCode
    Confirm-BetaConnectorRule-BetaSourceCode $Result
    
    # Below is a request that includes all optional parameters
    # Confirm-BetaConnectorRule -BetaSourceCode $SourceCode  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Confirm-BetaConnectorRule"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 



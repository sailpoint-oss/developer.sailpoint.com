---
id: v2025-connector-rule-management
title: ConnectorRuleManagement
pagination_label: ConnectorRuleManagement
sidebar_label: ConnectorRuleManagement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorRuleManagement', 'V2025ConnectorRuleManagement'] 
slug: /tools/sdk/powershell/v2025/methods/connector-rule-management
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleManagement', 'V2025ConnectorRuleManagement']
---

# ConnectorRuleManagement
  Use this API to implement connector rule management functionality. 
With this functionality in place, administrators can implement connector-executed rules in a programmatic, scalable way. 

In Identity Security Cloud (ISC), [rules](https://developer.sailpoint.com/docs/extensibility/rules) serve as a flexible configuration framework you can leverage to perform complex or advanced configurations. 
[Connector-executed rules](https://developer.sailpoint.com/docs/extensibility/rules/connector-rules) are rules that are executed in the ISC virtual appliance (VA), usually extensions of the [connector](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) itself, the bridge between the data source and ISC. 

This API allows administrators to view existing connector-executed rules, make changes to them, delete them, and create new ones from the available types.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025ConnectorRule**](#create-connector-rule) | **POST** `/connector-rules` | Create connector rule
[**Remove-V2025ConnectorRule**](#delete-connector-rule) | **DELETE** `/connector-rules/{id}` | Delete connector rule
[**Get-V2025ConnectorRule**](#get-connector-rule) | **GET** `/connector-rules/{id}` | Get connector rule
[**Get-V2025ConnectorRuleList**](#get-connector-rule-list) | **GET** `/connector-rules` | List connector rules
[**Send-V2025ConnectorRule**](#put-connector-rule) | **PUT** `/connector-rules/{id}` | Update connector rule
[**Test-V2025ConnectorRule**](#test-connector-rule) | **POST** `/connector-rules/validate` | Validate connector rule


## create-connector-rule
Create a connector rule from the available types.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-connector-rule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ConnectorRuleCreateRequest | [**ConnectorRuleCreateRequest**](../models/connector-rule-create-request) | True  | Connector rule to create.

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created connector rule. | ConnectorRuleResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
    $Result = ConvertFrom-V2025JsonToConnectorRuleCreateRequest -Json $ConnectorRuleCreateRequest
    New-V2025ConnectorRule -ConnectorRuleCreateRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025ConnectorRule -ConnectorRuleCreateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025ConnectorRule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-connector-rule
Delete the connector rule for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-connector-rule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector rule to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | ID of the connector rule to delete.

# Delete connector rule

try {
    Remove-V2025ConnectorRule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025ConnectorRule -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025ConnectorRule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-rule
Get a connector rule by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-connector-rule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector rule to get.

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Connector rule with the given ID. | ConnectorRuleResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | ID of the connector rule to get.

# Get connector rule

try {
    Get-V2025ConnectorRule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ConnectorRule -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ConnectorRule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-rule-list
List existing connector rules.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-connector-rule-list)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**ConnectorRuleResponse[]**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of connector rules. | ConnectorRuleResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 50 # Int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List connector rules

try {
    Get-V2025ConnectorRuleList 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ConnectorRuleList -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ConnectorRuleList"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-connector-rule
Update an existing connector rule with the one provided in the request body. These fields are immutable: `id`, `name`, `type`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-connector-rule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector rule to update.
 Body  | ConnectorRuleUpdateRequest | [**ConnectorRuleUpdateRequest**](../models/connector-rule-update-request) |   (optional) | Connector rule with updated data.

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated connector rule. | ConnectorRuleResponse
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
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | ID of the connector rule to update.
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

# Update connector rule

try {
    Send-V2025ConnectorRule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Send-V2025ConnectorRule -Id $Id -ConnectorRuleUpdateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2025ConnectorRule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-connector-rule
Detect issues within the connector rule's code to fix and list them.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/test-connector-rule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SourceCode | [**SourceCode**](../models/source-code) | True  | Code to validate.

### Return type
[**ConnectorRuleValidationResponse**](../models/connector-rule-validation-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the code&#39;s eligibility as a connector rule. | ConnectorRuleValidationResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
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
    $Result = ConvertFrom-V2025JsonToSourceCode -Json $SourceCode
    Test-V2025ConnectorRule -SourceCode $Result 
    
    # Below is a request that includes all optional parameters
    # Test-V2025ConnectorRule -SourceCode $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-V2025ConnectorRule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

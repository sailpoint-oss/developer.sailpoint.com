---
id: v2024-machine-classification-config
title: MachineClassificationConfig
pagination_label: MachineClassificationConfig
sidebar_label: MachineClassificationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineClassificationConfig', 'V2024MachineClassificationConfig'] 
slug: /tools/sdk/powershell/v2024/methods/machine-classification-config
tags: ['SDK', 'Software Development Kit', 'MachineClassificationConfig', 'V2024MachineClassificationConfig']
---

# MachineClassificationConfig
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-V2024MachineClassificationConfig**](#delete-machine-classification-config) | **DELETE** `/sources/{sourceId}/machine-classification-config` | Delete source&#39;s classification config
[**Get-V2024MachineClassificationConfig**](#get-machine-classification-config) | **GET** `/sources/{sourceId}/machine-classification-config` | Machine classification config for source
[**Set-V2024MachineClassificationConfig**](#set-machine-classification-config) | **PUT** `/sources/{sourceId}/machine-classification-config` | Update source&#39;s classification config


## delete-machine-classification-config
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-machine-classification-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.

# Delete source's classification config

try {
    Remove-V2024MachineClassificationConfig -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024MachineClassificationConfig -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024MachineClassificationConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-classification-config
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-machine-classification-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID

### Return type
[**MachineClassificationConfig**](../models/machine-classification-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Config Object | MachineClassificationConfig
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID

# Machine classification config for source

try {
    Get-V2024MachineClassificationConfig -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024MachineClassificationConfig -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024MachineClassificationConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-machine-classification-config
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-machine-classification-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID.
 Body  | MachineClassificationConfig | [**MachineClassificationConfig**](../models/machine-classification-config) | True  | 

### Return type
[**MachineClassificationConfig**](../models/machine-classification-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Machine Classification Config Object. | MachineClassificationConfig
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$MachineClassificationConfig = @"{
  "criteria" : {
    "children" : [ {
      "children" : [ {
        "children" : [ "children", "children" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      }, {
        "children" : [ "children", "children" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      } ],
      "caseSensitive" : false,
      "dataType" : "dataType",
      "attribute" : "employeeType",
      "operation" : "EQUALS",
      "value" : "SERVICE"
    }, {
      "children" : [ {
        "children" : [ "children", "children" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      }, {
        "children" : [ "children", "children" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      } ],
      "caseSensitive" : false,
      "dataType" : "dataType",
      "attribute" : "employeeType",
      "operation" : "EQUALS",
      "value" : "SERVICE"
    } ],
    "caseSensitive" : false,
    "dataType" : "dataType",
    "attribute" : "distinguishedName",
    "operation" : "EQUALS",
    "value" : "OU=Service Accounts"
  },
  "created" : "2017-07-11T18:45:37.098Z",
  "modified" : "2018-06-25T20:22:28.104Z",
  "classificationMethod" : "SOURCE",
  "enabled" : true
}"@

# Update source's classification config

try {
    $Result = ConvertFrom-JsonToMachineClassificationConfig -Json $MachineClassificationConfig
    Set-V2024MachineClassificationConfig -Id $Id -MachineClassificationConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Set-V2024MachineClassificationConfig -Id $Id -MachineClassificationConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-V2024MachineClassificationConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

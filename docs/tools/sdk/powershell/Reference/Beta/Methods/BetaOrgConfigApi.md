---
id: beta-org-config
title: OrgConfig
pagination_label: OrgConfig
sidebar_label: OrgConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OrgConfig', 'BetaOrgConfig'] 
slug: /tools/sdk/powershell/beta/methods/org-config
tags: ['SDK', 'Software Development Kit', 'OrgConfig', 'BetaOrgConfig']
---

# OrgConfig
  Use this API to implement organization configuration functionality. 
Administrators can use this functionality to manage organization settings, such as time zones.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaOrgConfig**](#get-org-config) | **GET** `/org-config` | Get Org configuration settings
[**Get-BetaValidTimeZones**](#get-valid-time-zones) | **GET** `/org-config/valid-time-zones` | Get list of time zones
[**Update-BetaOrgConfig**](#patch-org-config) | **PATCH** `/org-config` | Patch an Org configuration property


## get-org-config
Get org configuration with only external (org admin) accessible properties for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-org-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**OrgConfig**](../models/org-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. | OrgConfig
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

# Get Org configuration settings

try {
    Get-BetaOrgConfig 
    
    # Below is a request that includes all optional parameters
    # Get-BetaOrgConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaOrgConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-valid-time-zones
Get a list of valid time zones that can be set in org configurations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-valid-time-zones)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
**String[]**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request successful | String[]
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

# Get list of time zones

try {
    Get-BetaValidTimeZones 
    
    # Below is a request that includes all optional parameters
    # Get-BetaValidTimeZones  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaValidTimeZones"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-org-config
Patch configuration of the current org using http://jsonpatch.com/ syntax.  Commonly used for changing the time zone of an org.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-org-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**OrgConfig**](../models/org-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Org was successfully patched. | OrgConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Patch an Org configuration property

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaOrgConfig -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaOrgConfig -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaOrgConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

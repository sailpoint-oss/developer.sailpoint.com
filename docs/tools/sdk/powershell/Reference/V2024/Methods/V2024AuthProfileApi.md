---
id: v2024-auth-profile
title: AuthProfile
pagination_label: AuthProfile
sidebar_label: AuthProfile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AuthProfile', 'V2024AuthProfile'] 
slug: /tools/sdk/powershell/v2024/methods/auth-profile
tags: ['SDK', 'Software Development Kit', 'AuthProfile', 'V2024AuthProfile']
---

# AuthProfile
  Use this API to implement Auth Profile functionality. 
With this functionality in place, users can read authentication profiles and make changes to them. 

An authentication profile represents an identity profile&#39;s authentication configuration. 
When the identity profile is created, its authentication profile is also created. 
An authentication profile includes information like its authentication profile type (&#x60;BLOCK&#x60;, &#x60;MFA&#x60;, &#x60;NON_PTA&#x60;, PTA&#x60;) and settings controlling whether or not it blocks access from off network or untrusted geographies. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2024ProfileConfig**](#get-profile-config) | **GET** `/auth-profiles/{id}` | Get Auth Profile
[**Get-V2024ProfileConfigList**](#get-profile-config-list) | **GET** `/auth-profiles` | Get list of Auth Profiles
[**Update-V2024ProfileConfig**](#patch-profile-config) | **PATCH** `/auth-profiles/{id}` | Patch a specified Auth Profile


## get-profile-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns auth profile information.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-profile-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | ID of the Auth Profile to patch.

### Return type
[**AuthProfile**](../models/auth-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Auth Profile | AuthProfile
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "2c91808a7813090a017814121919ecca" # String | ID of the Auth Profile to patch.

# Get Auth Profile

try {
    Get-V2024ProfileConfig -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ProfileConfig -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ProfileConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-profile-config-list
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of auth profiles.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-profile-config-list)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**AuthProfileSummary[]**](../models/auth-profile-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Auth Profiles | AuthProfileSummary[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get list of Auth Profiles

try {
    Get-V2024ProfileConfigList -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ProfileConfigList -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ProfileConfigList"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-profile-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API updates an existing Auth Profile. The following fields are patchable:
**offNetwork**, **untrustedGeography**, **applicationId**, **applicationName**, **type**

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-profile-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Auth Profile to patch.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
[**AuthProfile**](../models/auth-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the Auth Profile as updated. | AuthProfile
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121919ecca" # String | ID of the Auth Profile to patch.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | 
 

# Patch a specified Auth Profile

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024ProfileConfig -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2024ProfileConfig -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024ProfileConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

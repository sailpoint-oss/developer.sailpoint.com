---
id: auth-users
title: AuthUsers
pagination_label: AuthUsers
sidebar_label: AuthUsers
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AuthUsers'] 
slug: /tools/sdk/powershell/v3/methods/auth-users
tags: ['SDK', 'Software Development Kit', 'AuthUsers']
---


# AuthUsers

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-AuthUser**](#get-auth-user) | **GET** `/auth-users/{id}` | Auth User Details
[**Update-AuthUser**](#patch-auth-user) | **PATCH** `/auth-users/{id}` | Auth User Update


## get-auth-user

Return the specified user's authentication system details.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Identity ID

### Return type

[**AuthUser**](../models/auth-user)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The specified user&#39;s authentication system details. | AuthUser
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity ID
# Auth User Details
try {
    Get-AuthUser-Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-AuthUser -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AuthUser"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-auth-user

Use a PATCH request to update an existing user in the authentication system.
Use this endpoint to modify these fields: 
  * `capabilities`

A '400.1.1 Illegal update attempt' detail code indicates that you attempted to PATCH a field that is not allowed.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Identity ID
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type

[**AuthUser**](../models/auth-user)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Auth user updated. | AuthUser
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity ID
 # JsonPatchOperation[] | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Auth User Update
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-AuthUser-Id $Id -JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-AuthUser -Id $Id -JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AuthUser"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 



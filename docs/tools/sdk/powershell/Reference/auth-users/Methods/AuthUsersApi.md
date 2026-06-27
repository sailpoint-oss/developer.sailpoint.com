---
id: auth-users
title: AuthUsers
pagination_label: AuthUsers
sidebar_label: AuthUsers
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AuthUsers', 'AuthUsers'] 
slug: /tools/sdk/powershell/authusers/methods/auth-users
tags: ['SDK', 'Software Development Kit', 'AuthUsers', 'AuthUsers']
---

# AuthUsers
  Use this API to implement user authentication system functionality. 
With this functionality in place, users can get a user&#39;s authentication system details, including their capabilities, and modify those capabilities. 
The user&#39;s capabilities refer to their access to different systems, or authorization, within the tenant, like access to certifications (CERT_ADMIN) or reports (REPORT_ADMIN). 
These capabilities also determine a user&#39;s access to the different APIs. 
This API provides users with a way to determine a user&#39;s access and make quick and easy changes to that access. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-AuthUserV1**](#get-auth-user-v1) | **GET** `/auth-users/v1/{id}` | Auth user details
[**Update-AuthUserV1**](#patch-auth-user-v1) | **PATCH** `/auth-users/v1/{id}` | Auth user update


## get-auth-user-v1
Return the specified user's authentication system details.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-user-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Identity ID

### Return type
[**Authuser**](../models/authuser)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The specified user&#39;s authentication system details. | Authuser
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthUserV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthUserV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity ID

# Auth user details

try {
    Get-AuthUserV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-AuthUserV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AuthUserV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-auth-user-v1
Use a PATCH request to update an existing user in the authentication system.
Use this endpoint to modify these fields: 
  * `capabilities`

A '400.1.1 Illegal update attempt' detail code indicates that you attempted to PATCH a field that is not allowed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-user-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Identity ID
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**Authuser**](../models/authuser)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Auth user updated. | Authuser
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthUserV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthUserV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity ID
 $Jsonpatchoperation = @"[{"op":"replace","path":"/capabilities","value":["ORG_ADMIN"]}]"@ # Jsonpatchoperation[] | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Auth user update

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-AuthUserV1 -Id $Id -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AuthUserV1 -Id $Id -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AuthUserV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

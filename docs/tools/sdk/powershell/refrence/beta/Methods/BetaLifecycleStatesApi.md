---
id: lifecycle-states
title: LifecycleStates
pagination_label: LifecycleStates
sidebar_label: LifecycleStates
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LifecycleStates'] 
slug: /tools/sdk/powershell/beta/methods/lifecycle-states
tags: ['SDK', 'Software Development Kit', 'LifecycleStates']
---


# LifecycleStates

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaLifecycleStates**](#get-lifecycle-states) | **GET** `/identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Get Lifecycle State
[**Update-BetaLifecycleStates**](#update-lifecycle-states) | **PATCH** `/identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Update Lifecycle State


## get-lifecycle-states

Use this endpoint to get a lifecycle state by its ID and its associated identity profile ID. 

A token with ORG_ADMIN or API authority is required to call this API.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity Profile ID.
Path   | LifecycleStateId | **String** | True  | Lifecycle State ID.

### Return type

[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Requested lifecycle state. | LifecycleState
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
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity Profile ID.
$LifecycleStateId = "ef38f94347e94562b5bb8424a56397d8" # String | Lifecycle State ID.
# Get Lifecycle State
try {
    Get-BetaLifecycleStates-BetaIdentityProfileId $IdentityProfileId -BetaLifecycleStateId $LifecycleStateId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaLifecycleStates -BetaIdentityProfileId $IdentityProfileId -BetaLifecycleStateId $LifecycleStateId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaLifecycleStates"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-lifecycle-states

Use this endpoint to update individual lifecycle state fields, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

A token with ORG_ADMIN or API authority is required to call this API.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity Profile ID.
Path   | LifecycleStateId | **String** | True  | Lifecycle State ID.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption 

### Return type

[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated lifecycle state. | LifecycleState
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity Profile ID.
$LifecycleStateId = "ef38f94347e94562b5bb8424a56397d8" # String | Lifecycle State ID.
 # JsonPatchOperation[] | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption 
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update Lifecycle State
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaLifecycleStates-BetaIdentityProfileId $IdentityProfileId -BetaLifecycleStateId $LifecycleStateId -BetaJsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-BetaLifecycleStates -BetaIdentityProfileId $IdentityProfileId -BetaLifecycleStateId $LifecycleStateId -BetaJsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaLifecycleStates"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 



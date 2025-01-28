---
id: v2024-lifecycle-states
title: LifecycleStates
pagination_label: LifecycleStates
sidebar_label: LifecycleStates
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LifecycleStates'] 
slug: /tools/sdk/powershell/v2024/methods/lifecycle-states
tags: ['SDK', 'Software Development Kit', 'LifecycleStates']
---


# LifecycleStates

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024LifecycleState**](#create-lifecycle-state) | **POST** `/identity-profiles/{identity-profile-id}/lifecycle-states` | Create Lifecycle State
[**Remove-V2024LifecycleState**](#delete-lifecycle-state) | **DELETE** `/identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Delete Lifecycle State
[**Get-V2024LifecycleState**](#get-lifecycle-state) | **GET** `/identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Get Lifecycle State
[**Get-V2024LifecycleStates**](#get-lifecycle-states) | **GET** `/identity-profiles/{identity-profile-id}/lifecycle-states` | Lists LifecycleStates
[**Set-V2024LifecycleState**](#set-lifecycle-state) | **POST** `/identities/{identity-id}/set-lifecycle-state` | Set Lifecycle State
[**Update-V2024LifecycleStates**](#update-lifecycle-states) | **PATCH** `/identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Update Lifecycle State


## create-lifecycle-state

Use this endpoint to create a lifecycle state.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.
 Body  | LifecycleState | [**LifecycleState**](../models/lifecycle-state) | True  | Lifecycle state to be created.

### Return type

[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created LifecycleState object. | LifecycleState
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
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity profile ID.
$LifecycleState = @"{
  "accessProfileIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ],
  "emailNotificationOption" : {
    "notifyManagers" : true,
    "notifySpecificUsers" : true,
    "emailAddressList" : [ "test@test.com", "test2@test.com" ],
    "notifyAllAdmins" : true
  },
  "created" : "2015-05-28T14:07:17Z",
  "name" : "aName",
  "modified" : "2015-05-28T14:07:17Z",
  "description" : "Lifecycle description",
  "accountActions" : [ {
    "action" : "ENABLE",
    "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
  }, {
    "action" : "ENABLE",
    "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
  } ],
  "id" : "id12345",
  "identityCount" : 42,
  "technicalName" : "Technical Name",
  "identityState" : "identityState",
  "enabled" : true
}"@
# Create Lifecycle State
try {
    $Result = ConvertFrom-JsonToLifecycleState -Json $LifecycleState
    New-V2024LifecycleState-V2024IdentityProfileId $IdentityProfileId -V2024LifecycleState $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024LifecycleState -V2024IdentityProfileId $IdentityProfileId -V2024LifecycleState $LifecycleState  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024LifecycleState"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-lifecycle-state

Use this endpoint to delete the lifecycle state by its ID. 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.
Path   | LifecycleStateId | **String** | True  | Lifecycle state ID.

### Return type

[**LifecyclestateDeleted**](../models/lifecyclestate-deleted)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | The request was successfully accepted into the system. | LifecyclestateDeleted
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
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity profile ID.
$LifecycleStateId = "ef38f94347e94562b5bb8424a56397d8" # String | Lifecycle state ID.
# Delete Lifecycle State
try {
    Remove-V2024LifecycleState-V2024IdentityProfileId $IdentityProfileId -V2024LifecycleStateId $LifecycleStateId 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024LifecycleState -V2024IdentityProfileId $IdentityProfileId -V2024LifecycleStateId $LifecycleStateId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024LifecycleState"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-lifecycle-state

Use this endpoint to get a lifecycle state by its ID and its associated identity profile ID. 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.
Path   | LifecycleStateId | **String** | True  | Lifecycle state ID.

### Return type

[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The requested LifecycleState was successfully retrieved. | LifecycleState
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
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity profile ID.
$LifecycleStateId = "ef38f94347e94562b5bb8424a56397d8" # String | Lifecycle state ID.
# Get Lifecycle State
try {
    Get-V2024LifecycleState-V2024IdentityProfileId $IdentityProfileId -V2024LifecycleStateId $LifecycleStateId 
    
    # Below is a request that includes all optional parameters
    # Get-V2024LifecycleState -V2024IdentityProfileId $IdentityProfileId -V2024LifecycleStateId $LifecycleStateId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024LifecycleState"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-lifecycle-states

Use this endpoint to list all lifecycle states by their associated identity profiles. 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**

### Return type

[**LifecycleState[]**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of LifecycleState objects. | LifecycleState[]
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
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity profile ID.
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "created,modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)
# Lists LifecycleStates
try {
    Get-V2024LifecycleStates-V2024IdentityProfileId $IdentityProfileId 
    
    # Below is a request that includes all optional parameters
    # Get-V2024LifecycleStates -V2024IdentityProfileId $IdentityProfileId -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count -V2024Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024LifecycleStates"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## set-lifecycle-state

Use this API to set/update an identity's lifecycle state to the one provided and update the corresponding identity profile.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | ID of the identity to update.
 Body  | SetLifecycleStateRequest | [**SetLifecycleStateRequest**](../models/set-lifecycle-state-request) | True  | 

### Return type

[**SetLifecycleState200Response**](../models/set-lifecycle-state200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The request was successfully accepted into the system. | SetLifecycleState200Response
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
$IdentityId = "2c9180857893f1290178944561990364" # String | ID of the identity to update.
$SetLifecycleStateRequest = @""@
# Set Lifecycle State
try {
    $Result = ConvertFrom-JsonToSetLifecycleStateRequest -Json $SetLifecycleStateRequest
    Set-V2024LifecycleState-V2024IdentityId $IdentityId -V2024SetLifecycleStateRequest $Result
    
    # Below is a request that includes all optional parameters
    # Set-V2024LifecycleState -V2024IdentityId $IdentityId -V2024SetLifecycleStateRequest $SetLifecycleStateRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-V2024LifecycleState"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-lifecycle-states

Use this endpoint to update individual lifecycle state fields, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.
Path   | LifecycleStateId | **String** | True  | Lifecycle state ID.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption 

### Return type

[**LifecycleState**](../models/lifecycle-state)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The LifecycleState was successfully updated. | LifecycleState
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
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity profile ID.
$LifecycleStateId = "ef38f94347e94562b5bb8424a56397d8" # String | Lifecycle state ID.
 # JsonPatchOperation[] | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption 
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update Lifecycle State
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024LifecycleStates-V2024IdentityProfileId $IdentityProfileId -V2024LifecycleStateId $LifecycleStateId -V2024JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024LifecycleStates -V2024IdentityProfileId $IdentityProfileId -V2024LifecycleStateId $LifecycleStateId -V2024JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024LifecycleStates"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 



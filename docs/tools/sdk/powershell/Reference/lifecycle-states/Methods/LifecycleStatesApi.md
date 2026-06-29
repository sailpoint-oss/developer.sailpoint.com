---
id: lifecycle-states
title: LifecycleStates
pagination_label: LifecycleStates
sidebar_label: LifecycleStates
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LifecycleStates', 'LifecycleStates'] 
slug: /tools/sdk/powershell/lifecyclestates/methods/lifecycle-states
tags: ['SDK', 'Software Development Kit', 'LifecycleStates', 'LifecycleStates']
---

# LifecycleStates
  Use this API to implement and customize lifecycle state functionality.
With this functionality in place, administrators can create and configure custom lifecycle states for use across their organizations, which is key to controlling which users have access, when they have access, and the access they have.

A lifecycle state describes a user&#39;s status in a company. For example, two lifecycle states come by default with Identity Security Cloud: &#39;Active&#39; and &#39;Inactive.&#39; 
When an active employee takes an extended leave of absence from a company, his or her lifecycle state may change to &#39;Inactive,&#39; for security purposes. 
The inactive employee would lose access to all the applications, sources, and sensitive data during the leave of absence, but when the employee returns and becomes active again, all that access would be restored. 
This saves administrators the time that would otherwise be spent provisioning the employee&#39;s access to each individual tool, reviewing the employee&#39;s certification history, etc. 

Administrators can create a variety of custom lifecycle states. Refer to [Planning New Lifecycle States](https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html#planning-new-lifecycle-states) for some custom lifecycle state ideas.

Administrators must define the criteria for being in each lifecycle state, and they must define how Identity Security Cloud manages users&#39; access to apps and sources for each lifecycle state.

In Identity Security Cloud, administrators can manage lifecycle states by going to Admin &gt; Identities &gt; Identity Profile, selecting the identity profile whose lifecycle states they want to manage, selecting the &#39;Provisioning&#39; tab, and using the left panel to either select the lifecycle state they want to modify or create a new lifecycle state. 

In the &#39;Provisioning&#39; tab, administrators can make the following access changes to an identity profile&#39;s lifecycle state: 

- Enable/disable the lifecycle state for the identity profile.

- Enable/disable source accounts for the identity profile&#39;s lifecycle state.

- Add existing access profiles to grant to the identity profiles in that lifecycle state.

- Create a new access profile to grant to the identity profile in that lifecycle state.

Access profiles granted in a previous lifecycle state are automatically revoked when the identity moves to a new lifecycle state. 
To maintain access across multiple lifecycle states, administrators must grant the access profiles in each lifecycle state. 
For example, if an administrator wants users with the &#39;HR Employee&#39; identity profile to maintain their building access in both the &#39;Active&#39; and &#39;Leave of Absence&#39; lifecycle states, the administrator must grant the access profile for that building access to both lifecycle states.

During scheduled refreshes, Identity Security Cloud evaluates lifecycle states to determine whether their assigned identities have the access defined in the lifecycle states&#39; access profiles. 
If the identities are missing access, Identity Security Cloud provisions that access. 

Administrators can also use the &#39;Provisioning&#39; tab to configure email notifications for Identity Security Cloud to send whenever an identity with that identity profile has a lifecycle state change. 
Refer to [Configuring Lifecycle State Notifications](https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html#configuring-lifecycle-state-notifications) for more information on how to do so.

An identity&#39;s lifecycle state can have four different statuses: the lifecycle state&#39;s status can be &#39;Active,&#39; it can be &#39;Not Set,&#39; it can be &#39;Not Valid,&#39; or it &#39;Does Not Match Technical Name Case.&#39; 
Refer to [Moving Identities into Lifecycle States](https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html#moving-identities-into-lifecycle-states) for more information about these different lifecycle state statuses. 

Refer to [Setting Up Lifecycle States](https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html) for more information about lifecycle states.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-LifecycleStateV1**](#create-lifecycle-state-v1) | **POST** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states` | Create lifecycle state
[**Remove-LifecycleStateV1**](#delete-lifecycle-state-v1) | **DELETE** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Delete lifecycle state
[**Get-LifecycleStateV1**](#get-lifecycle-state-v1) | **GET** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Get lifecycle state
[**Get-LifecycleStatesV1**](#get-lifecycle-states-v1) | **GET** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states` | Lists lifecyclestates
[**Set-LifecycleStateV1**](#set-lifecycle-state-v1) | **POST** `/identities/v1/{identity-id}/set-lifecycle-state` | Set lifecycle state
[**Update-LifecycleStatesV1**](#update-lifecycle-states-v1) | **PATCH** `/identity-profiles/v1/{identity-profile-id}/lifecycle-states/{lifecycle-state-id}` | Update lifecycle state


## create-lifecycle-state-v1
Use this endpoint to create a lifecycle state.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-lifecycle-state-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.
 Body  | Lifecyclestate | [**Lifecyclestate**](../models/lifecyclestate) | True  | Lifecycle state to be created.

### Return type
[**Lifecyclestate**](../models/lifecyclestate)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created LifecycleState object. | Lifecyclestate
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SetLifecycleStateV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SetLifecycleStateV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity profile ID.
$Lifecyclestate = @""@

# Create lifecycle state

try {
    $Result = ConvertFrom-JsonToLifecyclestate -Json $Lifecyclestate
    New-LifecycleStateV1 -IdentityProfileId $IdentityProfileId -Lifecyclestate $Result 
    
    # Below is a request that includes all optional parameters
    # New-LifecycleStateV1 -IdentityProfileId $IdentityProfileId -Lifecyclestate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-LifecycleStateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-lifecycle-state-v1
Use this endpoint to delete the lifecycle state by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-lifecycle-state-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.
Path   | LifecycleStateId | **String** | True  | Lifecycle state ID.

### Return type
[**Lifecyclestatedeleted**](../models/lifecyclestatedeleted)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | The request was successfully accepted into the system. | Lifecyclestatedeleted
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SetLifecycleStateV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SetLifecycleStateV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity profile ID.
$LifecycleStateId = "ef38f94347e94562b5bb8424a56397d8" # String | Lifecycle state ID.

# Delete lifecycle state

try {
    Remove-LifecycleStateV1 -IdentityProfileId $IdentityProfileId -LifecycleStateId $LifecycleStateId 
    
    # Below is a request that includes all optional parameters
    # Remove-LifecycleStateV1 -IdentityProfileId $IdentityProfileId -LifecycleStateId $LifecycleStateId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-LifecycleStateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-lifecycle-state-v1
Use this endpoint to get a lifecycle state by its ID and its associated identity profile ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-lifecycle-state-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.
Path   | LifecycleStateId | **String** | True  | Lifecycle state ID.

### Return type
[**Lifecyclestate**](../models/lifecyclestate)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The requested LifecycleState was successfully retrieved. | Lifecyclestate
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SetLifecycleStateV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SetLifecycleStateV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity profile ID.
$LifecycleStateId = "ef38f94347e94562b5bb8424a56397d8" # String | Lifecycle state ID.

# Get lifecycle state

try {
    Get-LifecycleStateV1 -IdentityProfileId $IdentityProfileId -LifecycleStateId $LifecycleStateId 
    
    # Below is a request that includes all optional parameters
    # Get-LifecycleStateV1 -IdentityProfileId $IdentityProfileId -LifecycleStateId $LifecycleStateId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-LifecycleStateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-lifecycle-states-v1
Use this endpoint to list all lifecycle states by their associated identity profiles. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-lifecycle-states-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, priority, created, modified**

### Return type
[**Lifecyclestate[]**](../models/lifecyclestate)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of LifecycleState objects. | Lifecyclestate[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SetLifecycleStateV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SetLifecycleStateV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity profile ID.
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "created,modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, priority, created, modified** (optional)

# Lists lifecyclestates

try {
    Get-LifecycleStatesV1 -IdentityProfileId $IdentityProfileId 
    
    # Below is a request that includes all optional parameters
    # Get-LifecycleStatesV1 -IdentityProfileId $IdentityProfileId -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-LifecycleStatesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-lifecycle-state-v1
Use this API to set/update an identity's lifecycle state to the one provided and update the corresponding identity profile.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-lifecycle-state-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | ID of the identity to update.
 Body  | SetLifecycleStateV1Request | [**SetLifecycleStateV1Request**](../models/set-lifecycle-state-v1-request) | True  | 

### Return type
[**SetLifecycleStateV1200Response**](../models/set-lifecycle-state-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The request was successfully accepted into the system. | SetLifecycleStateV1200Response
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SetLifecycleStateV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SetLifecycleStateV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$IdentityId = "2c9180857893f1290178944561990364" # String | ID of the identity to update.
$SetLifecycleStateV1Request = @""@

# Set lifecycle state

try {
    $Result = ConvertFrom-JsonToSetLifecycleStateV1Request -Json $SetLifecycleStateV1Request
    Set-LifecycleStateV1 -IdentityId $IdentityId -SetLifecycleStateV1Request $Result 
    
    # Below is a request that includes all optional parameters
    # Set-LifecycleStateV1 -IdentityId $IdentityId -SetLifecycleStateV1Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-LifecycleStateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-lifecycle-states-v1
Use this endpoint to update individual lifecycle state fields, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-lifecycle-states-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityProfileId | **String** | True  | Identity profile ID.
Path   | LifecycleStateId | **String** | True  | Lifecycle state ID.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption * accessActionConfiguration * priority 

### Return type
[**Lifecyclestate**](../models/lifecyclestate)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The LifecycleState was successfully updated. | Lifecyclestate
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SetLifecycleStateV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SetLifecycleStateV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$IdentityProfileId = "2b838de9-db9b-abcf-e646-d4f274ad4238" # String | Identity profile ID.
$LifecycleStateId = "ef38f94347e94562b5bb8424a56397d8" # String | Lifecycle state ID.
 $Jsonpatchoperation = @"[{"op":"replace","path":"/description","value":"Updated description!"},{"op":"replace","path":"/accessProfileIds","value":["2c918087742bab150174407a80f3125e","2c918087742bab150174407a80f3124f"]},{"op":"replace","path":"/accountActions","value":[{"action":"ENABLE","sourceIds":["2c9180846a2f82fb016a481c1b1560c5","2c9180846a2f82fb016a481c1b1560cc"],"excludeSourceIds":null,"allSources":false},{"action":"DISABLE","sourceIds":null,"excludeSourceIds":["3b551ccf5566478b9b77f37de25303aa"],"allSources":true},{"action":"DELETE","sourceIds":["3c9180846a2f82fb016a481c1b1560c5","8n9180846a2f82fb016a481c1b1560cc"],"excludeSourceIds":null,"allSources":false}]},{"op":"replace","path":"/emailNotificationOption","value":{"notifyManagers":true,"notifyAllAdmins":false,"notifySpecificUsers":false,"emailAddressList":[]}},{"op":"replace","path":"/accessActionConfiguration","value":{"removeAllAccessEnabled":true}}]"@ # Jsonpatchoperation[] | A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption * accessActionConfiguration * priority 
 

# Update lifecycle state

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-LifecycleStatesV1 -IdentityProfileId $IdentityProfileId -LifecycleStateId $LifecycleStateId -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-LifecycleStatesV1 -IdentityProfileId $IdentityProfileId -LifecycleStateId $LifecycleStateId -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-LifecycleStatesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

---
id: beta-identities
title: Identities
pagination_label: Identities
sidebar_label: Identities
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identities', 'BetaIdentities'] 
slug: /tools/sdk/powershell/beta/methods/identities
tags: ['SDK', 'Software Development Kit', 'Identities', 'BetaIdentities']
---


# Identities
  Use this API to implement identity functionality.
With this functionality in place, administrators can synchronize an identity&#39;s attributes with its various source attributes.

Identity Security Cloud uses identities as users&#39; authoritative accounts. Identities can own other accounts, entitlements, and attributes.

An identity has a variety of attributes, such as an account name, an email address, a job title, and more.
These identity attributes can be correlated with different attributes on different sources.
For example, the identity John.Smith can own an account in the GitHub source with the account name John-Smith-Org, and Identity Security Cloud knows they are the same person with the same access and attributes.

In Identity Security Cloud, administrators often set up these synchronizations to get triggered automatically with a change or to run on a schedule.
To manually synchronize attributes for an identity, administrators can use the Identities drop-down menu and select Identity List to view the list of identities.
They can then select the identity they want to manually synchronize and use the hamburger menu to select &#39;Synchronize Attributes.&#39;
Doing so immediately begins the attribute synchronization and analyzes all accounts for the selected identity.

Refer to [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) for more information about synchronizing attributes.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-BetaIdentity**](#delete-identity) | **DELETE** `/identities/{id}` | Delete identity
[**Get-BetaIdentity**](#get-identity) | **GET** `/identities/{id}` | Identity Details
[**Get-BetaIdentityOwnershipDetails**](#get-identity-ownership-details) | **GET** `/identities/{identityId}/ownership` | Get ownership details
[**Get-BetaRoleAssignment**](#get-role-assignment) | **GET** `/identities/{identityId}/role-assignments/{assignmentId}` | Role assignment details
[**Get-BetaRoleAssignments**](#get-role-assignments) | **GET** `/identities/{identityId}/role-assignments` | List role assignments
[**Get-BetaIdentities**](#list-identities) | **GET** `/identities` | List Identities
[**Reset-BetaIdentity**](#reset-identity) | **POST** `/identities/{id}/reset` | Reset an identity
[**Send-BetaIdentityVerificationAccountToken**](#send-identity-verification-account-token) | **POST** `/identities/{id}/verification/account/send` | Send password reset email
[**Start-BetaIdentitiesInvite**](#start-identities-invite) | **POST** `/identities/invite` | Invite identities to register
[**Start-BetaIdentityProcessing**](#start-identity-processing) | **POST** `/identities/process` | Process a list of identityIds
[**Sync-BetahronizeAttributesForIdentity**](#synchronize-attributes-for-identity) | **POST** `/identities/{identityId}/synchronize-attributes` | Attribute synchronization for single identity.


## delete-identity

The API returns successful response if the requested identity was deleted.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Identity Id

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request is invalid. It may indicate that the specified identity is marked as protected and cannot be deleted. | IdentityAssociationDetails
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity Id
# Delete identity
try {
    Remove-BetaIdentity-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaIdentity -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaIdentity"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-identity

This API returns a single identity using the Identity ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Identity Id

### Return type

[**Identity**](../models/identity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An identity object | Identity
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity Id
# Identity Details
try {
    Get-BetaIdentity-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentity -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentity"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-identity-ownership-details

Use this API to return an identity's owned objects that will cause problems for deleting the identity. 
Use this API as a checklist of objects that you need to reassign to a different identity before you can delete the identity. 
For a full list of objects owned by an identity, use the [Search API](https://developer.sailpoint.com/docs/api/v3/search-post/).  When you search for identities, the returned identities have a property, `owns`, that contains a more comprehensive list of identity's owned objects.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | Identity ID.

### Return type

[**IdentityOwnershipAssociationDetails**](../models/identity-ownership-association-details)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Identity&#39;s ownership association details. | IdentityOwnershipAssociationDetails
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
$IdentityId = "ff8081814d2a8036014d701f3fbf53fa" # String | Identity ID.
# Get ownership details
try {
    Get-BetaIdentityOwnershipDetails-BetaIdentityId $IdentityId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityOwnershipDetails -BetaIdentityId $IdentityId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityOwnershipDetails"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-role-assignment



### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | Identity Id
Path   | AssignmentId | **String** | True  | Assignment Id

### Return type

[**RoleAssignmentDto**](../models/role-assignment-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A role assignment object | RoleAssignmentDto
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
$IdentityId = "ef38f94347e94562b5bb8424a56397d8" # String | Identity Id
$AssignmentId = "1cbb0705b38c4226b1334eadd8874086" # String | Assignment Id
# Role assignment details
try {
    Get-BetaRoleAssignment-BetaIdentityId $IdentityId -BetaAssignmentId $AssignmentId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleAssignment -BetaIdentityId $IdentityId -BetaAssignmentId $AssignmentId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleAssignment"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-role-assignments

This returns either a list of Role Assignments when querying with either a Role Id or Role Name, or a list of Role Assignment References if querying with only identity Id.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | Identity Id to get the role assignments for
  Query | RoleId | **String** |   (optional) | Role Id to filter the role assignments with
  Query | RoleName | **String** |   (optional) | Role name to filter the role assignments with

### Return type

[**GetRoleAssignments200ResponseInner[]**](../models/get-role-assignments200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A role assignment object | GetRoleAssignments200ResponseInner[]
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
$IdentityId = "ef38f94347e94562b5bb8424a56397d8" # String | Identity Id to get the role assignments for
$RoleId = "e7697a1e96d04db1ac7b0f4544915d2c" # String | Role Id to filter the role assignments with (optional)
$RoleName = "Engineer" # String | Role name to filter the role assignments with (optional)
# List role assignments
try {
    Get-BetaRoleAssignments-BetaIdentityId $IdentityId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaRoleAssignments -BetaIdentityId $IdentityId -BetaRoleId $RoleId -BetaRoleName $RoleName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaRoleAssignments"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-identities

This API returns a list of identities.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus**
  Query | DefaultFilter | **String** |   (optional) (default to "CORRELATED_ONLY") | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated=true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**Identity[]**](../models/identity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identities. | Identity[]
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
$Filters = 'id eq "6c9079b270a266a60170a2779fcb0006" or correlated eq false' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq* (optional)
$Sorters = "name,-cloudStatus" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus** (optional)
$DefaultFilter = "CORRELATED_ONLY" # String | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated=true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter. (optional) (default to "CORRELATED_ONLY")
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
# List Identities
try {
    Get-BetaIdentities
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentities -BetaFilters $Filters -BetaSorters $Sorters -BetaDefaultFilter $DefaultFilter -BetaCount $Count -BetaLimit $Limit -BetaOffset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentities"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## reset-identity

Use this endpoint to reset a user's identity if they have forgotten their authentication information like their answers to knowledge-based questions. Resetting an identity de-registers the user and removes any elevated user levels they have.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | Identity Id

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. The reset request accepted and is in progress. | 
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
$IdentityId = "ef38f94347e94562b5bb8424a56397d8" # String | Identity Id
# Reset an identity
try {
    Reset-BetaIdentity-BetaIdentityId $IdentityId 
    
    # Below is a request that includes all optional parameters
    # Reset-BetaIdentity -BetaIdentityId $IdentityId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Reset-BetaIdentity"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## send-identity-verification-account-token

This API sends an email with the link to start Password Reset. After selecting the link an identity will be able to set up a new password. Emails expire after 2 hours.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Identity ID
 Body  | SendAccountVerificationRequest | [**SendAccountVerificationRequest**](../models/send-account-verification-request) | True  | 

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The email was successfully sent | 
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity ID
$SendAccountVerificationRequest = @"{
  "sourceName" : "Active Directory Source",
  "via" : "EMAIL_WORK"
}"@
# Send password reset email
try {
    $Result = ConvertFrom-JsonToSendAccountVerificationRequest -Json $SendAccountVerificationRequest
    Send-BetaIdentityVerificationAccountToken-BetaId $Id -BetaSendAccountVerificationRequest $Result
    
    # Below is a request that includes all optional parameters
    # Send-BetaIdentityVerificationAccountToken -BetaId $Id -BetaSendAccountVerificationRequest $SendAccountVerificationRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaIdentityVerificationAccountToken"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## start-identities-invite

This API submits a task for inviting given identities via email to complete registration. The invitation email will include the link. After selecting the link an identity will be able to set up password and log in into the system. Invitations expire after 7 days. By default invitations send to the work identity email. It can be changed in Admin > Identities > Identity Profiles by selecting corresponding profile and editing Invitation Options.

This task will send an invitation email only for unregistered identities.

The executed task status can be checked by Task Management > [Get task status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status).


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | InviteIdentitiesRequest | [**InviteIdentitiesRequest**](../models/invite-identities-request) | True  | 

### Return type

[**TaskStatus**](../models/task-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Responds with an initial TaskStatus for the executed task | TaskStatus
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
$InviteIdentitiesRequest = @"{
  "ids" : [ "2b568c65bc3c4c57a43bd97e3a8e55", "2c9180867769897d01776ed5f125512f" ],
  "uninvited" : false
}"@
# Invite identities to register
try {
    $Result = ConvertFrom-JsonToInviteIdentitiesRequest -Json $InviteIdentitiesRequest
    Start-BetaIdentitiesInvite-BetaInviteIdentitiesRequest $Result
    
    # Below is a request that includes all optional parameters
    # Start-BetaIdentitiesInvite -BetaInviteIdentitiesRequest $InviteIdentitiesRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-BetaIdentitiesInvite"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## start-identity-processing

This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 

This endpoint will perform the following tasks:
1. Calculate identity attributes, including applying or running any rules or transforms (e.g. calculate Lifecycle State at a point-in-time it's expected to change).
2. Evaluate role assignments, leading to assignment of new roles and removal of existing roles.
3. Enforce provisioning for any assigned accesses that haven't been fulfilled (e.g. failure due to source health).
4. Recalculate manager relationships.
5. Potentially clean-up identity processing errors, assuming the error has been resolved.

A token with ORG_ADMIN or HELPDESK authority is required to call this API.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ProcessIdentitiesRequest | [**ProcessIdentitiesRequest**](../models/process-identities-request) | True  | 

### Return type

[**TaskResultResponse**](../models/task-result-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Object containing the DTO type TASK_RESULT and the job id for the task | TaskResultResponse
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
$ProcessIdentitiesRequest = @"{
  "identityIds" : [ "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8" ]
}"@
# Process a list of identityIds
try {
    $Result = ConvertFrom-JsonToProcessIdentitiesRequest -Json $ProcessIdentitiesRequest
    Start-BetaIdentityProcessing-BetaProcessIdentitiesRequest $Result
    
    # Below is a request that includes all optional parameters
    # Start-BetaIdentityProcessing -BetaProcessIdentitiesRequest $ProcessIdentitiesRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-BetaIdentityProcessing"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## synchronize-attributes-for-identity

This end-point performs attribute synchronization for a selected identity. The endpoint can be called once in 10 seconds per identity. A token with ORG_ADMIN or API authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | The Identity id

### Return type

[**IdentitySyncJob**](../models/identity-sync-job)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | An Identity Sync job | IdentitySyncJob
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
$IdentityId = "MyIdentityId" # String | The Identity id
# Attribute synchronization for single identity.
try {
    Sync-BetahronizeAttributesForIdentity-BetaIdentityId $IdentityId 
    
    # Below is a request that includes all optional parameters
    # Sync-BetahronizeAttributesForIdentity -BetaIdentityId $IdentityId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Sync-BetahronizeAttributesForIdentity"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 



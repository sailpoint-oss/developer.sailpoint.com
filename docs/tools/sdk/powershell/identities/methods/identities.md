# Identities

# Identities
  Use this API to implement identity functionality.
With this functionality in place, administrators can synchronize an identity&#39;s attributes with its various source attributes.

SailPoint Identity Security uses identities as users&#39; authoritative accounts. Identities can own other accounts, entitlements, and attributes.

An identity has a variety of attributes, such as an account name, an email address, a job title, and more.
These identity attributes can be correlated with different attributes on different sources.
For example, the identity John.Smith can own an account in the GitHub source with the account name John-Smith-Org, and SailPoint Identity Security knows they are the same person with the same access and attributes.

In SailPoint Identity Security, administrators often set up these synchronizations to get triggered automatically with a change or to run on a schedule.
To manually synchronize attributes for an identity, administrators can use the Identities drop-down menu and select Identity List to view the list of identities.
They can then select the identity they want to manually synchronize and use the hamburger menu to select &#39;Synchronize Attributes.&#39;
Doing so immediately begins the attribute synchronization and analyzes all accounts for the selected identity.

Refer to [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) for more information about synchronizing attributes.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-IdentityV1**](#delete-identity-v1) | **DELETE** `/identities/v1/{id}` | Delete identity
[**Get-IdentityOwnershipDetailsV1**](#get-identity-ownership-details-v1) | **GET** `/identities/v1/{identityId}/ownership` | Get ownership details
[**Get-IdentityV1**](#get-identity-v1) | **GET** `/identities/v1/{id}` | Identity details
[**Get-IdentityV2**](#get-identity-v2) | **GET** `/identities/v2/{id}` | Identity details (search)
[**Get-RoleAssignmentV1**](#get-role-assignment-v1) | **GET** `/identities/v1/{identityId}/role-assignments/{assignmentId}` | Role assignment details
[**Get-RoleAssignmentsV1**](#get-role-assignments-v1) | **GET** `/identities/v1/{identityId}/role-assignments` | List role assignments
[**Get-EntitlementsByIdentityV1**](#list-entitlements-by-identity-v1) | **GET** `/entitlements/v1/identities/{id}/entitlements` | List of entitlements by identity.
[**Get-IdentitiesV1**](#list-identities-v1) | **GET** `/identities/v1` | List identities
[**Get-IdentitiesV2**](#list-identities-v2) | **GET** `/identities/v2` | List identities (search)
[**Reset-IdentityV1**](#reset-identity-v1) | **POST** `/identities/v1/{id}/reset` | Reset an identity
[**Send-IdentityVerificationAccountTokenV1**](#send-identity-verification-account-token-v1) | **POST** `/identities/v1/{id}/verification/account/send` | Send password reset email
[**Start-IdentitiesInviteV1**](#start-identities-invite-v1) | **POST** `/identities/v1/invite` | Invite identities to register
[**Start-IdentityProcessingV1**](#start-identity-processing-v1) | **POST** `/identities/v1/process` | Process a list of identityids
[**Sync-hronizeAttributesForIdentityV1**](#synchronize-attributes-for-identity-v1) | **POST** `/identities/v1/{identityId}/synchronize-attributes` | Attribute synchronization for single identity.


## delete-identity-v1
The API returns successful response if the requested identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity Id

# Delete identity

try {
    Remove-IdentityV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-IdentityV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-IdentityV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-ownership-details-v1
Use this API to return an identity's owned objects that will cause problems for deleting the identity. 
Use this API as a checklist of objects that you need to reassign to a different identity before you can delete the identity. 
For a full list of objects owned by an identity, use the [Search API](https://developer.sailpoint.com/docs/api/search-post-v-1).  When you search for identities, the returned identities have a property, `owns`, that contains a more comprehensive list of identity's owned objects.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-ownership-details-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "ff8081814d2a8036014d701f3fbf53fa" # String | Identity ID.

# Get ownership details

try {
    Get-IdentityOwnershipDetailsV1 -IdentityId $IdentityId 
    
    # Below is a request that includes all optional parameters
    # Get-IdentityOwnershipDetailsV1 -IdentityId $IdentityId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentityOwnershipDetailsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-v1
This API returns a single identity using the Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity Id

# Identity details

try {
    Get-IdentityV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-IdentityV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentityV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a single identity from the identities search index.

`privilegeLevel.effective` is `HIGH`, `MEDIUM`, `LOW`, or `NONE`. An identity with no privilege level is returned as `NONE` Comparisons on `privilegeLevel.effective` are case-insensitive, and returned values are uppercase.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Identity Id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**IdentityV2**](../models/identity-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An identity object | IdentityV2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "01f04e428c484542a241dc89c303b178" # String | Identity Id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Identity details (search)

try {
    Get-IdentityV2 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-IdentityV2 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentityV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-assignment-v1


[API Spec](https://developer.sailpoint.com/docs/api/get-role-assignment-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
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
    Get-RoleAssignmentV1 -IdentityId $IdentityId -AssignmentId $AssignmentId 
    
    # Below is a request that includes all optional parameters
    # Get-RoleAssignmentV1 -IdentityId $IdentityId -AssignmentId $AssignmentId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RoleAssignmentV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-assignments-v1
This returns either a list of Role Assignments when querying with either a Role Id or Role Name, or a list of Role Assignment References if querying with only identity Id.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-assignments-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | Identity Id to get the role assignments for
  Query | RoleId | **String** |   (optional) | Role Id to filter the role assignments with
  Query | RoleName | **String** |   (optional) | Role name to filter the role assignments with

### Return type
[**GetRoleAssignmentsV1200ResponseInner[]**](../models/get-role-assignments-v1200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A role assignment object | GetRoleAssignmentsV1200ResponseInner[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
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
    Get-RoleAssignmentsV1 -IdentityId $IdentityId 
    
    # Below is a request that includes all optional parameters
    # Get-RoleAssignmentsV1 -IdentityId $IdentityId -RoleId $RoleId -RoleName $RoleName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RoleAssignmentsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-entitlements-by-identity-v1
The API returns a list of all entitlements assigned to an identity, either directly or through the role or access profile. A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlements-by-identity-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Identity Id
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**IdentityEntitlements[]**](../models/identity-entitlements)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all Entitlements for given Identity | IdentityEntitlements[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity Id
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List of entitlements by identity.

try {
    Get-EntitlementsByIdentityV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-EntitlementsByIdentityV1 -Id $Id -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-EntitlementsByIdentityV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-identities-v1
This API returns a list of identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-identities-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus**
  Query | DefaultFilter | **String** |   (optional) (default to "CORRELATED_ONLY") | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated=true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**Identity[]**](../models/identity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identities. | Identity[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'id eq "6c9079b270a266a60170a2779fcb0006" or correlated eq false' # String | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq* (optional)
$Sorters = "name,-cloudStatus" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus** (optional)
$DefaultFilter = "CORRELATED_ONLY" # String | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated=true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter. (optional) (default to "CORRELATED_ONLY")
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List identities

try {
    Get-IdentitiesV1 
    
    # Below is a request that includes all optional parameters
    # Get-IdentitiesV1 -Filters $Filters -Sorters $Sorters -DefaultFilter $DefaultFilter -Count $Count -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentitiesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-identities-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List identities from the identities search index.

Use standard collection parameters for paging (`limit`, `offset`, `count`). Default page size is 25 when no collection parameters are sent. Maximum `limit` is 250. Requests that specify a larger `limit` are capped at 250. `offset + limit` cannot exceed 10,000. To page beyond that window, use `searchAfter` instead of a large offset. `searchAfter` cannot be combined with `offset`. Always include `id` in `sorters` when using `searchAfter`. Refer to [Paginating Search Queries](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-search-queries) for more information.
An identity with no privilege level is returned as `NONE`. Comparisons on `privilegeLevel.effective` are case-insensitive, and returned values are uppercase: `HIGH`, `MEDIUM`, `LOW`, or `NONE`. An identity with no privilege level matches `privilegeLevel.effective eq "NONE"` and does not match `isnull`.

[API Spec](https://developer.sailpoint.com/docs/api/list-identities-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | SearchAfter | **String** |   (optional) | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to page beyond the offset limit of 10,000 records by shifting the search window to begin at this value.  `searchAfter` cannot be combined with `offset`. When `searchAfter` is provided, `id` must be included in `sorters`.  It is recommended that you always include the ID of the object in addition to any other sort fields in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=John Mathews,01f04e428c484542a241dc89c303b178&sorters=name,id.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement `searchAfter` paging.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw, isnull, pr*  **alias**: *eq, in, sw, isnull, pr*  **type**: *eq, in, sw, isnull, pr*  **emailAddress**: *eq, in, sw, isnull, pr*  **identityStatus**: *eq, in, sw, isnull, pr*  **processingState**: *eq, in, sw, isnull, pr*  **protected**: *eq*  **correlated**: *eq*  **inactive**: *eq*  **isManager**: *eq*  **locked**: *eq*  **disabled**: *eq*  **manager.id**: *eq, in, sw*  **manager.name**: *eq, in, sw, isnull, pr*  **manager.type**: *eq, in, sw, isnull, pr*  **lifecycleState.stateName**: *eq, in, sw, isnull, pr*  **lifecycleState.manuallyUpdated**: *eq*  **created**: *eq, ge, gt, le, lt*  **modified**: *eq, ge, gt, le, lt*  **synced**: *eq, ge, gt, le, lt*  **lastRefresh**: *eq, ge, gt, le, lt*  **privilegeLevel.effective**: *eq, in, isnull, pr*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, alias, type, emailAddress, identityStatus, processingState, protected, correlated, inactive, isManager, locked, disabled, manager.id, manager.name, manager.type, lifecycleState.stateName, lifecycleState.manuallyUpdated, created, modified, synced, lastRefresh, privilegeLevel.effective**  Sorting on **privilegeLevel.effective** is case-insensitive. Returned values are uppercase. Default sort is **created** when no collection parameters are sent.

### Return type
[**IdentityV2[]**](../models/identity-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identity objects. | IdentityV2[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$SearchAfter = "John Mathews,01f04e428c484542a241dc89c303b178" # String | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to page beyond the offset limit of 10,000 records by shifting the search window to begin at this value.  `searchAfter` cannot be combined with `offset`. When `searchAfter` is provided, `id` must be included in `sorters`.  It is recommended that you always include the ID of the object in addition to any other sort fields in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=John Mathews,01f04e428c484542a241dc89c303b178&sorters=name,id.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement `searchAfter` paging. (optional)
$Filters = 'privilegeLevel.effective eq "HIGH"' # String | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw, isnull, pr*  **alias**: *eq, in, sw, isnull, pr*  **type**: *eq, in, sw, isnull, pr*  **emailAddress**: *eq, in, sw, isnull, pr*  **identityStatus**: *eq, in, sw, isnull, pr*  **processingState**: *eq, in, sw, isnull, pr*  **protected**: *eq*  **correlated**: *eq*  **inactive**: *eq*  **isManager**: *eq*  **locked**: *eq*  **disabled**: *eq*  **manager.id**: *eq, in, sw*  **manager.name**: *eq, in, sw, isnull, pr*  **manager.type**: *eq, in, sw, isnull, pr*  **lifecycleState.stateName**: *eq, in, sw, isnull, pr*  **lifecycleState.manuallyUpdated**: *eq*  **created**: *eq, ge, gt, le, lt*  **modified**: *eq, ge, gt, le, lt*  **synced**: *eq, ge, gt, le, lt*  **lastRefresh**: *eq, ge, gt, le, lt*  **privilegeLevel.effective**: *eq, in, isnull, pr* (optional)
$Sorters = "privilegeLevel.effective,id" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, alias, type, emailAddress, identityStatus, processingState, protected, correlated, inactive, isManager, locked, disabled, manager.id, manager.name, manager.type, lifecycleState.stateName, lifecycleState.manuallyUpdated, created, modified, synced, lastRefresh, privilegeLevel.effective**  Sorting on **privilegeLevel.effective** is case-insensitive. Returned values are uppercase. Default sort is **created** when no collection parameters are sent. (optional)

# List identities (search)

try {
    Get-IdentitiesV2 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-IdentitiesV2 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -SearchAfter $SearchAfter -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentitiesV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reset-identity-v1
Use this endpoint to reset a user's identity if they have forgotten their authentication information like their answers to knowledge-based questions. Resetting an identity de-registers the user and removes any elevated user levels they have.

[API Spec](https://developer.sailpoint.com/docs/api/reset-identity-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Identity Id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. The reset request accepted and is in progress. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity Id

# Reset an identity

try {
    Reset-IdentityV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Reset-IdentityV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Reset-IdentityV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-identity-verification-account-token-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API sends an email with the link to start Password Reset. After selecting the link an identity will be able to set up a new password. Emails expire after 2 hours.


[API Spec](https://developer.sailpoint.com/docs/api/send-identity-verification-account-token-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | Identity ID
 Body  | SendAccountVerificationRequest | [**SendAccountVerificationRequest**](../models/send-account-verification-request) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The email was successfully sent | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Identity ID
$SendAccountVerificationRequest = @"{
  "sourceName" : "Active Directory Source",
  "via" : "EMAIL_WORK"
}"@

# Send password reset email

try {
    $Result = ConvertFrom-JsonToSendAccountVerificationRequest -Json $SendAccountVerificationRequest
    Send-IdentityVerificationAccountTokenV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -SendAccountVerificationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-IdentityVerificationAccountTokenV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -SendAccountVerificationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-IdentityVerificationAccountTokenV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-identities-invite-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API submits a task for inviting given identities via email to complete registration. The invitation email will include the link. After selecting the link an identity will be able to set up password and log in into the system. Invitations expire after 7 days. By default invitations send to the work identity email. It can be changed in Admin > Identities > Identity Profiles by selecting corresponding profile and editing Invitation Options.

This task will send an invitation email only for unregistered identities.

The executed task status can be checked by Task Management > [Get task status by ID](https://developer.sailpoint.com/docs/api/get-task-status-v-1).


[API Spec](https://developer.sailpoint.com/docs/api/start-identities-invite-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | InviteIdentitiesRequest | [**InviteIdentitiesRequest**](../models/invite-identities-request) | True  | 

### Return type
[**TaskStatus**](../models/task-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Responds with an initial TaskStatus for the executed task | TaskStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$InviteIdentitiesRequest = @"{
  "ids" : [ "2b568c65bc3c4c57a43bd97e3a8e55", "2c9180867769897d01776ed5f125512f" ],
  "uninvited" : false
}"@

# Invite identities to register

try {
    $Result = ConvertFrom-JsonToInviteIdentitiesRequest -Json $InviteIdentitiesRequest
    Start-IdentitiesInviteV1 -XSailPointExperimental $XSailPointExperimental -InviteIdentitiesRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Start-IdentitiesInviteV1 -XSailPointExperimental $XSailPointExperimental -InviteIdentitiesRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-IdentitiesInviteV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-identity-processing-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 

This endpoint will perform the following tasks:
1. Calculate identity attributes, including applying or running any rules or transforms (e.g. calculate Lifecycle State at a point-in-time it's expected to change).
2. Evaluate role assignments, leading to assignment of new roles and removal of existing roles.
3. Enforce provisioning for any assigned accesses that haven't been fulfilled (e.g. failure due to source health).
4. Recalculate manager relationships.
5. Potentially clean-up identity processing errors, assuming the error has been resolved.

[API Spec](https://developer.sailpoint.com/docs/api/start-identity-processing-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | ProcessIdentitiesRequest | [**ProcessIdentitiesRequest**](../models/process-identities-request) | True  | 

### Return type
[**TaskResultResponse**](../models/task-result-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Object containing the DTO type TASK_RESULT and the job id for the task | TaskResultResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ProcessIdentitiesRequest = @"{
  "identityIds" : [ "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8" ]
}"@

# Process a list of identityids

try {
    $Result = ConvertFrom-JsonToProcessIdentitiesRequest -Json $ProcessIdentitiesRequest
    Start-IdentityProcessingV1 -XSailPointExperimental $XSailPointExperimental -ProcessIdentitiesRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Start-IdentityProcessingV1 -XSailPointExperimental $XSailPointExperimental -ProcessIdentitiesRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-IdentityProcessingV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## synchronize-attributes-for-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This end-point performs attribute synchronization for a selected identity. The endpoint can be called once in 10 seconds per identity.

[API Spec](https://developer.sailpoint.com/docs/api/synchronize-attributes-for-identity-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | The Identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**IdentitySyncJob**](../models/identity-sync-job)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | An Identity Sync job | IdentitySyncJob
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "MyIdentityId" # String | The Identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Attribute synchronization for single identity.

try {
    Sync-hronizeAttributesForIdentityV1 -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Sync-hronizeAttributesForIdentityV1 -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Sync-hronizeAttributesForIdentityV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

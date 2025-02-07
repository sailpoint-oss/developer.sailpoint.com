---
id: beta-certifications
title: Certifications
pagination_label: Certifications
sidebar_label: Certifications
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Certifications', 'BetaCertifications'] 
slug: /tools/sdk/powershell/beta/methods/certifications
tags: ['SDK', 'Software Development Kit', 'Certifications', 'BetaCertifications']
---

# Certifications
  Use this API to implement certification functionality.
This API provides specific functionality that improves an organization&#39;s ability to manage its certification process.

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access.
These certifications serve as a way of showing that a user&#39;s access has been reviewed and approved.
Multiple certifications by different reviewers are often required to approve a user&#39;s access.
A set of multiple certifications is called a certification campaign.

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers.
Once this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more.

This API enables administrators and reviewers to get useful information about certifications at a high level, such as the reviewers involved, and at a more granular level, such as the permissions affected by changes to entitlements within those certifications.
It also provides the useful ability to reassign identities and items within certifications to other reviewers, rather than [reassigning the entire certifications themselves](https://developer.sailpoint.com/idn/api/beta/submit-reassign-certs-async/).

Refer to [Managing User Accounts](https://documentation.sailpoint.com/saas/help/common/users/user_access.html#managing-user-accounts) for more information about accounts.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaIdentityCertificationItemPermissions**](#get-identity-certification-item-permissions) | **GET** `/certifications/{certificationId}/access-review-items/{itemId}/permissions` | Permissions for Entitlement Certification Item
[**Get-BetaIdentityCertificationPendingTasks**](#get-identity-certification-pending-tasks) | **GET** `/certifications/{id}/tasks-pending` | Pending Certification Tasks
[**Get-BetaIdentityCertificationTaskStatus**](#get-identity-certification-task-status) | **GET** `/certifications/{id}/tasks/{taskId}` | Certification Task Status
[**Get-BetaCertificationReviewers**](#list-certification-reviewers) | **GET** `/certifications/{id}/reviewers` | List of Reviewers for certification
[**Submit-BetaReassignCertsAsync**](#submit-reassign-certs-async) | **POST** `/certifications/{id}/reassign-async` | Reassign Certifications Asynchronously


## get-identity-certification-item-permissions
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API returns the permissions associated with an entitlement certification item based on the certification item's ID. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-certification-item-permissions)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | CertificationId | **String** | True  | The certification ID
Path   | ItemId | **String** | True  | The certification item ID
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: `?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)`
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**PermissionDto[]**](../models/permission-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of permissions associated with the given itemId | PermissionDto[]
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
$CertificationId = "ef38f94347e94562b5bb8424a56397d8" # String | The certification ID
$ItemId = "2c91808671bcbab40171bd945d961227" # String | The certification item ID
$Filters = 'target eq "SYS.OBJAUTH2"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: `?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)` (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Permissions for Entitlement Certification Item

try {
    Get-BetaIdentityCertificationItemPermissions -CertificationId $CertificationId -ItemId $ItemId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityCertificationItemPermissions -CertificationId $CertificationId -ItemId $ItemId -Filters $Filters -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityCertificationItemPermissions"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-certification-pending-tasks
This API returns the status of all pending (`QUEUED` or `IN_PROGRESS`) tasks for an identity campaign certification. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-certification-pending-tasks)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity campaign certification ID

### Return type
[**IdentityCertificationTask[]**](../models/identity-certification-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of pending (&#x60;QUEUED&#x60; or &#x60;IN_PROGRESS&#x60;) certification task objects. | IdentityCertificationTask[]
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
$Id = "MyId" # String | The identity campaign certification ID

# Pending Certification Tasks

try {
    Get-BetaIdentityCertificationPendingTasks -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityCertificationPendingTasks -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityCertificationPendingTasks"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-certification-task-status
This API returns the status of a certification task. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-certification-task-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity campaign certification ID
Path   | TaskId | **String** | True  | The certification task ID

### Return type
[**IdentityCertificationTask**](../models/identity-certification-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A certification task object. | IdentityCertificationTask
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
$Id = "MyId" # String | The identity campaign certification ID
$TaskId = "MyTaskId" # String | The certification task ID

# Certification Task Status

try {
    Get-BetaIdentityCertificationTaskStatus -Id $Id -TaskId $TaskId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityCertificationTaskStatus -Id $Id -TaskId $TaskId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityCertificationTaskStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-certification-reviewers
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API returns a list of reviewers for the certification. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-certification-reviewers)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The certification ID
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email**

### Return type
[**IdentityReferenceWithNameAndEmail[]**](../models/identity-reference-with-name-and-email)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of reviewers | IdentityReferenceWithNameAndEmail[]
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The certification ID
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name eq "Bob"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional)

# List of Reviewers for certification

try {
    Get-BetaCertificationReviewers -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaCertificationReviewers -Id $Id -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaCertificationReviewers"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-reassign-certs-async
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This API initiates a task to reassign up to 500 identities or items in an identity campaign certification to another reviewer. The `certification-tasks` API can be used to get an updated status on the task and determine when the reassignment is complete. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/submit-reassign-certs-async)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity campaign certification ID
 Body  | ReviewReassign | [**ReviewReassign**](../models/review-reassign) | True  | 

### Return type
[**IdentityCertificationTask**](../models/identity-certification-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A certification task object for the reassignment which can be queried for status. | IdentityCertificationTask
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The identity campaign certification ID
$ReviewReassign = @"{
  "reason" : "reassigned for some reason",
  "reassignTo" : "ef38f94347e94562b5bb8424a56397d8",
  "reassign" : [ {
    "id" : "ef38f94347e94562b5bb8424a56397d8",
    "type" : "ITEM"
  }, {
    "id" : "ef38f94347e94562b5bb8424a56397d8",
    "type" : "ITEM"
  } ]
}"@

# Reassign Certifications Asynchronously

try {
    $Result = ConvertFrom-JsonToReviewReassign -Json $ReviewReassign
    Submit-BetaReassignCertsAsync -Id $Id -BetaReviewReassign $Result 
    
    # Below is a request that includes all optional parameters
    # Submit-BetaReassignCertsAsync -Id $Id -BetaReviewReassign $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-BetaReassignCertsAsync"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

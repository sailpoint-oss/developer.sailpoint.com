---
id: beta-certifications
title: Certifications
pagination_label: Certifications
sidebar_label: Certifications
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Certifications'] 
slug: /tools/sdk/powershell/beta/methods/certifications
tags: ['SDK', 'Software Development Kit', 'Certifications']
---


# Certifications

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaIdentityCertificationItemPermissions**](#get-identity-certification-item-permissions) | **GET** `/certifications/{certificationId}/access-review-items/{itemId}/permissions` | Permissions for Entitlement Certification Item
[**Get-BetaIdentityCertificationPendingTasks**](#get-identity-certification-pending-tasks) | **GET** `/certifications/{id}/tasks-pending` | Pending Certification Tasks
[**Get-BetaIdentityCertificationTaskStatus**](#get-identity-certification-task-status) | **GET** `/certifications/{id}/tasks/{taskId}` | Certification Task Status
[**Get-BetaCertificationReviewers**](#list-certification-reviewers) | **GET** `/certifications/{id}/reviewers` | List of Reviewers for certification
[**Submit-BetaReassignCertsAsync**](#submit-reassign-certs-async) | **POST** `/certifications/{id}/reassign-async` | Reassign Certifications Asynchronously


## get-identity-certification-item-permissions

This API returns the permissions associated with an entitlement certification item based on the certification item's ID. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

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
    Get-BetaIdentityCertificationItemPermissions-BetaCertificationId $CertificationId -BetaItemId $ItemId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityCertificationItemPermissions -BetaCertificationId $CertificationId -BetaItemId $ItemId -BetaFilters $Filters -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityCertificationItemPermissions"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-identity-certification-pending-tasks

This API returns the status of all pending (`QUEUED` or `IN_PROGRESS`) tasks for an identity campaign certification. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

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
    Get-BetaIdentityCertificationPendingTasks-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityCertificationPendingTasks -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityCertificationPendingTasks"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-identity-certification-task-status

This API returns the status of a certification task. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

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
    Get-BetaIdentityCertificationTaskStatus-BetaId $Id -BetaTaskId $TaskId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityCertificationTaskStatus -BetaId $Id -BetaTaskId $TaskId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityCertificationTaskStatus"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-certification-reviewers

This API returns a list of reviewers for the certification. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

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
    Get-BetaCertificationReviewers-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaCertificationReviewers -BetaId $Id -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaCertificationReviewers"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## submit-reassign-certs-async

This API initiates a task to reassign up to 500 identities or items in an identity campaign certification to another reviewer. The `certification-tasks` API can be used to get an updated status on the task and determine when the reassignment is complete. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

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
    Submit-BetaReassignCertsAsync-BetaId $Id -BetaReviewReassign $Result
    
    # Below is a request that includes all optional parameters
    # Submit-BetaReassignCertsAsync -BetaId $Id -BetaReviewReassign $ReviewReassign  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-BetaReassignCertsAsync"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 



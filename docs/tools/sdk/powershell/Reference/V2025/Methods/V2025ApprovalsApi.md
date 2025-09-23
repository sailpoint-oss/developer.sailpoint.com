---
id: v2025-approvals
title: Approvals
pagination_label: Approvals
sidebar_label: Approvals
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvals', 'V2025Approvals'] 
slug: /tools/sdk/powershell/v2025/methods/approvals
tags: ['SDK', 'Software Development Kit', 'Approvals', 'V2025Approvals']
---

# Approvals
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/v2025/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-V2025Approval**](#approve-approval) | **POST** `/generic-approvals/{id}/approve` | Post Approvals Approve
[**Get-V2025Approval**](#get-approval) | **GET** `/generic-approvals/{id}` | Get an approval
[**Get-V2025Approvals**](#get-approvals) | **GET** `/generic-approvals` | Get approvals
[**Deny-V2025Approval**](#reject-approval) | **POST** `/generic-approvals/{id}/reject` | Post Approvals Reject
[**Update-V2025ApprovalsAttributes**](#update-approvals-attributes) | **POST** `/generic-approvals/{id}/attributes` | Post Approvals Attributes
[**Update-V2025ApprovalsComments**](#update-approvals-comments) | **POST** `/generic-approvals/{id}/comments` | Post Approvals Comments
[**Update-V2025ApprovalsReassign**](#update-approvals-reassign) | **POST** `/generic-approvals/{id}/reassign` | Post Approvals Reassign


## approve-approval
Currently this endpoint only supports Entitlement Description Approvals.
Approves a specified approval request on behalf of the caller. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and does not include access-request-approvals. The approval request must be in a state that allows it to be approved.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/approve-approval)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Approval ID that correlates to an existing approval request that a user wants to approve
 Body  | ApprovalApproveRequest | [**ApprovalApproveRequest**](../models/approval-approve-request) |   (optional) | 

### Return type
[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval
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
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | Approval ID that correlates to an existing approval request that a user wants to approve
$ApprovalApproveRequest = @"{
  "comment" : "comment",
  "additionalAttributes" : {
    "additionalProp1" : "string",
    "additionalProp2" : "string",
    "additionalProp3" : "string"
  }
}"@

# Post Approvals Approve

try {
    Approve-V2025Approval -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Approve-V2025Approval -Id $Id -ApprovalApproveRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-V2025Approval"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-approval
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Currently this endpoint only supports Entitlement Description Approvals.
Retrieve a single approval for a given approval ID. This endpoint is for generic approvals, different than the access-request-approval endpoint and does not include access-request-approvals.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-approval)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the approval that is to be returned
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval
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
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | ID of the approval that is to be returned
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get an approval

try {
    Get-V2025Approval -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Approval -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Approval"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-approvals
Currently this endpoint only supports Entitlement Description Approvals.
Get a list of approvals. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and does not include access-request-approvals. 
Absence of all query parameters for non admins will will default to mine=true.
Absence of all query parameters for admins will return all approvals in the org.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-approvals)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Mine | **Boolean** |   (optional) (default to $false) | Returns the list of approvals for the current caller.
  Query | RequesterId | **String** |   (optional) | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin.
  Query | RequesteeId | **String** |   (optional) | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin.
  Query | ApproverId | **String** |   (optional) | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin.
  Query | Count | **Boolean** |   (optional) (default to $false) | Adds X-Total-Count to the header to give the amount of total approvals returned from the query.
  Query | CountOnly | **Boolean** |   (optional) (default to $false) | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects.
  Query | IncludeComments | **Boolean** |   (optional) (default to $false) | If set to true in the query, the approval requests returned will include comments.
  Query | IncludeApprovers | **Boolean** |   (optional) (default to $false) | If set to true in the query, the approval requests returned will include approvers.
  Query | IncludeBatchInfo | **Boolean** |   (optional) (default to $false) | If set to true in the query, the approval requests returned will include batch information.
  Query | IncludeBatchInfo2 | **Boolean** |   (optional) (default to $false) | If set to true in the query, the approval requests returned will include batch information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*  **name**: *eq*  **priority**: *eq*  **type**: *eq*  **medium**: *eq*  **description**: *eq*  **batchId**: *eq*  **approvalId**: *eq*  **tenantId**: *eq*  **createdDate**: *eq*  **dueDate**: *eq*  **completedDate**: *eq*  **search**: *eq*  **referenceId**: *eq*  **referenceName**: *eq*  **requestedTargetType**: *eq*  **requestedTargetRequestType**: *eq*  **requestedTargetId**: *eq*  **modifiedDate**: *eq*  **requesterId**: *eq*  **requesteeId**: *eq*  **approverId**: *eq*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Approval[]**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of approvals. | Approval[]
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
$Mine = $true # Boolean | Returns the list of approvals for the current caller. (optional) (default to $false)
$RequesterId = "17e633e7d57e481569df76323169deb6a" # String | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin. (optional)
$RequesteeId = "27e6334g757e481569df76323169db9sc" # String | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin. (optional)
$ApproverId = "37e6334g557e481569df7g2d3169db9sb" # String | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin. (optional)
$Count = $true # Boolean | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional) (default to $false)
$CountOnly = $true # Boolean | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional) (default to $false)
$IncludeComments = $true # Boolean | If set to true in the query, the approval requests returned will include comments. (optional) (default to $false)
$IncludeApprovers = $true # Boolean | If set to true in the query, the approval requests returned will include approvers. (optional) (default to $false)
$IncludeBatchInfo = $true # Boolean | If set to true in the query, the approval requests returned will include batch information. (optional) (default to $false)
$IncludeBatchInfo2 = $true # Boolean | If set to true in the query, the approval requests returned will include batch information. (optional) (default to $false)
$Filters = 'filters=status eq PENDING' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*  **name**: *eq*  **priority**: *eq*  **type**: *eq*  **medium**: *eq*  **description**: *eq*  **batchId**: *eq*  **approvalId**: *eq*  **tenantId**: *eq*  **createdDate**: *eq*  **dueDate**: *eq*  **completedDate**: *eq*  **search**: *eq*  **referenceId**: *eq*  **referenceName**: *eq*  **requestedTargetType**: *eq*  **requestedTargetRequestType**: *eq*  **requestedTargetId**: *eq*  **modifiedDate**: *eq*  **requesterId**: *eq*  **requesteeId**: *eq*  **approverId**: *eq* (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Get approvals

try {
    Get-V2025Approvals 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Approvals -Mine $Mine -RequesterId $RequesterId -RequesteeId $RequesteeId -ApproverId $ApproverId -Count $Count -CountOnly $CountOnly -IncludeComments $IncludeComments -IncludeApprovers $IncludeApprovers -IncludeBatchInfo $IncludeBatchInfo -IncludeBatchInfo2 $IncludeBatchInfo2 -Filters $Filters -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Approvals"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reject-approval
Currently this endpoint only supports Entitlement Description Approvals.
Rejects a specified approval request on behalf of the caller.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/reject-approval)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Approval ID that correlates to an existing approval request that a user wants to reject.
 Body  | ApprovalRejectRequest | [**ApprovalRejectRequest**](../models/approval-reject-request) |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | Approval ID that correlates to an existing approval request that a user wants to reject.
$ApprovalRejectRequest = @"{
  "comment" : "string"
}"@

# Post Approvals Reject

try {
    Deny-V2025Approval -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Deny-V2025Approval -Id $Id -ApprovalRejectRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-V2025Approval"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-approvals-attributes
Currently this endpoint only supports Entitlement Description Approvals.
Allows for the edit/addition/removal of the key/value pair additional attributes map for an existing approval request.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-approvals-attributes)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Approval ID that correlates to an existing approval request that a user wants to change the attributes of.
 Body  | ApprovalAttributesRequest | [**ApprovalAttributesRequest**](../models/approval-attributes-request) | True  | 

### Return type
[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval
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
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | Approval ID that correlates to an existing approval request that a user wants to change the attributes of.
$ApprovalAttributesRequest = @"{
  "removeAttributeKeys" : [ "string" ],
  "comment" : "comment",
  "additionalAttributes" : {
    "additionalProp1" : "string",
    "additionalProp2" : "string",
    "additionalProp3" : "string"
  }
}"@

# Post Approvals Attributes

try {
    $Result = ConvertFrom-V2025JsonToApprovalAttributesRequest -Json $ApprovalAttributesRequest
    Update-V2025ApprovalsAttributes -Id $Id -ApprovalAttributesRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025ApprovalsAttributes -Id $Id -ApprovalAttributesRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025ApprovalsAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-approvals-comments
Currently this endpoint only supports Entitlement Description Approvals.
Adds comments to a specified approval request.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-approvals-comments)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Approval ID that correlates to an existing approval request that a user wants to add a comment to.
 Body  | ApprovalCommentsRequest | [**ApprovalCommentsRequest**](../models/approval-comments-request) | True  | 

### Return type
[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval
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
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | Approval ID that correlates to an existing approval request that a user wants to add a comment to.
$ApprovalCommentsRequest = @"{
  "comment" : "Approval comment."
}"@

# Post Approvals Comments

try {
    $Result = ConvertFrom-V2025JsonToApprovalCommentsRequest -Json $ApprovalCommentsRequest
    Update-V2025ApprovalsComments -Id $Id -ApprovalCommentsRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025ApprovalsComments -Id $Id -ApprovalCommentsRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025ApprovalsComments"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-approvals-reassign
Currently this endpoint only supports Entitlement Description Approvals.
Reassigns an approval request to another identity resulting in that identity being added as an authorized approver.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-approvals-reassign)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Approval ID that correlates to an existing approval request that a user wants to reassign.
 Body  | ApprovalReassignRequest | [**ApprovalReassignRequest**](../models/approval-reassign-request) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | Approval ID that correlates to an existing approval request that a user wants to reassign.
$ApprovalReassignRequest = @"{
  "reassignTo" : "152354832eb6f8f539fd738592e19ec5",
  "comment" : "comment",
  "reassignFrom" : "384532516be25f8fdf935ce19e295837"
}"@

# Post Approvals Reassign

try {
    $Result = ConvertFrom-V2025JsonToApprovalReassignRequest -Json $ApprovalReassignRequest
    Update-V2025ApprovalsReassign -Id $Id -ApprovalReassignRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025ApprovalsReassign -Id $Id -ApprovalReassignRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025ApprovalsReassign"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

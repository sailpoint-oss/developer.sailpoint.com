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
[**Approve-V2025Approval0**](#approve-approval-0) | **POST** `/generic-approvals/bulk-approve` | Post Bulk Approve Approvals
[**Suspend-V2025Approval**](#cancel-approval) | **POST** `/generic-approvals/bulk-cancel` | Post Bulk Cancel Approvals
[**Get-V2025Approval**](#get-approval) | **GET** `/generic-approvals/{id}` | Get an approval
[**Get-V2025Approvals**](#get-approvals) | **GET** `/generic-approvals` | Get approvals
[**Get-V2025ApprovalsConfig**](#get-approvals-config) | **GET** `/generic-approvals/config/{id}` | Get Approval Config
[**Move-V2025Approval**](#move-approval) | **POST** `/generic-approvals/bulk-reassign` | Post Bulk Reassign Approvals
[**Send-V2025ApprovalsConfig**](#put-approvals-config) | **PUT** `/generic-approvals/config` | Put Approval Config
[**Deny-V2025Approval**](#reject-approval) | **POST** `/generic-approvals/{id}/reject` | Post Approvals Reject
[**Deny-V2025Approval0**](#reject-approval-0) | **POST** `/generic-approvals/bulk-reject` | Post Bulk Reject Approvals
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

## approve-approval-0
Bulk Approves specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/v2025/approve-approval-0)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkApproveRequestDTO | [**BulkApproveRequestDTO**](../models/bulk-approve-request-dto) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
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
$BulkApproveRequestDTO = @"{
  "comment" : "Bulk approved by admin for monthly review",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ],
  "additionalAttributes" : {
    "source" : "automation",
    "urgency" : "high"
  }
}"@

# Post Bulk Approve Approvals

try {
    $Result = ConvertFrom-V2025JsonToBulkApproveRequestDTO -Json $BulkApproveRequestDTO
    Approve-V2025Approval0 -BulkApproveRequestDTO $Result 
    
    # Below is a request that includes all optional parameters
    # Approve-V2025Approval0 -BulkApproveRequestDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-V2025Approval0"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## cancel-approval
Bulk cancels specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/v2025/cancel-approval)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkCancelRequestDTO | [**BulkCancelRequestDTO**](../models/bulk-cancel-request-dto) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
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
$BulkCancelRequestDTO = @"{
  "comment" : "Bulk cancellation by admin",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
}"@

# Post Bulk Cancel Approvals

try {
    $Result = ConvertFrom-V2025JsonToBulkCancelRequestDTO -Json $BulkCancelRequestDTO
    Suspend-V2025Approval -BulkCancelRequestDTO $Result 
    
    # Below is a request that includes all optional parameters
    # Suspend-V2025Approval -BulkCancelRequestDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-V2025Approval"
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
Absence of all query parameters for non admins will will default to mine=true. Admin will default to mine=false.
Absence of all query parameters for admins will return all approvals in the org.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-approvals)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Mine | **Boolean** |   (optional) (default to $false) | Returns the list of approvals for the current caller. Defaults to false if admin, true otherwise.
  Query | RequesterId | **String** |   (optional) | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin.
  Query | RequesteeId | **String** |   (optional) | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin.
  Query | ApproverId | **String** |   (optional) | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin.
  Query | Count | **Boolean** |   (optional) (default to $false) | Adds X-Total-Count to the header to give the amount of total approvals returned from the query.
  Query | CountOnly | **Boolean** |   (optional) (default to $false) | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects.
  Query | IncludeComments | **Boolean** |   (optional) (default to $false) | If set to true in the query, the approval requests returned will include comments.
  Query | IncludeApprovers | **Boolean** |   (optional) (default to $false) | If set to true in the query, the approval requests returned will include approvers.
  Query | IncludeBatchInfo | **Boolean** |   (optional) (default to $false) | If set to true in the query, the approval requests returned will include batch information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **approvalId**: *eq, ne, in, co, sw*  **tenantId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le*
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
$Mine = $true # Boolean | Returns the list of approvals for the current caller. Defaults to false if admin, true otherwise. (optional) (default to $false)
$RequesterId = "17e633e7d57e481569df76323169deb6a" # String | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin. (optional)
$RequesteeId = "27e6334g757e481569df76323169db9sc" # String | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin. (optional)
$ApproverId = "37e6334g557e481569df7g2d3169db9sb" # String | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin. (optional)
$Count = $true # Boolean | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional) (default to $false)
$CountOnly = $true # Boolean | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional) (default to $false)
$IncludeComments = $true # Boolean | If set to true in the query, the approval requests returned will include comments. (optional) (default to $false)
$IncludeApprovers = $true # Boolean | If set to true in the query, the approval requests returned will include approvers. (optional) (default to $false)
$IncludeBatchInfo = $true # Boolean | If set to true in the query, the approval requests returned will include batch information. (optional) (default to $false)
$Filters = 'filters=status eq PENDING' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **approvalId**: *eq, ne, in, co, sw*  **tenantId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le* (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Get approvals

try {
    Get-V2025Approvals 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Approvals -Mine $Mine -RequesterId $RequesterId -RequesteeId $RequesteeId -ApproverId $ApproverId -Count $Count -CountOnly $CountOnly -IncludeComments $IncludeComments -IncludeApprovers $IncludeApprovers -IncludeBatchInfo $IncludeBatchInfo -Filters $Filters -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Approvals"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-approvals-config
Retrieves a singular approval configuration that matches the given ID

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-approvals-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the object the config applies to, for example one of the following: [(approvalID), (roleID), (entitlementID), (accessProfileID), (sourceID), (applicationID), ""ENTITLEMENT_DESCRIPTIONS"", ""ACCESS_REQUEST_APPROVAL"", (tenantID)]

### Return type
[**ApprovalConfig**](../models/approval-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | ApprovalConfig
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
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | The id of the object the config applies to, for example one of the following: [(approvalID), (roleID), (entitlementID), (accessProfileID), (sourceID), (applicationID), ""ENTITLEMENT_DESCRIPTIONS"", ""ACCESS_REQUEST_APPROVAL"", (tenantID)]

# Get Approval Config

try {
    Get-V2025ApprovalsConfig -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ApprovalsConfig -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ApprovalsConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## move-approval
Bulk reassigns specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/v2025/move-approval)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkReassignRequestDTO | [**BulkReassignRequestDTO**](../models/bulk-reassign-request-dto) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
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
$BulkReassignRequestDTO = @"{
  "reassignTo" : "32454251-6ce2-5d8f-df93-5ce19e295238",
  "comment" : "Bulk reassignment by admin",
  "reassignFrom" : "12353251-6be2-5f8f-df93-5ce19b6e5837",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
}"@

# Post Bulk Reassign Approvals

try {
    $Result = ConvertFrom-V2025JsonToBulkReassignRequestDTO -Json $BulkReassignRequestDTO
    Move-V2025Approval -BulkReassignRequestDTO $Result 
    
    # Below is a request that includes all optional parameters
    # Move-V2025Approval -BulkReassignRequestDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Move-V2025Approval"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-approvals-config
Upserts a singular approval configuration that matches the given configID and configScope. If id and scope are not provided, it will default to setting the tenant config.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-approvals-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ApprovalConfig | [**ApprovalConfig**](../models/approval-config) | True  | 
  Query | Id | **String** |   (optional) | The ID defined by the scope field, where [[id]]:[[scope]] is the following:  [[roleID]]:ROLE  [[entitlementID]]:ENTITLEMENT  [[accessProfileID]]:ACCESS_PROFILE  [[sourceID]]:SOURCE  [[applicationID]]:APPLICATION  ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE  ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE  [[tenantID]]:TENANT 
  Query | Scope | **String** |   (optional) | The scope of the field, where [[id]]:[[scope]] is the following:  [[roleID]]:ROLE  [[entitlementID]]:ENTITLEMENT  [[accessProfileID]]:ACCESS_PROFILE  [[sourceID]]:SOURCE  [[applicationID]]:APPLICATION  ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE  ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE  [[tenantID]]:TENANT 

### Return type
[**ApprovalConfig**](../models/approval-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Verified Email Status | ApprovalConfig
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
$ApprovalConfig = @"{
  "timeoutConfig" : {
    "daysUntilTimeout" : 2,
    "enabled" : true,
    "timeoutResult" : "EXPIRED"
  },
  "requiresComment" : "ALL",
  "cronTimezone" : {
    "offset" : "",
    "location" : "America/New_York"
  },
  "fallbackApprover" : {
    "identityID" : "17e633e7d57e481569df76323169deb6a",
    "members" : [ {
      "name" : "Bob Neil",
      "id" : "17e633e7d57e481569df76323169deb6a",
      "type" : "IDENTITY",
      "email" : "mail@mail.com"
    }, {
      "name" : "Bob Neil",
      "id" : "17e633e7d57e481569df76323169deb6a",
      "type" : "IDENTITY",
      "email" : "mail@mail.com"
    } ],
    "name" : "Jim Bob",
    "ownerOf" : [ {
      "name" : "Access Request App",
      "id" : "string",
      "type" : "APPLICATION"
    }, {
      "name" : "Access Request App",
      "id" : "string",
      "type" : "APPLICATION"
    } ],
    "serialOrder" : 0,
    "type" : "IDENTITY",
    "email" : "mail@mail.com"
  },
  "reminderConfig" : {
    "reminderCronSchedule" : "1 1 1 1 1",
    "daysUntilFirstReminder" : 0,
    "maxReminders" : 5,
    "enabled" : false
  },
  "scope" : "DOMAIN_OBJECT",
  "tenantId" : "d3c10266-1a31-4acc-b01e-44a3d1c56615",
  "escalationConfig" : {
    "escalationCronSchedule" : "*/5 * * * *",
    "escalationChain" : [ {
      "tier" : 1,
      "chainId" : "ef85d1a8-41ef-433a-8153-0b1f59e7b26a",
      "identityType" : "IDENTITY",
      "identityId" : "fdfda352157d4cc79bb749953131b457"
    }, {
      "tier" : 1,
      "chainId" : "ef85d1a8-41ef-433a-8153-0b1f59e7b26a",
      "identityType" : "IDENTITY",
      "identityId" : "fdfda352157d4cc79bb749953131b457"
    } ],
    "daysUntilFirstEscalation" : 2,
    "enabled" : true
  },
  "id" : "5804e7d6-e04b-400f-9fb8-dff894419a2f",
  "serialChain" : [ {
    "tier" : 1,
    "chainId" : "23dc206e-2a9e-4f98-93db-8d6e342cca18",
    "identityType" : "IDENTITY",
    "identityId" : "2c9180858090ea8801809a0465e829da"
  }, {
    "tier" : 1,
    "chainId" : "23dc206e-2a9e-4f98-93db-8d6e342cca18",
    "identityType" : "IDENTITY",
    "identityId" : "2c9180858090ea8801809a0465e829da"
  } ],
  "autoApprove" : "false"
}"@
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | The ID defined by the scope field, where [[id]]:[[scope]] is the following:  [[roleID]]:ROLE  [[entitlementID]]:ENTITLEMENT  [[accessProfileID]]:ACCESS_PROFILE  [[sourceID]]:SOURCE  [[applicationID]]:APPLICATION  ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE  ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE  [[tenantID]]:TENANT  (optional)
$Scope = "ROLE" # String | The scope of the field, where [[id]]:[[scope]] is the following:  [[roleID]]:ROLE  [[entitlementID]]:ENTITLEMENT  [[accessProfileID]]:ACCESS_PROFILE  [[sourceID]]:SOURCE  [[applicationID]]:APPLICATION  ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE  ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE  [[tenantID]]:TENANT  (optional)

# Put Approval Config

try {
    $Result = ConvertFrom-V2025JsonToApprovalConfig -Json $ApprovalConfig
    Send-V2025ApprovalsConfig -ApprovalConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2025ApprovalsConfig -ApprovalConfig $Result -Id $Id -Scope $Scope  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2025ApprovalsConfig"
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

## reject-approval-0
Bulk reject specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/v2025/reject-approval-0)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkRejectRequestDTO | [**BulkRejectRequestDTO**](../models/bulk-reject-request-dto) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
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
$BulkRejectRequestDTO = @"{
  "comment" : "Bulk reject by admin",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
}"@

# Post Bulk Reject Approvals

try {
    $Result = ConvertFrom-V2025JsonToBulkRejectRequestDTO -Json $BulkRejectRequestDTO
    Deny-V2025Approval0 -BulkRejectRequestDTO $Result 
    
    # Below is a request that includes all optional parameters
    # Deny-V2025Approval0 -BulkRejectRequestDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-V2025Approval0"
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

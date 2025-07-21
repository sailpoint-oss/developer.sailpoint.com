---
id: v2025-suggested-entitlement-description
title: SuggestedEntitlementDescription
pagination_label: SuggestedEntitlementDescription
sidebar_label: SuggestedEntitlementDescription
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SuggestedEntitlementDescription', 'V2025SuggestedEntitlementDescription'] 
slug: /tools/sdk/powershell/v2025/methods/suggested-entitlement-description
tags: ['SDK', 'Software Development Kit', 'SuggestedEntitlementDescription', 'V2025SuggestedEntitlementDescription']
---

# SuggestedEntitlementDescription
  Use this API to implement Suggested Entitlement Description (SED) functionality. 
SED functionality leverages the power of LLM to generate suggested entitlement descriptions. 
Refer to [GenAI Entitlement Descriptions](https://documentation.sailpoint.com/saas/help/access/entitlements.html#genai-entitlement-descriptions) to learn more about SED in Identity Security Cloud (ISC). 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2025SedBatchStats**](#get-sed-batch-stats) | **GET** `/suggested-entitlement-description-batches/{batchId}/stats` | Submit sed batch stats request
[**Get-V2025SedBatches**](#get-sed-batches) | **GET** `/suggested-entitlement-description-batches` | List Sed Batch Record
[**Get-V2025Seds**](#list-seds) | **GET** `/suggested-entitlement-descriptions` | List suggested entitlement descriptions
[**Update-V2025Sed**](#patch-sed) | **PATCH** `/suggested-entitlement-descriptions` | Patch suggested entitlement description
[**Submit-V2025SedApproval**](#submit-sed-approval) | **POST** `/suggested-entitlement-description-approvals` | Submit bulk approval request
[**Submit-V2025SedAssignment**](#submit-sed-assignment) | **POST** `/suggested-entitlement-description-assignments` | Submit sed assignment request
[**Submit-V2025SedBatchRequest**](#submit-sed-batch-request) | **POST** `/suggested-entitlement-description-batches` | Submit sed batch request


## get-sed-batch-stats
'Submit Sed Batch Stats Request.

 Submits batchId in the path param `(e.g. {batchId}/stats)`. API responses with stats
 of the batchId.'


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-sed-batch-stats)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | BatchId | **String** | True  | Batch Id

### Return type
[**SedBatchStats**](../models/sed-batch-stats)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Stats of Sed batch. | SedBatchStats
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
$BatchId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | Batch Id

# Submit sed batch stats request

try {
    Get-V2025SedBatchStats -BatchId $BatchId 
    
    # Below is a request that includes all optional parameters
    # Get-V2025SedBatchStats -BatchId $BatchId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025SedBatchStats"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sed-batches
List Sed Batches.
API responses with Sed Batch Records

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-sed-batches)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int64** |   (optional) (default to 0) | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0.
  Query | Limit | **Int64** |   (optional) (default to 250) | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  Query | Count | **Boolean** |   (optional) (default to $false) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used.
  Query | CountOnly | **Boolean** |   (optional) (default to $false) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array.
  Query | Status | **String** |   (optional) | Batch Status

### Return type
[**SedBatchRecord[]**](../models/sed-batch-record)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Sed Batch Records | SedBatchRecord[]
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
$Offset = 0 # Int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
$Limit = 250 # Int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
$Count = $true # Boolean | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional) (default to $false)
$CountOnly = $true # Boolean | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to $false)
$Status = "completed, failed, submitted, materialized, failed" # String | Batch Status (optional)

# List Sed Batch Record

try {
    Get-V2025SedBatches 
    
    # Below is a request that includes all optional parameters
    # Get-V2025SedBatches -Offset $Offset -Limit $Limit -Count $Count -CountOnly $CountOnly -Status $Status  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025SedBatches"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-seds
List of Suggested Entitlement Descriptions (SED)

SED field descriptions:

**batchId**: the ID of the batch of entitlements that are submitted for description generation

**displayName**: the display name of the entitlement that we are generating a description for

**sourceName**: the name of the source associated with the entitlement that we are generating the description for

**sourceId**: the ID of the source associated with the entitlement that we are generating the description for

**status**: the status of the suggested entitlement description, valid status options: "requested", "suggested", "not_suggested", "failed", "assigned", "approved", "denied"

**fullText**: will filter suggested entitlement description records by text found in any of the following fields: entitlement name, entitlement display name, suggested description, source name

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-seds)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status**
  Query | CountOnly | **Boolean** |   (optional) (default to $false) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array.
  Query | RequestedByAnyone | **Boolean** |   (optional) (default to $false) | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested
  Query | ShowPendingStatusOnly | **Boolean** |   (optional) (default to $false) | Will limit records to items that are in ""suggested"" or ""approved"" status

### Return type
[**Sed[]**](../models/sed)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Suggested Entitlement Details | Sed[]
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
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'displayName co "Read and Write"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* (optional)
$Sorters = "sorters=displayName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** (optional)
$CountOnly = $false # Boolean | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to $false)
$RequestedByAnyone = $false # Boolean | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested (optional) (default to $false)
$ShowPendingStatusOnly = $false # Boolean | Will limit records to items that are in ""suggested"" or ""approved"" status (optional) (default to $false)

# List suggested entitlement descriptions

try {
    Get-V2025Seds 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Seds -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters -CountOnly $CountOnly -RequestedByAnyone $RequestedByAnyone -ShowPendingStatusOnly $ShowPendingStatusOnly  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Seds"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-sed
Patch Suggested Entitlement Description

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-sed)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | id is sed id
 Body  | SedPatch | [**[]SedPatch**](../models/sed-patch) | True  | Sed Patch Request

### Return type
[**Sed**](../models/sed)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | detail of patched sed | Sed
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
$Id = "ebab396f-0af1-4050-89b7-dafc63ec70e7" # String | id is sed id
 $SedPatch = @"{
  "op" : "replace",
  "path" : "status",
  "value" : "approved"
}"@ # SedPatch[] | Sed Patch Request
 

# Patch suggested entitlement description

try {
    $Result = ConvertFrom-JsonToSedPatch -Json $SedPatch
    Update-V2025Sed -Id $Id -SedPatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025Sed -Id $Id -SedPatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025Sed"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-sed-approval
Submit Bulk Approval Request for SED.
Request body takes list of SED Ids. API responses with list of SED Approval Status

[API Spec](https://developer.sailpoint.com/docs/api/v2025/submit-sed-approval)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SedApproval | [**[]SedApproval**](../models/sed-approval) | True  | Sed Approval

### Return type
[**SedApprovalStatus[]**](../models/sed-approval-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of SED Approval Status | SedApprovalStatus[]
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
 $SedApproval = @"{
  "items" : "016629d1-1d25-463f-97f3-c6686846650"
}"@ # SedApproval[] | Sed Approval
 

# Submit bulk approval request

try {
    $Result = ConvertFrom-JsonToSedApproval -Json $SedApproval
    Submit-V2025SedApproval -SedApproval $Result 
    
    # Below is a request that includes all optional parameters
    # Submit-V2025SedApproval -SedApproval $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-V2025SedApproval"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-sed-assignment
Submit Assignment Request.
Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together

[API Spec](https://developer.sailpoint.com/docs/api/v2025/submit-sed-assignment)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SedAssignment | [**SedAssignment**](../models/sed-assignment) | True  | Sed Assignment Request

### Return type
[**SedAssignmentResponse**](../models/sed-assignment-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Sed Assignment Response | SedAssignmentResponse
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
$SedAssignment = @"{
  "assignee" : {
    "type" : "SOURCE_OWNER",
    "value" : "016629d1-1d25-463f-97f3-c6686846650"
  },
  "items" : [ "016629d1-1d25-463f-97f3-0c6686846650", "016629d1-1d25-463f-97f3-0c6686846650" ]
}"@

# Submit sed assignment request

try {
    $Result = ConvertFrom-JsonToSedAssignment -Json $SedAssignment
    Submit-V2025SedAssignment -SedAssignment $Result 
    
    # Below is a request that includes all optional parameters
    # Submit-V2025SedAssignment -SedAssignment $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-V2025SedAssignment"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-sed-batch-request
Submit Sed Batch Request.
Request body has one of the following: - a list of entitlement Ids - a list of SED Ids that user wants to have description generated by LLM. API responses with batchId that groups Ids together

[API Spec](https://developer.sailpoint.com/docs/api/v2025/submit-sed-batch-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SedBatchRequest | [**SedBatchRequest**](../models/sed-batch-request) |   (optional) | Sed Batch Request

### Return type
[**SedBatchResponse**](../models/sed-batch-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Sed Batch Response | SedBatchResponse
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
$SedBatchRequest = @"{
  "entitlements" : [ "016629d1-1d25-463f-97f3-c6686846650", "016629d1-1d25-463f-97f3-c6686846650" ],
  "seds" : [ "016629d1-1d25-463f-97f3-c6686846650", "016629d1-1d25-463f-97f3-c6686846650" ],
  "searchCriteria" : {
    "key" : {
      "indices" : [ "entitlements" ],
      "query" : {
        "query" : "status:active"
      },
      "textQuery" : {
        "terms" : [ "admin", "user" ],
        "matchAny" : true,
        "fields" : [ "role", "name" ]
      },
      "searchAfter" : [ "12345", "67890" ],
      "filters" : {
        "status" : {
          "type" : "TERMS",
          "terms" : [ "active", "inactive" ]
        }
      },
      "sort" : [ "name:asc", "createdAt:desc" ],
      "queryType" : "TEXT",
      "includeNested" : true
    }
  }
}"@

# Submit sed batch request

try {
    Submit-V2025SedBatchRequest 
    
    # Below is a request that includes all optional parameters
    # Submit-V2025SedBatchRequest -SedBatchRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-V2025SedBatchRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

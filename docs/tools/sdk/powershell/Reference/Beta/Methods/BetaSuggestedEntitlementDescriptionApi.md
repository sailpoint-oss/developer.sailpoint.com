---
id: beta-suggested-entitlement-description
title: SuggestedEntitlementDescription
pagination_label: SuggestedEntitlementDescription
sidebar_label: SuggestedEntitlementDescription
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SuggestedEntitlementDescription', 'BetaSuggestedEntitlementDescription'] 
slug: /tools/sdk/powershell/beta/methods/suggested-entitlement-description
tags: ['SDK', 'Software Development Kit', 'SuggestedEntitlementDescription', 'BetaSuggestedEntitlementDescription']
---


# SuggestedEntitlementDescription
  Use this API to implement Suggested Entitlement Description (SED) functionality. 
SED functionality leverages the power of LLM to generate suggested entitlement descriptions. 
Refer to [GenAI Entitlement Descriptions](https://documentation.sailpoint.com/saas/help/access/entitlements.html#genai-entitlement-descriptions) to learn more about SED in Identity Security Cloud (ISC). 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaSedBatchStats**](#get-sed-batch-stats) | **GET** `/suggested-entitlement-description-batches/{batchId}/stats` | Submit Sed Batch Stats Request
[**Get-BetaSedBatches**](#get-sed-batches) | **GET** `/suggested-entitlement-description-batches` | List Sed Batch Request
[**Get-BetaSeds**](#list-seds) | **GET** `/suggested-entitlement-descriptions` | List Suggested Entitlement Descriptions
[**Update-BetaSed**](#patch-sed) | **PATCH** `/suggested-entitlement-descriptions` | Patch Suggested Entitlement Description
[**Submit-BetaSedApproval**](#submit-sed-approval) | **POST** `/suggested-entitlement-description-approvals` | Submit Bulk Approval Request
[**Submit-BetaSedAssignment**](#submit-sed-assignment) | **POST** `/suggested-entitlement-description-assignments` | Submit Sed Assignment Request
[**Submit-BetaSedBatchRequest**](#submit-sed-batch-request) | **POST** `/suggested-entitlement-description-batches` | Submit Sed Batch Request


## get-sed-batch-stats

Submit Sed Batch Stats Request.

Submits batchId in the path param `(e.g. {batchId}/stats)`.
API responses with stats of the batchId.


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
$BatchId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | Batch Id
# Submit Sed Batch Stats Request
try {
    Get-BetaSedBatchStats-BetaBatchId $BatchId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSedBatchStats -BetaBatchId $BatchId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSedBatchStats"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-sed-batches

List Sed Batches.
API responses with Sed Batch Status

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**SedBatchStatus**](../models/sed-batch-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of batch | SedBatchStatus
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
# List Sed Batch Request
try {
    Get-BetaSedBatches
    
    # Below is a request that includes all optional parameters
    # Get-BetaSedBatches  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSedBatches"
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

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int64** |   (optional) | Integer specifying the maximum number of records to return in a single API call.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status**
  Query | Count | **Boolean** |   (optional) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used.
  Query | CountOnly | **Boolean** |   (optional) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the Coun parameter in that this one skip executing the actual query and always return an empty array.
  Query | RequestedByAnyone | **Boolean** |   (optional) | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested
  Query | ShowPendingStatusOnly | **Boolean** |   (optional) | Will limit records to items that are in ""suggested"" or ""approved"" status

### Return type

[**Sed[]**](../models/sed)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Suggested Entitlement Details | Sed[]
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
$Limit = limit=25 # Int64 | Integer specifying the maximum number of records to return in a single API call.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
$Filters = 'displayName co "Read and Write"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* (optional)
$Sorters = "sorters=displayName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** (optional)
$Count = $false # Boolean | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional)
$CountOnly = $false # Boolean | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the Coun parameter in that this one skip executing the actual query and always return an empty array. (optional)
$RequestedByAnyone = $false # Boolean | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested (optional)
$ShowPendingStatusOnly = $false # Boolean | Will limit records to items that are in ""suggested"" or ""approved"" status (optional)
# List Suggested Entitlement Descriptions
try {
    Get-BetaSeds
    
    # Below is a request that includes all optional parameters
    # Get-BetaSeds -BetaLimit $Limit -BetaFilters $Filters -BetaSorters $Sorters -BetaCount $Count -BetaCountOnly $CountOnly -BetaRequestedByAnyone $RequestedByAnyone -BetaShowPendingStatusOnly $ShowPendingStatusOnly  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSeds"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-sed

Patch Suggested Entitlement Description

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "ebab396f-0af1-4050-89b7-dafc63ec70e7" # String | id is sed id
 # SedPatch[] | Sed Patch Request
 $SedPatch = @"{
  "op" : "replace",
  "path" : "status",
  "value" : "approved"
}"@ 

# Patch Suggested Entitlement Description
try {
    $Result = ConvertFrom-JsonToSedPatch -Json $SedPatch
    Update-BetaSed-BetaId $Id -BetaSedPatch $Result
    
    # Below is a request that includes all optional parameters
    # Update-BetaSed -BetaId $Id -BetaSedPatch $SedPatch  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaSed"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## submit-sed-approval

Submit Bulk Approval Request for SED.
Request body takes list of SED Ids. API responses with list of SED Approval Status

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
 # SedApproval[] | Sed Approval
 $SedApproval = @"{
  "items" : "016629d1-1d25-463f-97f3-c6686846650"
}"@ 

# Submit Bulk Approval Request
try {
    $Result = ConvertFrom-JsonToSedApproval -Json $SedApproval
    Submit-BetaSedApproval-BetaSedApproval $Result
    
    # Below is a request that includes all optional parameters
    # Submit-BetaSedApproval -BetaSedApproval $SedApproval  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-BetaSedApproval"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## submit-sed-assignment

Submit Assignment Request.
Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
# Submit Sed Assignment Request
try {
    $Result = ConvertFrom-JsonToSedAssignment -Json $SedAssignment
    Submit-BetaSedAssignment-BetaSedAssignment $Result
    
    # Below is a request that includes all optional parameters
    # Submit-BetaSedAssignment -BetaSedAssignment $SedAssignment  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-BetaSedAssignment"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## submit-sed-batch-request

Submit Sed Batch Request.
Request body has one of the following:
  - a list of entitlement Ids
  - a list of SED Ids
that user wants to have description generated by LLM.  API responses with batchId that groups Ids together

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SedBatchRequest = @"{
  "entitlements" : [ "016629d1-1d25-463f-97f3-c6686846650", "016629d1-1d25-463f-97f3-c6686846650" ],
  "seds" : [ "016629d1-1d25-463f-97f3-c6686846650", "016629d1-1d25-463f-97f3-c6686846650" ]
}"@
# Submit Sed Batch Request
try {
    Submit-BetaSedBatchRequest
    
    # Below is a request that includes all optional parameters
    # Submit-BetaSedBatchRequest -BetaSedBatchRequest $SedBatchRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-BetaSedBatchRequest"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 



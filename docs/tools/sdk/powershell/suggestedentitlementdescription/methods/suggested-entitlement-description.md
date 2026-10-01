# SuggestedEntitlementDescription

# SuggestedEntitlementDescription
  Use this API to implement Suggested Entitlement Description (SED) functionality. 
SED functionality leverages the power of LLM to generate suggested entitlement descriptions. 
Refer to [GenAI Entitlement Descriptions](https://documentation.sailpoint.com/saas/help/access/entitlements.html#genai-entitlement-descriptions) to learn more about SED in Identity Security Cloud (ISC). 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-BulkEntitlementRecommendationsV1**](#approve-bulk-entitlement-recommendations-v1) | **POST** `/entitlement-recommendations/v1/bulk-approve` | Bulk approve entitlement recommendations
[**New-AutoWriteSettingsV1**](#create-auto-write-settings-v1) | **POST** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Create auto-write settings for SED
[**Get-AutoWriteSettingsV1**](#get-auto-write-settings-v1) | **GET** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Get auto-write settings for SED
[**Get-SedBatchStatsV1**](#get-sed-batch-stats-v1) | **GET** `/suggested-entitlement-description-batches/v1/{batchId}/stats` | Submit sed batch stats request
[**Get-SedBatchesV1**](#get-sed-batches-v1) | **GET** `/suggested-entitlement-description-batches/v1` | List Sed Batch Record
[**Get-PendingEntitlementRecommendationApprovalsV1**](#list-pending-entitlement-recommendation-approvals-v1) | **GET** `/entitlement-recommendations/v1/pending-approvals` | List pending entitlement recommendation approvals
[**Get-PrivilegedEntitlementRecommendationsV1**](#list-privileged-entitlement-recommendations-v1) | **GET** `/privileged-recommendations/v1` | List privileged entitlement recommendations
[**Get-SedsV1**](#list-seds-v1) | **GET** `/suggested-entitlement-descriptions/v1` | List suggested entitlement descriptions
[**Update-EntitlementRecommendationV1**](#patch-entitlement-recommendation-v1) | **PATCH** `/entitlement-recommendations/v1/{id}` | Update an entitlement recommendation
[**Update-SedV1**](#patch-sed-v1) | **PATCH** `/suggested-entitlement-descriptions/v1` | Patch suggested entitlement description
[**Submit-EntitlementRecommendationsAssignmentV1**](#submit-entitlement-recommendations-assignment-v1) | **POST** `/entitlement-recommendations/v1/assign` | Assign entitlement recommendations for review
[**Submit-SedApprovalV1**](#submit-sed-approval-v1) | **POST** `/suggested-entitlement-description-approvals/v1` | Submit bulk approval request
[**Submit-SedAssignmentV1**](#submit-sed-assignment-v1) | **POST** `/suggested-entitlement-description-assignments/v1` | Submit sed assignment request
[**Submit-SedBatchRequestV1**](#submit-sed-batch-request-v1) | **POST** `/suggested-entitlement-description-batches/v1` | Submit sed batch request
[**Update-AutoWriteSettingsV1**](#update-auto-write-settings-v1) | **PATCH** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Update auto-write settings for SED


## approve-bulk-entitlement-recommendations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Approve multiple entitlement recommendations in a single request. Each item in the request must include the recommendation ID and, depending on the record type, either an approved description (SED items) or an approved privilege level (privilege items). Returns a per-item result indicating success or failure.

[API Spec](https://developer.sailpoint.com/docs/api/approve-bulk-entitlement-recommendations-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | BulkApproveEntitlementRecommendationRequest | [**BulkApproveEntitlementRecommendationRequest**](../models/bulk-approve-entitlement-recommendation-request) | True  | The list of recommendation items to approve.

### Return type
[**BulkApproveEntitlementRecommendationResult[]**](../models/bulk-approve-entitlement-recommendation-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Per-item approval results. | BulkApproveEntitlementRecommendationResult[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$BulkApproveEntitlementRecommendationRequest = @"{
  "items" : [ {
    "id" : "79db50d4-723c-4aa0-a824-83c2205d82d1",
    "recordType" : "SED",
    "description" : "Provides access and permissions related to the Delinea Secret Server Cloud system."
  }, {
    "id" : "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "recordType" : "privilege",
    "privilegeLevel" : "high"
  } ]
}"@

# Bulk approve entitlement recommendations

try {
    $Result = ConvertFrom-JsonToBulkApproveEntitlementRecommendationRequest -Json $BulkApproveEntitlementRecommendationRequest
    Approve-BulkEntitlementRecommendationsV1 -XSailPointExperimental $XSailPointExperimental -BulkApproveEntitlementRecommendationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Approve-BulkEntitlementRecommendationsV1 -XSailPointExperimental $XSailPointExperimental -BulkApproveEntitlementRecommendationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-BulkEntitlementRecommendationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-auto-write-settings-v1
Create the initial auto-write settings for a tenant. Returns 409 Conflict if settings already exist. Use PATCH to update existing settings.

[API Spec](https://developer.sailpoint.com/docs/api/create-auto-write-settings-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AutoWriteSetting | [**AutoWriteSetting**](../models/auto-write-setting) | True  | Auto-write settings to create

### Return type
[**AutoWriteSettingResponse**](../models/auto-write-setting-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Auto-write settings created successfully | AutoWriteSettingResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | CreateAutoWriteSettingsV1409Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$AutoWriteSetting = @"{
  "excludedSourceIds" : [ "2c91808a7813090a017814552e526350" ],
  "includedSourceIds" : [ "2c91808a7813090a017814552e526349", "2c91808a7813090a017814552e52634a" ],
  "enabled" : true
}"@

# Create auto-write settings for SED

try {
    $Result = ConvertFrom-JsonToAutoWriteSetting -Json $AutoWriteSetting
    New-AutoWriteSettingsV1 -AutoWriteSetting $Result 
    
    # Below is a request that includes all optional parameters
    # New-AutoWriteSettingsV1 -AutoWriteSetting $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-AutoWriteSettingsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-auto-write-settings-v1
Get the current auto-write configuration for the tenant, including the enabled state and source include/exclude lists.

[API Spec](https://developer.sailpoint.com/docs/api/get-auto-write-settings-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**AutoWriteSettingResponse**](../models/auto-write-setting-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Current auto-write settings | AutoWriteSettingResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get auto-write settings for SED

try {
    Get-AutoWriteSettingsV1 
    
    # Below is a request that includes all optional parameters
    # Get-AutoWriteSettingsV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AutoWriteSettingsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sed-batch-stats-v1
'Submit Sed Batch Stats Request.

 Submits batchId in the path param `(e.g. {batchId}/stats)`. API responses with stats
 of the batchId.'


[API Spec](https://developer.sailpoint.com/docs/api/get-sed-batch-stats-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$BatchId = "8c190e67-87aa-4ed9-a90b-d9d5344523fb" # String | Batch Id

# Submit sed batch stats request

try {
    Get-SedBatchStatsV1 -BatchId $BatchId 
    
    # Below is a request that includes all optional parameters
    # Get-SedBatchStatsV1 -BatchId $BatchId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SedBatchStatsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sed-batches-v1
List Sed Batches.
API responses with Sed Batch Records

[API Spec](https://developer.sailpoint.com/docs/api/get-sed-batches-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
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
    Get-SedBatchesV1 
    
    # Below is a request that includes all optional parameters
    # Get-SedBatchesV1 -Offset $Offset -Limit $Limit -Count $Count -CountOnly $CountOnly -Status $Status  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SedBatchesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-pending-entitlement-recommendation-approvals-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a list of entitlement recommendations (SED and/or privilege) that are currently awaiting review or approval. Each record includes the recommendation type, entitlement details, and any AI-generated suggestions.

[API Spec](https://developer.sailpoint.com/docs/api/list-pending-entitlement-recommendation-approvals-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**EntitlementRecommendationRecord[]**](../models/entitlement-recommendation-record)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of pending entitlement recommendation records. | EntitlementRecommendationRecord[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

# List pending entitlement recommendation approvals

try {
    Get-PendingEntitlementRecommendationApprovalsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PendingEntitlementRecommendationApprovalsV1 -XSailPointExperimental $XSailPointExperimental -Offset $Offset -Limit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PendingEntitlementRecommendationApprovalsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-privileged-entitlement-recommendations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a list of privileged entitlement recommendation groups. Each group aggregates individual entitlement instances that share the same entitlement name and connector type, along with a recommendation score and instance count.

[API Spec](https://developer.sailpoint.com/docs/api/list-privileged-entitlement-recommendations-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**PrivilegedRecommendationGroup[]**](../models/privileged-recommendation-group)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of privileged recommendation groups. | PrivilegedRecommendationGroup[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

# List privileged entitlement recommendations

try {
    Get-PrivilegedEntitlementRecommendationsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PrivilegedEntitlementRecommendationsV1 -XSailPointExperimental $XSailPointExperimental -Offset $Offset -Limit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PrivilegedEntitlementRecommendationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-seds-v1
List of Suggested Entitlement Descriptions (SED)

SED field descriptions:

**batchId**: the ID of the batch of entitlements that are submitted for description generation

**displayName**: the display name of the entitlement that we are generating a description for

**sourceName**: the name of the source associated with the entitlement that we are generating the description for

**sourceId**: the ID of the source associated with the entitlement that we are generating the description for

**status**: the status of the suggested entitlement description, valid status options: "requested", "suggested", "not_suggested", "failed", "assigned", "approved", "denied"

**fullText**: will filter suggested entitlement description records by text found in any of the following fields: entitlement name, entitlement display name, suggested description, source name

[API Spec](https://developer.sailpoint.com/docs/api/list-seds-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
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
    Get-SedsV1 
    
    # Below is a request that includes all optional parameters
    # Get-SedsV1 -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters -CountOnly $CountOnly -RequestedByAnyone $RequestedByAnyone -ShowPendingStatusOnly $ShowPendingStatusOnly  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SedsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-entitlement-recommendation-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Partially update a single entitlement recommendation record by its ID. Use this endpoint to update the status, description, or privilege level of a specific SED or privilege recommendation.

[API Spec](https://developer.sailpoint.com/docs/api/patch-entitlement-recommendation-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The unique identifier of the entitlement recommendation to update.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The patch operations to apply to the entitlement recommendation record.

### Return type
[**EntitlementRecommendationRecord**](../models/entitlement-recommendation-record)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated entitlement recommendation record. | EntitlementRecommendationRecord
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "79db50d4-723c-4aa0-a824-83c2205d82d1" # String | The unique identifier of the entitlement recommendation to update.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | The patch operations to apply to the entitlement recommendation record.
 

# Update an entitlement recommendation

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-EntitlementRecommendationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-EntitlementRecommendationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-EntitlementRecommendationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-sed-v1
Patch Suggested Entitlement Description

[API Spec](https://developer.sailpoint.com/docs/api/patch-sed-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
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
    Update-SedV1 -Id $Id -SedPatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-SedV1 -Id $Id -SedPatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-SedV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-entitlement-recommendations-assignment-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Assign a set of entitlement recommendation records to a reviewer. The assignee can be a specific identity, a governance group, or a role-based assignee such as source owner or entitlement owner. Returns a batch ID that can be used to track the assignment.

[API Spec](https://developer.sailpoint.com/docs/api/submit-entitlement-recommendations-assignment-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | EntitlementRecommendationAssignRequest | [**EntitlementRecommendationAssignRequest**](../models/entitlement-recommendation-assign-request) | True  | The recommendation IDs and the target assignee.

### Return type
[**EntitlementRecommendationAssignResult**](../models/entitlement-recommendation-assign-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Assignment queued successfully. Returns the batch ID for tracking. | EntitlementRecommendationAssignResult
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$EntitlementRecommendationAssignRequest = @"{
  "assignee" : {
    "type" : "IDENTITY",
    "value" : "2c91808a7f3b2e8a017f3c3e5f6d0099"
  },
  "items" : [ "79db50d4-723c-4aa0-a824-83c2205d82d1", "a1b2c3d4-e5f6-7890-abcd-ef1234567890" ]
}"@

# Assign entitlement recommendations for review

try {
    $Result = ConvertFrom-JsonToEntitlementRecommendationAssignRequest -Json $EntitlementRecommendationAssignRequest
    Submit-EntitlementRecommendationsAssignmentV1 -XSailPointExperimental $XSailPointExperimental -EntitlementRecommendationAssignRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Submit-EntitlementRecommendationsAssignmentV1 -XSailPointExperimental $XSailPointExperimental -EntitlementRecommendationAssignRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-EntitlementRecommendationsAssignmentV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-sed-approval-v1
Submit Bulk Approval Request for SED.
Request body takes list of SED Ids. API responses with list of SED Approval Status

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-approval-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
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
    Submit-SedApprovalV1 -SedApproval $Result 
    
    # Below is a request that includes all optional parameters
    # Submit-SedApprovalV1 -SedApproval $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-SedApprovalV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-sed-assignment-v1
Submit Assignment Request.
Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-assignment-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
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
    Submit-SedAssignmentV1 -SedAssignment $Result 
    
    # Below is a request that includes all optional parameters
    # Submit-SedAssignmentV1 -SedAssignment $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-SedAssignmentV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-sed-batch-request-v1
Submit Sed Batch Request.
Request body has one of the following: - a list of entitlement Ids - a list of SED Ids that user wants to have description generated by LLM.  API responses with batchId that groups Ids together

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-batch-request-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
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
    Submit-SedBatchRequestV1 
    
    # Below is a request that includes all optional parameters
    # Submit-SedBatchRequestV1 -SedBatchRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-SedBatchRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-auto-write-settings-v1
Partially update the auto-write settings for a tenant using JSON Patch operations. Only the "replace" operation is supported. Returns 404 if no settings exist yet - use POST to create them first.

[API Spec](https://developer.sailpoint.com/docs/api/update-auto-write-settings-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AutoWriteSettingPatch | [**[]AutoWriteSettingPatch**](../models/auto-write-setting-patch) | True  | Patch operations for auto-write settings

### Return type
[**AutoWriteSettingResponse**](../models/auto-write-setting-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated auto-write settings | AutoWriteSettingResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAutoWriteSettingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAutoWriteSettingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
 $AutoWriteSettingPatch = @"{
  "op" : "replace",
  "path" : "/enabled",
  "value" : true
}"@ # AutoWriteSettingPatch[] | Patch operations for auto-write settings
 

# Update auto-write settings for SED

try {
    $Result = ConvertFrom-JsonToAutoWriteSettingPatch -Json $AutoWriteSettingPatch
    Update-AutoWriteSettingsV1 -AutoWriteSettingPatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-AutoWriteSettingsV1 -AutoWriteSettingPatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-AutoWriteSettingsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

---
id: beta-suggested-entitlement-description
title: SuggestedEntitlementDescription
pagination_label: SuggestedEntitlementDescription
sidebar_label: SuggestedEntitlementDescription
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SuggestedEntitlementDescription', 'BetaSuggestedEntitlementDescription'] 
slug: /tools/sdk/go/beta/methods/suggested-entitlement-description
tags: ['SDK', 'Software Development Kit', 'SuggestedEntitlementDescription', 'BetaSuggestedEntitlementDescription']
---

# SuggestedEntitlementDescriptionAPI
  Use this API to implement Suggested Entitlement Description (SED) functionality. 
SED functionality leverages the power of LLM to generate suggested entitlement descriptions. 
Refer to [GenAI Entitlement Descriptions](https://documentation.sailpoint.com/saas/help/access/entitlements.html#genai-entitlement-descriptions) to learn more about SED in Identity Security Cloud (ISC).
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-sed-batch-stats**](#get-sed-batch-stats) | **Get** `/suggested-entitlement-description-batches/{batchId}/stats` | Submit sed batch stats request
[**get-sed-batches**](#get-sed-batches) | **Get** `/suggested-entitlement-description-batches` | List Sed Batch Record
[**list-seds**](#list-seds) | **Get** `/suggested-entitlement-descriptions` | List suggested entitlement descriptions
[**patch-sed**](#patch-sed) | **Patch** `/suggested-entitlement-descriptions` | Patch suggested entitlement description
[**submit-sed-approval**](#submit-sed-approval) | **Post** `/suggested-entitlement-description-approvals` | Submit bulk approval request
[**submit-sed-assignment**](#submit-sed-assignment) | **Post** `/suggested-entitlement-description-assignments` | Submit sed assignment request
[**submit-sed-batch-request**](#submit-sed-batch-request) | **Post** `/suggested-entitlement-description-batches` | Submit sed batch request


## get-sed-batch-stats
Submit sed batch stats request
Submit Sed Batch Stats Request.

Submits batchId in the path param `(e.g. {batchId}/stats)`.
API responses with stats of the batchId.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sed-batch-stats)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**batchId** | **string** | Batch Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSedBatchStatsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SedBatchStats**](../models/sed-batch-stats)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    batchId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | Batch Id # string | Batch Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.GetSedBatchStats(context.Background(), batchId).Execute()
	  //resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.GetSedBatchStats(context.Background(), batchId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.GetSedBatchStats``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSedBatchStats`: SedBatchStats
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.GetSedBatchStats`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sed-batches
List Sed Batch Record
List Sed Batches.
API responses with Sed Batch Records

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sed-batches)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSedBatchesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]
 **count** | **bool** | If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send &#x60;count&#x3D;true&#x60; if that value will not be used. | [default to false]
 **countOnly** | **bool** | If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. | [default to false]
 **status** | **string** | Batch Status | 

### Return type

[**[]Sed**](../models/sed)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    offset := 0 // int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 250 // int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
    count := true // bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional) (default to false) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional) (default to false)
    countOnly := true // bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to false) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to false)
    status := `completed, failed, submitted, materialized, failed` // string | Batch Status (optional) # string | Batch Status (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.GetSedBatches(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.GetSedBatches(context.Background()).Offset(offset).Limit(limit).Count(count).CountOnly(countOnly).Status(status).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.GetSedBatches``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSedBatches`: []Sed
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.GetSedBatches`: %v\n", resp)
}
```

[[Back to top]](#)

## list-seds
List suggested entitlement descriptions
List of Suggested Entitlement Descriptions (SED)

SED field descriptions:

**batchId**: the ID of the batch of entitlements that are submitted for description generation

**displayName**: the display name of the entitlement that we are generating a description for

**sourceName**: the name of the source associated with the entitlement that we are generating the description for

**sourceId**: the ID of the source associated with the entitlement that we are generating the description for

**status**: the status of the suggested entitlement description, valid status options: "requested", "suggested", "not_suggested", "failed", "assigned", "approved", "denied"

**fullText**: will filter suggested entitlement description records by text found in any of the following fields: entitlement name, entitlement display name, suggested description, source name

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-seds)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSedsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int64** | Integer specifying the maximum number of records to return in a single API call.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** | 
 **count** | **bool** | If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send &#x60;count&#x3D;true&#x60; if that value will not be used. | 
 **countOnly** | **bool** | If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored. This parameter differs from the Coun parameter in that this one skip executing the actual query and always return an empty array. | 
 **requestedByAnyone** | **bool** | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested | 
 **showPendingStatusOnly** | **bool** | Will limit records to items that are in \&quot;suggested\&quot; or \&quot;approved\&quot; status | 

### Return type

[**[]Sed**](../models/sed)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := limit=25 // int64 | Integer specifying the maximum number of records to return in a single API call.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) # int64 | Integer specifying the maximum number of records to return in a single API call.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
    filters := `displayName co "Read and Write"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* (optional)
    sorters := `sorters=displayName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** (optional)
    count := count=true // bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional)
    countOnly := count-only=true // bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the Coun parameter in that this one skip executing the actual query and always return an empty array. (optional) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the Coun parameter in that this one skip executing the actual query and always return an empty array. (optional)
    requestedByAnyone := requested-by-anyone=true // bool | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested (optional) # bool | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested (optional)
    showPendingStatusOnly := show-pending-status-only=true // bool | Will limit records to items that are in \"suggested\" or \"approved\" status (optional) # bool | Will limit records to items that are in \"suggested\" or \"approved\" status (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.ListSeds(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.ListSeds(context.Background()).Limit(limit).Filters(filters).Sorters(sorters).Count(count).CountOnly(countOnly).RequestedByAnyone(requestedByAnyone).ShowPendingStatusOnly(showPendingStatusOnly).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.ListSeds``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSeds`: []Sed
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.ListSeds`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-sed
Patch suggested entitlement description
Patch Suggested Entitlement Description

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-sed)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | id is sed id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSedRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sedPatch** | [**[]SedPatch**](../models/sed-patch) | Sed Patch Request | 

### Return type

[**Sed**](../models/sed)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ebab396f-0af1-4050-89b7-dafc63ec70e7` // string | id is sed id # string | id is sed id
    sedpatch := []byte(``) // []SedPatch | Sed Patch Request

    var sedPatch []beta.SedPatch
    if err := json.Unmarshal(sedpatch, &sedPatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.PatchSed(context.Background(), id).SedPatch(sedPatch).Execute()
	  //resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.PatchSed(context.Background(), id).SedPatch(sedPatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.PatchSed``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchSed`: Sed
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.PatchSed`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-sed-approval
Submit bulk approval request
Submit Bulk Approval Request for SED.
Request body takes list of SED Ids. API responses with list of SED Approval Status

[API Spec](https://developer.sailpoint.com/docs/api/beta/submit-sed-approval)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitSedApprovalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sedApproval** | [**[]SedApproval**](../models/sed-approval) | Sed Approval | 

### Return type

[**[]SedApprovalStatus**](../models/sed-approval-status)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sedapproval := []byte(``) // []SedApproval | Sed Approval

    var sedApproval []beta.SedApproval
    if err := json.Unmarshal(sedapproval, &sedApproval); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.SubmitSedApproval(context.Background()).SedApproval(sedApproval).Execute()
	  //resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.SubmitSedApproval(context.Background()).SedApproval(sedApproval).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.SubmitSedApproval``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitSedApproval`: []SedApprovalStatus
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.SubmitSedApproval`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-sed-assignment
Submit sed assignment request
Submit Assignment Request.
Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together

[API Spec](https://developer.sailpoint.com/docs/api/beta/submit-sed-assignment)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitSedAssignmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sedAssignment** | [**SedAssignment**](../models/sed-assignment) | Sed Assignment Request | 

### Return type

[**SedAssignmentResponse**](../models/sed-assignment-response)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sedassignment := []byte(`{
          "assignee" : {
            "type" : "SOURCE_OWNER",
            "value" : "016629d1-1d25-463f-97f3-c6686846650"
          },
          "items" : [ "016629d1-1d25-463f-97f3-0c6686846650", "016629d1-1d25-463f-97f3-0c6686846650" ]
        }`) // SedAssignment | Sed Assignment Request

    var sedAssignment beta.SedAssignment
    if err := json.Unmarshal(sedassignment, &sedAssignment); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.SubmitSedAssignment(context.Background()).SedAssignment(sedAssignment).Execute()
	  //resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.SubmitSedAssignment(context.Background()).SedAssignment(sedAssignment).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.SubmitSedAssignment``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitSedAssignment`: SedAssignmentResponse
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.SubmitSedAssignment`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-sed-batch-request
Submit sed batch request
Submit Sed Batch Request.
Request body has one of the following:
  - a list of entitlement Ids
  - a list of SED Ids
that user wants to have description generated by LLM.  API responses with batchId that groups Ids together

[API Spec](https://developer.sailpoint.com/docs/api/beta/submit-sed-batch-request)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitSedBatchRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sedBatchRequest** | [**SedBatchRequest**](../models/sed-batch-request) | Sed Batch Request | 

### Return type

[**SedBatchResponse**](../models/sed-batch-response)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sedbatchrequest := []byte(`{
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
        }`) // SedBatchRequest | Sed Batch Request (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.SubmitSedBatchRequest(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.SuggestedEntitlementDescriptionAPI.SubmitSedBatchRequest(context.Background()).SedBatchRequest(sedBatchRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.SubmitSedBatchRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitSedBatchRequest`: SedBatchResponse
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.SubmitSedBatchRequest`: %v\n", resp)
}
```

[[Back to top]](#)


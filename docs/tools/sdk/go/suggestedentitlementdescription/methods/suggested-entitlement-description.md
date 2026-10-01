# SuggestedEntitlementDescription

# SuggestedEntitlementDescriptionAPI
  Use this API to implement Suggested Entitlement Description (SED) functionality. 
SED functionality leverages the power of LLM to generate suggested entitlement descriptions. 
Refer to [GenAI Entitlement Descriptions](https://documentation.sailpoint.com/saas/help/access/entitlements.html#genai-entitlement-descriptions) to learn more about SED in Identity Security Cloud (ISC). 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-bulk-entitlement-recommendations-v1**](#approve-bulk-entitlement-recommendations-v1) | **Post** `/entitlement-recommendations/v1/bulk-approve` | Bulk approve entitlement recommendations
[**create-auto-write-settings-v1**](#create-auto-write-settings-v1) | **Post** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Create auto-write settings for SED
[**get-auto-write-settings-v1**](#get-auto-write-settings-v1) | **Get** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Get auto-write settings for SED
[**get-sed-batch-stats-v1**](#get-sed-batch-stats-v1) | **Get** `/suggested-entitlement-description-batches/v1/{batchId}/stats` | Submit sed batch stats request
[**get-sed-batches-v1**](#get-sed-batches-v1) | **Get** `/suggested-entitlement-description-batches/v1` | List Sed Batch Record
[**list-pending-entitlement-recommendation-approvals-v1**](#list-pending-entitlement-recommendation-approvals-v1) | **Get** `/entitlement-recommendations/v1/pending-approvals` | List pending entitlement recommendation approvals
[**list-privileged-entitlement-recommendations-v1**](#list-privileged-entitlement-recommendations-v1) | **Get** `/privileged-recommendations/v1` | List privileged entitlement recommendations
[**list-seds-v1**](#list-seds-v1) | **Get** `/suggested-entitlement-descriptions/v1` | List suggested entitlement descriptions
[**patch-entitlement-recommendation-v1**](#patch-entitlement-recommendation-v1) | **Patch** `/entitlement-recommendations/v1/{id}` | Update an entitlement recommendation
[**patch-sed-v1**](#patch-sed-v1) | **Patch** `/suggested-entitlement-descriptions/v1` | Patch suggested entitlement description
[**submit-entitlement-recommendations-assignment-v1**](#submit-entitlement-recommendations-assignment-v1) | **Post** `/entitlement-recommendations/v1/assign` | Assign entitlement recommendations for review
[**submit-sed-approval-v1**](#submit-sed-approval-v1) | **Post** `/suggested-entitlement-description-approvals/v1` | Submit bulk approval request
[**submit-sed-assignment-v1**](#submit-sed-assignment-v1) | **Post** `/suggested-entitlement-description-assignments/v1` | Submit sed assignment request
[**submit-sed-batch-request-v1**](#submit-sed-batch-request-v1) | **Post** `/suggested-entitlement-description-batches/v1` | Submit sed batch request
[**update-auto-write-settings-v1**](#update-auto-write-settings-v1) | **Patch** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Update auto-write settings for SED


## approve-bulk-entitlement-recommendations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Bulk approve entitlement recommendations
Approve multiple entitlement recommendations in a single request. Each item in the request must include the recommendation ID and, depending on the record type, either an approved description (SED items) or an approved privilege level (privilege items). Returns a per-item result indicating success or failure.

[API Spec](https://developer.sailpoint.com/docs/api/approve-bulk-entitlement-recommendations-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApproveBulkEntitlementRecommendationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **bulkApproveEntitlementRecommendationRequest** | [**BulkApproveEntitlementRecommendationRequest**](../models/bulk-approve-entitlement-recommendation-request) | The list of recommendation items to approve. | 

### Return type

[**[]BulkApproveEntitlementRecommendationResult**](../models/bulk-approve-entitlement-recommendation-result)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    suggested_entitlement_description "github.com/sailpoint-oss/golang-sdk/v3/suggested_entitlement_description"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    bulkapproveentitlementrecommendationrequestJson := []byte(`{
          "items" : [ {
            "id" : "79db50d4-723c-4aa0-a824-83c2205d82d1",
            "recordType" : "SED",
            "description" : "Provides access and permissions related to the Delinea Secret Server Cloud system."
          }, {
            "id" : "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
            "recordType" : "privilege",
            "privilegeLevel" : "high"
          } ]
        }`) // BulkApproveEntitlementRecommendationRequest | The list of recommendation items to approve.

    var bulkApproveEntitlementRecommendationRequest suggested_entitlement_description.BulkApproveEntitlementRecommendationRequest
    if err := json.Unmarshal(bulkapproveentitlementrecommendationrequestJson, &bulkApproveEntitlementRecommendationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.ApproveBulkEntitlementRecommendationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).BulkApproveEntitlementRecommendationRequest(bulkApproveEntitlementRecommendationRequest).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.ApproveBulkEntitlementRecommendationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).BulkApproveEntitlementRecommendationRequest(bulkApproveEntitlementRecommendationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.ApproveBulkEntitlementRecommendationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveBulkEntitlementRecommendationsV1`: []BulkApproveEntitlementRecommendationResult
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.ApproveBulkEntitlementRecommendationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-auto-write-settings-v1
Create auto-write settings for SED
Create the initial auto-write settings for a tenant. Returns 409 Conflict if settings already exist. Use PATCH to update existing settings.

[API Spec](https://developer.sailpoint.com/docs/api/create-auto-write-settings-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAutoWriteSettingsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoWriteSetting** | [**AutoWriteSetting**](../models/auto-write-setting) | Auto-write settings to create | 

### Return type

[**AutoWriteSettingResponse**](../models/auto-write-setting-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    suggested_entitlement_description "github.com/sailpoint-oss/golang-sdk/v3/suggested_entitlement_description"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    autowritesettingJson := []byte(`{
          "excludedSourceIds" : [ "2c91808a7813090a017814552e526350" ],
          "includedSourceIds" : [ "2c91808a7813090a017814552e526349", "2c91808a7813090a017814552e52634a" ],
          "enabled" : true
        }`) // AutoWriteSetting | Auto-write settings to create

    var autoWriteSetting suggested_entitlement_description.AutoWriteSetting
    if err := json.Unmarshal(autowritesettingJson, &autoWriteSetting); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.CreateAutoWriteSettingsV1(context.Background()).AutoWriteSetting(autoWriteSetting).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.CreateAutoWriteSettingsV1(context.Background()).AutoWriteSetting(autoWriteSetting).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.CreateAutoWriteSettingsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAutoWriteSettingsV1`: AutoWriteSettingResponse
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.CreateAutoWriteSettingsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-auto-write-settings-v1
Get auto-write settings for SED
Get the current auto-write configuration for the tenant, including the enabled state and source include/exclude lists.

[API Spec](https://developer.sailpoint.com/docs/api/get-auto-write-settings-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAutoWriteSettingsV1Request struct via the builder pattern


### Return type

[**AutoWriteSettingResponse**](../models/auto-write-setting-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.GetAutoWriteSettingsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.GetAutoWriteSettingsV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.GetAutoWriteSettingsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAutoWriteSettingsV1`: AutoWriteSettingResponse
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.GetAutoWriteSettingsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sed-batch-stats-v1
Submit sed batch stats request
'Submit Sed Batch Stats Request.

 Submits batchId in the path param `(e.g. {batchId}/stats)`. API responses with stats
 of the batchId.'


[API Spec](https://developer.sailpoint.com/docs/api/get-sed-batch-stats-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**batchId** | **string** | Batch Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSedBatchStatsV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    batchId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | Batch Id # string | Batch Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.GetSedBatchStatsV1(context.Background(), batchId).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.GetSedBatchStatsV1(context.Background(), batchId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.GetSedBatchStatsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSedBatchStatsV1`: SedBatchStats
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.GetSedBatchStatsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sed-batches-v1
List Sed Batch Record
List Sed Batches.
API responses with Sed Batch Records

[API Spec](https://developer.sailpoint.com/docs/api/get-sed-batches-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSedBatchesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]
 **count** | **bool** | If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send &#x60;count&#x3D;true&#x60; if that value will not be used. | [default to false]
 **countOnly** | **bool** | If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. | [default to false]
 **status** | **string** | Batch Status | 

### Return type

[**[]SedBatchRecord**](../models/sed-batch-record)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    offset := 0 // int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 250 // int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
    count := true // bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional) (default to false) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used. (optional) (default to false)
    countOnly := true // bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to false) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to false)
    status := `completed, failed, submitted, materialized, failed` // string | Batch Status (optional) # string | Batch Status (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.GetSedBatchesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.GetSedBatchesV1(context.Background()).Offset(offset).Limit(limit).Count(count).CountOnly(countOnly).Status(status).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.GetSedBatchesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSedBatchesV1`: []SedBatchRecord
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.GetSedBatchesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-pending-entitlement-recommendation-approvals-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List pending entitlement recommendation approvals
Returns a list of entitlement recommendations (SED and/or privilege) that are currently awaiting review or approval. Each record includes the recommendation type, entitlement details, and any AI-generated suggestions.

[API Spec](https://developer.sailpoint.com/docs/api/list-pending-entitlement-recommendation-approvals-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPendingEntitlementRecommendationApprovalsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]

### Return type

[**[]EntitlementRecommendationRecord**](../models/entitlement-recommendation-record)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.ListPendingEntitlementRecommendationApprovalsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.ListPendingEntitlementRecommendationApprovalsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.ListPendingEntitlementRecommendationApprovalsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPendingEntitlementRecommendationApprovalsV1`: []EntitlementRecommendationRecord
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.ListPendingEntitlementRecommendationApprovalsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-privileged-entitlement-recommendations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List privileged entitlement recommendations
Returns a list of privileged entitlement recommendation groups. Each group aggregates individual entitlement instances that share the same entitlement name and connector type, along with a recommendation score and instance count.

[API Spec](https://developer.sailpoint.com/docs/api/list-privileged-entitlement-recommendations-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPrivilegedEntitlementRecommendationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]

### Return type

[**[]PrivilegedRecommendationGroup**](../models/privileged-recommendation-group)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.ListPrivilegedEntitlementRecommendationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.ListPrivilegedEntitlementRecommendationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.ListPrivilegedEntitlementRecommendationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPrivilegedEntitlementRecommendationsV1`: []PrivilegedRecommendationGroup
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.ListPrivilegedEntitlementRecommendationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-seds-v1
List suggested entitlement descriptions
List of Suggested Entitlement Descriptions (SED)

SED field descriptions:

**batchId**: the ID of the batch of entitlements that are submitted for description generation

**displayName**: the display name of the entitlement that we are generating a description for

**sourceName**: the name of the source associated with the entitlement that we are generating the description for

**sourceId**: the ID of the source associated with the entitlement that we are generating the description for

**status**: the status of the suggested entitlement description, valid status options: "requested", "suggested", "not_suggested", "failed", "assigned", "approved", "denied"

**fullText**: will filter suggested entitlement description records by text found in any of the following fields: entitlement name, entitlement display name, suggested description, source name

[API Spec](https://developer.sailpoint.com/docs/api/list-seds-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSedsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** | 
 **countOnly** | **bool** | If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. | [default to false]
 **requestedByAnyone** | **bool** | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested | [default to false]
 **showPendingStatusOnly** | **bool** | Will limit records to items that are in \&quot;suggested\&quot; or \&quot;approved\&quot; status | [default to false]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `displayName co "Read and Write"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* (optional)
    sorters := `sorters=displayName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** (optional)
    countOnly := count-only=true // bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to false) # bool | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional) (default to false)
    requestedByAnyone := requested-by-anyone=true // bool | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested (optional) (default to false) # bool | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested (optional) (default to false)
    showPendingStatusOnly := show-pending-status-only=true // bool | Will limit records to items that are in \"suggested\" or \"approved\" status (optional) (default to false) # bool | Will limit records to items that are in \"suggested\" or \"approved\" status (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.ListSedsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.ListSedsV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).CountOnly(countOnly).RequestedByAnyone(requestedByAnyone).ShowPendingStatusOnly(showPendingStatusOnly).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.ListSedsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSedsV1`: []Sed
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.ListSedsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-entitlement-recommendation-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update an entitlement recommendation
Partially update a single entitlement recommendation record by its ID. Use this endpoint to update the status, description, or privilege level of a specific SED or privilege recommendation.

[API Spec](https://developer.sailpoint.com/docs/api/patch-entitlement-recommendation-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the entitlement recommendation to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchEntitlementRecommendationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The patch operations to apply to the entitlement recommendation record. | 

### Return type

[**EntitlementRecommendationRecord**](../models/entitlement-recommendation-record)

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
    suggested_entitlement_description "github.com/sailpoint-oss/golang-sdk/v3/suggested_entitlement_description"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `79db50d4-723c-4aa0-a824-83c2205d82d1` // string | The unique identifier of the entitlement recommendation to update. # string | The unique identifier of the entitlement recommendation to update.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(``) // []JsonPatchOperation | The patch operations to apply to the entitlement recommendation record.

    var jsonPatchOperation []suggested_entitlement_description.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.PatchEntitlementRecommendationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.PatchEntitlementRecommendationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.PatchEntitlementRecommendationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchEntitlementRecommendationV1`: EntitlementRecommendationRecord
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.PatchEntitlementRecommendationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-sed-v1
Patch suggested entitlement description
Patch Suggested Entitlement Description

[API Spec](https://developer.sailpoint.com/docs/api/patch-sed-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | id is sed id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSedV1Request struct via the builder pattern


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
    suggested_entitlement_description "github.com/sailpoint-oss/golang-sdk/v3/suggested_entitlement_description"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ebab396f-0af1-4050-89b7-dafc63ec70e7` // string | id is sed id # string | id is sed id
    sedpatchJson := []byte(``) // []SedPatch | Sed Patch Request

    var sedPatch []suggested_entitlement_description.SedPatch
    if err := json.Unmarshal(sedpatchJson, &sedPatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.PatchSedV1(context.Background(), id).SedPatch(sedPatch).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.PatchSedV1(context.Background(), id).SedPatch(sedPatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.PatchSedV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchSedV1`: Sed
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.PatchSedV1`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-entitlement-recommendations-assignment-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Assign entitlement recommendations for review
Assign a set of entitlement recommendation records to a reviewer. The assignee can be a specific identity, a governance group, or a role-based assignee such as source owner or entitlement owner. Returns a batch ID that can be used to track the assignment.

[API Spec](https://developer.sailpoint.com/docs/api/submit-entitlement-recommendations-assignment-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitEntitlementRecommendationsAssignmentV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **entitlementRecommendationAssignRequest** | [**EntitlementRecommendationAssignRequest**](../models/entitlement-recommendation-assign-request) | The recommendation IDs and the target assignee. | 

### Return type

[**EntitlementRecommendationAssignResult**](../models/entitlement-recommendation-assign-result)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    suggested_entitlement_description "github.com/sailpoint-oss/golang-sdk/v3/suggested_entitlement_description"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    entitlementrecommendationassignrequestJson := []byte(`{
          "assignee" : {
            "type" : "IDENTITY",
            "value" : "2c91808a7f3b2e8a017f3c3e5f6d0099"
          },
          "items" : [ "79db50d4-723c-4aa0-a824-83c2205d82d1", "a1b2c3d4-e5f6-7890-abcd-ef1234567890" ]
        }`) // EntitlementRecommendationAssignRequest | The recommendation IDs and the target assignee.

    var entitlementRecommendationAssignRequest suggested_entitlement_description.EntitlementRecommendationAssignRequest
    if err := json.Unmarshal(entitlementrecommendationassignrequestJson, &entitlementRecommendationAssignRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.SubmitEntitlementRecommendationsAssignmentV1(context.Background()).XSailPointExperimental(xSailPointExperimental).EntitlementRecommendationAssignRequest(entitlementRecommendationAssignRequest).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.SubmitEntitlementRecommendationsAssignmentV1(context.Background()).XSailPointExperimental(xSailPointExperimental).EntitlementRecommendationAssignRequest(entitlementRecommendationAssignRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.SubmitEntitlementRecommendationsAssignmentV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitEntitlementRecommendationsAssignmentV1`: EntitlementRecommendationAssignResult
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.SubmitEntitlementRecommendationsAssignmentV1`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-sed-approval-v1
Submit bulk approval request
Submit Bulk Approval Request for SED.
Request body takes list of SED Ids. API responses with list of SED Approval Status

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-approval-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitSedApprovalV1Request struct via the builder pattern


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
    suggested_entitlement_description "github.com/sailpoint-oss/golang-sdk/v3/suggested_entitlement_description"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sedapprovalJson := []byte(``) // []SedApproval | Sed Approval

    var sedApproval []suggested_entitlement_description.SedApproval
    if err := json.Unmarshal(sedapprovalJson, &sedApproval); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.SubmitSedApprovalV1(context.Background()).SedApproval(sedApproval).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.SubmitSedApprovalV1(context.Background()).SedApproval(sedApproval).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.SubmitSedApprovalV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitSedApprovalV1`: []SedApprovalStatus
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.SubmitSedApprovalV1`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-sed-assignment-v1
Submit sed assignment request
Submit Assignment Request.
Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-assignment-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitSedAssignmentV1Request struct via the builder pattern


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
    suggested_entitlement_description "github.com/sailpoint-oss/golang-sdk/v3/suggested_entitlement_description"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sedassignmentJson := []byte(`{
          "assignee" : {
            "type" : "SOURCE_OWNER",
            "value" : "016629d1-1d25-463f-97f3-c6686846650"
          },
          "items" : [ "016629d1-1d25-463f-97f3-0c6686846650", "016629d1-1d25-463f-97f3-0c6686846650" ]
        }`) // SedAssignment | Sed Assignment Request

    var sedAssignment suggested_entitlement_description.SedAssignment
    if err := json.Unmarshal(sedassignmentJson, &sedAssignment); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.SubmitSedAssignmentV1(context.Background()).SedAssignment(sedAssignment).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.SubmitSedAssignmentV1(context.Background()).SedAssignment(sedAssignment).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.SubmitSedAssignmentV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitSedAssignmentV1`: SedAssignmentResponse
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.SubmitSedAssignmentV1`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-sed-batch-request-v1
Submit sed batch request
Submit Sed Batch Request.
Request body has one of the following: - a list of entitlement Ids - a list of SED Ids that user wants to have description generated by LLM.  API responses with batchId that groups Ids together

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-batch-request-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitSedBatchRequestV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sedbatchrequestJson := []byte(`{
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
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.SubmitSedBatchRequestV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.SubmitSedBatchRequestV1(context.Background()).SedBatchRequest(sedBatchRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.SubmitSedBatchRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitSedBatchRequestV1`: SedBatchResponse
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.SubmitSedBatchRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-auto-write-settings-v1
Update auto-write settings for SED
Partially update the auto-write settings for a tenant using JSON Patch operations. Only the "replace" operation is supported. Returns 404 if no settings exist yet - use POST to create them first.

[API Spec](https://developer.sailpoint.com/docs/api/update-auto-write-settings-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAutoWriteSettingsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoWriteSettingPatch** | [**[]AutoWriteSettingPatch**](../models/auto-write-setting-patch) | Patch operations for auto-write settings | 

### Return type

[**AutoWriteSettingResponse**](../models/auto-write-setting-response)

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
    suggested_entitlement_description "github.com/sailpoint-oss/golang-sdk/v3/suggested_entitlement_description"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    autowritesettingpatchJson := []byte(``) // []AutoWriteSettingPatch | Patch operations for auto-write settings

    var autoWriteSettingPatch []suggested_entitlement_description.AutoWriteSettingPatch
    if err := json.Unmarshal(autowritesettingpatchJson, &autoWriteSettingPatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.UpdateAutoWriteSettingsV1(context.Background()).AutoWriteSettingPatch(autoWriteSettingPatch).Execute()
	  //resp, r, err := apiClient.SuggestedEntitlementDescriptionAPI.UpdateAutoWriteSettingsV1(context.Background()).AutoWriteSettingPatch(autoWriteSettingPatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SuggestedEntitlementDescriptionAPI.UpdateAutoWriteSettingsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAutoWriteSettingsV1`: AutoWriteSettingResponse
    fmt.Fprintf(os.Stdout, "Response from `SuggestedEntitlementDescriptionAPI.UpdateAutoWriteSettingsV1`: %v\n", resp)
}
```

[[Back to top]](#)


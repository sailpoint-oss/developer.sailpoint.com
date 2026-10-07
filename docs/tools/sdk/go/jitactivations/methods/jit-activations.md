# JITActivations

# JITActivationsAPI
  Use this API to start and manage Just-In-Time (JIT) Privileged activation workflows for entitlement connections,
and to search activation history.

OAuth scopes: **idn:jit-activation-workflow:*** (activate, extend, deactivate, manage) for workflow APIs.
**idn:jit-activation-history:read** (admin history view) and **idn:jit-activation-history-self:read** (self history view).
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-jit-activation-history-for-current-identity-v1**](#list-jit-activation-history-for-current-identity-v1) | **Get** `/jit-activation-history/v1/current-identity` | List JIT activation history (self)
[**list-jit-activation-history-v1**](#list-jit-activation-history-v1) | **Get** `/jit-activation-history/v1` | List JIT activation history (admin)
[**start-activate-workflow-v1**](#start-activate-workflow-v1) | **Post** `/jit-activations/v1/activate` | Start JIT activation workflow
[**start-deactivate-workflow-v1**](#start-deactivate-workflow-v1) | **Post** `/jit-activations/v1/deactivate` | Deactivate JIT activation workflow
[**start-extend-workflow-v1**](#start-extend-workflow-v1) | **Post** `/jit-activations/v1/extend` | Extend JIT activation workflow


## list-jit-activation-history-for-current-identity-v1
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
List JIT activation history (self)
Returns JIT activation history records for the authenticated identity only.

This is the self-service view - results are automatically scoped to the calling identity.
Requires `idn:jit-activation-history-self:read`.

Returns HTTP 403 when the `PSPM_858_JIT_ACCESS_ACTIVATION_HISTORY_SEARCH` feature flag is disabled.


[API Spec](https://developer.sailpoint.com/docs/api/list-jit-activation-history-for-current-identity-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListJitActivationHistoryForCurrentIdentityV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). | 
 **searchAfter** | **string** | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter&#x3D;2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&amp;sorters&#x3D;activationInitiated,id | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* | 

### Return type

[**[]Jitactivationhistorydocument**](../models/jitactivationhistorydocument)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `-activationInitiated` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). (optional)
    searchAfter := `2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3` // string | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter=2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&sorters=activationInitiated,id (optional) # string | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter=2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&sorters=activationInitiated,id (optional)
    filters := `status eq "PROVISIONED"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.JITActivationsAPI.ListJitActivationHistoryForCurrentIdentityV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.JITActivationsAPI.ListJitActivationHistoryForCurrentIdentityV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Sorters(sorters).SearchAfter(searchAfter).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationsAPI.ListJitActivationHistoryForCurrentIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListJitActivationHistoryForCurrentIdentityV1`: []Jitactivationhistorydocument
    fmt.Fprintf(os.Stdout, "Response from `JITActivationsAPI.ListJitActivationHistoryForCurrentIdentityV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-jit-activation-history-v1
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
List JIT activation history (admin)
Returns JIT activation history records for the tenant.

This is the admin/operator view - it returns activations across all identities in the tenant.
Requires `idn:jit-activation-history:read`.

Returns HTTP 403 when the `PSPM_858_JIT_ACCESS_ACTIVATION_HISTORY_SEARCH` feature flag is disabled.


[API Spec](https://developer.sailpoint.com/docs/api/list-jit-activation-history-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListJitActivationHistoryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). | 
 **searchAfter** | **string** | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter&#x3D;2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&amp;sorters&#x3D;activationInitiated,id | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identityId**: *eq, in*  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* | 

### Return type

[**[]Jitactivationhistorydocument**](../models/jitactivationhistorydocument)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `-activationInitiated` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). (optional)
    searchAfter := `2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3` // string | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter=2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&sorters=activationInitiated,id (optional) # string | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter=2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&sorters=activationInitiated,id (optional)
    filters := `status eq "PROVISIONED"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identityId**: *eq, in*  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identityId**: *eq, in*  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.JITActivationsAPI.ListJitActivationHistoryV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.JITActivationsAPI.ListJitActivationHistoryV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Sorters(sorters).SearchAfter(searchAfter).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationsAPI.ListJitActivationHistoryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListJitActivationHistoryV1`: []Jitactivationhistorydocument
    fmt.Fprintf(os.Stdout, "Response from `JITActivationsAPI.ListJitActivationHistoryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-activate-workflow-v1
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
Start JIT activation workflow
Starts a JIT Privileged (JIT P) activation workflow for the given entitlement connection and duration.
The service performs quick validation; the workflow performs additional validation.

The response is returned with HTTP 202 Accepted while the workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/start-activate-workflow-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartActivateWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jitActivationActivateRequest** | [**JitActivationActivateRequest**](../models/jit-activation-activate-request) |  | 

### Return type

[**JitActivationActivateResponse**](../models/jit-activation-activate-response)

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
    jit_activations "github.com/sailpoint-oss/golang-sdk/v3/jit_activations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jitactivationactivaterequestJson := []byte(`{
          "metaData" : {
            "threadId" : "1699887766.123456",
            "slackUserId" : "U123",
            "messageId" : "1699887770.654321",
            "type" : "slack",
            "commandText" : "/jit activate",
            "channelId" : "C456",
            "workspaceId" : "T789"
          },
          "activationPeriodMins" : 120,
          "requestOrigin" : "slack",
          "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
        }`) // JitActivationActivateRequest | 

    var jitActivationActivateRequest jit_activations.JitActivationActivateRequest
    if err := json.Unmarshal(jitactivationactivaterequestJson, &jitActivationActivateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.JITActivationsAPI.StartActivateWorkflowV1(context.Background()).XSailPointExperimental(xSailPointExperimental).JitActivationActivateRequest(jitActivationActivateRequest).Execute()
	  //resp, r, err := apiClient.JITActivationsAPI.StartActivateWorkflowV1(context.Background()).XSailPointExperimental(xSailPointExperimental).JitActivationActivateRequest(jitActivationActivateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationsAPI.StartActivateWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartActivateWorkflowV1`: JitActivationActivateResponse
    fmt.Fprintf(os.Stdout, "Response from `JITActivationsAPI.StartActivateWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-deactivate-workflow-v1
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
Deactivate JIT activation workflow
Sends a signal to a running JIT Privileged (JIT P) activation workflow to deactivate.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/start-deactivate-workflow-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartDeactivateWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jitActivationDeactivateRequest** | [**JitActivationDeactivateRequest**](../models/jit-activation-deactivate-request) |  | 

### Return type

[**JitActivationDeactivateResponse**](../models/jit-activation-deactivate-response)

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
    jit_activations "github.com/sailpoint-oss/golang-sdk/v3/jit_activations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jitactivationdeactivaterequestJson := []byte(`{
          "metaData" : {
            "threadId" : "1699887766.123456",
            "slackUserId" : "U123",
            "messageId" : "1699887770.654321",
            "type" : "slack",
            "commandText" : "/jit activate",
            "channelId" : "C456",
            "workspaceId" : "T789"
          },
          "requestOrigin" : "slack",
          "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
        }`) // JitActivationDeactivateRequest | 

    var jitActivationDeactivateRequest jit_activations.JitActivationDeactivateRequest
    if err := json.Unmarshal(jitactivationdeactivaterequestJson, &jitActivationDeactivateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.JITActivationsAPI.StartDeactivateWorkflowV1(context.Background()).XSailPointExperimental(xSailPointExperimental).JitActivationDeactivateRequest(jitActivationDeactivateRequest).Execute()
	  //resp, r, err := apiClient.JITActivationsAPI.StartDeactivateWorkflowV1(context.Background()).XSailPointExperimental(xSailPointExperimental).JitActivationDeactivateRequest(jitActivationDeactivateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationsAPI.StartDeactivateWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartDeactivateWorkflowV1`: JitActivationDeactivateResponse
    fmt.Fprintf(os.Stdout, "Response from `JITActivationsAPI.StartDeactivateWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-extend-workflow-v1
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
Extend JIT activation workflow
Sends a signal to a running JIT Privileged (JIT P) activation workflow to extend the activation period
by the requested number of minutes.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/start-extend-workflow-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartExtendWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jitActivationExtendRequest** | [**JitActivationExtendRequest**](../models/jit-activation-extend-request) |  | 

### Return type

[**JitActivationExtendResponse**](../models/jit-activation-extend-response)

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
    jit_activations "github.com/sailpoint-oss/golang-sdk/v3/jit_activations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jitactivationextendrequestJson := []byte(`{
          "metaData" : {
            "threadId" : "1699887766.123456",
            "slackUserId" : "U123",
            "messageId" : "1699887770.654321",
            "type" : "slack",
            "commandText" : "/jit activate",
            "channelId" : "C456",
            "workspaceId" : "T789"
          },
          "activationPeriodExtensionMins" : 120,
          "requestOrigin" : "slack",
          "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
        }`) // JitActivationExtendRequest | 

    var jitActivationExtendRequest jit_activations.JitActivationExtendRequest
    if err := json.Unmarshal(jitactivationextendrequestJson, &jitActivationExtendRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.JITActivationsAPI.StartExtendWorkflowV1(context.Background()).XSailPointExperimental(xSailPointExperimental).JitActivationExtendRequest(jitActivationExtendRequest).Execute()
	  //resp, r, err := apiClient.JITActivationsAPI.StartExtendWorkflowV1(context.Background()).XSailPointExperimental(xSailPointExperimental).JitActivationExtendRequest(jitActivationExtendRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationsAPI.StartExtendWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartExtendWorkflowV1`: JitActivationExtendResponse
    fmt.Fprintf(os.Stdout, "Response from `JITActivationsAPI.StartExtendWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)


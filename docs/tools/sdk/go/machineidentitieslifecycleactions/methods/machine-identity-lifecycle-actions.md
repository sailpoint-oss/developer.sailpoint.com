# MachineIdentityLifecycleActions

# MachineIdentityLifecycleActionsAPI
  Experimental APIs for machine identity lifecycle requests (&#x60;ACTIVATE&#x60;, &#x60;DEACTIVATE&#x60;), including
approval and provisioning status. Pass the &#x60;X-SailPoint-Experimental&#x60; header on every request.

Read and cancel by &#x60;requestId&#x60; return **403** for authorization denials
(&#x60;FORBIDDEN.lifecycle-request-access-denied&#x60;) and non-&#x60;AI_AGENT&#x60; rows
(&#x60;FORBIDDEN.unsupported-type&#x60;). Unknown ids and target-type mismatches return **404**
(&#x60;NOT_FOUND.detailed&#x60;).
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-machine-identity-lifecycle-action-v1**](#cancel-machine-identity-lifecycle-action-v1) | **Post** `/machine-identities/v1/lifecycle-actions/{requestId}/cancel` | Cancel lifecycle action
[**get-machine-identity-lifecycle-action-v1**](#get-machine-identity-lifecycle-action-v1) | **Get** `/machine-identities/v1/lifecycle-actions/{requestId}` | Get lifecycle action by requestId
[**list-machine-identity-lifecycle-actions-v1**](#list-machine-identity-lifecycle-actions-v1) | **Get** `/machine-identities/v1/lifecycle-actions` | List lifecycle actions
[**submit-machine-identity-lifecycle-action-v1**](#submit-machine-identity-lifecycle-action-v1) | **Post** `/machine-identities/v1/{id}/lifecycle-actions` | Submit machine identity lifecycle action


## cancel-machine-identity-lifecycle-action-v1
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
Cancel lifecycle action
Attempts to cancel a lifecycle request before provisioning starts.

The path `requestId` is authoritative for lookup and authorization. The request body is
optional and may carry cancel metadata such as `comment`. Any `requestId` value in the body is
ignored.

Workflow cancel signaling is attempted before the request is persisted as `CANCELING`. If
signaling fails, the service returns **503** (`DOWNSTREAM_SERVICE_UNAVAILABLE`, cause
`workflow-signal-failed`) and the lifecycle request status is unchanged.

Invalid cancel states are returned as **400** (`INVALID_REQUEST_IN_CURRENT_STATE` variants).

Cancel authorization matches https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1:
the original submitter is always allowed; otherwise callers must have the
`idn:machine-identity-lifecycle-action:manage` scope **and** target role-context access.

**403 Forbidden**

- `FORBIDDEN.lifecycle-request-access-denied` - caller is not the submitter and lacks both the
  `idn:machine-identity-lifecycle-action:manage` scope and target role-context.
- `FORBIDDEN.unsupported-type` - the persisted lifecycle row is not scoped to `AI_AGENT`.

**404 Not Found**

- `NOT_FOUND.detailed` - unknown `requestId`, or persisted `targetType`/target-identity subtype
  mismatch.


[API Spec](https://developer.sailpoint.com/docs/api/cancel-machine-identity-lifecycle-action-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** | Lifecycle request identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelMachineIdentityLifecycleActionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **cancelLifecycleActionRequest** | [**CancelLifecycleActionRequest**](../models/cancel-lifecycle-action-request) |  | 

### Return type

[**CancelLifecycleActionResponse**](../models/cancel-lifecycle-action-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    requestId := `a1b2c3d4-e5f6-7890-abcd-ef1234567890` // string | Lifecycle request identifier. # string | Lifecycle request identifier.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    cancellifecycleactionrequestJson := []byte(`{
          "comment" : "Cancelling - will resubmit after maintenance window"
        }`) // CancelLifecycleActionRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentityLifecycleActionsAPI.CancelMachineIdentityLifecycleActionV1(context.Background(), requestId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentityLifecycleActionsAPI.CancelMachineIdentityLifecycleActionV1(context.Background(), requestId).XSailPointExperimental(xSailPointExperimental).CancelLifecycleActionRequest(cancelLifecycleActionRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentityLifecycleActionsAPI.CancelMachineIdentityLifecycleActionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CancelMachineIdentityLifecycleActionV1`: CancelLifecycleActionResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentityLifecycleActionsAPI.CancelMachineIdentityLifecycleActionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-identity-lifecycle-action-v1
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
Get lifecycle action by requestId
Returns one lifecycle request snapshot by `requestId`. Used for request-level inspection,
including cancel acceptance and subsequent status changes.

The original requester is always allowed to read their request. Otherwise, callers must have
the `idn:machine-identity-lifecycle-action:manage` scope **and** role-context access to the target
machine identity (organization admin, source admin, scoped source sub-admin, or effective owner).

**403 Forbidden**

- `FORBIDDEN.lifecycle-request-access-denied` - caller is not the submitter and lacks both the
  `idn:machine-identity-lifecycle-action:manage` scope and target role-context (response includes `requestId` as a parameter).
- `FORBIDDEN.unsupported-type` - the persisted lifecycle row is not scoped to `AI_AGENT`
  (`targetType` on read-by-request-id paths).

**404 Not Found**

- `NOT_FOUND.detailed` - unknown `requestId`, or persisted `targetType` does not match the
  target machine identity's subtype-to-resource-type mapping.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** | Lifecycle request identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineIdentityLifecycleActionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**LifecycleActionRequest**](../models/lifecycle-action-request)

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
    requestId := `a1b2c3d4-e5f6-7890-abcd-ef1234567890` // string | Lifecycle request identifier. # string | Lifecycle request identifier.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentityLifecycleActionsAPI.GetMachineIdentityLifecycleActionV1(context.Background(), requestId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentityLifecycleActionsAPI.GetMachineIdentityLifecycleActionV1(context.Background(), requestId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentityLifecycleActionsAPI.GetMachineIdentityLifecycleActionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineIdentityLifecycleActionV1`: LifecycleActionRequest
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentityLifecycleActionsAPI.GetMachineIdentityLifecycleActionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-identity-lifecycle-actions-v1
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
List lifecycle actions
Lists lifecycle requests visible to the requester identity in the current request context.

Results are automatically scoped to the calling identity. If requester identity context is
missing, an empty list is returned.

When `limit` is omitted, this endpoint applies a default limit of 50.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentityLifecycleActionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). | 
 **limit** | **int32** | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]LifecycleActionRequest**](../models/lifecycle-action-request)

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
    filters := `status in ("RECEIVED","COMPLETED")` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le* (optional)
    sorters := `-created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). (optional)
    limit := 50 // int32 | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentityLifecycleActionsAPI.ListMachineIdentityLifecycleActionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentityLifecycleActionsAPI.ListMachineIdentityLifecycleActionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentityLifecycleActionsAPI.ListMachineIdentityLifecycleActionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentityLifecycleActionsV1`: []LifecycleActionRequest
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentityLifecycleActionsAPI.ListMachineIdentityLifecycleActionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-machine-identity-lifecycle-action-v1
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
Submit machine identity lifecycle action
Creates a lifecycle request for the target machine identity and returns the created lifecycle
snapshot.

The response includes the generated `requestId`, which is used by
https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1,
https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1, and
https://developer.sailpoint.com/docs/api/cancel-machine-identity-lifecycle-action-v-1

Authorization is enforced in the service layer. Callers must have the
`idn:machine-identity-lifecycle-action:manage` scope or role-context access to the target machine
identity (organization admin, source admin, scoped source sub-admin, or effective owner).

Supported actions are `DEACTIVATE`, `ACTIVATE`.


[API Spec](https://developer.sailpoint.com/docs/api/submit-machine-identity-lifecycle-action-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubmitMachineIdentityLifecycleActionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **lifecycleActionSubmitRequest** | [**LifecycleActionSubmitRequest**](../models/lifecycle-action-submit-request) |  | 

### Return type

[**LifecycleActionSubmitResponse**](../models/lifecycle-action-submit-response)

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
    machine_identities_lifecycle_actions "github.com/sailpoint-oss/golang-sdk/v3/machine_identities_lifecycle_actions"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0` // string | Machine identity ID. # string | Machine identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    lifecycleactionsubmitrequestJson := []byte(`{
          "comments" : [ {
            "comment" : "Suspending agent until security review completes"
          }, {
            "comment" : "Suspending agent until security review completes"
          }, {
            "comment" : "Suspending agent until security review completes"
          }, {
            "comment" : "Suspending agent until security review completes"
          }, {
            "comment" : "Suspending agent until security review completes"
          } ],
          "action" : "DEACTIVATE"
        }`) // LifecycleActionSubmitRequest | 

    var lifecycleActionSubmitRequest machine_identities_lifecycle_actions.LifecycleActionSubmitRequest
    if err := json.Unmarshal(lifecycleactionsubmitrequestJson, &lifecycleActionSubmitRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentityLifecycleActionsAPI.SubmitMachineIdentityLifecycleActionV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).LifecycleActionSubmitRequest(lifecycleActionSubmitRequest).Execute()
	  //resp, r, err := apiClient.MachineIdentityLifecycleActionsAPI.SubmitMachineIdentityLifecycleActionV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).LifecycleActionSubmitRequest(lifecycleActionSubmitRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentityLifecycleActionsAPI.SubmitMachineIdentityLifecycleActionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitMachineIdentityLifecycleActionV1`: LifecycleActionSubmitResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentityLifecycleActionsAPI.SubmitMachineIdentityLifecycleActionV1`: %v\n", resp)
}
```

[[Back to top]](#)


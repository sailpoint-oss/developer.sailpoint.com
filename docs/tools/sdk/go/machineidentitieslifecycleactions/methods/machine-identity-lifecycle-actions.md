# MachineIdentityLifecycleActions

# MachineIdentityLifecycleActionsAPI
  Use this API to implement machine identity lifecycle action functionality.
With this functionality in place, administrators and machine identity owners can activate or deactivate machine identities, track the approval and provisioning status of each request, and cancel requests before provisioning starts.

A lifecycle action is a request to change whether a machine identity is active.
For example, an administrator may deactivate an agent while a security review is in progress, and then activate it again once the review is complete.

Lifecycle actions are currently supported only for machine identities of type Agent.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-machine-identity-lifecycle-action-v1**](#cancel-machine-identity-lifecycle-action-v1) | **Post** `/machine-identities/v1/lifecycle-actions/{requestId}/cancel` | Cancel machine identity lifecycle action
[**get-machine-identity-lifecycle-action-v1**](#get-machine-identity-lifecycle-action-v1) | **Get** `/machine-identities/v1/lifecycle-actions/{requestId}` | Get machine identity lifecycle action
[**list-machine-identity-lifecycle-actions-v1**](#list-machine-identity-lifecycle-actions-v1) | **Get** `/machine-identities/v1/lifecycle-actions` | List machine identity lifecycle actions
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
Cancel machine identity lifecycle action
Cancels a lifecycle action request that hasn't started provisioning yet. When the cancel is
accepted, the request moves to `CANCELING` status.

A request can't be canceled once provisioning has started, after it has finished, or while a cancel
is already in progress.

The request body is optional. Use it to add a comment explaining why the request was canceled.

You can always cancel requests that you submitted. To cancel a request that someone else submitted,
you need the `idn:machine-identity:lifecycle-action` right **and** admin or owner access to the
machine identity. Admin or owner access means you're an org admin, a source admin, a source sub-admin
for the machine identity's source, or the machine identity's owner.

If the cancel can't be completed, the API returns an error and the request stays in `CANCELING`
status.


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
Get machine identity lifecycle action
Returns a single lifecycle action request, including its current status, approval details, and
provisioning progress. Use it to follow a request after you submit or cancel it.

You can always view requests that you submitted. To view a request that someone else submitted, you
need the `idn:machine-identity:lifecycle-action` right **and** admin or owner access to the machine
identity. Admin or owner access means you're an org admin, a source admin, a source sub-admin for the
machine identity's source, or the machine identity's owner.


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
List machine identity lifecycle actions
Returns the lifecycle action requests that you submitted. Requests that other users submitted
aren't included, even if you're an admin. If the call isn't made on behalf of an identity, the list
is empty.

When `limit` is omitted, up to 50 results are returned.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentityLifecycleActionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le*  The &#x60;resourceType&#x60; filter matches the &#x60;targetType&#x60; field in the response. | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). | [default to &quot;-created&quot;]
 **limit** | **int32** | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]

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
    filters := `status in ("RECEIVED","COMPLETED")` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le*  The `resourceType` filter matches the `targetType` field in the response. (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le*  The `resourceType` filter matches the `targetType` field in the response. (optional)
    sorters := `-created` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). (optional) (default to "-created") # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). (optional) (default to "-created")
    limit := 50 // int32 | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)

    

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
Submits a request to activate or deactivate a machine identity. Supported actions are `ACTIVATE`
and `DEACTIVATE`.

**Note:** Lifecycle actions are currently supported only for machine identities of type **Agent**.

The response includes a `requestId`. Use it to
[get the request](https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1) or
[cancel it](https://developer.sailpoint.com/docs/api/cancel-machine-identity-lifecycle-action-v-1).
To see all the requests you've submitted, use
[list machine identity lifecycle actions](https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1).

Only one lifecycle action can be in progress for a machine identity at a time. If another action is
already in progress for the machine identity, the request is rejected.

To submit a lifecycle action, you need the `idn:machine-identity:lifecycle-action` right, or admin or
owner access to the machine identity. Admin or owner access means you're an org admin, a source admin,
a source sub-admin for the machine identity's source, or the machine identity's owner.


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


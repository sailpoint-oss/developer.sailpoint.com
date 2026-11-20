# MachineAccountCreationRequest

# MachineAccountCreationRequestAPI
  Use this API to submit and retrieve machine account creation requests.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-request-v1**](#create-machine-account-request-v1) | **Post** `/account-requests/v1/machine-account-create` | Submit Machine Account Creation Request
[**create-machine-account-request-v2**](#create-machine-account-request-v2) | **Post** `/account-requests/v2/machine-account-create` | Machine Account Creation Request (v2)
[**create-machine-account-v2**](#create-machine-account-v2) | **Post** `/machine-accounts/v2/machine-account-create` | Create Machine Account (v2)
[**get-create-machine-account-request-v1**](#get-create-machine-account-request-v1) | **Get** `/account-requests/v1/machine-account-create/{accountRequestId}` | Get Machine Account Creation Request
[**get-machine-account-create-access-info-v1**](#get-machine-account-create-access-info-v1) | **Get** `/source-subtypes/v1/machine-account-create-access` | Machine Account Create Access


## create-machine-account-request-v1
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
Submit Machine Account Creation Request
Initiates machine account creation request for the specified subtype.
This method validates the input data, processes the machine account creation request,
and generates an asynchronous result containing a tracking ID. 

>**NOTE: You can only request a machine accounts on subtype for which you have a create machine account entitlement provisioned.**


[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-request-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineAccountRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineAccountCreateRequestInput** | [**MachineAccountCreateRequestInput**](../models/machine-account-create-request-input) |  | 

### Return type

[**AccountRequestAsyncResult**](../models/account-request-async-result)

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
    machine_account_creation_request "github.com/sailpoint-oss/golang-sdk/v3/machine_account_creation_request"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineaccountcreaterequestinputJson := []byte(`{
          "formId" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
          "entitlementIds" : [ "6d28b7c1620c49c6b6d5cbf81eb4b5fa", "2c91808a7624751a01762f19d67c220e" ],
          "environment" : "Dev",
          "description" : "Requesting machine account for tracking the inventory.",
          "machineIdentityId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
          "ownerIdentityId" : "18104e7e499b4e23882d6323344ab6bc",
          "userInput" : {
            "target" : "AD Source",
            "description" : "Inventory tracking"
          },
          "subtypeId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
        }`) // MachineAccountCreateRequestInput | 

    var machineAccountCreateRequestInput machine_account_creation_request.MachineAccountCreateRequestInput
    if err := json.Unmarshal(machineaccountcreaterequestinputJson, &machineAccountCreateRequestInput); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountCreationRequestAPI.CreateMachineAccountRequestV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountCreateRequestInput(machineAccountCreateRequestInput).Execute()
	  //resp, r, err := apiClient.MachineAccountCreationRequestAPI.CreateMachineAccountRequestV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountCreateRequestInput(machineAccountCreateRequestInput).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountCreationRequestAPI.CreateMachineAccountRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMachineAccountRequestV1`: AccountRequestAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountCreationRequestAPI.CreateMachineAccountRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-machine-account-request-v2
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
Machine Account Creation Request (v2)
Initiates a machine account creation request. The same body and process are used by `POST /machine-accounts/v2/machine-account-create`.

`sourceId` is required while tiered subtype configuration is enabled, and `subtypeId` must then be in that source's effective set. When that flag is off, `sourceId` is ignored and the source is the subtype's own source. `entitlements` is honored while per-entitlement request details are enabled; `entitlementIds` is honored while that flag is off. A non-empty list of the other kind returns **400**. At most 20 unique entitlement ids are allowed.

The call returns **202** with `accountRequestId`. Poll `GET /account-requests/v1/machine-account-create/{accountRequestId}` for status. There is no v2 status route.

Missing `subtypeId` or `ownerIdentityId`, or a missing `sourceId` while tiered subtype configuration is enabled, returns **400**. An unknown owner, source, or subtype returns **404**. A subtype that is not in the source effective set returns **400**. The endpoint returns **404** when both tiered subtype configuration and per-entitlement request details are disabled.

The caller must be authenticated with the `sp:scopes:default` scope. The create machine account entitlement for the subtype is checked when the request is processed. Without that entitlement the API returns **403**.


[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-request-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineAccountRequestV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineAccountCreateRequestInputV2** | [**MachineAccountCreateRequestInputV2**](../models/machine-account-create-request-input-v2) |  | 

### Return type

[**AccountRequestAsyncResult**](../models/account-request-async-result)

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
    machine_account_creation_request "github.com/sailpoint-oss/golang-sdk/v3/machine_account_creation_request"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineaccountcreaterequestinputv2Json := []byte(`{
          "sourceId" : "2c9180907c1e4b3a017c1e5f2a3b0001",
          "formId" : "4f1bb61b-a0ab-4c0a-b9fb-20f44407b75a",
          "entitlements" : [ {
            "id" : "858d2151-ff19-464b-ae0d-6938b3af2baf",
            "comment" : "Needed to read the reconciliation staging tables.",
            "startDate" : "2026-09-01T00:00:00.000Z",
            "removeDate" : "2027-03-01T00:00:00.000Z"
          }, {
            "id" : "0c7a44b9-3e21-4f88-9a10-77bd2c6e5f31"
          } ],
          "entitlementIds" : [ "858d2151-ff19-464b-ae0d-6938b3af2baf", "0c7a44b9-3e21-4f88-9a10-77bd2c6e5f31" ],
          "environment" : "production",
          "description" : "Nightly reconciliation job",
          "machineIdentityId" : "b1e2c3d4-0a5b-4c6d-8e7f-9a0b1c2d3e4f",
          "ownerIdentityId" : "9f2c1b7e4a6d4c8fa1b2c3d4e5f60718",
          "userInput" : {
            "accountName" : "svc-recon-01"
          },
          "subtypeId" : "1419fc28-a8ed-4a07-9f5c-0cb5dfad6311"
        }`) // MachineAccountCreateRequestInputV2 | 

    var machineAccountCreateRequestInputV2 machine_account_creation_request.MachineAccountCreateRequestInputV2
    if err := json.Unmarshal(machineaccountcreaterequestinputv2Json, &machineAccountCreateRequestInputV2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountCreationRequestAPI.CreateMachineAccountRequestV2(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountCreateRequestInputV2(machineAccountCreateRequestInputV2).Execute()
	  //resp, r, err := apiClient.MachineAccountCreationRequestAPI.CreateMachineAccountRequestV2(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountCreateRequestInputV2(machineAccountCreateRequestInputV2).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountCreationRequestAPI.CreateMachineAccountRequestV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMachineAccountRequestV2`: AccountRequestAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountCreationRequestAPI.CreateMachineAccountRequestV2`: %v\n", resp)
}
```

[[Back to top]](#)

## create-machine-account-v2
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
Create Machine Account (v2)
Submits a machine account creation request. New integrations should use this operation.
This operation accepts the same request and runs the same creation process as [Submit Machine Account Creation Request](https://developer.sailpoint.com/docs/api/create-machine-account-request-v-2). That operation stays on the account-requests API for integrations that already call it. When version 1 cannot create the account because the subtype is not tied to a single source, the error directs the caller here.
This method validates the input data, processes the machine account creation request, and returns an asynchronous result containing a tracking ID.

Compared with v1, this version:
- Accepts a `sourceId` so you can choose the source to create the account on. `sourceId` is required while tiered subtype configuration is enabled, and the subtype must be in that source's effective set. When that flag is off, `sourceId` is ignored and the source is the subtype's own source.
- Accepts `entitlements` (comment, start date, and remove date) while per-entitlement request details are enabled. `entitlementIds` is honored while that flag is off. A non-empty list of the other kind returns `400`.
- Supports subtypes that are not tied to a single source while tiered subtype configuration is enabled. Version 1 rejects those subtypes.

There is no v2 status endpoint. Use the returned `accountRequestId` with [Get Machine Account Creation Request](https://developer.sailpoint.com/docs/api/get-create-machine-account-request-v-1) to track the request.

This API returns `403` when machine identity creation is not included in the tenant's plan. When machine account creation is not enabled for the tenant, this API returns `404`.

This API requires the `sp:scopes:default` scope.
>**NOTE: You can only request a machine account on a subtype for which you have a create machine account entitlement provisioned. Otherwise, this API returns `403`.**


[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineAccountV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineAccountCreateRequestInputV2** | [**MachineAccountCreateRequestInputV2**](../models/machine-account-create-request-input-v2) |  | 

### Return type

[**AccountRequestAsyncResult**](../models/account-request-async-result)

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
    machine_account_creation_request "github.com/sailpoint-oss/golang-sdk/v3/machine_account_creation_request"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineaccountcreaterequestinputv2Json := []byte(`{
          "sourceId" : "2c9180907c1e4b3a017c1e5f2a3b0001",
          "formId" : "4f1bb61b-a0ab-4c0a-b9fb-20f44407b75a",
          "entitlements" : [ {
            "id" : "858d2151-ff19-464b-ae0d-6938b3af2baf",
            "comment" : "Needed to read the reconciliation staging tables.",
            "startDate" : "2026-09-01T00:00:00.000Z",
            "removeDate" : "2027-03-01T00:00:00.000Z"
          }, {
            "id" : "0c7a44b9-3e21-4f88-9a10-77bd2c6e5f31"
          } ],
          "entitlementIds" : [ "858d2151-ff19-464b-ae0d-6938b3af2baf", "0c7a44b9-3e21-4f88-9a10-77bd2c6e5f31" ],
          "environment" : "production",
          "description" : "Nightly reconciliation job",
          "machineIdentityId" : "b1e2c3d4-0a5b-4c6d-8e7f-9a0b1c2d3e4f",
          "ownerIdentityId" : "9f2c1b7e4a6d4c8fa1b2c3d4e5f60718",
          "userInput" : {
            "accountName" : "svc-recon-01"
          },
          "subtypeId" : "1419fc28-a8ed-4a07-9f5c-0cb5dfad6311"
        }`) // MachineAccountCreateRequestInputV2 | 

    var machineAccountCreateRequestInputV2 machine_account_creation_request.MachineAccountCreateRequestInputV2
    if err := json.Unmarshal(machineaccountcreaterequestinputv2Json, &machineAccountCreateRequestInputV2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountCreationRequestAPI.CreateMachineAccountV2(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountCreateRequestInputV2(machineAccountCreateRequestInputV2).Execute()
	  //resp, r, err := apiClient.MachineAccountCreationRequestAPI.CreateMachineAccountV2(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountCreateRequestInputV2(machineAccountCreateRequestInputV2).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountCreationRequestAPI.CreateMachineAccountV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMachineAccountV2`: AccountRequestAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountCreationRequestAPI.CreateMachineAccountV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-create-machine-account-request-v1
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
Get Machine Account Creation Request
Retrieves a account request details for machine account creation. This allows the user to view all details for given account request.

[API Spec](https://developer.sailpoint.com/docs/api/get-create-machine-account-request-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountRequestId** | **string** | Account Request ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCreateMachineAccountRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**AccountRequestDetailsDto**](../models/account-request-details-dto)

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
    accountRequestId := `gt38f94347e94562b5bb8424a56498d8` // string | Account Request ID # string | Account Request ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountCreationRequestAPI.GetCreateMachineAccountRequestV1(context.Background(), accountRequestId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountCreationRequestAPI.GetCreateMachineAccountRequestV1(context.Background(), accountRequestId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountCreationRequestAPI.GetCreateMachineAccountRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCreateMachineAccountRequestV1`: AccountRequestDetailsDto
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountCreationRequestAPI.GetCreateMachineAccountRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-account-create-access-info-v1
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
Machine Account Create Access
This endpoint retrieves the list of sources and subtypes for which logged in user has the entitlement to create a machine account.
The response includes a list of object detailing the source, subtype and entitlement details which enables the clients to understand if they can submit the request to create a machine account for the given subtype.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-create-access-info-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountCreateAccessInfoV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]

### Return type

[**[]MachineAccountCreateAccessDto**](../models/machine-account-create-access-dto)

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
    offset := 0 // int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 250 // int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfoV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfoV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfoV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountCreateAccessInfoV1`: []MachineAccountCreateAccessDto
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfoV1`: %v\n", resp)
}
```

[[Back to top]](#)


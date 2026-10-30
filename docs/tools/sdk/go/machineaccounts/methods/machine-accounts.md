# MachineAccounts

# MachineAccountsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-subtype-v1**](#create-machine-account-subtype-v1) | **Post** `/sources/v1/{sourceId}/subtypes` | Create subtype
[**delete-machine-account-async-v1**](#delete-machine-account-async-v1) | **Post** `/machine-accounts/v1/{id}/remove` | Remove machine account
[**delete-machine-account-subtype-by-technical-name-v1**](#delete-machine-account-subtype-by-technical-name-v1) | **Delete** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Delete subtype
[**delete-machine-account-v1**](#delete-machine-account-v1) | **Post** `/machine-accounts/v1/{id}/delete` | Delete machine account
[**disable-machine-account-v1**](#disable-machine-account-v1) | **Post** `/machine-accounts/v1/{id}/disable` | Disable machine account
[**disable-machine-accounts-in-bulk-v1**](#disable-machine-accounts-in-bulk-v1) | **Post** `/machine-accounts/v1/bulk-disable` | Disable machine accounts in bulk
[**enable-machine-account-v1**](#enable-machine-account-v1) | **Post** `/machine-accounts/v1/{id}/enable` | Enable machine account
[**enable-machine-accounts-in-bulk-v1**](#enable-machine-accounts-in-bulk-v1) | **Post** `/machine-accounts/v1/bulk-enable` | Enable machine accounts in bulk
[**get-machine-account-entitlements-v1**](#get-machine-account-entitlements-v1) | **Get** `/machine-accounts/v1/{id}/entitlements` | List machine account entitlements
[**get-machine-account-subtype-by-id-v1**](#get-machine-account-subtype-by-id-v1) | **Get** `/sources/v1/subtypes/{subtypeId}` | Retrieve subtype by subtype id
[**get-machine-account-subtype-by-technical-name-v1**](#get-machine-account-subtype-by-technical-name-v1) | **Get** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Retrieve subtype by source and technicalName
[**get-machine-account-v1**](#get-machine-account-v1) | **Get** `/machine-accounts/v1/{id}` | Get machine account details
[**get-machine-account-v2**](#get-machine-account-v2) | **Get** `/machine-accounts/v2/{id}` | Get machine account details
[**get-machine-accounts-summary-v1**](#get-machine-accounts-summary-v1) | **Get** `/machine-accounts/v1/machine-accounts-summary` | Get machine account candidate summary
[**list-machine-account-machine-identities-v1**](#list-machine-account-machine-identities-v1) | **Get** `/machine-accounts/v1/{id}/machine-identities` | List linked machine identities
[**list-machine-account-subtypes-v1**](#list-machine-account-subtypes-v1) | **Get** `/sources/v1/{sourceId}/subtypes` | Retrieve all subtypes by source
[**list-machine-accounts-v1**](#list-machine-accounts-v1) | **Get** `/machine-accounts/v1` | List machine accounts
[**list-machine-accounts-v2**](#list-machine-accounts-v2) | **Get** `/machine-accounts/v2` | List machine accounts
[**patch-machine-account-subtype-by-technical-name-v1**](#patch-machine-account-subtype-by-technical-name-v1) | **Patch** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Patch subtype
[**reload-machine-account-v1**](#reload-machine-account-v1) | **Post** `/machine-accounts/v1/{id}/reload` | Reload machine account
[**reload-machine-accounts-in-bulk-async-v1**](#reload-machine-accounts-in-bulk-async-v1) | **Post** `/machine-accounts/v1/bulk-reload-async` | Bulk reload machine accounts asynchronously
[**reload-machine-accounts-in-bulk-v1**](#reload-machine-accounts-in-bulk-v1) | **Post** `/machine-accounts/v1/bulk-reload` | Reload machine accounts in bulk
[**unlock-machine-account-v1**](#unlock-machine-account-v1) | **Post** `/machine-accounts/v1/{id}/unlock` | Unlock machine account
[**update-machine-account-v1**](#update-machine-account-v1) | **Patch** `/machine-accounts/v1/{id}` | Update machine account details
[**update-machine-account-v2**](#update-machine-account-v2) | **Patch** `/machine-accounts/v2/{id}` | Update machine account details
[**update-machine-accounts-in-bulk-v1**](#update-machine-accounts-in-bulk-v1) | **Post** `/machine-accounts/v1/bulk-update` | Update machine accounts in bulk


## create-machine-account-subtype-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Create subtype
Create a new machine account subtype for a source.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-subtype-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the source. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineAccountSubtypeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **createMachineAccountSubtypeV1Request** | [**CreateMachineAccountSubtypeV1Request**](../models/create-machine-account-subtype-v1-request) |  | 

### Return type

[**SourceSubtype**](../models/source-subtype)

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
    machine_accounts "github.com/sailpoint-oss/golang-sdk/v3/machine_accounts"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | The ID of the source. # string | The ID of the source.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    createmachineaccountsubtypev1requestJson := []byte(`{"technicalName":"foo","displayName":"Mr Foo","description":"fighters","type":"MACHINE"}`) // CreateMachineAccountSubtypeV1Request | 

    var createMachineAccountSubtypeV1Request machine_accounts.CreateMachineAccountSubtypeV1Request
    if err := json.Unmarshal(createmachineaccountsubtypev1requestJson, &createMachineAccountSubtypeV1Request); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.CreateMachineAccountSubtypeV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).CreateMachineAccountSubtypeV1Request(createMachineAccountSubtypeV1Request).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.CreateMachineAccountSubtypeV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).CreateMachineAccountSubtypeV1Request(createMachineAccountSubtypeV1Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.CreateMachineAccountSubtypeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMachineAccountSubtypeV1`: SourceSubtype
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.CreateMachineAccountSubtypeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-machine-account-async-v1
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
Remove machine account
Use this API to remove a machine account from SailPoint Identity Security. The source account is left unchanged, and a removed machine account can be re-created during the next aggregation. The response returns the task ID.

This endpoint is intended for:

* Removing machine accounts that no longer exist on the source.

* Removing machine accounts that will not be aggregated after a source configuration change.

* Forcing machine accounts to be re-created on the next aggregation so account processing can run again.

A caller who owns the machine account can remove it. Other callers need the **idn:mis-account:remove** right.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-async-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineAccountAsyncV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineAccountsAsyncResult**](../models/machine-accounts-async-result)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.DeleteMachineAccountAsyncV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.DeleteMachineAccountAsyncV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.DeleteMachineAccountAsyncV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMachineAccountAsyncV1`: MachineAccountsAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.DeleteMachineAccountAsyncV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-machine-account-subtype-by-technical-name-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Delete subtype
Delete a machine account subtype by source ID and technical name.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-subtype-by-technical-name-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the source. | 
**technicalName** | **string** | The technical name of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineAccountSubtypeByTechnicalNameV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

 (empty response body)

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
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | The ID of the source. # string | The ID of the source.
    technicalName := `foo` // string | The technical name of the subtype. # string | The technical name of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MachineAccountsAPI.DeleteMachineAccountSubtypeByTechnicalNameV1(context.Background(), sourceId, technicalName).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.MachineAccountsAPI.DeleteMachineAccountSubtypeByTechnicalNameV1(context.Background(), sourceId, technicalName).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.DeleteMachineAccountSubtypeByTechnicalNameV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-machine-account-v1
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
Delete machine account
Use this API to submit a request to delete a machine account from its source. Depending on the tenant's account deletion approval settings, the request can need approval before the account is deleted. The response returns the ID of the account request.

The machine account must be linked to a machine identity; otherwise this API returns `404`. Machine accounts aggregated from a dataset can be rejected with `400`.

A caller who owns the machine account can delete it. Other callers need the **idn:mis-account:delete** right.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineAccountV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineAccountDeleteRequest** | [**MachineAccountDeleteRequest**](../models/machine-account-delete-request) |  | 

### Return type

[**MachineAccountRequestAsyncResult**](../models/machine-account-request-async-result)

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
    machine_accounts "github.com/sailpoint-oss/golang-sdk/v3/machine_accounts"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineaccountdeleterequestJson := []byte(`{
          "comments" : "This machine account is no longer used."
        }`) // MachineAccountDeleteRequest | 

    var machineAccountDeleteRequest machine_accounts.MachineAccountDeleteRequest
    if err := json.Unmarshal(machineaccountdeleterequestJson, &machineAccountDeleteRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.DeleteMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).MachineAccountDeleteRequest(machineAccountDeleteRequest).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.DeleteMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).MachineAccountDeleteRequest(machineAccountDeleteRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.DeleteMachineAccountV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMachineAccountV1`: MachineAccountRequestAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.DeleteMachineAccountV1`: %v\n", resp)
}
```

[[Back to top]](#)

## disable-machine-account-v1
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
Disable machine account
This API submits a task to disable a machine account and returns the task ID.

A caller who owns the machine account can disable it. Other callers need the **idn:mis-account:disable** right.


[API Spec](https://developer.sailpoint.com/docs/api/disable-machine-account-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisableMachineAccountV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineAccountsAsyncResult**](../models/machine-accounts-async-result)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.DisableMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.DisableMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.DisableMachineAccountV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisableMachineAccountV1`: MachineAccountsAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.DisableMachineAccountV1`: %v\n", resp)
}
```

[[Back to top]](#)

## disable-machine-accounts-in-bulk-v1
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
Disable machine accounts in bulk
Use this API to submit one task that disables up to 100 machine accounts, and get the task ID. Machine accounts that are already disabled or that can't be disabled are skipped. When none of the machine accounts can be disabled, the task completes with an error.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can disable them. Other callers need the **idn:mis-account:disable** right. For a caller without the right, machine accounts they do not own are skipped.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/disable-machine-accounts-in-bulk-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDisableMachineAccountsInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineAccountBulkRequest** | [**MachineAccountBulkRequest**](../models/machine-account-bulk-request) |  | 

### Return type

[**MachineAccountRequestAsyncResult**](../models/machine-account-request-async-result)

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
    machine_accounts "github.com/sailpoint-oss/golang-sdk/v3/machine_accounts"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineaccountbulkrequestJson := []byte(`{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180835d2e5168015d32f890ca1581" ]
        }`) // MachineAccountBulkRequest | 

    var machineAccountBulkRequest machine_accounts.MachineAccountBulkRequest
    if err := json.Unmarshal(machineaccountbulkrequestJson, &machineAccountBulkRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.DisableMachineAccountsInBulkV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountBulkRequest(machineAccountBulkRequest).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.DisableMachineAccountsInBulkV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountBulkRequest(machineAccountBulkRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.DisableMachineAccountsInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisableMachineAccountsInBulkV1`: MachineAccountRequestAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.DisableMachineAccountsInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## enable-machine-account-v1
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
Enable machine account
This API submits a task to enable a machine account and returns the task ID.

A caller who owns the machine account can enable it. Other callers need the **idn:mis-account:enable** right.


[API Spec](https://developer.sailpoint.com/docs/api/enable-machine-account-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiEnableMachineAccountV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineAccountsAsyncResult**](../models/machine-accounts-async-result)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.EnableMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.EnableMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.EnableMachineAccountV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EnableMachineAccountV1`: MachineAccountsAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.EnableMachineAccountV1`: %v\n", resp)
}
```

[[Back to top]](#)

## enable-machine-accounts-in-bulk-v1
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
Enable machine accounts in bulk
Use this API to submit one task that enables up to 100 machine accounts, and get the task ID. Machine accounts that are already enabled or that can't be enabled are skipped. When none of the machine accounts can be enabled, the task completes with an error.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can enable them. Other callers need the **idn:mis-account:enable** right. For a caller without the right, machine accounts they do not own are skipped.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/enable-machine-accounts-in-bulk-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiEnableMachineAccountsInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineAccountBulkRequest** | [**MachineAccountBulkRequest**](../models/machine-account-bulk-request) |  | 

### Return type

[**MachineAccountRequestAsyncResult**](../models/machine-account-request-async-result)

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
    machine_accounts "github.com/sailpoint-oss/golang-sdk/v3/machine_accounts"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineaccountbulkrequestJson := []byte(`{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180835d2e5168015d32f890ca1581" ]
        }`) // MachineAccountBulkRequest | 

    var machineAccountBulkRequest machine_accounts.MachineAccountBulkRequest
    if err := json.Unmarshal(machineaccountbulkrequestJson, &machineAccountBulkRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.EnableMachineAccountsInBulkV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountBulkRequest(machineAccountBulkRequest).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.EnableMachineAccountsInBulkV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountBulkRequest(machineAccountBulkRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.EnableMachineAccountsInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EnableMachineAccountsInBulkV1`: MachineAccountRequestAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.EnableMachineAccountsInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-account-entitlements-v1
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
List machine account entitlements
Use this API to list the entitlements held by a machine account. Use `limit` and `offset` to page through the results.

This API requires the **idn:mis-account:read** right. Owning the machine account is not enough.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-entitlements-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountEntitlementsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]MachineAccountEntitlement**](../models/machine-account-entitlement)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountEntitlementsV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountEntitlementsV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.GetMachineAccountEntitlementsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountEntitlementsV1`: []MachineAccountEntitlement
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.GetMachineAccountEntitlementsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-account-subtype-by-id-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Retrieve subtype by subtype id
Get a machine account subtype by its unique ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-subtype-by-id-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | The ID of the machine account subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountSubtypeByIdV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**SourceSubtype**](../models/source-subtype)

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
    subtypeId := `43bdd144-4b17-4fce-a744-17c7fd3e717b` // string | The ID of the machine account subtype. # string | The ID of the machine account subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountSubtypeByIdV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountSubtypeByIdV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.GetMachineAccountSubtypeByIdV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountSubtypeByIdV1`: SourceSubtype
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.GetMachineAccountSubtypeByIdV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-account-subtype-by-technical-name-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Retrieve subtype by source and technicalName
Get a machine account subtype by source ID and technical name.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-subtype-by-technical-name-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the source. | 
**technicalName** | **string** | The technical name of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountSubtypeByTechnicalNameV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**SourceSubtype**](../models/source-subtype)

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
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | The ID of the source. # string | The ID of the source.
    technicalName := `foo` // string | The technical name of the subtype. # string | The technical name of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountSubtypeByTechnicalNameV1(context.Background(), sourceId, technicalName).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountSubtypeByTechnicalNameV1(context.Background(), sourceId, technicalName).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.GetMachineAccountSubtypeByTechnicalNameV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountSubtypeByTechnicalNameV1`: SourceSubtype
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.GetMachineAccountSubtypeByTechnicalNameV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-account-v1
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
Get machine account details
Use this API to return the details for a single machine account by its ID.  

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineAccount**](../models/machine-account)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.GetMachineAccountV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountV1`: MachineAccount
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.GetMachineAccountV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-account-v2
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
Get machine account details
Use this API to get the details of a machine account, including all of its linked machine identities.

A caller who owns the machine account can get it. Other callers need the **idn:mis-account:read** right.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineAccountV2**](../models/machine-account-v2)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.GetMachineAccountV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountV2`: MachineAccountV2
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.GetMachineAccountV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-accounts-summary-v1
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
Get machine account candidate summary
Use this API to count the machine account candidates that are not yet linked to a machine identity, grouped by the classification method that found them. Candidates that are correlated to a human identity are counted in `human`; candidates that are not correlated to any identity are counted in `uncorrelated`.

This API requires the **idn:mis-account-list:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-accounts-summary-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountsSummaryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source.id**: *eq, in*  Filtering on any other field returns &#x60;400&#x60;. | 

### Return type

[**MachineAccountsSummary**](../models/machine-accounts-summary)

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
    filters := `source.id eq "8d3e0094e99445de98eef6c75e25jc04"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source.id**: *eq, in*  Filtering on any other field returns `400`. (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source.id**: *eq, in*  Filtering on any other field returns `400`. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountsSummaryV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.GetMachineAccountsSummaryV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.GetMachineAccountsSummaryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountsSummaryV1`: MachineAccountsSummary
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.GetMachineAccountsSummaryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-account-machine-identities-v1
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
List linked machine identities
Use this API to list the machine identities that are linked to a machine account through source resource links. The response is an empty list when no machine identities are linked.

This API returns `400` when the machine account has no native identity or source.

A caller who owns the machine account can list its machine identities. Other callers need the **idn:mis-account:read** right.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-machine-identities-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListMachineAccountMachineIdentitiesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**[]MachineAccountLinkedMachineIdentity**](../models/machine-account-linked-machine-identity)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.ListMachineAccountMachineIdentitiesV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.ListMachineAccountMachineIdentitiesV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.ListMachineAccountMachineIdentitiesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineAccountMachineIdentitiesV1`: []MachineAccountLinkedMachineIdentity
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.ListMachineAccountMachineIdentitiesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-account-subtypes-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Retrieve all subtypes by source
Get all machine account subtypes for a given source.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-subtypes-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the source. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListMachineAccountSubtypesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]SourceSubtype**](../models/source-subtype)

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
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | The ID of the source. # string | The ID of the source.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `displayName eq "sail"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw* (optional)
    sorters := `displayName` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.ListMachineAccountSubtypesV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.ListMachineAccountSubtypesV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.ListMachineAccountSubtypesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineAccountSubtypesV1`: []SourceSubtype
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.ListMachineAccountSubtypesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-accounts-v1
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
List machine accounts
This returns a list of machine accounts.  

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-accounts-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineAccountsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled for the tenant. When it is not, those filters return &#x60;400&#x60;. &#x60;compliance&#x60; and &#x60;complianceViolationsCount&#x60; are not filter fields. With unknown-severity enabled, a null stored severity matches &#x60;risk.severity eq \&quot;UNKNOWN\&quot;&#x60;. | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled; otherwise those sorters return &#x60;400&#x60;. &#x60;risk.severity&#x60; sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. &#x60;compliance&#x60; is not sortable. | 

### Return type

[**[]MachineAccount**](../models/machine-account)

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
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `hasEntitlements eq true` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq \"UNKNOWN\"`. (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq \"UNKNOWN\"`. (optional)
    sorters := `id,name` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable. (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.ListMachineAccountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.ListMachineAccountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.ListMachineAccountsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineAccountsV1`: []MachineAccount
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.ListMachineAccountsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-accounts-v2
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
List machine accounts
Use this API to get a list of machine accounts. By default, the list includes machine accounts that are linked to a machine identity or to a source resource.

When the whole filter is a single comparison on `machineIdentity.id` or `machineIdentity.name`, the list also includes machine accounts linked to the matching machine identities through source resource links.

A caller without the **idn:mis-account-list:read** right can call this API only when every returned machine account is one they own; otherwise this API returns `403`. Use `ownerIdentity=self` to list only the caller's own machine accounts.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-accounts-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineAccountsV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **ownerIdentity** | **string** | Return only machine accounts whose owner identity is this identity ID. Use &#x60;self&#x60; for the caller&#39;s own identity. This parameter can&#39;t be combined with a filter on &#x60;ownerIdentity.id&#x60;; that combination returns &#x60;400&#x60;. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **connectorAttributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **datasetId**: *eq, in*  **resource.id**: *eq, in*  **type**: *eq, in*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  Use &#x60;me&#x60; as the value of &#x60;ownerIdentity.id&#x60; to match the caller&#39;s own identity.  The &#x60;owners.*&#x60; fields are available only when expanded machine account ownership is enabled for the tenant. The &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60; and &#x60;lastUsedAt&#x60; fields are available only when machine account risk enrichment is enabled for the tenant. Filtering on an unavailable field returns &#x60;400&#x60;. | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, ownerIdentity, ownerIdentity.id, ownerIdentity.name, owners.primary.id, owners.primary.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.governanceGroup.id, owners.governanceGroup.name, manuallyCorrelated, enabled, locked, hasEntitlements, attributes, connectorAttributes, source.id, source.name, datasetId, resource.id, type, created, modified, risk.severity, permissionLevel, lastUsedAt**  The same availability rules as for &#x60;filters&#x60; apply to the &#x60;owners.*&#x60;, &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60; and &#x60;lastUsedAt&#x60; fields. &#x60;risk.severity&#x60; sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. | 

### Return type

[**[]MachineAccountV2**](../models/machine-account-v2)

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
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    ownerIdentity := `self` // string | Return only machine accounts whose owner identity is this identity ID. Use `self` for the caller's own identity. This parameter can't be combined with a filter on `ownerIdentity.id`; that combination returns `400`. (optional) # string | Return only machine accounts whose owner identity is this identity ID. Use `self` for the caller's own identity. This parameter can't be combined with a filter on `ownerIdentity.id`; that combination returns `400`. (optional)
    filters := `machineIdentity.id eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **connectorAttributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **datasetId**: *eq, in*  **resource.id**: *eq, in*  **type**: *eq, in*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  Use `me` as the value of `ownerIdentity.id` to match the caller's own identity.  The `owners.*` fields are available only when expanded machine account ownership is enabled for the tenant. The `risk.severity`, `permissionLevel` and `lastUsedAt` fields are available only when machine account risk enrichment is enabled for the tenant. Filtering on an unavailable field returns `400`. (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **connectorAttributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **datasetId**: *eq, in*  **resource.id**: *eq, in*  **type**: *eq, in*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  Use `me` as the value of `ownerIdentity.id` to match the caller's own identity.  The `owners.*` fields are available only when expanded machine account ownership is enabled for the tenant. The `risk.severity`, `permissionLevel` and `lastUsedAt` fields are available only when machine account risk enrichment is enabled for the tenant. Filtering on an unavailable field returns `400`. (optional)
    sorters := `id,name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, ownerIdentity, ownerIdentity.id, ownerIdentity.name, owners.primary.id, owners.primary.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.governanceGroup.id, owners.governanceGroup.name, manuallyCorrelated, enabled, locked, hasEntitlements, attributes, connectorAttributes, source.id, source.name, datasetId, resource.id, type, created, modified, risk.severity, permissionLevel, lastUsedAt**  The same availability rules as for `filters` apply to the `owners.*`, `risk.severity`, `permissionLevel` and `lastUsedAt` fields. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, ownerIdentity, ownerIdentity.id, ownerIdentity.name, owners.primary.id, owners.primary.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.governanceGroup.id, owners.governanceGroup.name, manuallyCorrelated, enabled, locked, hasEntitlements, attributes, connectorAttributes, source.id, source.name, datasetId, resource.id, type, created, modified, risk.severity, permissionLevel, lastUsedAt**  The same availability rules as for `filters` apply to the `owners.*`, `risk.severity`, `permissionLevel` and `lastUsedAt` fields. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.ListMachineAccountsV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.ListMachineAccountsV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).OwnerIdentity(ownerIdentity).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.ListMachineAccountsV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineAccountsV2`: []MachineAccountV2
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.ListMachineAccountsV2`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-machine-account-subtype-by-technical-name-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Patch subtype
Update fields of a machine account subtype by source ID and technical name.
Patchable fields include: `displayName`, `description`.

[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-by-technical-name-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the source. | 
**technicalName** | **string** | The technical name of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchMachineAccountSubtypeByTechnicalNameV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]map[string]interface\{\}** | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**SourceSubtype**](../models/source-subtype)

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
    machine_accounts "github.com/sailpoint-oss/golang-sdk/v3/machine_accounts"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | The ID of the source. # string | The ID of the source.
    technicalName := `foo` // string | The technical name of the subtype. # string | The technical name of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(`[{"op":"replace","path":"/displayName","value":"Test New DisplayName"}]`) // []map[string]interface{} | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var requestBody []machine_accounts.RequestBody
    if err := json.Unmarshal(requestbodyJson, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.PatchMachineAccountSubtypeByTechnicalNameV1(context.Background(), sourceId, technicalName).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.PatchMachineAccountSubtypeByTechnicalNameV1(context.Background(), sourceId, technicalName).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.PatchMachineAccountSubtypeByTechnicalNameV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchMachineAccountSubtypeByTechnicalNameV1`: SourceSubtype
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.PatchMachineAccountSubtypeByTechnicalNameV1`: %v\n", resp)
}
```

[[Back to top]](#)

## reload-machine-account-v1
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
Reload machine account
This API asynchronously reloads the machine account directly from the connector and performs a one-time aggregation. It returns the task ID.

A caller who owns the machine account can reload it. Other callers need the **idn:mis-account:reload** right.


[API Spec](https://developer.sailpoint.com/docs/api/reload-machine-account-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiReloadMachineAccountV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineAccountsAsyncResult**](../models/machine-accounts-async-result)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.ReloadMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.ReloadMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.ReloadMachineAccountV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReloadMachineAccountV1`: MachineAccountsAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.ReloadMachineAccountV1`: %v\n", resp)
}
```

[[Back to top]](#)

## reload-machine-accounts-in-bulk-async-v1
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
Bulk reload machine accounts asynchronously
Use this API to submit one task that reloads up to 100 machine accounts from their sources, and get the task ID. Machine accounts that can't be reloaded are skipped. When none of the machine accounts can be reloaded, the task completes with an error.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can reload them. Other callers need the **idn:mis-account:reload** right. For a caller without the right, machine accounts they do not own are skipped.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/reload-machine-accounts-in-bulk-async-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiReloadMachineAccountsInBulkAsyncV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineAccountBulkRequest** | [**MachineAccountBulkRequest**](../models/machine-account-bulk-request) |  | 

### Return type

[**MachineAccountRequestAsyncResult**](../models/machine-account-request-async-result)

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
    machine_accounts "github.com/sailpoint-oss/golang-sdk/v3/machine_accounts"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineaccountbulkrequestJson := []byte(`{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180835d2e5168015d32f890ca1581" ]
        }`) // MachineAccountBulkRequest | 

    var machineAccountBulkRequest machine_accounts.MachineAccountBulkRequest
    if err := json.Unmarshal(machineaccountbulkrequestJson, &machineAccountBulkRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.ReloadMachineAccountsInBulkAsyncV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountBulkRequest(machineAccountBulkRequest).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.ReloadMachineAccountsInBulkAsyncV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountBulkRequest(machineAccountBulkRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.ReloadMachineAccountsInBulkAsyncV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReloadMachineAccountsInBulkAsyncV1`: MachineAccountRequestAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.ReloadMachineAccountsInBulkAsyncV1`: %v\n", resp)
}
```

[[Back to top]](#)

## reload-machine-accounts-in-bulk-v1
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
Reload machine accounts in bulk
Use this API to reload up to 100 machine accounts from their sources. The response has one result per requested machine account, in no particular order. Each result has its own HTTP-style `status`: `200` when the reload was queued, or an error status such as `400`, `404` or `500`.

To track the whole reload with a single task instead, use the asynchronous bulk reload API.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can reload them. Other callers need the **idn:mis-account:reload** right. For a caller without the right, machine accounts they do not own get a result with status `404`.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/reload-machine-accounts-in-bulk-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiReloadMachineAccountsInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineAccountBulkRequest** | [**MachineAccountBulkRequest**](../models/machine-account-bulk-request) |  | 

### Return type

[**[]MachineAccountBulkResult**](../models/machine-account-bulk-result)

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
    machine_accounts "github.com/sailpoint-oss/golang-sdk/v3/machine_accounts"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineaccountbulkrequestJson := []byte(`{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180835d2e5168015d32f890ca1581" ]
        }`) // MachineAccountBulkRequest | 

    var machineAccountBulkRequest machine_accounts.MachineAccountBulkRequest
    if err := json.Unmarshal(machineaccountbulkrequestJson, &machineAccountBulkRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.ReloadMachineAccountsInBulkV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountBulkRequest(machineAccountBulkRequest).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.ReloadMachineAccountsInBulkV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountBulkRequest(machineAccountBulkRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.ReloadMachineAccountsInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReloadMachineAccountsInBulkV1`: []MachineAccountBulkResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.ReloadMachineAccountsInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## unlock-machine-account-v1
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
Unlock machine account
This API submits a task to unlock a machine account and returns the task ID.

A caller who owns the machine account can unlock it. Other callers need the **idn:mis-account:unlock** right.


[API Spec](https://developer.sailpoint.com/docs/api/unlock-machine-account-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUnlockMachineAccountV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineAccountsAsyncResult**](../models/machine-accounts-async-result)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.UnlockMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.UnlockMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.UnlockMachineAccountV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UnlockMachineAccountV1`: MachineAccountsAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.UnlockMachineAccountV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-machine-account-v1
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
Update machine account details
Use this API to update machine accounts details. 


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMachineAccountV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]map[string]interface\{\}** | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentity           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentity. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. &#x60;risk&#x60;, &#x60;permissionLevel&#x60;, &#x60;compliance&#x60;, and &#x60;lastUsedAt&#x60; are read-only. Do not patch them; aggregation is the only writer. A patch of other fields still succeeds when those values are present on the account. | 

### Return type

[**MachineAccount**](../models/machine-account)

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
    machine_accounts "github.com/sailpoint-oss/golang-sdk/v3/machine_accounts"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(`[{"op":"add","path":"/environment","value":"test"}]`) // []map[string]interface{} | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentity           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentity. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. `risk`, `permissionLevel`, `compliance`, and `lastUsedAt` are read-only. Do not patch them; aggregation is the only writer. A patch of other fields still succeeds when those values are present on the account.

    var requestBody []machine_accounts.RequestBody
    if err := json.Unmarshal(requestbodyJson, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.UpdateMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.UpdateMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.UpdateMachineAccountV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineAccountV1`: MachineAccount
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.UpdateMachineAccountV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-machine-account-v2
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
Update machine account details
Use this API to update a machine account with a [JSON Patch](https://tools.ietf.org/html/rfc6902) document. The response is the updated machine account.

A caller who owns the machine account can update it. Other callers need the **idn:mis-account:update** right.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMachineAccountV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentities           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentities. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. Patching ownerIdentity and owners in the same request returns &#x60;400&#x60;.  To change the machine identity, use a single &#x60;replace&#x60; operation on &#x60;/machineIdentities&#x60; whose value is a list of exactly one machine identity reference with its &#x60;id&#x60;. The &#x60;/machineIdentity&#x60; path, indexed or nested paths such as &#x60;/machineIdentities/0&#x60;, other operations on &#x60;/machineIdentities&#x60;, and a value that is not a one-element list all return &#x60;400&#x60;.  All other fields, including &#x60;risk&#x60;, &#x60;permissionLevel&#x60;, &#x60;compliance&#x60;, and &#x60;lastUsedAt&#x60;, are read-only. A patch that changes one of them returns &#x60;400&#x60;. | 

### Return type

[**MachineAccountV2**](../models/machine-account-v2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    machine_accounts "github.com/sailpoint-oss/golang-sdk/v3/machine_accounts"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/environment","value":"test"}]`) // []JsonPatchOperation | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentities           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentities. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. Patching ownerIdentity and owners in the same request returns `400`.  To change the machine identity, use a single `replace` operation on `/machineIdentities` whose value is a list of exactly one machine identity reference with its `id`. The `/machineIdentity` path, indexed or nested paths such as `/machineIdentities/0`, other operations on `/machineIdentities`, and a value that is not a one-element list all return `400`.  All other fields, including `risk`, `permissionLevel`, `compliance`, and `lastUsedAt`, are read-only. A patch that changes one of them returns `400`.

    var jsonPatchOperation []machine_accounts.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.UpdateMachineAccountV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.UpdateMachineAccountV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.UpdateMachineAccountV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineAccountV2`: MachineAccountV2
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.UpdateMachineAccountV2`: %v\n", resp)
}
```

[[Back to top]](#)

## update-machine-accounts-in-bulk-v1
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
Update machine accounts in bulk
Use this API to apply the same [JSON Patch](https://tools.ietf.org/html/rfc6902) to up to 100 machine accounts. The response has one result per requested machine account, in no particular order. Each result has its own HTTP-style `status`: `200` when the update succeeded, or an error status such as `400` or `404`.

Each patch operation must target one of these top-level fields:
  * description
  * subtype
  * environment
  * machineIdentity
  * ownerIdentity
  * manuallyEdited

The request fails with `400` when `ids` is empty or has more than 100 entries, when `jsonPatch` is missing, or when a patch operation targets any other field. A patch that changes `subtype` must only include machine accounts from one source; otherwise every result has status `400`.

A caller who owns the machine accounts can update them. Other callers need the **idn:mis-account:update** right. For a caller without the right, machine accounts they do not own get a result with status `404`.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-accounts-in-bulk-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMachineAccountsInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineAccountBulkUpdateRequest** | [**MachineAccountBulkUpdateRequest**](../models/machine-account-bulk-update-request) |  | 

### Return type

[**[]MachineAccountBulkResult**](../models/machine-account-bulk-result)

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
    machine_accounts "github.com/sailpoint-oss/golang-sdk/v3/machine_accounts"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineaccountbulkupdaterequestJson := []byte(`{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180835d2e5168015d32f890ca1581" ],
          "jsonPatch" : [ {
            "op" : "replace",
            "path" : "/environment",
            "value" : "PROD"
          } ]
        }`) // MachineAccountBulkUpdateRequest | 

    var machineAccountBulkUpdateRequest machine_accounts.MachineAccountBulkUpdateRequest
    if err := json.Unmarshal(machineaccountbulkupdaterequestJson, &machineAccountBulkUpdateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountsAPI.UpdateMachineAccountsInBulkV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountBulkUpdateRequest(machineAccountBulkUpdateRequest).Execute()
	  //resp, r, err := apiClient.MachineAccountsAPI.UpdateMachineAccountsInBulkV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountBulkUpdateRequest(machineAccountBulkUpdateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.UpdateMachineAccountsInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineAccountsInBulkV1`: []MachineAccountBulkResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.UpdateMachineAccountsInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)


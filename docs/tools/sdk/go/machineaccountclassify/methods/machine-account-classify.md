# MachineAccountClassify

# MachineAccountClassifyAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-bulk-classify-machine-accounts-v1**](#send-bulk-classify-machine-accounts-v1) | **Post** `/accounts/v1/bulk-classify` | Classify multiple machine accounts
[**send-classify-machine-account-v1**](#send-classify-machine-account-v1) | **Post** `/accounts/v1/{id}/classify` | Classify single machine account


## send-bulk-classify-machine-accounts-v1
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
Classify multiple machine accounts
Use this API to classify up to 250 accounts in one request.
The response lists a result for each requested account, with its own status code, so some accounts can succeed while others fail.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.
When machine account classification is not enabled for the tenant, this API returns `404`.

[API Spec](https://developer.sailpoint.com/docs/api/send-bulk-classify-machine-accounts-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendBulkClassifyMachineAccountsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **bulkClassifyMachineAccountsRequest** | [**BulkClassifyMachineAccountsRequest**](../models/bulk-classify-machine-accounts-request) |  | 
 **classificationMode** | **string** | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. | [default to &quot;default&quot;]

### Return type

[**[]BulkClassifyMachineAccountResult**](../models/bulk-classify-machine-account-result)

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
    machine_account_classify "github.com/sailpoint-oss/golang-sdk/v3/machine_account_classify"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    bulkclassifymachineaccountsrequestJson := []byte(`{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180835d191a86015d28455b4a2329" ]
        }`) // BulkClassifyMachineAccountsRequest | 
    classificationMode := `forceMachine` // string | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to "default") # string | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to "default")

    var bulkClassifyMachineAccountsRequest machine_account_classify.BulkClassifyMachineAccountsRequest
    if err := json.Unmarshal(bulkclassifymachineaccountsrequestJson, &bulkClassifyMachineAccountsRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountClassifyAPI.SendBulkClassifyMachineAccountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).BulkClassifyMachineAccountsRequest(bulkClassifyMachineAccountsRequest).Execute()
	  //resp, r, err := apiClient.MachineAccountClassifyAPI.SendBulkClassifyMachineAccountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).BulkClassifyMachineAccountsRequest(bulkClassifyMachineAccountsRequest).ClassificationMode(classificationMode).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountClassifyAPI.SendBulkClassifyMachineAccountsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SendBulkClassifyMachineAccountsV1`: []BulkClassifyMachineAccountResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountClassifyAPI.SendBulkClassifyMachineAccountsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## send-classify-machine-account-v1
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
Classify single machine account
Use this API to classify a single machine account.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/send-classify-machine-account-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSendClassifyMachineAccountV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **classificationMode** | **string** | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. | [default to &quot;default&quot;]

### Return type

[**SendClassifyMachineAccountV1200Response**](../models/send-classify-machine-account-v1200-response)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Account ID. # string | Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    classificationMode := `forceMachine` // string | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to "default") # string | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to "default")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountClassifyAPI.SendClassifyMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountClassifyAPI.SendClassifyMachineAccountV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).ClassificationMode(classificationMode).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountClassifyAPI.SendClassifyMachineAccountV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SendClassifyMachineAccountV1`: SendClassifyMachineAccountV1200Response
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountClassifyAPI.SendClassifyMachineAccountV1`: %v\n", resp)
}
```

[[Back to top]](#)


---
id: v2026-machine-account-creation-request
title: MachineAccountCreationRequest
pagination_label: MachineAccountCreationRequest
sidebar_label: MachineAccountCreationRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineAccountCreationRequest', 'V2026MachineAccountCreationRequest'] 
slug: /tools/sdk/go/v2026/methods/machine-account-creation-request
tags: ['SDK', 'Software Development Kit', 'MachineAccountCreationRequest', 'V2026MachineAccountCreationRequest']
---

# MachineAccountCreationRequestAPI
  Use this API to submit and retrieve machine account creation requests.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2026*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-request**](#create-machine-account-request) | **Post** `/account-requests/machine-account-create` | Submit Machine Account Creation Request
[**get-create-machine-account-request**](#get-create-machine-account-request) | **Get** `/account-requests/machine-account-create/{accountRequestId}` | Get Machine Account Creation Request
[**get-machine-account-create-access-info**](#get-machine-account-create-access-info) | **Get** `/source-subtypes/machine-account-create-access` | Machine Account Create Access


## create-machine-account-request
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


[API Spec](https://developer.sailpoint.com/docs/api/v2026/create-machine-account-request)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineAccountRequestRequest struct via the builder pattern


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
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineaccountcreaterequestinput := []byte(`{
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

    var machineAccountCreateRequestInput v2026.MachineAccountCreateRequestInput
    if err := json.Unmarshal(machineaccountcreaterequestinput, &machineAccountCreateRequestInput); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.MachineAccountCreationRequestAPI.CreateMachineAccountRequest(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountCreateRequestInput(machineAccountCreateRequestInput).Execute()
	  //resp, r, err := apiClient.V2026.MachineAccountCreationRequestAPI.CreateMachineAccountRequest(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineAccountCreateRequestInput(machineAccountCreateRequestInput).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountCreationRequestAPI.CreateMachineAccountRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMachineAccountRequest`: AccountRequestAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountCreationRequestAPI.CreateMachineAccountRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## get-create-machine-account-request
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

[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-create-machine-account-request)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountRequestId** | **string** | Account Request ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCreateMachineAccountRequestRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accountRequestId := `gt38f94347e94562b5bb8424a56498d8` // string | Account Request ID # string | Account Request ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.MachineAccountCreationRequestAPI.GetCreateMachineAccountRequest(context.Background(), accountRequestId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2026.MachineAccountCreationRequestAPI.GetCreateMachineAccountRequest(context.Background(), accountRequestId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountCreationRequestAPI.GetCreateMachineAccountRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCreateMachineAccountRequest`: AccountRequestDetailsDto
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountCreationRequestAPI.GetCreateMachineAccountRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-account-create-access-info
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

[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-machine-account-create-access-info)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountCreateAccessInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    offset := 0 // int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 250 // int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfo(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2026.MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfo(context.Background()).XSailPointExperimental(xSailPointExperimental).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfo``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountCreateAccessInfo`: []MachineAccountCreateAccessDto
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfo`: %v\n", resp)
}
```

[[Back to top]](#)


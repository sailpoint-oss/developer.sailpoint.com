---
id: v1-machine-account-creation-request
title: MachineAccountCreationRequest
pagination_label: MachineAccountCreationRequest
sidebar_label: MachineAccountCreationRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineAccountCreationRequest', 'V1MachineAccountCreationRequest'] 
slug: /tools/sdk/go/machineaccountcreationrequest/methods/machine-account-creation-request
tags: ['SDK', 'Software Development Kit', 'MachineAccountCreationRequest', 'V1MachineAccountCreationRequest']
---

# MachineAccountCreationRequestAPI
  Use this API to submit and retrieve machine account creation requests.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-request-v1**](#create-machine-account-request-v1) | **Post** `/account-requests/v1/machine-account-create` | Submit Machine Account Creation Request
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


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-machine-account-request-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineAccountRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineaccountcreaterequestinput** | [**Machineaccountcreaterequestinput**](../models/machineaccountcreaterequestinput) |  | 

### Return type

[**Accountrequestasyncresult**](../models/accountrequestasyncresult)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/machine_account_creation_request"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/machine_account_creation_request"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineaccountcreaterequestinput := []byte(``) // Machineaccountcreaterequestinput | 

    var machineaccountcreaterequestinput v1.Machineaccountcreaterequestinput
    if err := json.Unmarshal(machineaccountcreaterequestinput, &machineaccountcreaterequestinput); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountCreationRequestAPI.CreateMachineAccountRequestV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Machineaccountcreaterequestinput(machineaccountcreaterequestinput).Execute()
	  //resp, r, err := apiClient.MachineAccountCreationRequestAPI.CreateMachineAccountRequestV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Machineaccountcreaterequestinput(machineaccountcreaterequestinput).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountCreationRequestAPI.CreateMachineAccountRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMachineAccountRequestV1`: Accountrequestasyncresult
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountCreationRequestAPI.CreateMachineAccountRequestV1`: %v\n", resp)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-create-machine-account-request-v1)

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

[**Accountrequestdetailsdto**](../models/accountrequestdetailsdto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/machine_account_creation_request"
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
    // response from `GetCreateMachineAccountRequestV1`: Accountrequestdetailsdto
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-machine-account-create-access-info-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountCreateAccessInfoV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]

### Return type

[**[]Machineaccountcreateaccessdto**](../models/machineaccountcreateaccessdto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/machine_account_creation_request"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    offset := 0 // int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 250 // int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfoV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfoV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfoV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountCreateAccessInfoV1`: []Machineaccountcreateaccessdto
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountCreationRequestAPI.GetMachineAccountCreateAccessInfoV1`: %v\n", resp)
}
```

[[Back to top]](#)


---
id: v1-role-propagation
title: RolePropagation
pagination_label: RolePropagation
sidebar_label: RolePropagation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RolePropagation', 'V1RolePropagation'] 
slug: /tools/sdk/go/rolepropagation/methods/role-propagation
tags: ['SDK', 'Software Development Kit', 'RolePropagation', 'V1RolePropagation']
---

# RolePropagationAPI
  Role Change Propagation ensures that any changes to the composition of a role’s access objects 
(entitlements, access profiles, or dimensions) are applied to all member identities. 
For example: If an entitlement is removed from a role, all identities assigned to that role 
should lose access to that entitlement as part of this process.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-role-propagation-v1**](#cancel-role-propagation-v1) | **Post** `/role-propagation/v1/terminate` | Terminate Role Propagation process
[**get-ongoing-role-propagation-v1**](#get-ongoing-role-propagation-v1) | **Get** `/role-propagation/v1/is-running` | Get ongoing Role Propagation process
[**get-role-propagation-config-v1**](#get-role-propagation-config-v1) | **Get** `/role-propagation-config/v1` | Get Role Change Propagation Configuration
[**get-role-propagation-status-v1**](#get-role-propagation-status-v1) | **Get** `/role-propagation/v1/{rolePropagationId}/status` | Get status of Role-Propagation process
[**set-role-propagation-config-v1**](#set-role-propagation-config-v1) | **Put** `/role-propagation-config/v1` | Update Role Change Propagation Configuration
[**start-role-propagation-v1**](#start-role-propagation-v1) | **Post** `/role-propagation/v1` | Initiate Role Propagation process


## cancel-role-propagation-v1
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
Terminate Role Propagation process
This endpoint terminates the ongoing role change propagation process for a tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-role-propagation-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCancelRolePropagationV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/role_propagation"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.RolePropagationAPI.CancelRolePropagationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.RolePropagationAPI.CancelRolePropagationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolePropagationAPI.CancelRolePropagationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-ongoing-role-propagation-v1
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
Get ongoing Role Propagation process
This endpoint returns the information of ongoing role change propagation process for a tenant. It returns the information whether the role propagation process is currently running or not, If it is running it returns the details of the ongoing role propagation process. The execution stage of the role propagation process can be one of the following: - PENDING - The role propagation process is queued to be executed. - DATA_AGGREGATION_RUNNING - The role propagation process is currently aggregating data. - LAUNCH_PROVISIONING - The role propagation process has started to provision the access to the identities. - SUCCEEDED - The role propagation process has successfully completed. - FAILED - The role propagation process has failed. - TERMINATED - The role propagation process was externally terminated.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-ongoing-role-propagation-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetOngoingRolePropagationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**RolePropagationOngoingResponse**](../models/role-propagation-ongoing-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/role_propagation"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolePropagationAPI.GetOngoingRolePropagationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.RolePropagationAPI.GetOngoingRolePropagationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolePropagationAPI.GetOngoingRolePropagationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOngoingRolePropagationV1`: RolePropagationOngoingResponse
    fmt.Fprintf(os.Stdout, "Response from `RolePropagationAPI.GetOngoingRolePropagationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-propagation-config-v1
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
Get Role Change Propagation Configuration
This endpoint fetches the Role Change Propagation Configuration for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-propagation-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRolePropagationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**RolePropagationConfigResponse**](../models/role-propagation-config-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/role_propagation"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolePropagationAPI.GetRolePropagationConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.RolePropagationAPI.GetRolePropagationConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolePropagationAPI.GetRolePropagationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRolePropagationConfigV1`: RolePropagationConfigResponse
    fmt.Fprintf(os.Stdout, "Response from `RolePropagationAPI.GetRolePropagationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-propagation-status-v1
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
Get status of Role-Propagation process
This endpoint returns the information of the specified role change propagation process. The execution stage of the role propagation process can be one of the following:
    - PENDING - The role propagation process is queued to be executed.
    - DATA_AGGREGATION_RUNNING - The role propagation process is currently aggregating data.
    - LAUNCH_PROVISIONING - The role propagation process has started to provision the access to the identities.
    - SUCCEEDED - The role propagation process has successfully completed.
    - FAILED - The role propagation process has failed.
    - TERMINATED - The role propagation process was externally terminated.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-propagation-status-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**rolePropagationId** | **string** | The ID of the role propagation process to retrieve the status for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRolePropagationStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**RolePropagationStatusResponse**](../models/role-propagation-status-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/role_propagation"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    rolePropagationId := `47b9fb02-e12e-42ba-8bfe-1860d78c88eb` // string | The ID of the role propagation process to retrieve the status for. # string | The ID of the role propagation process to retrieve the status for.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolePropagationAPI.GetRolePropagationStatusV1(context.Background(), rolePropagationId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.RolePropagationAPI.GetRolePropagationStatusV1(context.Background(), rolePropagationId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolePropagationAPI.GetRolePropagationStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRolePropagationStatusV1`: RolePropagationStatusResponse
    fmt.Fprintf(os.Stdout, "Response from `RolePropagationAPI.GetRolePropagationStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-role-propagation-config-v1
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
Update Role Change Propagation Configuration
This endpoint enables or disables the Role Change Propagation Process for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-role-propagation-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetRolePropagationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **rolePropagationConfigInput** | [**RolePropagationConfigInput**](../models/role-propagation-config-input) |  | 

### Return type

[**RolePropagationConfigResponse**](../models/role-propagation-config-response)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/role_propagation"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/role_propagation"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    rolepropagationconfiginput := []byte(``) // RolePropagationConfigInput | 

    var rolePropagationConfigInput v1.RolePropagationConfigInput
    if err := json.Unmarshal(rolepropagationconfiginput, &rolePropagationConfigInput); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolePropagationAPI.SetRolePropagationConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RolePropagationConfigInput(rolePropagationConfigInput).Execute()
	  //resp, r, err := apiClient.RolePropagationAPI.SetRolePropagationConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RolePropagationConfigInput(rolePropagationConfigInput).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolePropagationAPI.SetRolePropagationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetRolePropagationConfigV1`: RolePropagationConfigResponse
    fmt.Fprintf(os.Stdout, "Response from `RolePropagationAPI.SetRolePropagationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-role-propagation-v1
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
Initiate Role Propagation process
This endpoint initiates a role change propagation process for a tenant asynchronously.  If all preconditions are met, the request is accepted and a rolePropagationId is returned which  can be used to view the status.
API throws 4xx if any of the following conditions are met - Role propagation feature is disabled  - There is an ongoing role propagation for the tenant - Role refresh needs to be kicked off as part of the role propagation (skipRoleRefresh=false) and there is an ongoing refresh for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-role-propagation-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartRolePropagationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **skipRoleRefresh** | **bool** | When true, the role refresh is not performed. Keeping it false is recommended. | [default to false]

### Return type

[**RolePropagationResponse**](../models/role-propagation-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/role_propagation"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    skipRoleRefresh := true // bool | When true, the role refresh is not performed. Keeping it false is recommended. (optional) (default to false) # bool | When true, the role refresh is not performed. Keeping it false is recommended. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolePropagationAPI.StartRolePropagationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.RolePropagationAPI.StartRolePropagationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).SkipRoleRefresh(skipRoleRefresh).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolePropagationAPI.StartRolePropagationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartRolePropagationV1`: RolePropagationResponse
    fmt.Fprintf(os.Stdout, "Response from `RolePropagationAPI.StartRolePropagationV1`: %v\n", resp)
}
```

[[Back to top]](#)


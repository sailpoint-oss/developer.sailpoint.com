---
id: v2025-role-propagation
title: RolePropagation
pagination_label: RolePropagation
sidebar_label: RolePropagation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RolePropagation', 'V2025RolePropagation'] 
slug: /tools/sdk/go/v2025/methods/role-propagation
tags: ['SDK', 'Software Development Kit', 'RolePropagation', 'V2025RolePropagation']
---

# RolePropagationAPI
  Role Change Propagation ensures that any changes to the composition of a role’s access objects 
(entitlements, access profiles, or dimensions) are applied to all member identities. 
For example: If an entitlement is removed from a role, all identities assigned to that role 
should lose access to that entitlement as part of this process.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-role-propagation**](#cancel-role-propagation) | **Post** `/role-propagation/terminate` | Terminate Role Propagation process
[**get-ongoing-role-propagation**](#get-ongoing-role-propagation) | **Get** `/role-propagation/is-running` | Get ongoing Role Propagation process
[**get-role-propagation-status**](#get-role-propagation-status) | **Get** `/role-propagation/{rolePropagationId}/status` | Get status of Role-Propagation process
[**start-role-propagation**](#start-role-propagation) | **Post** `/role-propagation` | Initiate Role Propagation process


## cancel-role-propagation
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/cancel-role-propagation)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCancelRolePropagationRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.RolePropagationAPI.CancelRolePropagation(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.V2025.RolePropagationAPI.CancelRolePropagation(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolePropagationAPI.CancelRolePropagation``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-ongoing-role-propagation
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-ongoing-role-propagation)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetOngoingRolePropagationRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolePropagationAPI.GetOngoingRolePropagation(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.RolePropagationAPI.GetOngoingRolePropagation(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolePropagationAPI.GetOngoingRolePropagation``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOngoingRolePropagation`: RolePropagationOngoingResponse
    fmt.Fprintf(os.Stdout, "Response from `RolePropagationAPI.GetOngoingRolePropagation`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-propagation-status
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-role-propagation-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**rolePropagationId** | **string** | The ID of the role propagation process to retrieve the status for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRolePropagationStatusRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    rolePropagationId := `47b9fb02-e12e-42ba-8bfe-1860d78c88eb` // string | The ID of the role propagation process to retrieve the status for. # string | The ID of the role propagation process to retrieve the status for.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolePropagationAPI.GetRolePropagationStatus(context.Background(), rolePropagationId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.RolePropagationAPI.GetRolePropagationStatus(context.Background(), rolePropagationId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolePropagationAPI.GetRolePropagationStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRolePropagationStatus`: RolePropagationStatusResponse
    fmt.Fprintf(os.Stdout, "Response from `RolePropagationAPI.GetRolePropagationStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## start-role-propagation
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/start-role-propagation)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartRolePropagationRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    skipRoleRefresh := true // bool | When true, the role refresh is not performed. Keeping it false is recommended. (optional) (default to false) # bool | When true, the role refresh is not performed. Keeping it false is recommended. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolePropagationAPI.StartRolePropagation(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.RolePropagationAPI.StartRolePropagation(context.Background()).XSailPointExperimental(xSailPointExperimental).SkipRoleRefresh(skipRoleRefresh).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolePropagationAPI.StartRolePropagation``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartRolePropagation`: RolePropagationResponse
    fmt.Fprintf(os.Stdout, "Response from `RolePropagationAPI.StartRolePropagation`: %v\n", resp)
}
```

[[Back to top]](#)


---
id: v2025-tenant-context
title: TenantContext
pagination_label: TenantContext
sidebar_label: TenantContext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TenantContext', 'V2025TenantContext'] 
slug: /tools/sdk/go/v2025/methods/tenant-context
tags: ['SDK', 'Software Development Kit', 'TenantContext', 'V2025TenantContext']
---

# TenantContextAPI
  The purpose of this API is to manage key-value pairs specific to a tenant&#39;s context, enabling dynamic configuration and personalized settings per tenant.
Context key-value pairs will consist of common terms and acronyms used within your organization.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-context**](#get-tenant-context) | **Get** `/tenant-context` | Retrieve tenant context
[**patch-tenant-context**](#patch-tenant-context) | **Patch** `/tenant-context` | Update tenant context


## get-tenant-context
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Retrieve tenant context
Returns a list of key-value pairs representing the current state of the tenant's context.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-tenant-context)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantContextRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**[]GetTenantContext200ResponseInner**](../models/get-tenant-context200-response-inner)

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
    resp, r, err := apiClient.V2025.TenantContextAPI.GetTenantContext(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2025.TenantContextAPI.GetTenantContext(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TenantContextAPI.GetTenantContext``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTenantContext`: []GetTenantContext200ResponseInner
	fmt.Fprintf(os.Stdout, "Response from `TenantContextAPI.GetTenantContext`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-tenant-context
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update tenant context
Allows the user to make incremental updates to tenant context records using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

This endpoint is specifically designed to modify the `/Key/*` field, supporting operations such as `add`, `remove`, or `replace` to manage key-value pairs. 

Note that each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-tenant-context)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchTenantContextRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

 (empty response body)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperation := []byte(`{
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        }`) // JsonPatchOperation | 

  
   var jsonPatchOperation v2025.JsonPatchOperation
   if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.TenantContextAPI.PatchTenantContext(context.Background()).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	//r, err := apiClient.V2025.TenantContextAPI.PatchTenantContext(context.Background()).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TenantContextAPI.PatchTenantContext``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)


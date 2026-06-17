---
id: v2024-tenant-context
title: TenantContext
pagination_label: TenantContext
sidebar_label: TenantContext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TenantContext', 'V2024TenantContext'] 
slug: /tools/sdk/go/v2024/methods/tenant-context
tags: ['SDK', 'Software Development Kit', 'TenantContext', 'V2024TenantContext']
---

# TenantContextAPI
  The purpose of this API is to manage key-value pairs specific to a tenant&#39;s context, enabling dynamic configuration and personalized settings per tenant.
Context key-value pairs will consist of common terms and acronyms used within your organization.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-context**](#get-tenant-context) | **Get** `/tenant-context` | Retrieve tenant context
[**patch-tenant-context**](#patch-tenant-context) | **Patch** `/tenant-context` | Update tenant context


## get-tenant-context
Retrieve tenant context
Returns all key-value pairs representing the current state of the tenant's context.
Each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-context-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantContextRequest struct via the builder pattern


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

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.TenantContextAPI.GetTenantContext(context.Background()).Execute()
	  //resp, r, err := apiClient.V2024.TenantContextAPI.GetTenantContext(context.Background()).Execute()
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
Update tenant context
Allows the user to make incremental updates to tenant context records using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

This endpoint is specifically designed to modify the `/Key/*` field, supporting operations such as `add`, `remove`, or `replace` to manage key-value pairs. 

Note that each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/patch-tenant-context-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchTenantContextRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    jsonpatchoperation := []byte(`{
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        }`) // JsonPatchOperation | 

    var jsonPatchOperation v2024.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.TenantContextAPI.PatchTenantContext(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	  //r, err := apiClient.V2024.TenantContextAPI.PatchTenantContext(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TenantContextAPI.PatchTenantContext``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)


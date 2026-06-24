---
id: v2026-jit-access
title: JITAccess
pagination_label: JITAccess
sidebar_label: JITAccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'JITAccess', 'V2026JITAccess'] 
slug: /tools/sdk/go/v2026/methods/jit-access
tags: ['SDK', 'Software Development Kit', 'JITAccess', 'V2026JITAccess']
---

# JITAccessAPI
  Use these APIs to configure JIT provisioning activation policy for the tenant.
OAuth scopes: **idn:jit-policy:read** and **idn:jit-policy:manage** (get config), **idn:jit-policy:update** and **idn:jit-policy:manage** (update config). JIT activation workflow APIs use **idn:jit-activation-workflow:*** scopes (activate, extend, deactivate, manage, and **idn:jit-activation-workflow-internal:manage**).
For REST contract details, use the JIT Access operations in this specification and the [SailPoint API documentation](https://developer.sailpoint.com/idn/api/).
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2026*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-jit-activation-config**](#get-jit-activation-config) | **Get** `/jit-activation-config/{configType}` | Get JIT activation policy configuration
[**patch-jit-activation-config**](#patch-jit-activation-config) | **Patch** `/jit-activation-config/{configType}` | Update JIT activation policy configuration


## get-jit-activation-config
Get JIT activation policy configuration
Returns the tenant's current JIT activation policy configuration, including governed entitlement IDs, activation and extension time limits, default periods, notification settings, and whether the policy applies to future assignments.

The tenant comes from the authenticated request context (not the URL). Use **configType** to select which configuration to read. Returns **404** if that configuration has not been stored yet.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-jit-activation-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configType** | **string** | Configuration kind to read. Only **policy** (JIT activation policy) is supported today.  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetJitActivationConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**JITActivationConfigResponse**](../models/jit-activation-config-response)

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
    configType := `policy` // string | Configuration kind to read. Only **policy** (JIT activation policy) is supported today.  # string | Configuration kind to read. Only **policy** (JIT activation policy) is supported today. 

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.JITAccessAPI.GetJitActivationConfig(context.Background(), configType).Execute()
	  //resp, r, err := apiClient.V2026.JITAccessAPI.GetJitActivationConfig(context.Background(), configType).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITAccessAPI.GetJitActivationConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetJitActivationConfig`: JITActivationConfigResponse
    fmt.Fprintf(os.Stdout, "Response from `JITAccessAPI.GetJitActivationConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-jit-activation-config
Update JIT activation policy configuration
Updates the tenant's JIT activation policy configuration by applying one or more **replace** operations (same shape as JSON Patch: **op**, **path**, **value**). Use this to change entitlement lists, max/default activation and extension durations, notification recipients or template, and the apply-to-future-assignments flag.

The body must be a non-empty array. Only **replace** is supported; each **path** must be one of the values documented on the request item schema. The tenant is taken from the request context. **configType** selects which configuration to update. Returns **404** if the configuration does not exist, or **400** for an empty body, unknown **configType**, or invalid path/value.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/v2026/patch-jit-activation-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configType** | **string** | Configuration kind to update. Only **policy** (JIT activation policy) is supported today.  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchJitActivationConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jitAccessOperationRequest** | [**[]JitAccessOperationRequest**](../models/jit-access-operation-request) |  | 

### Return type

[**JITActivationConfigResponse**](../models/jit-activation-config-response)

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
    configType := `policy` // string | Configuration kind to update. Only **policy** (JIT activation policy) is supported today.  # string | Configuration kind to update. Only **policy** (JIT activation policy) is supported today. 
    jitaccessoperationrequest := []byte(``) // []JitAccessOperationRequest | 

    var jitAccessOperationRequest []v2026.JitAccessOperationRequest
    if err := json.Unmarshal(jitaccessoperationrequest, &jitAccessOperationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.JITAccessAPI.PatchJitActivationConfig(context.Background(), configType).JitAccessOperationRequest(jitAccessOperationRequest).Execute()
	  //resp, r, err := apiClient.V2026.JITAccessAPI.PatchJitActivationConfig(context.Background(), configType).JitAccessOperationRequest(jitAccessOperationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITAccessAPI.PatchJitActivationConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchJitActivationConfig`: JITActivationConfigResponse
    fmt.Fprintf(os.Stdout, "Response from `JITAccessAPI.PatchJitActivationConfig`: %v\n", resp)
}
```

[[Back to top]](#)


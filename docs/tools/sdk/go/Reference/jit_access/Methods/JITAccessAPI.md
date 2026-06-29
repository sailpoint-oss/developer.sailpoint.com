---
id: v1-jit-access
title: JITAccess
pagination_label: JITAccess
sidebar_label: JITAccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'JITAccess', 'V1JITAccess'] 
slug: /tools/sdk/go/jitaccess/methods/jit-access
tags: ['SDK', 'Software Development Kit', 'JITAccess', 'V1JITAccess']
---

# JITAccessAPI
  Use these APIs to configure JIT provisioning activation policy for the tenant.
OAuth scopes: **idn:jit-policy:read** and **idn:jit-policy:manage** (get config), **idn:jit-policy:update** and **idn:jit-policy:manage** (update config). JIT activation workflow APIs use **idn:jit-activation-workflow:*** scopes (activate, extend, deactivate, manage, and **idn:jit-activation-workflow-internal:manage**).
For REST contract details, use the JIT Access operations in this specification and the [SailPoint API documentation](https://developer.sailpoint.com/idn/api/).
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-jit-activation-config-v1**](#get-jit-activation-config-v1) | **Get** `/jit-activation-config/v1/{configType}` | Get JIT activation policy configuration
[**patch-jit-activation-config-v1**](#patch-jit-activation-config-v1) | **Patch** `/jit-activation-config/v1/{configType}` | Update JIT activation policy configuration


## get-jit-activation-config-v1
Get JIT activation policy configuration
Returns the tenant's current JIT activation policy configuration, including governed entitlement IDs, activation and extension time limits, default periods, notification settings, and whether the policy applies to future assignments.

The tenant comes from the authenticated request context (not the URL). Use **configType** to select which configuration to read. Returns **404** if that configuration has not been stored yet.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-jit-activation-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configType** | **string** | Configuration kind to read. Only **policy** (JIT activation policy) is supported today.  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetJitActivationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Jitactivationconfigresponse**](../models/jitactivationconfigresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/jit_access"
)

func main() {
    configType := `policy` // string | Configuration kind to read. Only **policy** (JIT activation policy) is supported today.  # string | Configuration kind to read. Only **policy** (JIT activation policy) is supported today. 

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.JITAccessAPI.GetJitActivationConfigV1(context.Background(), configType).Execute()
	  //resp, r, err := apiClient.JITAccessAPI.GetJitActivationConfigV1(context.Background(), configType).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITAccessAPI.GetJitActivationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetJitActivationConfigV1`: Jitactivationconfigresponse
    fmt.Fprintf(os.Stdout, "Response from `JITAccessAPI.GetJitActivationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-jit-activation-config-v1
Update JIT activation policy configuration
Updates the tenant's JIT activation policy configuration by applying one or more **replace** operations (same shape as JSON Patch: **op**, **path**, **value**). Use this to change entitlement lists, max/default activation and extension durations, notification recipients or template, and the apply-to-future-assignments flag.

The body must be a non-empty array. Only **replace** is supported; each **path** must be one of the values documented on the request item schema. The tenant is taken from the request context. **configType** selects which configuration to update. Returns **404** if the configuration does not exist, or **400** for an empty body, unknown **configType**, or invalid path/value.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-jit-activation-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configType** | **string** | Configuration kind to update. Only **policy** (JIT activation policy) is supported today.  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchJitActivationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jitaccessoperationrequest** | [**[]Jitaccessoperationrequest**](../models/jitaccessoperationrequest) |  | 

### Return type

[**Jitactivationconfigresponse**](../models/jitactivationconfigresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/jit_access"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/jit_access"
)

func main() {
    configType := `policy` // string | Configuration kind to update. Only **policy** (JIT activation policy) is supported today.  # string | Configuration kind to update. Only **policy** (JIT activation policy) is supported today. 
    jitaccessoperationrequest := []byte(``) // []Jitaccessoperationrequest | 

    var jitaccessoperationrequest []v1.Jitaccessoperationrequest
    if err := json.Unmarshal(jitaccessoperationrequest, &jitaccessoperationrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.JITAccessAPI.PatchJitActivationConfigV1(context.Background(), configType).Jitaccessoperationrequest(jitaccessoperationrequest).Execute()
	  //resp, r, err := apiClient.JITAccessAPI.PatchJitActivationConfigV1(context.Background(), configType).Jitaccessoperationrequest(jitaccessoperationrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITAccessAPI.PatchJitActivationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchJitActivationConfigV1`: Jitactivationconfigresponse
    fmt.Fprintf(os.Stdout, "Response from `JITAccessAPI.PatchJitActivationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)


---
id: v2026-jit-activations
title: JITActivations
pagination_label: JITActivations
sidebar_label: JITActivations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'JITActivations', 'V2026JITActivations'] 
slug: /tools/sdk/go/v2026/methods/jit-activations
tags: ['SDK', 'Software Development Kit', 'JITActivations', 'V2026JITActivations']
---

# JITActivationsAPI
  Use this API to start and manage Just-In-Time (JIT) Privileged activation workflows for entitlement connections.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2026*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-activate-workflow**](#start-activate-workflow) | **Post** `/jit-activations/activate` | Start JIT activation workflow
[**start-deactivate-workflow**](#start-deactivate-workflow) | **Post** `/jit-activations/deactivate` | Deactivate JIT activation workflow
[**start-extend-workflow**](#start-extend-workflow) | **Post** `/jit-activations/extend` | Extend JIT activation workflow


## start-activate-workflow
Start JIT activation workflow
Starts a JIT Privileged (JIT P) activation workflow for the given entitlement connection and duration.
The service performs quick validation; the workflow performs additional validation.

The response is returned with HTTP 202 Accepted while the workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/start-activate-workflow)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartActivateWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jitActivationActivateRequest** | [**JitActivationActivateRequest**](../models/jit-activation-activate-request) |  | 

### Return type

[**JitActivationActivateResponse**](../models/jit-activation-activate-response)

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
    jitactivationactivaterequest := []byte(`{
          "activationPeriodMins" : 120,
          "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
        }`) // JitActivationActivateRequest | 

    var jitActivationActivateRequest v2026.JitActivationActivateRequest
    if err := json.Unmarshal(jitactivationactivaterequest, &jitActivationActivateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.JITActivationsAPI.StartActivateWorkflow(context.Background()).JitActivationActivateRequest(jitActivationActivateRequest).Execute()
	  //resp, r, err := apiClient.V2026.JITActivationsAPI.StartActivateWorkflow(context.Background()).JitActivationActivateRequest(jitActivationActivateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationsAPI.StartActivateWorkflow``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartActivateWorkflow`: JitActivationActivateResponse
    fmt.Fprintf(os.Stdout, "Response from `JITActivationsAPI.StartActivateWorkflow`: %v\n", resp)
}
```

[[Back to top]](#)

## start-deactivate-workflow
Deactivate JIT activation workflow
Sends a signal to a running JIT Privileged (JIT P) activation workflow to deactivate.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/start-deactivate-workflow)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartDeactivateWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jitActivationDeactivateRequest** | [**JitActivationDeactivateRequest**](../models/jit-activation-deactivate-request) |  | 

### Return type

[**JitActivationDeactivateResponse**](../models/jit-activation-deactivate-response)

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
    jitactivationdeactivaterequest := []byte(`{
          "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
        }`) // JitActivationDeactivateRequest | 

    var jitActivationDeactivateRequest v2026.JitActivationDeactivateRequest
    if err := json.Unmarshal(jitactivationdeactivaterequest, &jitActivationDeactivateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.JITActivationsAPI.StartDeactivateWorkflow(context.Background()).JitActivationDeactivateRequest(jitActivationDeactivateRequest).Execute()
	  //resp, r, err := apiClient.V2026.JITActivationsAPI.StartDeactivateWorkflow(context.Background()).JitActivationDeactivateRequest(jitActivationDeactivateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationsAPI.StartDeactivateWorkflow``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartDeactivateWorkflow`: JitActivationDeactivateResponse
    fmt.Fprintf(os.Stdout, "Response from `JITActivationsAPI.StartDeactivateWorkflow`: %v\n", resp)
}
```

[[Back to top]](#)

## start-extend-workflow
Extend JIT activation workflow
Sends a signal to a running JIT Privileged (JIT P) activation workflow to extend the activation period
by the requested number of minutes.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/start-extend-workflow)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartExtendWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jitActivationExtendRequest** | [**JitActivationExtendRequest**](../models/jit-activation-extend-request) |  | 

### Return type

[**JitActivationExtendResponse**](../models/jit-activation-extend-response)

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
    jitactivationextendrequest := []byte(`{
          "activationPeriodExtensionMins" : 120,
          "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
        }`) // JitActivationExtendRequest | 

    var jitActivationExtendRequest v2026.JitActivationExtendRequest
    if err := json.Unmarshal(jitactivationextendrequest, &jitActivationExtendRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.JITActivationsAPI.StartExtendWorkflow(context.Background()).JitActivationExtendRequest(jitActivationExtendRequest).Execute()
	  //resp, r, err := apiClient.V2026.JITActivationsAPI.StartExtendWorkflow(context.Background()).JitActivationExtendRequest(jitActivationExtendRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationsAPI.StartExtendWorkflow``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartExtendWorkflow`: JitActivationExtendResponse
    fmt.Fprintf(os.Stdout, "Response from `JITActivationsAPI.StartExtendWorkflow`: %v\n", resp)
}
```

[[Back to top]](#)


---
id: v1-jit-activations
title: JITActivations
pagination_label: JITActivations
sidebar_label: JITActivations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'JITActivations', 'V1JITActivations'] 
slug: /tools/sdk/go/jitactivations/methods/jit-activations
tags: ['SDK', 'Software Development Kit', 'JITActivations', 'V1JITActivations']
---

# JITActivationsAPI
  Use this API to start and manage Just-In-Time (JIT) Privileged activation workflows for entitlement connections.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-activate-workflow-v1**](#start-activate-workflow-v1) | **Post** `/jit-activations/v1/activate` | Start JIT activation workflow
[**start-deactivate-workflow-v1**](#start-deactivate-workflow-v1) | **Post** `/jit-activations/v1/deactivate` | Deactivate JIT activation workflow
[**start-extend-workflow-v1**](#start-extend-workflow-v1) | **Post** `/jit-activations/v1/extend` | Extend JIT activation workflow


## start-activate-workflow-v1
Start JIT activation workflow
Starts a JIT Privileged (JIT P) activation workflow for the given entitlement connection and duration.
The service performs quick validation; the workflow performs additional validation.

The response is returned with HTTP 202 Accepted while the workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-activate-workflow-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartActivateWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jitactivationactivaterequest** | [**Jitactivationactivaterequest**](../models/jitactivationactivaterequest) |  | 

### Return type

[**Jitactivationactivateresponse**](../models/jitactivationactivateresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/jit_activations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/jit_activations"
)

func main() {
    jitactivationactivaterequest := []byte(``) // Jitactivationactivaterequest | 

    var jitactivationactivaterequest v1.Jitactivationactivaterequest
    if err := json.Unmarshal(jitactivationactivaterequest, &jitactivationactivaterequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.JITActivationsAPI.StartActivateWorkflowV1(context.Background()).Jitactivationactivaterequest(jitactivationactivaterequest).Execute()
	  //resp, r, err := apiClient.JITActivationsAPI.StartActivateWorkflowV1(context.Background()).Jitactivationactivaterequest(jitactivationactivaterequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationsAPI.StartActivateWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartActivateWorkflowV1`: Jitactivationactivateresponse
    fmt.Fprintf(os.Stdout, "Response from `JITActivationsAPI.StartActivateWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-deactivate-workflow-v1
Deactivate JIT activation workflow
Sends a signal to a running JIT Privileged (JIT P) activation workflow to deactivate.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-deactivate-workflow-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartDeactivateWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jitactivationdeactivaterequest** | [**Jitactivationdeactivaterequest**](../models/jitactivationdeactivaterequest) |  | 

### Return type

[**Jitactivationdeactivateresponse**](../models/jitactivationdeactivateresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/jit_activations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/jit_activations"
)

func main() {
    jitactivationdeactivaterequest := []byte(``) // Jitactivationdeactivaterequest | 

    var jitactivationdeactivaterequest v1.Jitactivationdeactivaterequest
    if err := json.Unmarshal(jitactivationdeactivaterequest, &jitactivationdeactivaterequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.JITActivationsAPI.StartDeactivateWorkflowV1(context.Background()).Jitactivationdeactivaterequest(jitactivationdeactivaterequest).Execute()
	  //resp, r, err := apiClient.JITActivationsAPI.StartDeactivateWorkflowV1(context.Background()).Jitactivationdeactivaterequest(jitactivationdeactivaterequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationsAPI.StartDeactivateWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartDeactivateWorkflowV1`: Jitactivationdeactivateresponse
    fmt.Fprintf(os.Stdout, "Response from `JITActivationsAPI.StartDeactivateWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-extend-workflow-v1
Extend JIT activation workflow
Sends a signal to a running JIT Privileged (JIT P) activation workflow to extend the activation period
by the requested number of minutes.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-extend-workflow-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartExtendWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jitactivationextendrequest** | [**Jitactivationextendrequest**](../models/jitactivationextendrequest) |  | 

### Return type

[**Jitactivationextendresponse**](../models/jitactivationextendresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/jit_activations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/jit_activations"
)

func main() {
    jitactivationextendrequest := []byte(``) // Jitactivationextendrequest | 

    var jitactivationextendrequest v1.Jitactivationextendrequest
    if err := json.Unmarshal(jitactivationextendrequest, &jitactivationextendrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.JITActivationsAPI.StartExtendWorkflowV1(context.Background()).Jitactivationextendrequest(jitactivationextendrequest).Execute()
	  //resp, r, err := apiClient.JITActivationsAPI.StartExtendWorkflowV1(context.Background()).Jitactivationextendrequest(jitactivationextendrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationsAPI.StartExtendWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartExtendWorkflowV1`: Jitactivationextendresponse
    fmt.Fprintf(os.Stdout, "Response from `JITActivationsAPI.StartExtendWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)


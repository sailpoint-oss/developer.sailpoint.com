---
id: v1-jit-activations
title: JITActivations
pagination_label: JITActivations
sidebar_label: JITActivations
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'JITActivations', 'v1JITActivations']
slug: /tools/sdk/typescript/jit_activations/methods/jit-activations
tags: ['SDK', 'Software Development Kit', 'JITActivations', 'v1JITActivations']
---

# JITActivationsV1Api
  Use this API to start and manage Just-In-Time (JIT) Privileged activation workflows for entitlement connections.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-activate-workflow-v1**](#start-activate-workflow-v1) | **POST** `/jit-activations/v1/activate` | Start JIT activation workflow
[**start-deactivate-workflow-v1**](#start-deactivate-workflow-v1) | **POST** `/jit-activations/v1/deactivate` | Deactivate JIT activation workflow
[**start-extend-workflow-v1**](#start-extend-workflow-v1) | **POST** `/jit-activations/v1/extend` | Extend JIT activation workflow


## start-activate-workflow-v1
Start JIT activation workflow
Starts a JIT Privileged (JIT P) activation workflow for the given entitlement connection and duration.
The service performs quick validation; the workflow performs additional validation.

The response is returned with HTTP 202 Accepted while the workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-activate-workflow-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jitactivationactivaterequestV1** | `JitactivationactivaterequestV1` |  | 

### Return type

`JitactivationactivateresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { JITActivationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new JITActivationsV1Api(configuration);
const jitactivationactivaterequestV1: JitactivationactivaterequestV1 = ; // 
const result = await apiInstance.startActivateWorkflowV1({ jitactivationactivaterequestV1: jitactivationactivaterequestV1 });
console.log(result);
```

[[Back to top]](#)

## start-deactivate-workflow-v1
Deactivate JIT activation workflow
Sends a signal to a running JIT Privileged (JIT P) activation workflow to deactivate.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-deactivate-workflow-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jitactivationdeactivaterequestV1** | `JitactivationdeactivaterequestV1` |  | 

### Return type

`JitactivationdeactivateresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { JITActivationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new JITActivationsV1Api(configuration);
const jitactivationdeactivaterequestV1: JitactivationdeactivaterequestV1 = ; // 
const result = await apiInstance.startDeactivateWorkflowV1({ jitactivationdeactivaterequestV1: jitactivationdeactivaterequestV1 });
console.log(result);
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jitactivationextendrequestV1** | `JitactivationextendrequestV1` |  | 

### Return type

`JitactivationextendresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { JITActivationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new JITActivationsV1Api(configuration);
const jitactivationextendrequestV1: JitactivationextendrequestV1 = ; // 
const result = await apiInstance.startExtendWorkflowV1({ jitactivationextendrequestV1: jitactivationextendrequestV1 });
console.log(result);
```

[[Back to top]](#)


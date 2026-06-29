---
id: jit-activations
title: JITActivations
pagination_label: JITActivations
sidebar_label: JITActivations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'JITActivations', 'JITActivations'] 
slug: /tools/sdk/powershell/jitactivations/methods/jit-activations
tags: ['SDK', 'Software Development Kit', 'JITActivations', 'JITActivations']
---

# JITActivations
  Use this API to start and manage Just-In-Time (JIT) Privileged activation workflows for entitlement connections.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Start-ActivateWorkflowV1**](#start-activate-workflow-v1) | **POST** `/jit-activations/v1/activate` | Start JIT activation workflow
[**Start-DeactivateWorkflowV1**](#start-deactivate-workflow-v1) | **POST** `/jit-activations/v1/deactivate` | Deactivate JIT activation workflow
[**Start-ExtendWorkflowV1**](#start-extend-workflow-v1) | **POST** `/jit-activations/v1/extend` | Extend JIT activation workflow


## start-activate-workflow-v1
Starts a JIT Privileged (JIT P) activation workflow for the given entitlement connection and duration.
The service performs quick validation; the workflow performs additional validation.

The response is returned with HTTP 202 Accepted while the workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-activate-workflow-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Jitactivationactivaterequest | [**Jitactivationactivaterequest**](../models/jitactivationactivaterequest) | True  | 

### Return type
[**Jitactivationactivateresponse**](../models/jitactivationactivateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. The activation workflow was accepted and is running.  | Jitactivationactivateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartActivateWorkflowV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartActivateWorkflowV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Jitactivationactivaterequest = @""@

# Start JIT activation workflow

try {
    $Result = ConvertFrom-JsonToJitactivationactivaterequest -Json $Jitactivationactivaterequest
    Start-ActivateWorkflowV1 -Jitactivationactivaterequest $Result 
    
    # Below is a request that includes all optional parameters
    # Start-ActivateWorkflowV1 -Jitactivationactivaterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-ActivateWorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-deactivate-workflow-v1
Sends a signal to a running JIT Privileged (JIT P) activation workflow to deactivate.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-deactivate-workflow-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Jitactivationdeactivaterequest | [**Jitactivationdeactivaterequest**](../models/jitactivationdeactivaterequest) | True  | 

### Return type
[**Jitactivationdeactivateresponse**](../models/jitactivationdeactivateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. The deactivation signal was sent to the workflow.  | Jitactivationdeactivateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartActivateWorkflowV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartActivateWorkflowV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Jitactivationdeactivaterequest = @""@

# Deactivate JIT activation workflow

try {
    $Result = ConvertFrom-JsonToJitactivationdeactivaterequest -Json $Jitactivationdeactivaterequest
    Start-DeactivateWorkflowV1 -Jitactivationdeactivaterequest $Result 
    
    # Below is a request that includes all optional parameters
    # Start-DeactivateWorkflowV1 -Jitactivationdeactivaterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-DeactivateWorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-extend-workflow-v1
Sends a signal to a running JIT Privileged (JIT P) activation workflow to extend the activation period
by the requested number of minutes.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-extend-workflow-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Jitactivationextendrequest | [**Jitactivationextendrequest**](../models/jitactivationextendrequest) | True  | 

### Return type
[**Jitactivationextendresponse**](../models/jitactivationextendresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. The extend signal was sent to the workflow.  | Jitactivationextendresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartActivateWorkflowV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartActivateWorkflowV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Jitactivationextendrequest = @""@

# Extend JIT activation workflow

try {
    $Result = ConvertFrom-JsonToJitactivationextendrequest -Json $Jitactivationextendrequest
    Start-ExtendWorkflowV1 -Jitactivationextendrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Start-ExtendWorkflowV1 -Jitactivationextendrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-ExtendWorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

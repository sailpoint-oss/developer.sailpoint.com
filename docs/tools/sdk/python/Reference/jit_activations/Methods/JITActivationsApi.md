---
id: jit-activations
title: JIT_Activations
pagination_label: JIT_Activations
sidebar_label: JIT_Activations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'JIT_Activations', 'JIT_Activations'] 
slug: /tools/sdk/python/jit-activations/methods/jit-activations
tags: ['SDK', 'Software Development Kit', 'JIT_Activations', 'JIT_Activations']
---

# sailpoint.jit_activations.JITActivationsApi
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

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | jitactivationactivaterequest | [**Jitactivationactivaterequest**](../models/jitactivationactivaterequest) | True  | 

### Return type
[**Jitactivationactivateresponse**](../models/jitactivationactivateresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. The activation workflow was accepted and is running.  | Jitactivationactivateresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartActivateWorkflowV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartActivateWorkflowV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.jit_activations.api.jit_activations_api import JITActivationsApi
from sailpoint.jit_activations.api_client import ApiClient
from sailpoint.jit_activations.models.jitactivationactivaterequest import Jitactivationactivaterequest
from sailpoint.jit_activations.models.jitactivationactivateresponse import Jitactivationactivateresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    jitactivationactivaterequest = '''sailpoint.jit_activations.Jitactivationactivaterequest()''' # Jitactivationactivaterequest | 

    try:
        # Start JIT activation workflow
        new_jitactivationactivaterequest = Jitactivationactivaterequest.from_json(jitactivationactivaterequest)
        results = JITActivationsApi(api_client).start_activate_workflow_v1(jitactivationactivaterequest=new_jitactivationactivaterequest)
        # Below is a request that includes all optional parameters
        # results = JITActivationsApi(api_client).start_activate_workflow_v1(new_jitactivationactivaterequest)
        print("The response of JITActivationsApi->start_activate_workflow_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling JITActivationsApi->start_activate_workflow_v1: %s\n" % e)
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

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | jitactivationdeactivaterequest | [**Jitactivationdeactivaterequest**](../models/jitactivationdeactivaterequest) | True  | 

### Return type
[**Jitactivationdeactivateresponse**](../models/jitactivationdeactivateresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. The deactivation signal was sent to the workflow.  | Jitactivationdeactivateresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartActivateWorkflowV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartActivateWorkflowV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.jit_activations.api.jit_activations_api import JITActivationsApi
from sailpoint.jit_activations.api_client import ApiClient
from sailpoint.jit_activations.models.jitactivationdeactivaterequest import Jitactivationdeactivaterequest
from sailpoint.jit_activations.models.jitactivationdeactivateresponse import Jitactivationdeactivateresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    jitactivationdeactivaterequest = '''sailpoint.jit_activations.Jitactivationdeactivaterequest()''' # Jitactivationdeactivaterequest | 

    try:
        # Deactivate JIT activation workflow
        new_jitactivationdeactivaterequest = Jitactivationdeactivaterequest.from_json(jitactivationdeactivaterequest)
        results = JITActivationsApi(api_client).start_deactivate_workflow_v1(jitactivationdeactivaterequest=new_jitactivationdeactivaterequest)
        # Below is a request that includes all optional parameters
        # results = JITActivationsApi(api_client).start_deactivate_workflow_v1(new_jitactivationdeactivaterequest)
        print("The response of JITActivationsApi->start_deactivate_workflow_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling JITActivationsApi->start_deactivate_workflow_v1: %s\n" % e)
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

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | jitactivationextendrequest | [**Jitactivationextendrequest**](../models/jitactivationextendrequest) | True  | 

### Return type
[**Jitactivationextendresponse**](../models/jitactivationextendresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. The extend signal was sent to the workflow.  | Jitactivationextendresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartActivateWorkflowV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartActivateWorkflowV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.jit_activations.api.jit_activations_api import JITActivationsApi
from sailpoint.jit_activations.api_client import ApiClient
from sailpoint.jit_activations.models.jitactivationextendrequest import Jitactivationextendrequest
from sailpoint.jit_activations.models.jitactivationextendresponse import Jitactivationextendresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    jitactivationextendrequest = '''sailpoint.jit_activations.Jitactivationextendrequest()''' # Jitactivationextendrequest | 

    try:
        # Extend JIT activation workflow
        new_jitactivationextendrequest = Jitactivationextendrequest.from_json(jitactivationextendrequest)
        results = JITActivationsApi(api_client).start_extend_workflow_v1(jitactivationextendrequest=new_jitactivationextendrequest)
        # Below is a request that includes all optional parameters
        # results = JITActivationsApi(api_client).start_extend_workflow_v1(new_jitactivationextendrequest)
        print("The response of JITActivationsApi->start_extend_workflow_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling JITActivationsApi->start_extend_workflow_v1: %s\n" % e)
```



[[Back to top]](#) 




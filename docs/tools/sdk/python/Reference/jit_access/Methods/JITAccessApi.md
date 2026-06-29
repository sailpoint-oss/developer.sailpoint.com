---
id: jit-access
title: JIT_Access
pagination_label: JIT_Access
sidebar_label: JIT_Access
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'JIT_Access', 'JIT_Access'] 
slug: /tools/sdk/python/jit-access/methods/jit-access
tags: ['SDK', 'Software Development Kit', 'JIT_Access', 'JIT_Access']
---

# sailpoint.jit_access.JITAccessApi
  Use these APIs to configure JIT provisioning activation policy for the tenant.
OAuth scopes: **idn:jit-policy:read** and **idn:jit-policy:manage** (get config), **idn:jit-policy:update** and **idn:jit-policy:manage** (update config). JIT activation workflow APIs use **idn:jit-activation-workflow:*** scopes (activate, extend, deactivate, manage, and **idn:jit-activation-workflow-internal:manage**).
For REST contract details, use the JIT Access operations in this specification and the [SailPoint API documentation](https://developer.sailpoint.com/idn/api/).
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-jit-activation-config-v1**](#get-jit-activation-config-v1) | **GET** `/jit-activation-config/v1/{configType}` | Get JIT activation policy configuration
[**patch-jit-activation-config-v1**](#patch-jit-activation-config-v1) | **PATCH** `/jit-activation-config/v1/{configType}` | Update JIT activation policy configuration


## get-jit-activation-config-v1
Get JIT activation policy configuration
Returns the tenant's current JIT activation policy configuration, including governed entitlement IDs, activation and extension time limits, default periods, notification settings, and whether the policy applies to future assignments.

The tenant comes from the authenticated request context (not the URL). Use **configType** to select which configuration to read. Returns **404** if that configuration has not been stored yet.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-jit-activation-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | config_type | **str** | True  | Configuration kind to read. Only **policy** (JIT activation policy) is supported today. 

### Return type
[**Jitactivationconfigresponse**](../models/jitactivationconfigresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Current JIT activation policy configuration, including limits, entitlements in scope, and notification-related fields. | Jitactivationconfigresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetJitActivationConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetJitActivationConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.jit_access.api.jit_access_api import JITAccessApi
from sailpoint.jit_access.api_client import ApiClient
from sailpoint.jit_access.models.jitactivationconfigresponse import Jitactivationconfigresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    config_type = 'policy' # str | Configuration kind to read. Only **policy** (JIT activation policy) is supported today.  # str | Configuration kind to read. Only **policy** (JIT activation policy) is supported today. 

    try:
        # Get JIT activation policy configuration
        
        results = JITAccessApi(api_client).get_jit_activation_config_v1(config_type=config_type)
        # Below is a request that includes all optional parameters
        # results = JITAccessApi(api_client).get_jit_activation_config_v1(config_type)
        print("The response of JITAccessApi->get_jit_activation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling JITAccessApi->get_jit_activation_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-jit-activation-config-v1
Update JIT activation policy configuration
Updates the tenant's JIT activation policy configuration by applying one or more **replace** operations (same shape as JSON Patch: **op**, **path**, **value**). Use this to change entitlement lists, max/default activation and extension durations, notification recipients or template, and the apply-to-future-assignments flag.

The body must be a non-empty array. Only **replace** is supported; each **path** must be one of the values documented on the request item schema. The tenant is taken from the request context. **configType** selects which configuration to update. Returns **404** if the configuration does not exist, or **400** for an empty body, unknown **configType**, or invalid path/value.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-jit-activation-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | config_type | **str** | True  | Configuration kind to update. Only **policy** (JIT activation policy) is supported today. 
 Body  | jitaccessoperationrequest | [**[]Jitaccessoperationrequest**](../models/jitaccessoperationrequest) | True  | 

### Return type
[**Jitactivationconfigresponse**](../models/jitactivationconfigresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Full JIT activation policy configuration after applying all requested replace operations. | Jitactivationconfigresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetJitActivationConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetJitActivationConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.jit_access.api.jit_access_api import JITAccessApi
from sailpoint.jit_access.api_client import ApiClient
from sailpoint.jit_access.models.jitaccessoperationrequest import Jitaccessoperationrequest
from sailpoint.jit_access.models.jitactivationconfigresponse import Jitactivationconfigresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    config_type = 'policy' # str | Configuration kind to update. Only **policy** (JIT activation policy) is supported today.  # str | Configuration kind to update. Only **policy** (JIT activation policy) is supported today. 
    jitaccessoperationrequest = '''[sailpoint.jit_access.Jitaccessoperationrequest()]''' # List[Jitaccessoperationrequest] | 

    try:
        # Update JIT activation policy configuration
        new_jitaccessoperationrequest = Jitaccessoperationrequest.from_json(jitaccessoperationrequest)
        results = JITAccessApi(api_client).patch_jit_activation_config_v1(config_type=config_type, jitaccessoperationrequest=new_jitaccessoperationrequest)
        # Below is a request that includes all optional parameters
        # results = JITAccessApi(api_client).patch_jit_activation_config_v1(config_type, new_jitaccessoperationrequest)
        print("The response of JITAccessApi->patch_jit_activation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling JITAccessApi->patch_jit_activation_config_v1: %s\n" % e)
```



[[Back to top]](#) 




---
id: tenant-context
title: Tenant_Context
pagination_label: Tenant_Context
sidebar_label: Tenant_Context
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tenant_Context', 'Tenant_Context'] 
slug: /tools/sdk/python/tenant-context/methods/tenant-context
tags: ['SDK', 'Software Development Kit', 'Tenant_Context', 'Tenant_Context']
---

# sailpoint.tenant_context.TenantContextApi
  The purpose of this API is to manage key-value pairs specific to a tenant&#39;s context, enabling dynamic configuration and personalized settings per tenant.
Context key-value pairs will consist of common terms and acronyms used within your organization.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-context-v1**](#get-tenant-context-v1) | **GET** `/tenant-context/v1` | Retrieve tenant context
[**patch-tenant-context-v1**](#patch-tenant-context-v1) | **PATCH** `/tenant-context/v1` | Update tenant context


## get-tenant-context-v1
Retrieve tenant context
Returns all key-value pairs representing the current state of the tenant's context.
Each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tenant-context-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[GetTenantContextV1200ResponseInner]**](../models/get-tenant-context-v1200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully retrieved tenant context. | List[GetTenantContextV1200ResponseInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTenantContextV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTenantContextV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.tenant_context.api.tenant_context_api import TenantContextApi
from sailpoint.tenant_context.api_client import ApiClient
from sailpoint.tenant_context.models.get_tenant_context_v1200_response_inner import GetTenantContextV1200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Retrieve tenant context
        
        results = TenantContextApi(api_client).get_tenant_context_v1()
        # Below is a request that includes all optional parameters
        # results = TenantContextApi(api_client).get_tenant_context_v1()
        print("The response of TenantContextApi->get_tenant_context_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TenantContextApi->get_tenant_context_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-tenant-context-v1
Update tenant context
Allows the user to make incremental updates to tenant context records using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

This endpoint is specifically designed to modify the `/Key/*` field, supporting operations such as `add`, `remove`, or `replace` to manage key-value pairs. 

Note that each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-tenant-context-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | jsonpatchoperation | [**Jsonpatchoperation**](../models/jsonpatchoperation) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant context updated successfully. |  |  -  |
400 | Bad request due to invalid input parameters. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTenantContextV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTenantContextV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.tenant_context.api.tenant_context_api import TenantContextApi
from sailpoint.tenant_context.api_client import ApiClient
from sailpoint.tenant_context.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    jsonpatchoperation = '''[{"op":"add","path":"/Key/IAS","value":"Integrated Automation System"},{"op":"replace","path":"/Key/IAS","value":"International Accounting Standards"},{"op":"remove","path":"/Key/NDR"}]''' # Jsonpatchoperation | 

    try:
        # Update tenant context
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        TenantContextApi(api_client).patch_tenant_context_v1(jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # TenantContextApi(api_client).patch_tenant_context_v1(new_jsonpatchoperation)
    except Exception as e:
        print("Exception when calling TenantContextApi->patch_tenant_context_v1: %s\n" % e)
```



[[Back to top]](#) 




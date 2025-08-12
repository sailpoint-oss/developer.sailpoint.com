---
id: v2025-tenant-context
title: Tenant_Context
pagination_label: Tenant_Context
sidebar_label: Tenant_Context
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tenant_Context', 'V2025Tenant_Context'] 
slug: /tools/sdk/python/v2025/methods/tenant-context
tags: ['SDK', 'Software Development Kit', 'Tenant_Context', 'V2025Tenant_Context']
---

# sailpoint.v2025.TenantContextApi
  The purpose of this API is to manage key-value pairs specific to a tenant&#39;s context, enabling dynamic configuration and personalized settings per tenant.
Context key-value pairs will consist of common terms and acronyms used within your organization.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-context**](#get-tenant-context) | **GET** `/tenant-context` | Retrieve tenant context
[**patch-tenant-context**](#patch-tenant-context) | **PATCH** `/tenant-context` | Update tenant context


## get-tenant-context
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Retrieve tenant context
Returns a list of key-value pairs representing the current state of the tenant's context.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-tenant-context)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[GetTenantContext200ResponseInner]**](../models/get-tenant-context200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully retrieved tenant context. | List[GetTenantContext200ResponseInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.tenant_context_api import TenantContextApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.get_tenant_context200_response_inner import GetTenantContext200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Retrieve tenant context
        
        results = TenantContextApi(api_client).get_tenant_context(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = TenantContextApi(api_client).get_tenant_context(x_sail_point_experimental)
        print("The response of TenantContextApi->get_tenant_context:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TenantContextApi->get_tenant_context: %s\n" % e)
```



[[Back to top]](#) 

## patch-tenant-context
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update tenant context
Allows the user to make incremental updates to tenant context records using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

This endpoint is specifically designed to modify the `/Key/*` field, supporting operations such as `add`, `remove`, or `replace` to manage key-value pairs. 

Note that each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-tenant-context)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | json_patch_operation | [**JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant context updated successfully. |  |  -  |
400 | Bad request due to invalid input parameters. | ErrorResponseDto1 |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.tenant_context_api import TenantContextApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    json_patch_operation = '''{
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        }''' # JsonPatchOperation | 

    try:
        # Update tenant context
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        TenantContextApi(api_client).patch_tenant_context(x_sail_point_experimental=x_sail_point_experimental, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # TenantContextApi(api_client).patch_tenant_context(x_sail_point_experimental, new_json_patch_operation)
    except Exception as e:
        print("Exception when calling TenantContextApi->patch_tenant_context: %s\n" % e)
```



[[Back to top]](#) 




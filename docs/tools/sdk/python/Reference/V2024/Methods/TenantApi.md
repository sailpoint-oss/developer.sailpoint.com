---
id: v2024-tenant
title: Tenant
pagination_label: Tenant
sidebar_label: Tenant
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tenant', 'V2024Tenant'] 
slug: /tools/sdk/python/v2024/methods/tenant
tags: ['SDK', 'Software Development Kit', 'Tenant', 'V2024Tenant']
---

# sailpoint.v2024.TenantApi
  API for reading tenant details. 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant**](#get-tenant) | **GET** `/tenant` | Get Tenant Information.


## get-tenant
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Tenant Information.
This rest endpoint can be used to retrieve tenant details.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-tenant)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Tenant**](../models/tenant)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant Info | Tenant |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.tenant_api import TenantApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.tenant import Tenant
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get Tenant Information.
        
        results =TenantApi(api_client).get_tenant(x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = TenantApi(api_client).get_tenant(x_sail_point_experimental)
        print("The response of TenantApi->get_tenant:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling TenantApi->get_tenant: %s\n" % e)
```



[[Back to top]](#) 




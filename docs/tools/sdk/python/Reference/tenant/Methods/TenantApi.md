---
id: tenant
title: Tenant
pagination_label: Tenant
sidebar_label: Tenant
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tenant', 'Tenant'] 
slug: /tools/sdk/python/tenant/methods/tenant
tags: ['SDK', 'Software Development Kit', 'Tenant', 'Tenant']
---

# sailpoint.tenant.TenantApi
  API for reading tenant details. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-v1**](#get-tenant-v1) | **GET** `/tenant/v1` | Get tenant information.


## get-tenant-v1
Get tenant information.
This rest endpoint can be used to retrieve tenant details.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tenant-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Tenant**](../models/tenant)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant Info | Tenant |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTenantV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTenantV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.tenant.api.tenant_api import TenantApi
from sailpoint.tenant.api_client import ApiClient
from sailpoint.tenant.models.tenant import Tenant
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get tenant information.
        
        results = TenantApi(api_client).get_tenant_v1()
        # Below is a request that includes all optional parameters
        # results = TenantApi(api_client).get_tenant_v1()
        print("The response of TenantApi->get_tenant_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TenantApi->get_tenant_v1: %s\n" % e)
```



[[Back to top]](#) 




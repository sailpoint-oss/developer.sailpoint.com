---
id: v2025-ui-metadata
title: UI_Metadata
pagination_label: UI_Metadata
sidebar_label: UI_Metadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UI_Metadata', 'V2025UI_Metadata'] 
slug: /tools/sdk/python/v2025/methods/ui-metadata
tags: ['SDK', 'Software Development Kit', 'UI_Metadata', 'V2025UI_Metadata']
---

# sailpoint.v2025.UIMetadataApi
  API for managing UI Metadata. Use this API to manage metadata about your User Interface.
For example you can set the iFrameWhitelist parameter to permit another domain to encapsulate IDN within an iframe or set the usernameEmptyText to change the placeholder text for Username on your tenant&#39;s login screen. 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-ui-metadata**](#get-tenant-ui-metadata) | **GET** `/ui-metadata/tenant` | Get a tenant ui metadata
[**set-tenant-ui-metadata**](#set-tenant-ui-metadata) | **PUT** `/ui-metadata/tenant` | Update tenant ui metadata


## get-tenant-ui-metadata
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
Get a tenant ui metadata
This API endpoint retrieves UI metadata configured for your tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-tenant-ui-metadata)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**TenantUiMetadataItemResponse**](../models/tenant-ui-metadata-item-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A tenant UI metadata object | TenantUiMetadataItemResponse |  -  |
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
from sailpoint.v2025.api.ui_metadata_api import UIMetadataApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.tenant_ui_metadata_item_response import TenantUiMetadataItemResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get a tenant ui metadata
        
        results = UIMetadataApi(api_client).get_tenant_ui_metadata(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = UIMetadataApi(api_client).get_tenant_ui_metadata(x_sail_point_experimental)
        print("The response of UIMetadataApi->get_tenant_ui_metadata:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIMetadataApi->get_tenant_ui_metadata: %s\n" % e)
```



[[Back to top]](#) 

## set-tenant-ui-metadata
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
Update tenant ui metadata
This API endpoint updates UI metadata for your tenant. These changes may require up to 5 minutes to take effect on the UI.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/set-tenant-ui-metadata)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | tenant_ui_metadata_item_update_request | [**TenantUiMetadataItemUpdateRequest**](../models/tenant-ui-metadata-item-update-request) | True  | 

### Return type
[**TenantUiMetadataItemResponse**](../models/tenant-ui-metadata-item-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A tenant UI metadata object | TenantUiMetadataItemResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.ui_metadata_api import UIMetadataApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.tenant_ui_metadata_item_response import TenantUiMetadataItemResponse
from sailpoint.v2025.models.tenant_ui_metadata_item_update_request import TenantUiMetadataItemUpdateRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    tenant_ui_metadata_item_update_request = '''{
          "usernameEmptyText" : "Please provide your work email address...",
          "usernameLabel" : "Email",
          "iframeWhiteList" : "http://example.com http://example2.com"
        }''' # TenantUiMetadataItemUpdateRequest | 

    try:
        # Update tenant ui metadata
        new_tenant_ui_metadata_item_update_request = TenantUiMetadataItemUpdateRequest.from_json(tenant_ui_metadata_item_update_request)
        results = UIMetadataApi(api_client).set_tenant_ui_metadata(x_sail_point_experimental=x_sail_point_experimental, tenant_ui_metadata_item_update_request=new_tenant_ui_metadata_item_update_request)
        # Below is a request that includes all optional parameters
        # results = UIMetadataApi(api_client).set_tenant_ui_metadata(x_sail_point_experimental, new_tenant_ui_metadata_item_update_request)
        print("The response of UIMetadataApi->set_tenant_ui_metadata:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIMetadataApi->set_tenant_ui_metadata: %s\n" % e)
```



[[Back to top]](#) 




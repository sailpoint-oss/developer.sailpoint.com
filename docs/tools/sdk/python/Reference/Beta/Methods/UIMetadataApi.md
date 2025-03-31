---
id: beta-ui-metadata
title: UI_Metadata
pagination_label: UI_Metadata
sidebar_label: UI_Metadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UI_Metadata', 'BetaUI_Metadata'] 
slug: /tools/sdk/python/beta/methods/ui-metadata
tags: ['SDK', 'Software Development Kit', 'UI_Metadata', 'BetaUI_Metadata']
---

# sailpoint.beta.UIMetadataApi
  API for managing UI Metadata. Use this API to manage metadata about your User Interface.
For example you can set the iFrameWhitelist parameter to permit another domain to encapsulate IDN within an iframe or set the usernameEmptyText to change the placeholder text for Username on your tenant&#39;s login screen. 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-ui-metadata**](#get-tenant-ui-metadata) | **GET** `/ui-metadata/tenant` | Get a tenant UI metadata
[**set-tenant-ui-metadata**](#set-tenant-ui-metadata) | **PUT** `/ui-metadata/tenant` | Update tenant UI metadata


## get-tenant-ui-metadata
Get a tenant UI metadata
This API endpoint retrieves UI metadata configured for your tenant.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-tenant-ui-metadata)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**TenantUiMetadataItemResponse**](../models/tenant-ui-metadata-item-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A tenant UI metadata object | TenantUiMetadataItemResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.ui_metadata_api import UIMetadataApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.tenant_ui_metadata_item_response import TenantUiMetadataItemResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get a tenant UI metadata
        
        results = UIMetadataApi(api_client).get_tenant_ui_metadata()
        # Below is a request that includes all optional parameters
        # results = UIMetadataApi(api_client).get_tenant_ui_metadata()
        print("The response of UIMetadataApi->get_tenant_ui_metadata:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIMetadataApi->get_tenant_ui_metadata: %s\n" % e)
```



[[Back to top]](#) 

## set-tenant-ui-metadata
Update tenant UI metadata
This API endpoint updates UI metadata for your tenant. These changes may require up to 5 minutes to take effect on the UI.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-tenant-ui-metadata)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | tenant_ui_metadata_item_update_request | [**TenantUiMetadataItemUpdateRequest**](../models/tenant-ui-metadata-item-update-request) | True  | 

### Return type
[**TenantUiMetadataItemResponse**](../models/tenant-ui-metadata-item-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A tenant UI metadata object | TenantUiMetadataItemResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.ui_metadata_api import UIMetadataApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.tenant_ui_metadata_item_response import TenantUiMetadataItemResponse
from sailpoint.beta.models.tenant_ui_metadata_item_update_request import TenantUiMetadataItemUpdateRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    tenant_ui_metadata_item_update_request = '''{
          "usernameEmptyText" : "Please provide your work email address...",
          "usernameLabel" : "Email",
          "iframeWhiteList" : "http://example.com http://example2.com"
        }''' # TenantUiMetadataItemUpdateRequest | 

    try:
        # Update tenant UI metadata
        new_tenant_ui_metadata_item_update_request = TenantUiMetadataItemUpdateRequest.from_json(tenant_ui_metadata_item_update_request)
        results = UIMetadataApi(api_client).set_tenant_ui_metadata(tenant_ui_metadata_item_update_request=new_tenant_ui_metadata_item_update_request)
        # Below is a request that includes all optional parameters
        # results = UIMetadataApi(api_client).set_tenant_ui_metadata(new_tenant_ui_metadata_item_update_request)
        print("The response of UIMetadataApi->set_tenant_ui_metadata:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIMetadataApi->set_tenant_ui_metadata: %s\n" % e)
```



[[Back to top]](#) 




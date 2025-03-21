---
id: beta-icons
title: Icons
pagination_label: Icons
sidebar_label: Icons
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Icons', 'BetaIcons'] 
slug: /tools/sdk/python/beta/methods/icons
tags: ['SDK', 'Software Development Kit', 'Icons', 'BetaIcons']
---

# sailpoint.beta.IconsApi
  Use this API to implement functionality related to object icons (application icons for example). 
With this functionality in place, administrators can set or remove an icon for specific object type for use throughout Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-icon**](#delete-icon) | **DELETE** `/icons/{objectType}/{objectId}` | Delete an icon
[**set-icon**](#set-icon) | **PUT** `/icons/{objectType}/{objectId}` | Update an icon


## delete-icon
Delete an icon
This API endpoint delete an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-icon)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | object_type | **str** | True  | Object type
Path   | object_id | **str** | True  | Object id.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.beta.api.icons_api import IconsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    object_type = 'application' # str | Object type # str | Object type
    object_id = 'a291e870-48c3-4953-b656-fb5ce2a93169' # str | Object id. # str | Object id.

    try:
        # Delete an icon
        
        IconsApi(api_client).delete_icon(object_type=object_type, object_id=object_id)
        # Below is a request that includes all optional parameters
        # IconsApi(api_client).delete_icon(object_type, object_id)
    except Exception as e:
        print("Exception when calling IconsApi->delete_icon: %s\n" % e)
```



[[Back to top]](#) 

## set-icon
Update an icon
This API endpoint updates an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-icon)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | object_type | **str** | True  | Object type
Path   | object_id | **str** | True  | Object id.
   | image | **bytearray** | True  | file with icon. Allowed mime-types ['image/png', 'image/jpeg']

### Return type
[**SetIcon200Response**](../models/set-icon200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Icon updated | SetIcon200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.icons_api import IconsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.set_icon200_response import SetIcon200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    object_type = 'application' # str | Object type # str | Object type
    object_id = 'a291e870-48c3-4953-b656-fb5ce2a93169' # str | Object id. # str | Object id.
    image = None # bytearray | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] # bytearray | file with icon. Allowed mime-types ['image/png', 'image/jpeg']

    try:
        # Update an icon
        
        results = IconsApi(api_client).set_icon(object_type=object_type, object_id=object_id, image=image)
        # Below is a request that includes all optional parameters
        # results = IconsApi(api_client).set_icon(object_type, object_id, image)
        print("The response of IconsApi->set_icon:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IconsApi->set_icon: %s\n" % e)
```



[[Back to top]](#) 




---
id: beta-org-config
title: Org_Config
pagination_label: Org_Config
sidebar_label: Org_Config
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Org_Config', 'BetaOrg_Config'] 
slug: /tools/sdk/python/beta/methods/org-config
tags: ['SDK', 'Software Development Kit', 'Org_Config', 'BetaOrg_Config']
---

# sailpoint.beta.OrgConfigApi
  Use this API to implement organization configuration functionality. 
Administrators can use this functionality to manage organization settings, such as time zones.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-org-config**](#get-org-config) | **GET** `/org-config` | Get Org configuration settings
[**get-valid-time-zones**](#get-valid-time-zones) | **GET** `/org-config/valid-time-zones` | Get list of time zones
[**patch-org-config**](#patch-org-config) | **PATCH** `/org-config` | Patch an Org configuration property


## get-org-config
Get Org configuration settings
Get org configuration with only external (org admin) accessible properties for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-org-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**OrgConfig**](../models/org-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | OrgConfig |  -  |
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
from sailpoint.beta.api.org_config_api import OrgConfigApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.org_config import OrgConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get Org configuration settings
        
        results = OrgConfigApi(api_client).get_org_config()
        # Below is a request that includes all optional parameters
        # results = OrgConfigApi(api_client).get_org_config()
        print("The response of OrgConfigApi->get_org_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OrgConfigApi->get_org_config: %s\n" % e)
```



[[Back to top]](#) 

## get-valid-time-zones
Get list of time zones
Get a list of valid time zones that can be set in org configurations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-valid-time-zones)

### Parameters 
This endpoint does not need any parameter. 

### Return type
**List[str]**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request successful | List[str] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.org_config_api import OrgConfigApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get list of time zones
        
        results = OrgConfigApi(api_client).get_valid_time_zones()
        # Below is a request that includes all optional parameters
        # results = OrgConfigApi(api_client).get_valid_time_zones()
        print("The response of OrgConfigApi->get_valid_time_zones:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OrgConfigApi->get_valid_time_zones: %s\n" % e)
```



[[Back to top]](#) 

## patch-org-config
Patch an Org configuration property
Patch configuration of the current org using http://jsonpatch.com/ syntax.  Commonly used for changing the time zone of an org.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-org-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**OrgConfig**](../models/org-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Org was successfully patched. | OrgConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.org_config_api import OrgConfigApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.json_patch_operation import JsonPatchOperation
from sailpoint.beta.models.org_config import OrgConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    json_patch_operation = '''[{op=replace, path=/timeZone, value=America/Toronto}]''' # List[JsonPatchOperation] | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    try:
        # Patch an Org configuration property
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = OrgConfigApi(api_client).patch_org_config(json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = OrgConfigApi(api_client).patch_org_config(new_json_patch_operation)
        print("The response of OrgConfigApi->patch_org_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OrgConfigApi->patch_org_config: %s\n" % e)
```



[[Back to top]](#) 




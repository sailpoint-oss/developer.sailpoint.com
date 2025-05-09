---
id: v2024-machine-classification-config
title: Machine_Classification_Config
pagination_label: Machine_Classification_Config
sidebar_label: Machine_Classification_Config
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machine_Classification_Config', 'V2024Machine_Classification_Config'] 
slug: /tools/sdk/python/v2024/methods/machine-classification-config
tags: ['SDK', 'Software Development Kit', 'Machine_Classification_Config', 'V2024Machine_Classification_Config']
---

# sailpoint.v2024.MachineClassificationConfigApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-machine-classification-config**](#delete-machine-classification-config) | **DELETE** `/sources/{sourceId}/machine-classification-config` | Delete Source&#39;s Classification Config
[**get-machine-classification-config**](#get-machine-classification-config) | **GET** `/sources/{sourceId}/machine-classification-config` | Machine Classification Config for Source
[**set-machine-classification-config**](#set-machine-classification-config) | **PUT** `/sources/{sourceId}/machine-classification-config` | Update Source&#39;s Classification Config


## delete-machine-classification-config
Delete Source's Classification Config
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-machine-classification-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.v2024.api.machine_classification_config_api import MachineClassificationConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.

    try:
        # Delete Source's Classification Config
        
        MachineClassificationConfigApi(api_client).delete_machine_classification_config(id=id)
        # Below is a request that includes all optional parameters
        # MachineClassificationConfigApi(api_client).delete_machine_classification_config(id)
    except Exception as e:
        print("Exception when calling MachineClassificationConfigApi->delete_machine_classification_config: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-classification-config
Machine Classification Config for Source
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-machine-classification-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID

### Return type
[**MachineClassificationConfig**](../models/machine-classification-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Config Object | MachineClassificationConfig |  -  |
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
from sailpoint.v2024.api.machine_classification_config_api import MachineClassificationConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.machine_classification_config import MachineClassificationConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID # str | Source ID

    try:
        # Machine Classification Config for Source
        
        results = MachineClassificationConfigApi(api_client).get_machine_classification_config(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineClassificationConfigApi(api_client).get_machine_classification_config(id)
        print("The response of MachineClassificationConfigApi->get_machine_classification_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineClassificationConfigApi->get_machine_classification_config: %s\n" % e)
```



[[Back to top]](#) 

## set-machine-classification-config
Update Source's Classification Config
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-machine-classification-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.
 Body  | machine_classification_config | [**MachineClassificationConfig**](../models/machine-classification-config) | True  | 

### Return type
[**MachineClassificationConfig**](../models/machine-classification-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Machine Classification Config Object. | MachineClassificationConfig |  -  |
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
from sailpoint.v2024.api.machine_classification_config_api import MachineClassificationConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.machine_classification_config import MachineClassificationConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.
    machine_classification_config = '''{
          "criteria" : "criteria",
          "created" : "2017-07-11T18:45:37.098Z",
          "modified" : "2018-06-25T20:22:28.104Z",
          "classificationMethod" : "SOURCE",
          "enabled" : true
        }''' # MachineClassificationConfig | 

    try:
        # Update Source's Classification Config
        new_machine_classification_config = MachineClassificationConfig.from_json(machine_classification_config)
        results = MachineClassificationConfigApi(api_client).set_machine_classification_config(id=id, machine_classification_config=new_machine_classification_config)
        # Below is a request that includes all optional parameters
        # results = MachineClassificationConfigApi(api_client).set_machine_classification_config(id, new_machine_classification_config)
        print("The response of MachineClassificationConfigApi->set_machine_classification_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineClassificationConfigApi->set_machine_classification_config: %s\n" % e)
```



[[Back to top]](#) 




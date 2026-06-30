---
id: machine-classification-config
title: Machine_Classification_Config
pagination_label: Machine_Classification_Config
sidebar_label: Machine_Classification_Config
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machine_Classification_Config', 'Machine_Classification_Config'] 
slug: /tools/sdk/python/machine-classification-config/methods/machine-classification-config
tags: ['SDK', 'Software Development Kit', 'Machine_Classification_Config', 'Machine_Classification_Config']
---

# sailpoint.machine_classification_config.MachineClassificationConfigApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-machine-classification-config-v1**](#delete-machine-classification-config-v1) | **DELETE** `/sources/v1/{sourceId}/machine-classification-config` | Delete source&#39;s classification config
[**get-machine-classification-config-v1**](#get-machine-classification-config-v1) | **GET** `/sources/v1/{sourceId}/machine-classification-config` | Machine classification config for source
[**set-machine-classification-config-v1**](#set-machine-classification-config-v1) | **PUT** `/sources/v1/{sourceId}/machine-classification-config` | Update source&#39;s classification config


## delete-machine-classification-config-v1
Delete source's classification config
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-machine-classification-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_classification_config.api.machine_classification_config_api import MachineClassificationConfigApi
from sailpoint.machine_classification_config.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.

    try:
        # Delete source's classification config
        
        MachineClassificationConfigApi(api_client).delete_machine_classification_config_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # MachineClassificationConfigApi(api_client).delete_machine_classification_config_v1(source_id)
    except Exception as e:
        print("Exception when calling MachineClassificationConfigApi->delete_machine_classification_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-classification-config-v1
Machine classification config for source
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-machine-classification-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID

### Return type
[**Machineclassificationconfig**](../models/machineclassificationconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Config Object | Machineclassificationconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_classification_config.api.machine_classification_config_api import MachineClassificationConfigApi
from sailpoint.machine_classification_config.api_client import ApiClient
from sailpoint.machine_classification_config.models.machineclassificationconfig import Machineclassificationconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID # str | Source ID

    try:
        # Machine classification config for source
        
        results = MachineClassificationConfigApi(api_client).get_machine_classification_config_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = MachineClassificationConfigApi(api_client).get_machine_classification_config_v1(source_id)
        print("The response of MachineClassificationConfigApi->get_machine_classification_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineClassificationConfigApi->get_machine_classification_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-machine-classification-config-v1
Update source's classification config
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-machine-classification-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.
 Body  | machineclassificationconfig | [**Machineclassificationconfig**](../models/machineclassificationconfig) | True  | 

### Return type
[**Machineclassificationconfig**](../models/machineclassificationconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Machine Classification Config Object. | Machineclassificationconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_classification_config.api.machine_classification_config_api import MachineClassificationConfigApi
from sailpoint.machine_classification_config.api_client import ApiClient
from sailpoint.machine_classification_config.models.machineclassificationconfig import Machineclassificationconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.
    machineclassificationconfig = '''sailpoint.machine_classification_config.Machineclassificationconfig()''' # Machineclassificationconfig | 

    try:
        # Update source's classification config
        new_machineclassificationconfig = Machineclassificationconfig.from_json(machineclassificationconfig)
        results = MachineClassificationConfigApi(api_client).set_machine_classification_config_v1(source_id=source_id, machineclassificationconfig=new_machineclassificationconfig)
        # Below is a request that includes all optional parameters
        # results = MachineClassificationConfigApi(api_client).set_machine_classification_config_v1(source_id, new_machineclassificationconfig)
        print("The response of MachineClassificationConfigApi->set_machine_classification_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineClassificationConfigApi->set_machine_classification_config_v1: %s\n" % e)
```



[[Back to top]](#) 




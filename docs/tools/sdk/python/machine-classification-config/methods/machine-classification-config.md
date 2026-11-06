# Machine_Classification_Config

# sailpoint.machine_classification_config.MachineClassificationConfigApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-machine-classification-config-v1**](#delete-machine-classification-config-v1) | **DELETE** `/sources/v1/{sourceId}/machine-classification-config` | Delete source&#39;s classification config
[**get-machine-classification-config-v1**](#get-machine-classification-config-v1) | **GET** `/sources/v1/{sourceId}/machine-classification-config` | Machine classification config for source
[**set-machine-classification-config-v1**](#set-machine-classification-config-v1) | **PUT** `/sources/v1/{sourceId}/machine-classification-config` | Update source&#39;s classification config


## delete-machine-classification-config-v1
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
Delete source's classification config
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-classification-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_classification_config.api.machine_classification_config_api import MachineClassificationConfigApi
from sailpoint.machine_classification_config.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete source's classification config
        
        MachineClassificationConfigApi(api_client).delete_machine_classification_config_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # MachineClassificationConfigApi(api_client).delete_machine_classification_config_v1(source_id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling MachineClassificationConfigApi->delete_machine_classification_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-classification-config-v1
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
Machine classification config for source
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-classification-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineClassificationConfig**](../models/machine-classification-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Config Object | MachineClassificationConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_classification_config.api.machine_classification_config_api import MachineClassificationConfigApi
from sailpoint.machine_classification_config.api_client import ApiClient
from sailpoint.machine_classification_config.models.machine_classification_config import MachineClassificationConfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID # str | Source ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Machine classification config for source
        
        results = MachineClassificationConfigApi(api_client).get_machine_classification_config_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = MachineClassificationConfigApi(api_client).get_machine_classification_config_v1(source_id, x_sail_point_experimental)
        print("The response of MachineClassificationConfigApi->get_machine_classification_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineClassificationConfigApi->get_machine_classification_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-machine-classification-config-v1
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
Update source's classification config
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/set-machine-classification-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.
 Body  | machine_classification_config | [**MachineClassificationConfig**](../models/machine-classification-config) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineClassificationConfig**](../models/machine-classification-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Machine Classification Config Object. | MachineClassificationConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_classification_config.api.machine_classification_config_api import MachineClassificationConfigApi
from sailpoint.machine_classification_config.api_client import ApiClient
from sailpoint.machine_classification_config.models.machine_classification_config import MachineClassificationConfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.
    machine_classification_config = '''{
          "criteria" : {
            "children" : [ {
              "children" : [ {
                "children" : [ "{}", "{}" ],
                "caseSensitive" : false,
                "dataType" : "dataType",
                "attribute" : "sAMAccountName",
                "operation" : "EQUALS",
                "value" : "SVC"
              }, {
                "children" : [ "{}", "{}" ],
                "caseSensitive" : false,
                "dataType" : "dataType",
                "attribute" : "sAMAccountName",
                "operation" : "EQUALS",
                "value" : "SVC"
              } ],
              "caseSensitive" : false,
              "dataType" : "dataType",
              "attribute" : "employeeType",
              "operation" : "EQUALS",
              "value" : "SERVICE"
            }, {
              "children" : [ {
                "children" : [ "{}", "{}" ],
                "caseSensitive" : false,
                "dataType" : "dataType",
                "attribute" : "sAMAccountName",
                "operation" : "EQUALS",
                "value" : "SVC"
              }, {
                "children" : [ "{}", "{}" ],
                "caseSensitive" : false,
                "dataType" : "dataType",
                "attribute" : "sAMAccountName",
                "operation" : "EQUALS",
                "value" : "SVC"
              } ],
              "caseSensitive" : false,
              "dataType" : "dataType",
              "attribute" : "employeeType",
              "operation" : "EQUALS",
              "value" : "SERVICE"
            } ],
            "caseSensitive" : false,
            "dataType" : "dataType",
            "attribute" : "distinguishedName",
            "operation" : "EQUALS",
            "value" : "OU=Service Accounts"
          },
          "created" : "2017-07-11T18:45:37.098Z",
          "modified" : "2018-06-25T20:22:28.104Z",
          "classificationMethod" : "SOURCE",
          "enabled" : true
        }''' # MachineClassificationConfig | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update source's classification config
        new_machine_classification_config = MachineClassificationConfig.from_json(machine_classification_config)
        results = MachineClassificationConfigApi(api_client).set_machine_classification_config_v1(source_id=source_id, machine_classification_config=new_machine_classification_config)
        # Below is a request that includes all optional parameters
        # results = MachineClassificationConfigApi(api_client).set_machine_classification_config_v1(source_id, new_machine_classification_config, x_sail_point_experimental)
        print("The response of MachineClassificationConfigApi->set_machine_classification_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineClassificationConfigApi->set_machine_classification_config_v1: %s\n" % e)
```



[[Back to top]](#) 




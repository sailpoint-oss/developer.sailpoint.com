---
id: v2024-launchers
title: Launchers
pagination_label: Launchers
sidebar_label: Launchers
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Launchers', 'V2024Launchers'] 
slug: /tools/sdk/python/v2024/methods/launchers
tags: ['SDK', 'Software Development Kit', 'Launchers', 'V2024Launchers']
---

# sailpoint.v2024.LaunchersApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-launcher**](#create-launcher) | **POST** `/launchers` | Create launcher
[**delete-launcher**](#delete-launcher) | **DELETE** `/launchers/{launcherID}` | Delete launcher
[**get-launcher**](#get-launcher) | **GET** `/launchers/{launcherID}` | Get launcher by id
[**get-launchers**](#get-launchers) | **GET** `/launchers` | List all launchers for tenant
[**put-launcher**](#put-launcher) | **PUT** `/launchers/{launcherID}` | Replace launcher
[**start-launcher**](#start-launcher) | **POST** `/launchers/{launcherID}/launch` | Launch a launcher


## create-launcher
Create launcher
Create a Launcher with given information

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-launcher)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | launcher_request | [**LauncherRequest**](../models/launcher-request) | True  | Payload to create a Launcher

### Return type
[**Launcher**](../models/launcher)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Launcher created successfully | Launcher |  -  |
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
from sailpoint.v2024.api.launchers_api import LaunchersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.launcher import Launcher
from sailpoint.v2024.models.launcher_request import LauncherRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    launcher_request = '''{
          "reference" : {
            "id" : "2fd6ff94-2081-4d29-acbc-83a0a2f744a5",
            "type" : "WORKFLOW"
          },
          "name" : "Group Create",
          "description" : "Create a new Active Directory Group",
          "disabled" : false,
          "type" : "INTERACTIVE_PROCESS",
          "config" : "{\"workflowId\" : \"6b42d9be-61b6-46af-827e-ea29ba8aa3d9\"}"
        }''' # LauncherRequest | Payload to create a Launcher

    try:
        # Create launcher
        new_launcher_request = LauncherRequest.from_json(launcher_request)
        results = LaunchersApi(api_client).create_launcher(launcher_request=new_launcher_request)
        # Below is a request that includes all optional parameters
        # results = LaunchersApi(api_client).create_launcher(new_launcher_request)
        print("The response of LaunchersApi->create_launcher:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LaunchersApi->create_launcher: %s\n" % e)
```



[[Back to top]](#) 

## delete-launcher
Delete launcher
Delete the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-launcher)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | launcher_id | **str** | True  | ID of the Launcher to be deleted

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Launcher deleted successfully |  |  -  |
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
from sailpoint.v2024.api.launchers_api import LaunchersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    launcher_id = 'e3012408-8b61-4564-ad41-c5ec131c325b' # str | ID of the Launcher to be deleted # str | ID of the Launcher to be deleted

    try:
        # Delete launcher
        
        LaunchersApi(api_client).delete_launcher(launcher_id=launcher_id)
        # Below is a request that includes all optional parameters
        # LaunchersApi(api_client).delete_launcher(launcher_id)
    except Exception as e:
        print("Exception when calling LaunchersApi->delete_launcher: %s\n" % e)
```



[[Back to top]](#) 

## get-launcher
Get launcher by id
Get details for the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-launcher)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | launcher_id | **str** | True  | ID of the Launcher to be retrieved

### Return type
[**Launcher**](../models/launcher)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Launcher retrieved successfully | Launcher |  -  |
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
from sailpoint.v2024.api.launchers_api import LaunchersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.launcher import Launcher
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    launcher_id = 'e3012408-8b61-4564-ad41-c5ec131c325b' # str | ID of the Launcher to be retrieved # str | ID of the Launcher to be retrieved

    try:
        # Get launcher by id
        
        results = LaunchersApi(api_client).get_launcher(launcher_id=launcher_id)
        # Below is a request that includes all optional parameters
        # results = LaunchersApi(api_client).get_launcher(launcher_id)
        print("The response of LaunchersApi->get_launcher:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LaunchersApi->get_launcher: %s\n" % e)
```



[[Back to top]](#) 

## get-launchers
List all launchers for tenant
Return a list of Launchers for the authenticated tenant

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-launchers)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw*
  Query | next | **str** |   (optional) | Pagination marker
  Query | limit | **int** |   (optional) (default to 10) | Number of Launchers to return

### Return type
[**GetLaunchers200Response**](../models/get-launchers200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Launchers | GetLaunchers200Response |  -  |
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
from sailpoint.v2024.api.launchers_api import LaunchersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.get_launchers200_response import GetLaunchers200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'disabled eq \"true\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional)
    next = 'eyJuZXh0IjoxMjN9Cg==' # str | Pagination marker (optional) # str | Pagination marker (optional)
    limit = 10 # int | Number of Launchers to return (optional) (default to 10) # int | Number of Launchers to return (optional) (default to 10)

    try:
        # List all launchers for tenant
        
        results = LaunchersApi(api_client).get_launchers()
        # Below is a request that includes all optional parameters
        # results = LaunchersApi(api_client).get_launchers(filters, next, limit)
        print("The response of LaunchersApi->get_launchers:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LaunchersApi->get_launchers: %s\n" % e)
```



[[Back to top]](#) 

## put-launcher
Replace launcher
Replace the given Launcher ID with given payload

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-launcher)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | launcher_id | **str** | True  | ID of the Launcher to be replaced
 Body  | launcher_request | [**LauncherRequest**](../models/launcher-request) | True  | Payload to replace Launcher

### Return type
[**Launcher**](../models/launcher)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Launcher replaced successfully | Launcher |  -  |
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
from sailpoint.v2024.api.launchers_api import LaunchersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.launcher import Launcher
from sailpoint.v2024.models.launcher_request import LauncherRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    launcher_id = 'e3012408-8b61-4564-ad41-c5ec131c325b' # str | ID of the Launcher to be replaced # str | ID of the Launcher to be replaced
    launcher_request = '''{
          "reference" : {
            "id" : "2fd6ff94-2081-4d29-acbc-83a0a2f744a5",
            "type" : "WORKFLOW"
          },
          "name" : "Group Create",
          "description" : "Create a new Active Directory Group",
          "disabled" : false,
          "type" : "INTERACTIVE_PROCESS",
          "config" : "{\"workflowId\" : \"6b42d9be-61b6-46af-827e-ea29ba8aa3d9\"}"
        }''' # LauncherRequest | Payload to replace Launcher

    try:
        # Replace launcher
        new_launcher_request = LauncherRequest.from_json(launcher_request)
        results = LaunchersApi(api_client).put_launcher(launcher_id=launcher_id, launcher_request=new_launcher_request)
        # Below is a request that includes all optional parameters
        # results = LaunchersApi(api_client).put_launcher(launcher_id, new_launcher_request)
        print("The response of LaunchersApi->put_launcher:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LaunchersApi->put_launcher: %s\n" % e)
```



[[Back to top]](#) 

## start-launcher
Launch a launcher
Launch the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v2024/start-launcher)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | launcher_id | **str** | True  | ID of the Launcher to be launched

### Return type
[**StartLauncher200Response**](../models/start-launcher200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Launcher launched successfully | StartLauncher200Response |  -  |
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
from sailpoint.v2024.api.launchers_api import LaunchersApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.start_launcher200_response import StartLauncher200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    launcher_id = 'e3012408-8b61-4564-ad41-c5ec131c325b' # str | ID of the Launcher to be launched # str | ID of the Launcher to be launched

    try:
        # Launch a launcher
        
        results = LaunchersApi(api_client).start_launcher(launcher_id=launcher_id)
        # Below is a request that includes all optional parameters
        # results = LaunchersApi(api_client).start_launcher(launcher_id)
        print("The response of LaunchersApi->start_launcher:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LaunchersApi->start_launcher: %s\n" % e)
```



[[Back to top]](#) 




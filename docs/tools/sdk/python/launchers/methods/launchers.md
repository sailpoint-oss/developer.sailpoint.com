# Launchers

# sailpoint.launchers.LaunchersApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-launcher-v1**](#create-launcher-v1) | **POST** `/launchers/v1` | Create launcher
[**delete-launcher-v1**](#delete-launcher-v1) | **DELETE** `/launchers/v1/{launcherID}` | Delete launcher
[**get-launcher-v1**](#get-launcher-v1) | **GET** `/launchers/v1/{launcherID}` | Get launcher by id
[**get-launchers-v1**](#get-launchers-v1) | **GET** `/launchers/v1` | List all launchers for tenant
[**put-launcher-v1**](#put-launcher-v1) | **PUT** `/launchers/v1/{launcherID}` | Replace launcher
[**start-launcher-v1**](#start-launcher-v1) | **POST** `/launchers/v1/{launcherID}/launch` | Launch a launcher


## create-launcher-v1
Create launcher
Create a Launcher with given information

[API Spec](https://developer.sailpoint.com/docs/api/create-launcher-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.launchers.api.launchers_api import LaunchersApi
from sailpoint.launchers.api_client import ApiClient
from sailpoint.launchers.models.launcher import Launcher
from sailpoint.launchers.models.launcher_request import LauncherRequest
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
        results = LaunchersApi(api_client).create_launcher_v1(launcher_request=new_launcher_request)
        # Below is a request that includes all optional parameters
        # results = LaunchersApi(api_client).create_launcher_v1(new_launcher_request)
        print("The response of LaunchersApi->create_launcher_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LaunchersApi->create_launcher_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-launcher-v1
Delete launcher
Delete the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/delete-launcher-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.launchers.api.launchers_api import LaunchersApi
from sailpoint.launchers.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    launcher_id = 'e3012408-8b61-4564-ad41-c5ec131c325b' # str | ID of the Launcher to be deleted # str | ID of the Launcher to be deleted

    try:
        # Delete launcher
        
        LaunchersApi(api_client).delete_launcher_v1(launcher_id=launcher_id)
        # Below is a request that includes all optional parameters
        # LaunchersApi(api_client).delete_launcher_v1(launcher_id)
    except Exception as e:
        print("Exception when calling LaunchersApi->delete_launcher_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-launcher-v1
Get launcher by id
Get details for the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/get-launcher-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.launchers.api.launchers_api import LaunchersApi
from sailpoint.launchers.api_client import ApiClient
from sailpoint.launchers.models.launcher import Launcher
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    launcher_id = 'e3012408-8b61-4564-ad41-c5ec131c325b' # str | ID of the Launcher to be retrieved # str | ID of the Launcher to be retrieved

    try:
        # Get launcher by id
        
        results = LaunchersApi(api_client).get_launcher_v1(launcher_id=launcher_id)
        # Below is a request that includes all optional parameters
        # results = LaunchersApi(api_client).get_launcher_v1(launcher_id)
        print("The response of LaunchersApi->get_launcher_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LaunchersApi->get_launcher_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-launchers-v1
List all launchers for tenant
Return a list of Launchers for the authenticated tenant

[API Spec](https://developer.sailpoint.com/docs/api/get-launchers-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw*
  Query | next | **str** |   (optional) | Pagination marker
  Query | limit | **int** |   (optional) (default to 10) | Number of Launchers to return

### Return type
[**GetLaunchersV1200Response**](../models/get-launchers-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Launchers | GetLaunchersV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.launchers.api.launchers_api import LaunchersApi
from sailpoint.launchers.api_client import ApiClient
from sailpoint.launchers.models.get_launchers_v1200_response import GetLaunchersV1200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'disabled eq \"true\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional)
    next = 'eyJuZXh0IjoxMjN9Cg==' # str | Pagination marker (optional) # str | Pagination marker (optional)
    limit = 10 # int | Number of Launchers to return (optional) (default to 10) # int | Number of Launchers to return (optional) (default to 10)

    try:
        # List all launchers for tenant
        
        results = LaunchersApi(api_client).get_launchers_v1()
        # Below is a request that includes all optional parameters
        # results = LaunchersApi(api_client).get_launchers_v1(filters, next, limit)
        print("The response of LaunchersApi->get_launchers_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LaunchersApi->get_launchers_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-launcher-v1
Replace launcher
Replace the given Launcher ID with given payload

[API Spec](https://developer.sailpoint.com/docs/api/put-launcher-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.launchers.api.launchers_api import LaunchersApi
from sailpoint.launchers.api_client import ApiClient
from sailpoint.launchers.models.launcher import Launcher
from sailpoint.launchers.models.launcher_request import LauncherRequest
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
        results = LaunchersApi(api_client).put_launcher_v1(launcher_id=launcher_id, launcher_request=new_launcher_request)
        # Below is a request that includes all optional parameters
        # results = LaunchersApi(api_client).put_launcher_v1(launcher_id, new_launcher_request)
        print("The response of LaunchersApi->put_launcher_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LaunchersApi->put_launcher_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-launcher-v1
Launch a launcher
Launch the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/start-launcher-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | launcher_id | **str** | True  | ID of the Launcher to be launched

### Return type
[**StartLauncherV1200Response**](../models/start-launcher-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Launcher launched successfully | StartLauncherV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.launchers.api.launchers_api import LaunchersApi
from sailpoint.launchers.api_client import ApiClient
from sailpoint.launchers.models.start_launcher_v1200_response import StartLauncherV1200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    launcher_id = 'e3012408-8b61-4564-ad41-c5ec131c325b' # str | ID of the Launcher to be launched # str | ID of the Launcher to be launched

    try:
        # Launch a launcher
        
        results = LaunchersApi(api_client).start_launcher_v1(launcher_id=launcher_id)
        # Below is a request that includes all optional parameters
        # results = LaunchersApi(api_client).start_launcher_v1(launcher_id)
        print("The response of LaunchersApi->start_launcher_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling LaunchersApi->start_launcher_v1: %s\n" % e)
```



[[Back to top]](#) 




# Managed_Clients

# sailpoint.managed_clients.ManagedClientsApi
  Use this API to implement managed client functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, create new ones, and view and make changes to their log configurations.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-client-v1**](#create-managed-client-v1) | **POST** `/managed-clients/v1` | Create managed client
[**delete-managed-client-v1**](#delete-managed-client-v1) | **DELETE** `/managed-clients/v1/{id}` | Delete managed client
[**get-managed-client-health-indicators-v1**](#get-managed-client-health-indicators-v1) | **GET** `/managed-clients/v1/{id}/health-indicators` | Get managed client health indicators
[**get-managed-client-status-v1**](#get-managed-client-status-v1) | **GET** `/managed-clients/v1/{id}/status` | Get managed client status
[**get-managed-client-v1**](#get-managed-client-v1) | **GET** `/managed-clients/v1/{id}` | Get managed client
[**get-managed-clients-v1**](#get-managed-clients-v1) | **GET** `/managed-clients/v1` | Get managed clients
[**update-managed-client-v1**](#update-managed-client-v1) | **PATCH** `/managed-clients/v1/{id}` | Update managed client


## create-managed-client-v1
Create managed client
Create a new managed client.
The API returns a result that includes the managed client ID.

[API Spec](https://developer.sailpoint.com/docs/api/create-managed-client-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | managed_client_request | [**ManagedClientRequest**](../models/managed-client-request) | True  | 

### Return type
[**ManagedClient**](../models/managed-client)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created managed client. | ManagedClient |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clients.api.managed_clients_api import ManagedClientsApi
from sailpoint.managed_clients.api_client import ApiClient
from sailpoint.managed_clients.models.managed_client import ManagedClient
from sailpoint.managed_clients.models.managed_client_request import ManagedClientRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    managed_client_request = '''{
          "name" : "aName",
          "description" : "A short description of the ManagedClient",
          "clusterId" : "aClusterId",
          "type" : "VA"
        }''' # ManagedClientRequest | 

    try:
        # Create managed client
        new_managed_client_request = ManagedClientRequest.from_json(managed_client_request)
        results = ManagedClientsApi(api_client).create_managed_client_v1(managed_client_request=new_managed_client_request)
        # Below is a request that includes all optional parameters
        # results = ManagedClientsApi(api_client).create_managed_client_v1(new_managed_client_request)
        print("The response of ManagedClientsApi->create_managed_client_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClientsApi->create_managed_client_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-managed-client-v1
Delete managed client
Delete an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/delete-managed-client-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Managed client ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clients.api.managed_clients_api import ManagedClientsApi
from sailpoint.managed_clients.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7' # str | Managed client ID. # str | Managed client ID.

    try:
        # Delete managed client
        
        ManagedClientsApi(api_client).delete_managed_client_v1(id=id)
        # Below is a request that includes all optional parameters
        # ManagedClientsApi(api_client).delete_managed_client_v1(id)
    except Exception as e:
        print("Exception when calling ManagedClientsApi->delete_managed_client_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-client-health-indicators-v1
Get managed client health indicators
Get a managed client's health indicators, using its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-client-health-indicators-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Managed client ID to get health indicators for.

### Return type
[**ManagedClientHealthIndicators**](../models/managed-client-health-indicators)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Response with the managed client health indicators, with the given ID. | ManagedClientHealthIndicators |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clients.api.managed_clients_api import ManagedClientsApi
from sailpoint.managed_clients.api_client import ApiClient
from sailpoint.managed_clients.models.managed_client_health_indicators import ManagedClientHealthIndicators
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7' # str | Managed client ID to get health indicators for. # str | Managed client ID to get health indicators for.

    try:
        # Get managed client health indicators
        
        results = ManagedClientsApi(api_client).get_managed_client_health_indicators_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ManagedClientsApi(api_client).get_managed_client_health_indicators_v1(id)
        print("The response of ManagedClientsApi->get_managed_client_health_indicators_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClientsApi->get_managed_client_health_indicators_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-client-status-v1
Get managed client status
Get a managed client's status, using its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-client-status-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Managed client ID to get status for.
  Query | type | [**ManagedClientType**](../models/managed-client-type) | True  | Managed client type to get status for.

### Return type
[**ManagedClientStatus**](../models/managed-client-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Response with the managed client status, with the given ID and type. | ManagedClientStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clients.api.managed_clients_api import ManagedClientsApi
from sailpoint.managed_clients.api_client import ApiClient
from sailpoint.managed_clients.models.managed_client_status import ManagedClientStatus
from sailpoint.managed_clients.models.managed_client_type import ManagedClientType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'aClientId' # str | Managed client ID to get status for. # str | Managed client ID to get status for.
    type = sailpoint.managed_clients.ManagedClientType() # ManagedClientType | Managed client type to get status for. # ManagedClientType | Managed client type to get status for.

    try:
        # Get managed client status
        
        results = ManagedClientsApi(api_client).get_managed_client_status_v1(id=id, type=type)
        # Below is a request that includes all optional parameters
        # results = ManagedClientsApi(api_client).get_managed_client_status_v1(id, type)
        print("The response of ManagedClientsApi->get_managed_client_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClientsApi->get_managed_client_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-client-v1
Get managed client
Get managed client by ID. 

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-client-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Managed client ID.

### Return type
[**ManagedClient**](../models/managed-client)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Managed client response. | ManagedClient |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clients.api.managed_clients_api import ManagedClientsApi
from sailpoint.managed_clients.api_client import ApiClient
from sailpoint.managed_clients.models.managed_client import ManagedClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7' # str | Managed client ID. # str | Managed client ID.

    try:
        # Get managed client
        
        results = ManagedClientsApi(api_client).get_managed_client_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ManagedClientsApi(api_client).get_managed_client_v1(id)
        print("The response of ManagedClientsApi->get_managed_client_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClientsApi->get_managed_client_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-clients-v1
Get managed clients
List managed clients.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-clients-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq*

### Return type
[**List[ManagedClient]**](../models/managed-client)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Response with a list of managed clients, based on the specified query parameters. | List[ManagedClient] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clients.api.managed_clients_api import ManagedClientsApi
from sailpoint.managed_clients.api_client import ApiClient
from sailpoint.managed_clients.models.managed_client import ManagedClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"client name\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq* (optional)

    try:
        # Get managed clients
        
        results = ManagedClientsApi(api_client).get_managed_clients_v1()
        # Below is a request that includes all optional parameters
        # results = ManagedClientsApi(api_client).get_managed_clients_v1(offset, limit, count, filters)
        print("The response of ManagedClientsApi->get_managed_clients_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClientsApi->get_managed_clients_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-managed-client-v1
Update managed client
Update an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/update-managed-client-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Managed client ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSONPatch payload used to update the object.

### Return type
[**ManagedClient**](../models/managed-client)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated managed client. | ManagedClient |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClientsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClientsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clients.api.managed_clients_api import ManagedClientsApi
from sailpoint.managed_clients.api_client import ApiClient
from sailpoint.managed_clients.models.json_patch_operation import JsonPatchOperation
from sailpoint.managed_clients.models.managed_client import ManagedClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7' # str | Managed client ID. # str | Managed client ID.
    json_patch_operation = '''[sailpoint.managed_clients.JsonPatchOperation()]''' # List[JsonPatchOperation] | JSONPatch payload used to update the object.

    try:
        # Update managed client
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = ManagedClientsApi(api_client).update_managed_client_v1(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = ManagedClientsApi(api_client).update_managed_client_v1(id, new_json_patch_operation)
        print("The response of ManagedClientsApi->update_managed_client_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClientsApi->update_managed_client_v1: %s\n" % e)
```



[[Back to top]](#) 




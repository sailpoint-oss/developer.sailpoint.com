---
id: v2025-connector-customizers
title: Connector_Customizers
pagination_label: Connector_Customizers
sidebar_label: Connector_Customizers
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connector_Customizers', 'V2025Connector_Customizers'] 
slug: /tools/sdk/python/v2025/methods/connector-customizers
tags: ['SDK', 'Software Development Kit', 'Connector_Customizers', 'V2025Connector_Customizers']
---

# sailpoint.v2025.ConnectorCustomizersApi
  Saas Connectivity Customizers are cloud-based connector customizers. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors.

Use these APIs to implement connector customizers functionality.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-customizer**](#create-connector-customizer) | **POST** `/connector-customizers` | Create Connector Customizer
[**create-connector-customizer-version**](#create-connector-customizer-version) | **POST** `/connector-customizers/{id}/versions` | Creates a connector customizer version
[**delete-connector-customizer**](#delete-connector-customizer) | **DELETE** `/connector-customizers/{id}` | Delete Connector Customizer
[**get-connector-customizer**](#get-connector-customizer) | **GET** `/connector-customizers/{id}` | Get connector customizer
[**list-connector-customizers**](#list-connector-customizers) | **GET** `/connector-customizers` | List All Connector Customizers
[**put-connector-customizer**](#put-connector-customizer) | **PUT** `/connector-customizers/{id}` | Update Connector Customizer


## create-connector-customizer
Create Connector Customizer
Create a connector customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-connector-customizer)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | connector_customizer_create_request | [**ConnectorCustomizerCreateRequest**](../models/connector-customizer-create-request) | True  | Connector customizer to create.

### Return type
[**ConnectorCustomizerCreateResponse**](../models/connector-customizer-create-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created connector customizer. | ConnectorCustomizerCreateResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.connector_customizer_create_request import ConnectorCustomizerCreateRequest
from sailpoint.v2025.models.connector_customizer_create_response import ConnectorCustomizerCreateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    connector_customizer_create_request = '''{
          "name" : "My Custom Connector"
        }''' # ConnectorCustomizerCreateRequest | Connector customizer to create.

    try:
        # Create Connector Customizer
        new_connector_customizer_create_request = ConnectorCustomizerCreateRequest.from_json(connector_customizer_create_request)
        results = ConnectorCustomizersApi(api_client).create_connector_customizer(connector_customizer_create_request=new_connector_customizer_create_request)
        # Below is a request that includes all optional parameters
        # results = ConnectorCustomizersApi(api_client).create_connector_customizer(new_connector_customizer_create_request)
        print("The response of ConnectorCustomizersApi->create_connector_customizer:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->create_connector_customizer: %s\n" % e)
```



[[Back to top]](#) 

## create-connector-customizer-version
Creates a connector customizer version
Creates a new version for the customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-connector-customizer-version)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the connector customizer.

### Return type
[**ConnectorCustomizerVersionCreateResponse**](../models/connector-customizer-version-create-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The created connector customizer version object. | ConnectorCustomizerVersionCreateResponse |  -  |
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
from sailpoint.v2025.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.connector_customizer_version_create_response import ConnectorCustomizerVersionCreateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'b07dc46a-1498-4de8-bfbb-259a68e70c8a' # str | The id of the connector customizer. # str | The id of the connector customizer.

    try:
        # Creates a connector customizer version
        
        results = ConnectorCustomizersApi(api_client).create_connector_customizer_version(id=id)
        # Below is a request that includes all optional parameters
        # results = ConnectorCustomizersApi(api_client).create_connector_customizer_version(id)
        print("The response of ConnectorCustomizersApi->create_connector_customizer_version:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->create_connector_customizer_version: %s\n" % e)
```



[[Back to top]](#) 

## delete-connector-customizer
Delete Connector Customizer
Delete the connector customizer for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-connector-customizer)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector customizer to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.v2025.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'b07dc46a-1498-4de8-bfbb-259a68e70c8a' # str | ID of the connector customizer to delete. # str | ID of the connector customizer to delete.

    try:
        # Delete Connector Customizer
        
        ConnectorCustomizersApi(api_client).delete_connector_customizer(id=id)
        # Below is a request that includes all optional parameters
        # ConnectorCustomizersApi(api_client).delete_connector_customizer(id)
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->delete_connector_customizer: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-customizer
Get connector customizer
Gets connector customizer by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-connector-customizer)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector customizer to get.

### Return type
[**ConnectorCustomizersResponse**](../models/connector-customizers-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Connector customizer with the given ID. | ConnectorCustomizersResponse |  -  |
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
from sailpoint.v2025.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.connector_customizers_response import ConnectorCustomizersResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'b07dc46a-1498-4de8-bfbb-259a68e70c8a' # str | ID of the connector customizer to get. # str | ID of the connector customizer to get.

    try:
        # Get connector customizer
        
        results = ConnectorCustomizersApi(api_client).get_connector_customizer(id=id)
        # Below is a request that includes all optional parameters
        # results = ConnectorCustomizersApi(api_client).get_connector_customizer(id)
        print("The response of ConnectorCustomizersApi->get_connector_customizer:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->get_connector_customizer: %s\n" % e)
```



[[Back to top]](#) 

## list-connector-customizers
List All Connector Customizers
List all connector customizers.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-connector-customizers)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[ConnectorCustomizersResponse]**](../models/connector-customizers-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List all connector customizers. | List[ConnectorCustomizersResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.connector_customizers_response import ConnectorCustomizersResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # List All Connector Customizers
        
        results = ConnectorCustomizersApi(api_client).list_connector_customizers()
        # Below is a request that includes all optional parameters
        # results = ConnectorCustomizersApi(api_client).list_connector_customizers(offset, limit)
        print("The response of ConnectorCustomizersApi->list_connector_customizers:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->list_connector_customizers: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-customizer
Update Connector Customizer
Update an existing connector customizer with the one provided in the request body. These fields are immutable: `id`, `name`, `type`.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-connector-customizer)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector customizer to update.
 Body  | connector_customizer_update_request | [**ConnectorCustomizerUpdateRequest**](../models/connector-customizer-update-request) |   (optional) | Connector rule with updated data.

### Return type
[**ConnectorCustomizerUpdateResponse**](../models/connector-customizer-update-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated connector customizer. | ConnectorCustomizerUpdateResponse |  -  |
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
from sailpoint.v2025.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.connector_customizer_update_request import ConnectorCustomizerUpdateRequest
from sailpoint.v2025.models.connector_customizer_update_response import ConnectorCustomizerUpdateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'b07dc46a-1498-4de8-bfbb-259a68e70c8a' # str | ID of the connector customizer to update. # str | ID of the connector customizer to update.
    connector_customizer_update_request = '''{
          "name" : "My Custom Connector"
        }''' # ConnectorCustomizerUpdateRequest | Connector rule with updated data. (optional)

    try:
        # Update Connector Customizer
        
        results = ConnectorCustomizersApi(api_client).put_connector_customizer(id=id)
        # Below is a request that includes all optional parameters
        # results = ConnectorCustomizersApi(api_client).put_connector_customizer(id, new_connector_customizer_update_request)
        print("The response of ConnectorCustomizersApi->put_connector_customizer:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->put_connector_customizer: %s\n" % e)
```



[[Back to top]](#) 




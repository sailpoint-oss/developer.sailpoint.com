# Connector_Customizers

# sailpoint.connector_customizers.ConnectorCustomizersApi
  Saas Connectivity Customizers are cloud-based connector customizers. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors.

Use these APIs to implement connector customizers functionality.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-customizer-v1**](#create-connector-customizer-v1) | **POST** `/connector-customizers/v1` | Create connector customizer
[**create-connector-customizer-version-v1**](#create-connector-customizer-version-v1) | **POST** `/connector-customizers/v1/{id}/versions` | Creates a connector customizer version
[**delete-connector-customizer-v1**](#delete-connector-customizer-v1) | **DELETE** `/connector-customizers/v1/{id}` | Delete connector customizer
[**get-connector-customizer-v1**](#get-connector-customizer-v1) | **GET** `/connector-customizers/v1/{id}` | Get connector customizer
[**list-connector-customizers-v1**](#list-connector-customizers-v1) | **GET** `/connector-customizers/v1` | List all connector customizers
[**put-connector-customizer-v1**](#put-connector-customizer-v1) | **PUT** `/connector-customizers/v1/{id}` | Update connector customizer


## create-connector-customizer-v1
Create connector customizer
Create a connector customizer.

[API Spec](https://developer.sailpoint.com/docs/api/create-connector-customizer-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_customizers.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.connector_customizers.api_client import ApiClient
from sailpoint.connector_customizers.models.connector_customizer_create_request import ConnectorCustomizerCreateRequest
from sailpoint.connector_customizers.models.connector_customizer_create_response import ConnectorCustomizerCreateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    connector_customizer_create_request = '''{
          "name" : "My Custom Connector"
        }''' # ConnectorCustomizerCreateRequest | Connector customizer to create.

    try:
        # Create connector customizer
        new_connector_customizer_create_request = ConnectorCustomizerCreateRequest.from_json(connector_customizer_create_request)
        results = ConnectorCustomizersApi(api_client).create_connector_customizer_v1(connector_customizer_create_request=new_connector_customizer_create_request)
        # Below is a request that includes all optional parameters
        # results = ConnectorCustomizersApi(api_client).create_connector_customizer_v1(new_connector_customizer_create_request)
        print("The response of ConnectorCustomizersApi->create_connector_customizer_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->create_connector_customizer_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-connector-customizer-version-v1
Creates a connector customizer version
Creates a new version for the customizer.

[API Spec](https://developer.sailpoint.com/docs/api/create-connector-customizer-version-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_customizers.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.connector_customizers.api_client import ApiClient
from sailpoint.connector_customizers.models.connector_customizer_version_create_response import ConnectorCustomizerVersionCreateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'b07dc46a-1498-4de8-bfbb-259a68e70c8a' # str | The id of the connector customizer. # str | The id of the connector customizer.

    try:
        # Creates a connector customizer version
        
        results = ConnectorCustomizersApi(api_client).create_connector_customizer_version_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ConnectorCustomizersApi(api_client).create_connector_customizer_version_v1(id)
        print("The response of ConnectorCustomizersApi->create_connector_customizer_version_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->create_connector_customizer_version_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-connector-customizer-v1
Delete connector customizer
Delete the connector customizer for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-connector-customizer-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_customizers.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.connector_customizers.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'b07dc46a-1498-4de8-bfbb-259a68e70c8a' # str | ID of the connector customizer to delete. # str | ID of the connector customizer to delete.

    try:
        # Delete connector customizer
        
        ConnectorCustomizersApi(api_client).delete_connector_customizer_v1(id=id)
        # Below is a request that includes all optional parameters
        # ConnectorCustomizersApi(api_client).delete_connector_customizer_v1(id)
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->delete_connector_customizer_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-customizer-v1
Get connector customizer
Gets connector customizer by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-customizer-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_customizers.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.connector_customizers.api_client import ApiClient
from sailpoint.connector_customizers.models.connector_customizers_response import ConnectorCustomizersResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'b07dc46a-1498-4de8-bfbb-259a68e70c8a' # str | ID of the connector customizer to get. # str | ID of the connector customizer to get.

    try:
        # Get connector customizer
        
        results = ConnectorCustomizersApi(api_client).get_connector_customizer_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ConnectorCustomizersApi(api_client).get_connector_customizer_v1(id)
        print("The response of ConnectorCustomizersApi->get_connector_customizer_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->get_connector_customizer_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-connector-customizers-v1
List all connector customizers
List all connector customizers.

[API Spec](https://developer.sailpoint.com/docs/api/list-connector-customizers-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_customizers.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.connector_customizers.api_client import ApiClient
from sailpoint.connector_customizers.models.connector_customizers_response import ConnectorCustomizersResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # List all connector customizers
        
        results = ConnectorCustomizersApi(api_client).list_connector_customizers_v1()
        # Below is a request that includes all optional parameters
        # results = ConnectorCustomizersApi(api_client).list_connector_customizers_v1(offset, limit)
        print("The response of ConnectorCustomizersApi->list_connector_customizers_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->list_connector_customizers_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-customizer-v1
Update connector customizer
Update an existing connector customizer with the one provided in the request body. These fields are immutable: `id`, `name`, `type`.

[API Spec](https://developer.sailpoint.com/docs/api/put-connector-customizer-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_customizers.api.connector_customizers_api import ConnectorCustomizersApi
from sailpoint.connector_customizers.api_client import ApiClient
from sailpoint.connector_customizers.models.connector_customizer_update_request import ConnectorCustomizerUpdateRequest
from sailpoint.connector_customizers.models.connector_customizer_update_response import ConnectorCustomizerUpdateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'b07dc46a-1498-4de8-bfbb-259a68e70c8a' # str | ID of the connector customizer to update. # str | ID of the connector customizer to update.
    connector_customizer_update_request = '''{
          "name" : "My Custom Connector"
        }''' # ConnectorCustomizerUpdateRequest | Connector rule with updated data. (optional)

    try:
        # Update connector customizer
        
        results = ConnectorCustomizersApi(api_client).put_connector_customizer_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ConnectorCustomizersApi(api_client).put_connector_customizer_v1(id, new_connector_customizer_update_request)
        print("The response of ConnectorCustomizersApi->put_connector_customizer_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorCustomizersApi->put_connector_customizer_v1: %s\n" % e)
```



[[Back to top]](#) 




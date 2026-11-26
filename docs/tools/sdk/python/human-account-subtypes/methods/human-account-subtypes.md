# Human_Account_Subtypes

# sailpoint.human_account_subtypes.HumanAccountSubtypesApi
  Use these APIs to get, create, update, and delete human account subtypes for sources, and to get and update
the account-create configuration of a human account subtype. These APIs are experimental and require the
&#x60;X-SailPoint-Experimental&#x60; header.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-human-account-subtype-v2**](#create-human-account-subtype-v2) | **POST** `/accounts/v2/sources/{sourceId}/subtypes` | Create a human account subtype
[**delete-human-account-subtype-v2**](#delete-human-account-subtype-v2) | **DELETE** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Delete a human account subtype
[**get-human-account-subtype-config-v2**](#get-human-account-subtype-config-v2) | **GET** `/accounts/v2/source-subtypes/{subtypeId}/human-config` | Get human subtype config
[**get-human-account-subtype-v2**](#get-human-account-subtype-v2) | **GET** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Get a human account subtype
[**list-human-account-subtypes-v2**](#list-human-account-subtypes-v2) | **GET** `/accounts/v2/sources/{sourceId}/subtypes` | List human account subtypes
[**update-human-account-subtype-config-v2**](#update-human-account-subtype-config-v2) | **PATCH** `/accounts/v2/source-subtypes/{subtypeId}/human-config` | Update human subtype config
[**update-human-account-subtype-v2**](#update-human-account-subtype-v2) | **PATCH** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Update a human account subtype


## create-human-account-subtype-v2
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
Create a human account subtype
Create a human account subtype for a source.

[API Spec](https://developer.sailpoint.com/docs/api/create-human-account-subtype-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | ID of the source.
 Body  | human_account_subtype_create_request | [**HumanAccountSubtypeCreateRequest**](../models/human-account-subtype-create-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**HumanAccountSubtype**](../models/human-account-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created human account subtype. | HumanAccountSubtype |  * location - URL of the created human account subtype.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
409 | Conflict - Returned if a subtype with the same technical name already exists for the source. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.human_account_subtypes.api.human_account_subtypes_api import HumanAccountSubtypesApi
from sailpoint.human_account_subtypes.api_client import ApiClient
from sailpoint.human_account_subtypes.models.human_account_subtype import HumanAccountSubtype
from sailpoint.human_account_subtypes.models.human_account_subtype_create_request import HumanAccountSubtypeCreateRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | ID of the source. # str | ID of the source.
    human_account_subtype_create_request = '''{
          "default" : false,
          "displayName" : "Contractor",
          "description" : "Contractors with a limited account lifecycle",
          "technicalName" : "contractor"
        }''' # HumanAccountSubtypeCreateRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a human account subtype
        new_human_account_subtype_create_request = HumanAccountSubtypeCreateRequest.from_json(human_account_subtype_create_request)
        results = HumanAccountSubtypesApi(api_client).create_human_account_subtype_v2(source_id=source_id, human_account_subtype_create_request=new_human_account_subtype_create_request)
        # Below is a request that includes all optional parameters
        # results = HumanAccountSubtypesApi(api_client).create_human_account_subtype_v2(source_id, new_human_account_subtype_create_request, x_sail_point_experimental)
        print("The response of HumanAccountSubtypesApi->create_human_account_subtype_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling HumanAccountSubtypesApi->create_human_account_subtype_v2: %s\n" % e)
```



[[Back to top]](#) 

## delete-human-account-subtype-v2
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
Delete a human account subtype
Delete a human account subtype of a source, together with its account-create configuration.

[API Spec](https://developer.sailpoint.com/docs/api/delete-human-account-subtype-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | ID of the source.
Path   | subtype_id | **str** | True  | ID of the human account subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Human account subtype deleted. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
409 | Conflict - Returned if the subtype is in use and cannot be deleted. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.human_account_subtypes.api.human_account_subtypes_api import HumanAccountSubtypesApi
from sailpoint.human_account_subtypes.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | ID of the source. # str | ID of the source.
    subtype_id = '38453251-6be2-5f8f-df93-5ce19e295838' # str | ID of the human account subtype. # str | ID of the human account subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete a human account subtype
        
        HumanAccountSubtypesApi(api_client).delete_human_account_subtype_v2(source_id=source_id, subtype_id=subtype_id)
        # Below is a request that includes all optional parameters
        # HumanAccountSubtypesApi(api_client).delete_human_account_subtype_v2(source_id, subtype_id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling HumanAccountSubtypesApi->delete_human_account_subtype_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-human-account-subtype-config-v2
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
Get human subtype config
Get the account-create configuration of a human account subtype by subtype ID. A subtype with no stored configuration returns the default values.

[API Spec](https://developer.sailpoint.com/docs/api/get-human-account-subtype-config-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | subtype_id | **str** | True  | ID of the human account subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**HumanAccountSubtypeConfig**](../models/human-account-subtype-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Account-create configuration of the human account subtype. | HumanAccountSubtypeConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.human_account_subtypes.api.human_account_subtypes_api import HumanAccountSubtypesApi
from sailpoint.human_account_subtypes.api_client import ApiClient
from sailpoint.human_account_subtypes.models.human_account_subtype_config import HumanAccountSubtypeConfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    subtype_id = '38453251-6be2-5f8f-df93-5ce19e295838' # str | ID of the human account subtype. # str | ID of the human account subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get human subtype config
        
        results = HumanAccountSubtypesApi(api_client).get_human_account_subtype_config_v2(subtype_id=subtype_id)
        # Below is a request that includes all optional parameters
        # results = HumanAccountSubtypesApi(api_client).get_human_account_subtype_config_v2(subtype_id, x_sail_point_experimental)
        print("The response of HumanAccountSubtypesApi->get_human_account_subtype_config_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling HumanAccountSubtypesApi->get_human_account_subtype_config_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-human-account-subtype-v2
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
Get a human account subtype
Get a human account subtype of a source by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-human-account-subtype-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | ID of the source.
Path   | subtype_id | **str** | True  | ID of the human account subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**HumanAccountSubtype**](../models/human-account-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Human account subtype. | HumanAccountSubtype |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.human_account_subtypes.api.human_account_subtypes_api import HumanAccountSubtypesApi
from sailpoint.human_account_subtypes.api_client import ApiClient
from sailpoint.human_account_subtypes.models.human_account_subtype import HumanAccountSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | ID of the source. # str | ID of the source.
    subtype_id = '38453251-6be2-5f8f-df93-5ce19e295838' # str | ID of the human account subtype. # str | ID of the human account subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get a human account subtype
        
        results = HumanAccountSubtypesApi(api_client).get_human_account_subtype_v2(source_id=source_id, subtype_id=subtype_id)
        # Below is a request that includes all optional parameters
        # results = HumanAccountSubtypesApi(api_client).get_human_account_subtype_v2(source_id, subtype_id, x_sail_point_experimental)
        print("The response of HumanAccountSubtypesApi->get_human_account_subtype_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling HumanAccountSubtypesApi->get_human_account_subtype_v2: %s\n" % e)
```



[[Back to top]](#) 

## list-human-account-subtypes-v2
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
List human account subtypes
Get the human account subtypes of a source.

[API Spec](https://developer.sailpoint.com/docs/api/list-human-account-subtypes-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | ID of the source.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) (default to '') | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId**
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[HumanAccountSubtype]**](../models/human-account-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of human account subtypes of the source. | List[HumanAccountSubtype] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.human_account_subtypes.api.human_account_subtypes_api import HumanAccountSubtypesApi
from sailpoint.human_account_subtypes.api_client import ApiClient
from sailpoint.human_account_subtypes.models.human_account_subtype import HumanAccountSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | ID of the source. # str | ID of the source.
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    sorters = '' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId** (optional) (default to '') # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId** (optional) (default to '')
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List human account subtypes
        
        results = HumanAccountSubtypesApi(api_client).list_human_account_subtypes_v2(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = HumanAccountSubtypesApi(api_client).list_human_account_subtypes_v2(source_id, count, limit, offset, sorters, x_sail_point_experimental)
        print("The response of HumanAccountSubtypesApi->list_human_account_subtypes_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling HumanAccountSubtypesApi->list_human_account_subtypes_v2: %s\n" % e)
```



[[Back to top]](#) 

## update-human-account-subtype-config-v2
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
Update human subtype config
Update the account-create configuration of a human account subtype. Only operations under `/humanAccountCreate` are supported.

[API Spec](https://developer.sailpoint.com/docs/api/update-human-account-subtype-config-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | subtype_id | **str** | True  | ID of the human account subtype.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSON Patch operations under `/humanAccountCreate`, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**HumanAccountSubtypeConfig**](../models/human-account-subtype-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated account-create configuration of the human account subtype. | HumanAccountSubtypeConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.human_account_subtypes.api.human_account_subtypes_api import HumanAccountSubtypesApi
from sailpoint.human_account_subtypes.api_client import ApiClient
from sailpoint.human_account_subtypes.models.human_account_subtype_config import HumanAccountSubtypeConfig
from sailpoint.human_account_subtypes.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    subtype_id = '38453251-6be2-5f8f-df93-5ce19e295838' # str | ID of the human account subtype. # str | ID of the human account subtype.
    json_patch_operation = '''[{"op":"replace","path":"/humanAccountCreate/accountCreateEnabled","value":true}]''' # List[JsonPatchOperation] | JSON Patch operations under `/humanAccountCreate`, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update human subtype config
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = HumanAccountSubtypesApi(api_client).update_human_account_subtype_config_v2(subtype_id=subtype_id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = HumanAccountSubtypesApi(api_client).update_human_account_subtype_config_v2(subtype_id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of HumanAccountSubtypesApi->update_human_account_subtype_config_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling HumanAccountSubtypesApi->update_human_account_subtype_config_v2: %s\n" % e)
```



[[Back to top]](#) 

## update-human-account-subtype-v2
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
Update a human account subtype
Update the display name or description of a human account subtype. Only replace operations on `/displayName` and `/description` are supported.

[API Spec](https://developer.sailpoint.com/docs/api/update-human-account-subtype-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | ID of the source.
Path   | subtype_id | **str** | True  | ID of the human account subtype.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSON Patch operations to apply to the subtype, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**HumanAccountSubtype**](../models/human-account-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated human account subtype. | HumanAccountSubtype |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.human_account_subtypes.api.human_account_subtypes_api import HumanAccountSubtypesApi
from sailpoint.human_account_subtypes.api_client import ApiClient
from sailpoint.human_account_subtypes.models.human_account_subtype import HumanAccountSubtype
from sailpoint.human_account_subtypes.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | ID of the source. # str | ID of the source.
    subtype_id = '38453251-6be2-5f8f-df93-5ce19e295838' # str | ID of the human account subtype. # str | ID of the human account subtype.
    json_patch_operation = '''[{"op":"replace","path":"/displayName","value":"Senior Contractor"}]''' # List[JsonPatchOperation] | JSON Patch operations to apply to the subtype, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update a human account subtype
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = HumanAccountSubtypesApi(api_client).update_human_account_subtype_v2(source_id=source_id, subtype_id=subtype_id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = HumanAccountSubtypesApi(api_client).update_human_account_subtype_v2(source_id, subtype_id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of HumanAccountSubtypesApi->update_human_account_subtype_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling HumanAccountSubtypesApi->update_human_account_subtype_v2: %s\n" % e)
```



[[Back to top]](#) 




---
id: v2025-parameter-storage
title: Parameter_Storage
pagination_label: Parameter_Storage
sidebar_label: Parameter_Storage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Parameter_Storage', 'V2025Parameter_Storage'] 
slug: /tools/sdk/python/v2025/methods/parameter-storage
tags: ['SDK', 'Software Development Kit', 'Parameter_Storage', 'V2025Parameter_Storage']
---

# sailpoint.v2025.ParameterStorageApi
  The Parameter Storage is SailPoint&#39;s centralized repository for authentication, authorization, and connection configurations, stored as typed Parameters.

The APIs can be used to input Parameters, which can then be referenced by other services, such as Workflow configurations. When these services are executed, the relevant values are fetched via an internal API (not documented here).

The usage of Parameters can be monitored via References managed by Parameter Storage. References provide an indirect mapping between a Parameter and its usage (e.g., within a Workflow), allowing for reports such as &quot;Parameter X is used in Workflow Y&quot; via APIs.

A Parameter is a named instance of typed configuration, where the state is stored as Fields. These Fields are either Public (cleartext, searchable) or Private (encrypted).

Parameter Types are grouped and fall into three Categories: Authentication, Authorization, and Connection.

Parameters are strongly typed; each Type&#39;s fields are named and exposed to the consumer. This means that if a service states that it expects a Credential Type, it will receive a Parameter with a Username and Password.

Fields are named, typed variables within a Parameter; the Fields on a Parameter depend on the Parameter&#39;s Type. Fields contain customer-provided data that will be referenced by another service, and their typing determines whether they&#39;re stored in cleartext or encrypted.

The Specification documents the supported Categories, Types, Fields, Field Names, and their relationships.

A Reference is an indirect pointer to a Parameter, where each usage of a Parameter has a corresponding Reference. This allows for usage tracking and safe deletion.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-parameter**](#create-parameter) | **POST** `/parameter-storage/parameters` | Add a new parameter.
[**delete-parameter**](#delete-parameter) | **DELETE** `/parameter-storage/parameters/{id}` | Delete a parameter.
[**get-attestation-document**](#get-attestation-document) | **GET** `/parameter-storage/attestation` | Get an attestation document.
[**get-parameter**](#get-parameter) | **GET** `/parameter-storage/parameters/{id}` | Get a specific parameter.
[**get-parameter-references**](#get-parameter-references) | **GET** `/parameter-storage/parameters/{id}/references` | Get parameter references.
[**get-parameter-storage-specification**](#get-parameter-storage-specification) | **GET** `/parameter-storage/specification` | Get specifications for parameter types.
[**search-parameters**](#search-parameters) | **GET** `/parameter-storage/parameters` | Query stored parameters.
[**update-parameter**](#update-parameter) | **PATCH** `/parameter-storage/parameters/{id}` | Update a parameter.


## create-parameter
Add a new parameter.
Add a new parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-parameter)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | parameter_storage_new_parameter | [**ParameterStorageNewParameter**](../models/parameter-storage-new-parameter) |   (optional) | The parameter to add to the store.

### Return type
[**ParameterStorageParameter**](../models/parameter-storage-parameter)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created Parameter. | ParameterStorageParameter |  -  |
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
from sailpoint.v2025.api.parameter_storage_api import ParameterStorageApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.parameter_storage_new_parameter import ParameterStorageNewParameter
from sailpoint.v2025.models.parameter_storage_parameter import ParameterStorageParameter
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    parameter_storage_new_parameter = '''{
          "privateFields" : "ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu",
          "name" : "Credentials for server.",
          "description" : "Credentials for server.",
          "publicFields" : "{\"username\": \"username\"}",
          "ownerId" : "c0b4568a4fe7458c434ee77d1fbt156b",
          "type" : "1.1"
        }''' # ParameterStorageNewParameter | The parameter to add to the store. (optional)

    try:
        # Add a new parameter.
        
        results = ParameterStorageApi(api_client).create_parameter()
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).create_parameter(new_parameter_storage_new_parameter)
        print("The response of ParameterStorageApi->create_parameter:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->create_parameter: %s\n" % e)
```



[[Back to top]](#) 

## delete-parameter
Delete a parameter.
Delete a parameter. Will only delete parameters without existing references.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-parameter)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the parameter to be deleted.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Parameter deleted. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. |  |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json, schema

### Example

```python
from sailpoint.v2025.api.parameter_storage_api import ParameterStorageApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '58de858b-83d9-4563-9e15-7393594c684a' # str | The ID of the parameter to be deleted. # str | The ID of the parameter to be deleted.

    try:
        # Delete a parameter.
        
        ParameterStorageApi(api_client).delete_parameter(id=id)
        # Below is a request that includes all optional parameters
        # ParameterStorageApi(api_client).delete_parameter(id)
    except Exception as e:
        print("Exception when calling ParameterStorageApi->delete_parameter: %s\n" % e)
```



[[Back to top]](#) 

## get-attestation-document
Get an attestation document.
Get an attestation document, and perform x25519 handshake to enabled end-to-end encrypted transport of parameter private fields.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-attestation-document)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | key | **str** | True  | Base64Url encoded public key

### Return type
[**ParameterStorageAttestationDocument**](../models/parameter-storage-attestation-document)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns the attestation document. This contains the public key needed to add a parameter to the store. | ParameterStorageAttestationDocument |  -  |
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
from sailpoint.v2025.api.parameter_storage_api import ParameterStorageApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.parameter_storage_attestation_document import ParameterStorageAttestationDocument
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'cHVibGljIGtleSBnb2VzIGhlcmU=' # str | Base64Url encoded public key # str | Base64Url encoded public key

    try:
        # Get an attestation document.
        
        results = ParameterStorageApi(api_client).get_attestation_document(key=key)
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).get_attestation_document(key)
        print("The response of ParameterStorageApi->get_attestation_document:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->get_attestation_document: %s\n" % e)
```



[[Back to top]](#) 

## get-parameter
Get a specific parameter.
Get a parameter by ID. This will only return the public fields for the parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-parameter)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the parameter to be fetched

### Return type
[**ParameterStorageParameter**](../models/parameter-storage-parameter)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Return Parameter. | ParameterStorageParameter |  -  |
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
from sailpoint.v2025.api.parameter_storage_api import ParameterStorageApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.parameter_storage_parameter import ParameterStorageParameter
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '58de858b-83d9-4563-9e15-7393594c684a' # str | The ID of the parameter to be fetched # str | The ID of the parameter to be fetched

    try:
        # Get a specific parameter.
        
        results = ParameterStorageApi(api_client).get_parameter(id=id)
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).get_parameter(id)
        print("The response of ParameterStorageApi->get_parameter:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->get_parameter: %s\n" % e)
```



[[Back to top]](#) 

## get-parameter-references
Get parameter references.
Get the references for a given parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-parameter-references)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the parameter which you want to fetch the references for.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint**
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[ParameterStorageReference]**](../models/parameter-storage-reference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Return references for given parameter. | List[ParameterStorageReference] |  -  |
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
from sailpoint.v2025.api.parameter_storage_api import ParameterStorageApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.parameter_storage_reference import ParameterStorageReference
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '58de858b-83d9-4563-9e15-7393594c684a' # str | The ID of the parameter which you want to fetch the references for. # str | The ID of the parameter which you want to fetch the references for.
    sorters = 'consumerId,name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # Get parameter references.
        
        results = ParameterStorageApi(api_client).get_parameter_references(id=id)
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).get_parameter_references(id, sorters, limit, offset)
        print("The response of ParameterStorageApi->get_parameter_references:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->get_parameter_references: %s\n" % e)
```



[[Back to top]](#) 

## get-parameter-storage-specification
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
Get specifications for parameter types.
Get the specifications for all parameter types. All parameters must conform to this specification document.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-parameter-storage-specification)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | accept_language | **str** |   (optional) (default to 'en') | The i18n internationalization code for the language that the spec is in. Defaults to english.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns the JSON spec in the language chosen. |  |  -  |
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
from sailpoint.v2025.api.parameter_storage_api import ParameterStorageApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    accept_language = 'en' # str | The i18n internationalization code for the language that the spec is in. Defaults to english. (optional) (default to 'en') # str | The i18n internationalization code for the language that the spec is in. Defaults to english. (optional) (default to 'en')

    try:
        # Get specifications for parameter types.
        
        ParameterStorageApi(api_client).get_parameter_storage_specification()
        # Below is a request that includes all optional parameters
        # ParameterStorageApi(api_client).get_parameter_storage_specification(accept_language)
    except Exception as e:
        print("Exception when calling ParameterStorageApi->get_parameter_storage_specification: %s\n" % e)
```



[[Back to top]](#) 

## search-parameters
Query stored parameters.
Query a stored parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/search-parameters)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt**
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[ParameterStorageParameter]**](../models/parameter-storage-parameter)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Search returned results. | List[ParameterStorageParameter] |  -  |
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
from sailpoint.v2025.api.parameter_storage_api import ParameterStorageApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.parameter_storage_parameter import ParameterStorageParameter
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'id eq 550e8400-e29b-41d4-a716-446655440000' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* (optional)
    sorters = 'type,name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # Query stored parameters.
        
        results = ParameterStorageApi(api_client).search_parameters()
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).search_parameters(filters, sorters, offset, limit)
        print("The response of ParameterStorageApi->search_parameters:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->search_parameters: %s\n" % e)
```



[[Back to top]](#) 

## update-parameter
Update a parameter.
Update a parameter. You cannot change a parameter's type once set. Only the name, owner, description, public fields, and private fields can be updated. Private field updates are made via JWE AES256 encrypted blobs.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-parameter)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the parameter to be updated.
 Body  | parameter_storage_update_parameter | [**ParameterStorageUpdateParameter**](../models/parameter-storage-update-parameter) |   (optional) | The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates.

### Return type
[**ParameterStorageParameter**](../models/parameter-storage-parameter)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Parameter. | ParameterStorageParameter |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. |  |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json, application/json-patch+json
 - **Accept**: application/json, schema

### Example

```python
from sailpoint.v2025.api.parameter_storage_api import ParameterStorageApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.parameter_storage_parameter import ParameterStorageParameter
from sailpoint.v2025.models.parameter_storage_update_parameter import ParameterStorageUpdateParameter
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '58de858b-83d9-4563-9e15-7393594c684a' # str | The ID of the parameter to be updated. # str | The ID of the parameter to be updated.
    parameter_storage_update_parameter = '''{
          "privateFields" : "ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu",
          "name" : "Credentials for server.",
          "description" : "Credentials for server.",
          "publicFields" : "{\"username\": \"username\"}",
          "ownerId" : "c0b4568a4fe7458c434ee77d1fbt156b"
        }{
          "privateFields" : "ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu",
          "name" : "Credentials for server.",
          "description" : "Credentials for server.",
          "publicFields" : "{\"username\": \"username\"}",
          "ownerId" : "c0b4568a4fe7458c434ee77d1fbt156b"
        }''' # ParameterStorageUpdateParameter | The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates. (optional)

    try:
        # Update a parameter.
        
        results = ParameterStorageApi(api_client).update_parameter(id=id)
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).update_parameter(id, new_parameter_storage_update_parameter)
        print("The response of ParameterStorageApi->update_parameter:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->update_parameter: %s\n" % e)
```



[[Back to top]](#) 




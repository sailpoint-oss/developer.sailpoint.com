---
id: parameter-storage
title: Parameter_Storage
pagination_label: Parameter_Storage
sidebar_label: Parameter_Storage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Parameter_Storage', 'Parameter_Storage'] 
slug: /tools/sdk/python/parameter-storage/methods/parameter-storage
tags: ['SDK', 'Software Development Kit', 'Parameter_Storage', 'Parameter_Storage']
---

# sailpoint.parameter_storage.ParameterStorageApi
  The Parameter Storage is SailPoint&#39;s centralized repository for authentication, authorization, and connection configurations, stored as typed Parameters.

The APIs can be used to input Parameters, which can then be referenced by other services, such as Workflow configurations. When these services are executed, the relevant values are fetched via an internal API (not documented here).

The usage of Parameters can be monitored via References managed by Parameter Storage. References provide an indirect mapping between a Parameter and its usage (e.g., within a Workflow), allowing for reports such as &quot;Parameter X is used in Workflow Y&quot; via APIs.

A Parameter is a named instance of typed configuration, where the state is stored as Fields. These Fields are either Public (cleartext, searchable) or Private (encrypted).

Parameter Types are grouped and fall into three Categories: Authentication, Authorization, and Connection.

Parameters are strongly typed; each Type&#39;s fields are named and exposed to the consumer. This means that if a service states that it expects a Credential Type, it will receive a Parameter with a Username and Password.

Fields are named, typed variables within a Parameter; the Fields on a Parameter depend on the Parameter&#39;s Type. Fields contain customer-provided data that will be referenced by another service, and their typing determines whether they&#39;re stored in cleartext or encrypted.

The Specification documents the supported Categories, Types, Fields, Field Names, and their relationships.

A Reference is an indirect pointer to a Parameter, where each usage of a Parameter has a corresponding Reference. This allows for usage tracking and safe deletion.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-parameter-v1**](#create-parameter-v1) | **POST** `/parameter-storage/v1/parameters` | Add a new parameter.
[**delete-parameter-v1**](#delete-parameter-v1) | **DELETE** `/parameter-storage/v1/parameters/{id}` | Delete a parameter.
[**get-attestation-document-v1**](#get-attestation-document-v1) | **GET** `/parameter-storage/v1/attestation` | Get an attestation document.
[**get-parameter-references-v1**](#get-parameter-references-v1) | **GET** `/parameter-storage/v1/parameters/{id}/references` | Get parameter references.
[**get-parameter-storage-specification-v1**](#get-parameter-storage-specification-v1) | **GET** `/parameter-storage/v1/specification` | Get specifications for parameter types.
[**get-parameter-v1**](#get-parameter-v1) | **GET** `/parameter-storage/v1/parameters/{id}` | Get a specific parameter.
[**search-parameters-v1**](#search-parameters-v1) | **GET** `/parameter-storage/v1/parameters` | Query stored parameters.
[**update-parameter-v1**](#update-parameter-v1) | **PATCH** `/parameter-storage/v1/parameters/{id}` | Update a parameter.


## create-parameter-v1
Add a new parameter.
Add a new parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-parameter-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | parameterstoragenewparameter | [**Parameterstoragenewparameter**](../models/parameterstoragenewparameter) |   (optional) | The parameter to add to the store.

### Return type
[**Parameterstorageparameter**](../models/parameterstorageparameter)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created Parameter. | Parameterstorageparameter |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.parameter_storage.api.parameter_storage_api import ParameterStorageApi
from sailpoint.parameter_storage.api_client import ApiClient
from sailpoint.parameter_storage.models.parameterstoragenewparameter import Parameterstoragenewparameter
from sailpoint.parameter_storage.models.parameterstorageparameter import Parameterstorageparameter
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    parameterstoragenewparameter = '''sailpoint.parameter_storage.Parameterstoragenewparameter()''' # Parameterstoragenewparameter | The parameter to add to the store. (optional)

    try:
        # Add a new parameter.
        
        results = ParameterStorageApi(api_client).create_parameter_v1()
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).create_parameter_v1(new_parameterstoragenewparameter)
        print("The response of ParameterStorageApi->create_parameter_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->create_parameter_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-parameter-v1
Delete a parameter.
Delete a parameter. Will only delete parameters without existing references.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-parameter-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | DeleteParameterV1409Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.parameter_storage.api.parameter_storage_api import ParameterStorageApi
from sailpoint.parameter_storage.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '58de858b-83d9-4563-9e15-7393594c684a' # str | The ID of the parameter to be deleted. # str | The ID of the parameter to be deleted.

    try:
        # Delete a parameter.
        
        ParameterStorageApi(api_client).delete_parameter_v1(id=id)
        # Below is a request that includes all optional parameters
        # ParameterStorageApi(api_client).delete_parameter_v1(id)
    except Exception as e:
        print("Exception when calling ParameterStorageApi->delete_parameter_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-attestation-document-v1
Get an attestation document.
Get an attestation document containing a NIST P-384 service public key for an ECDHE handshake, enabling the end-to-end-encrypted transport of parameter private fields.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-attestation-document-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | key | **str** | True  | Base64Url encoded NIST P-384 public key

### Return type
[**Parameterstorageattestationdocument**](../models/parameterstorageattestationdocument)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns the attestation document. This contains the public key needed to add a parameter to the store. | Parameterstorageattestationdocument |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.parameter_storage.api.parameter_storage_api import ParameterStorageApi
from sailpoint.parameter_storage.api_client import ApiClient
from sailpoint.parameter_storage.models.parameterstorageattestationdocument import Parameterstorageattestationdocument
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'BLdV-KA7nSRXx2XkksQX7bmOAShARsB3CCVWodKr4dOJj_puru76wy6drBTVlSytW_rDheLwepm9xdrRuqUI7p81wMP576frFBbsjndBKyRm3eouPbDcW8MAz0XRH1BB3w==' # str | Base64Url encoded NIST P-384 public key # str | Base64Url encoded NIST P-384 public key

    try:
        # Get an attestation document.
        
        results = ParameterStorageApi(api_client).get_attestation_document_v1(key=key)
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).get_attestation_document_v1(key)
        print("The response of ParameterStorageApi->get_attestation_document_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->get_attestation_document_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-parameter-references-v1
Get parameter references.
Get the references for a given parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-parameter-references-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the parameter which you want to fetch the references for.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint**
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Parameterstoragereference]**](../models/parameterstoragereference)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Return references for given parameter. | List[Parameterstoragereference] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.parameter_storage.api.parameter_storage_api import ParameterStorageApi
from sailpoint.parameter_storage.api_client import ApiClient
from sailpoint.parameter_storage.models.parameterstoragereference import Parameterstoragereference
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '58de858b-83d9-4563-9e15-7393594c684a' # str | The ID of the parameter which you want to fetch the references for. # str | The ID of the parameter which you want to fetch the references for.
    sorters = 'consumerId,name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # Get parameter references.
        
        results = ParameterStorageApi(api_client).get_parameter_references_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).get_parameter_references_v1(id, sorters, limit, offset)
        print("The response of ParameterStorageApi->get_parameter_references_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->get_parameter_references_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-parameter-storage-specification-v1
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-parameter-storage-specification-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.parameter_storage.api.parameter_storage_api import ParameterStorageApi
from sailpoint.parameter_storage.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    accept_language = 'en' # str | The i18n internationalization code for the language that the spec is in. Defaults to english. (optional) (default to 'en') # str | The i18n internationalization code for the language that the spec is in. Defaults to english. (optional) (default to 'en')

    try:
        # Get specifications for parameter types.
        
        ParameterStorageApi(api_client).get_parameter_storage_specification_v1()
        # Below is a request that includes all optional parameters
        # ParameterStorageApi(api_client).get_parameter_storage_specification_v1(accept_language)
    except Exception as e:
        print("Exception when calling ParameterStorageApi->get_parameter_storage_specification_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-parameter-v1
Get a specific parameter.
Get a parameter by ID. This will only return the public fields for the parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-parameter-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the parameter to be fetched

### Return type
[**Parameterstorageparameter**](../models/parameterstorageparameter)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Return Parameter. | Parameterstorageparameter |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.parameter_storage.api.parameter_storage_api import ParameterStorageApi
from sailpoint.parameter_storage.api_client import ApiClient
from sailpoint.parameter_storage.models.parameterstorageparameter import Parameterstorageparameter
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '58de858b-83d9-4563-9e15-7393594c684a' # str | The ID of the parameter to be fetched # str | The ID of the parameter to be fetched

    try:
        # Get a specific parameter.
        
        results = ParameterStorageApi(api_client).get_parameter_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).get_parameter_v1(id)
        print("The response of ParameterStorageApi->get_parameter_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->get_parameter_v1: %s\n" % e)
```



[[Back to top]](#) 

## search-parameters-v1
Query stored parameters.
Query a stored parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-parameters-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt**
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Parameterstorageparameter]**](../models/parameterstorageparameter)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Search returned results. | List[Parameterstorageparameter] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.parameter_storage.api.parameter_storage_api import ParameterStorageApi
from sailpoint.parameter_storage.api_client import ApiClient
from sailpoint.parameter_storage.models.parameterstorageparameter import Parameterstorageparameter
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'id eq 550e8400-e29b-41d4-a716-446655440000' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* (optional)
    sorters = 'type,name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # Query stored parameters.
        
        results = ParameterStorageApi(api_client).search_parameters_v1()
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).search_parameters_v1(filters, sorters, offset, limit)
        print("The response of ParameterStorageApi->search_parameters_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->search_parameters_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-parameter-v1
Update a parameter.
Update a parameter. You cannot change a parameter's type once set. Only the name, owner, description, public fields, and private fields can be updated. Private field updates are made via JWE AES256 encrypted blobs.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-parameter-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the parameter to be updated.
 Body  | parameterstorageupdateparameter | [**Parameterstorageupdateparameter**](../models/parameterstorageupdateparameter) |   (optional) | The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates.

### Return type
[**Parameterstorageparameter**](../models/parameterstorageparameter)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Parameter. | Parameterstorageparameter |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAttestationDocumentV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | DeleteParameterV1409Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAttestationDocumentV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json, application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.parameter_storage.api.parameter_storage_api import ParameterStorageApi
from sailpoint.parameter_storage.api_client import ApiClient
from sailpoint.parameter_storage.models.parameterstorageparameter import Parameterstorageparameter
from sailpoint.parameter_storage.models.parameterstorageupdateparameter import Parameterstorageupdateparameter
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '58de858b-83d9-4563-9e15-7393594c684a' # str | The ID of the parameter to be updated. # str | The ID of the parameter to be updated.
    parameterstorageupdateparameter = '''sailpoint.parameter_storage.Parameterstorageupdateparameter()''' # Parameterstorageupdateparameter | The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates. (optional)

    try:
        # Update a parameter.
        
        results = ParameterStorageApi(api_client).update_parameter_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ParameterStorageApi(api_client).update_parameter_v1(id, new_parameterstorageupdateparameter)
        print("The response of ParameterStorageApi->update_parameter_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ParameterStorageApi->update_parameter_v1: %s\n" % e)
```



[[Back to top]](#) 




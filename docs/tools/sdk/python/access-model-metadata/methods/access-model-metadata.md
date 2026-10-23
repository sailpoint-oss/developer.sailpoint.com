# Access_Model_Metadata

# sailpoint.access_model_metadata.AccessModelMetadataApi
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement, role, and access profile metadata.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-attribute-v1**](#create-access-model-metadata-attribute-v1) | **POST** `/access-model-metadata/v1/attributes` | Create access model metadata attribute
[**create-access-model-metadata-attribute-value-v1**](#create-access-model-metadata-attribute-value-v1) | **POST** `/access-model-metadata/v1/attributes/{key}/values` | Create access model metadata value
[**delete-access-model-metadata-attribute-v1**](#delete-access-model-metadata-attribute-v1) | **DELETE** `/access-model-metadata/v1/attributes/{key}` | Delete access model metadata attribute
[**delete-access-model-metadata-attribute-value-v1**](#delete-access-model-metadata-attribute-value-v1) | **DELETE** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Delete access model metadata value
[**get-access-model-metadata-attribute-v1**](#get-access-model-metadata-attribute-v1) | **GET** `/access-model-metadata/v1/attributes/{key}` | Get access model metadata attribute
[**get-access-model-metadata-attribute-value-v1**](#get-access-model-metadata-attribute-value-v1) | **GET** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Get access model metadata value
[**list-access-model-metadata-attribute-v1**](#list-access-model-metadata-attribute-v1) | **GET** `/access-model-metadata/v1/attributes` | List access model metadata attributes
[**list-access-model-metadata-attribute-value-v1**](#list-access-model-metadata-attribute-value-v1) | **GET** `/access-model-metadata/v1/attributes/{key}/values` | List access model metadata values
[**update-access-model-metadata-attribute-v1**](#update-access-model-metadata-attribute-v1) | **PATCH** `/access-model-metadata/v1/attributes/{key}` | Update access model metadata attribute
[**update-access-model-metadata-attribute-value-v1**](#update-access-model-metadata-attribute-value-v1) | **PATCH** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Update access model metadata value
[**update-access-model-metadata-by-filter-v1**](#update-access-model-metadata-by-filter-v1) | **POST** `/access-model-metadata/v1/bulk-update/filter` | Metadata Attribute update by filter
[**update-access-model-metadata-by-ids-v1**](#update-access-model-metadata-by-ids-v1) | **POST** `/access-model-metadata/v1/bulk-update/ids` | Metadata Attribute update by ids
[**update-access-model-metadata-by-query-v1**](#update-access-model-metadata-by-query-v1) | **POST** `/access-model-metadata/v1/bulk-update/query` | Metadata Attribute update by query


## create-access-model-metadata-attribute-v1
Create access model metadata attribute
Create a new Access Model Metadata Attribute.

The **isAdhoc** field can be set on creation to indicate whether the Attribute supports ad-hoc
(dynamically created) values in addition to static values; if omitted, it defaults to *false*.

Any **values** provided at creation time must each have a *type* of *static* (or omit/leave *type*
blank); *adhoc* is not an allowed value on this public API and results in a *400* error. Ad-hoc
values are created dynamically through an internal service-to-service flow, not through this API.


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | attribute_dto | [**AttributeDTO**](../models/attribute-dto) | True  | Attribute to create

### Return type
[**AttributeDTO**](../models/attribute-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created | AttributeDTO |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attribute_dto import AttributeDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    attribute_dto = '''{
          "multiselect" : false,
          "isAdhoc" : false,
          "values" : [ {
            "name" : "Public",
            "type" : "static",
            "value" : "public",
            "status" : "active"
          }, {
            "name" : "Public",
            "type" : "static",
            "value" : "public",
            "status" : "active"
          } ],
          "name" : "Privacy",
          "description" : "Specifies the level of privacy associated with an access item.",
          "type" : "governance",
          "objectTypes" : [ "entitlement" ],
          "key" : "iscPrivacy",
          "status" : "active"
        }''' # AttributeDTO | Attribute to create

    try:
        # Create access model metadata attribute
        new_attribute_dto = AttributeDto.from_json(attribute_dto)
        results = AccessModelMetadataApi(api_client).create_access_model_metadata_attribute_v1(attribute_dto=new_attribute_dto)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).create_access_model_metadata_attribute_v1(new_attribute_dto)
        print("The response of AccessModelMetadataApi->create_access_model_metadata_attribute_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->create_access_model_metadata_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-access-model-metadata-attribute-value-v1
Create access model metadata value
Create a new value for an existing Access Model Metadata Attribute.

The **type** field must be omitted, blank, or *static* (case-insensitive); *adhoc* is not an
allowed value on this public API and results in a *400* error. Ad-hoc values are created
dynamically through an internal service-to-service flow when the parent Attribute has *isAdhoc*
set to *true*, not through this API.


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-value-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
 Body  | attribute_value_dto | [**AttributeValueDTO**](../models/attribute-value-dto) | True  | Attribute value to create

### Return type
[**AttributeValueDTO**](../models/attribute-value-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created | AttributeValueDTO |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attribute_value_dto import AttributeValueDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    attribute_value_dto = '''{
          "name" : "Public",
          "type" : "static",
          "value" : "public",
          "status" : "active"
        }''' # AttributeValueDTO | Attribute value to create

    try:
        # Create access model metadata value
        new_attribute_value_dto = AttributeValueDto.from_json(attribute_value_dto)
        results = AccessModelMetadataApi(api_client).create_access_model_metadata_attribute_value_v1(key=key, attribute_value_dto=new_attribute_value_dto)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).create_access_model_metadata_attribute_value_v1(key, new_attribute_value_dto)
        print("The response of AccessModelMetadataApi->create_access_model_metadata_attribute_value_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->create_access_model_metadata_attribute_value_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-access-model-metadata-attribute-v1
Delete access model metadata attribute
Delete an existing Access Model Metadata Attribute and all of its values.


[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-attribute-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.

### Return type
[**TrackerKeyDTO**](../models/tracker-key-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK - Attribute deleted successfully | TrackerKeyDTO |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
410 | Gone - returned if the requested operation is not yet available for your tenant because the underlying capability is still being rolled out. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.tracker_key_dto import TrackerKeyDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.

    try:
        # Delete access model metadata attribute
        
        results = AccessModelMetadataApi(api_client).delete_access_model_metadata_attribute_v1(key=key)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).delete_access_model_metadata_attribute_v1(key)
        print("The response of AccessModelMetadataApi->delete_access_model_metadata_attribute_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->delete_access_model_metadata_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-access-model-metadata-attribute-value-v1
Delete access model metadata value
Delete an existing Access Model Metadata Attribute Value.


[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-attribute-value-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
Path   | value | **str** | True  | Technical name of the Attribute value.

### Return type
[**TrackerValueDTO**](../models/tracker-value-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK - Attribute value deleted successfully | TrackerValueDTO |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
410 | Gone - returned if the requested operation is not yet available for your tenant because the underlying capability is still being rolled out. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.tracker_value_dto import TrackerValueDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    value = 'public' # str | Technical name of the Attribute value. # str | Technical name of the Attribute value.

    try:
        # Delete access model metadata value
        
        results = AccessModelMetadataApi(api_client).delete_access_model_metadata_attribute_value_v1(key=key, value=value)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).delete_access_model_metadata_attribute_value_v1(key, value)
        print("The response of AccessModelMetadataApi->delete_access_model_metadata_attribute_value_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->delete_access_model_metadata_attribute_value_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-model-metadata-attribute-v1
Get access model metadata attribute
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.

### Return type
[**AttributeDTO**](../models/attribute-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | AttributeDTO |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attribute_dto import AttributeDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.

    try:
        # Get access model metadata attribute
        
        results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute_v1(key=key)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute_v1(key)
        print("The response of AccessModelMetadataApi->get_access_model_metadata_attribute_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->get_access_model_metadata_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-model-metadata-attribute-value-v1
Get access model metadata value
Get single Access Model Metadata Attribute Value

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-value-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
Path   | value | **str** | True  | Technical name of the Attribute value.

### Return type
[**AttributeValueDTO**](../models/attribute-value-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | AttributeValueDTO |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attribute_value_dto import AttributeValueDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    value = 'public' # str | Technical name of the Attribute value. # str | Technical name of the Attribute value.

    try:
        # Get access model metadata value
        
        results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute_value_v1(key=key, value=value)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute_value_v1(key, value)
        print("The response of AccessModelMetadataApi->get_access_model_metadata_attribute_value_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->get_access_model_metadata_attribute_value_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-access-model-metadata-attribute-v1
List access model metadata attributes
Get a list of Access Model Metadata Attributes. Supports pagination through limit and offset parameters.

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, co*  **name**: *eq, co*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, type, status**
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[AttributeDTO]**](../models/attribute-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | List[AttributeDTO] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attribute_dto import AttributeDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'name eq \"Privacy\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, co*  **name**: *eq, co*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, co*  **name**: *eq, co*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional)
    sorters = 'name,-key' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, type, status** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, type, status** (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List access model metadata attributes
        
        results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_v1()
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_v1(filters, sorters, limit, offset, count)
        print("The response of AccessModelMetadataApi->list_access_model_metadata_attribute_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->list_access_model_metadata_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-access-model-metadata-attribute-value-v1
List access model metadata values
Get a list of Access Model Metadata Attribute Values. Supports pagination through limit and offset parameters.

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-value-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, co*  **name**: *eq, co*  **status**: *eq*  **type**: *eq*  Supported composite operators are *and, or*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **value, name, status, type**
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[AttributeValueDTO]**](../models/attribute-value-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | List[AttributeValueDTO] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attribute_value_dto import AttributeValueDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    filters = 'name eq \"Public\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, co*  **name**: *eq, co*  **status**: *eq*  **type**: *eq*  Supported composite operators are *and, or* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, co*  **name**: *eq, co*  **status**: *eq*  **type**: *eq*  Supported composite operators are *and, or* (optional)
    sorters = 'name,-value' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **value, name, status, type** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **value, name, status, type** (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List access model metadata values
        
        results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_value_v1(key=key)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_value_v1(key, filters, sorters, limit, offset, count)
        print("The response of AccessModelMetadataApi->list_access_model_metadata_attribute_value_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->list_access_model_metadata_attribute_value_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-access-model-metadata-attribute-v1
Update access model metadata attribute
Update an existing Access Model Metadata Attribute.  
The following fields are patchable: **name**, **description**, **multiselect**, **isAdhoc**, **values**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSON Patch array to apply

### Return type
[**AttributeDTO**](../models/attribute-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK - Attribute updated successfully | AttributeDTO |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attribute_dto import AttributeDTO
from sailpoint.access_model_metadata.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    json_patch_operation = '''[sailpoint.access_model_metadata.JsonPatchOperation()]''' # List[JsonPatchOperation] | JSON Patch array to apply

    try:
        # Update access model metadata attribute
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_attribute_v1(key=key, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_attribute_v1(key, new_json_patch_operation)
        print("The response of AccessModelMetadataApi->update_access_model_metadata_attribute_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->update_access_model_metadata_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-access-model-metadata-attribute-value-v1
Update access model metadata value
Update an existing Access Model Metadata Attribute Value.    
The following fields are patchable: **name**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-value-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
Path   | value | **str** | True  | Technical name of the Attribute value.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSON Patch array to apply

### Return type
[**AttributeValueDTO**](../models/attribute-value-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK - Attribute value updated successfully | AttributeValueDTO |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attribute_value_dto import AttributeValueDTO
from sailpoint.access_model_metadata.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    value = 'public' # str | Technical name of the Attribute value. # str | Technical name of the Attribute value.
    json_patch_operation = '''[sailpoint.access_model_metadata.JsonPatchOperation()]''' # List[JsonPatchOperation] | JSON Patch array to apply

    try:
        # Update access model metadata value
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_attribute_value_v1(key=key, value=value, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_attribute_value_v1(key, value, new_json_patch_operation)
        print("The response of AccessModelMetadataApi->update_access_model_metadata_attribute_value_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->update_access_model_metadata_attribute_value_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-access-model-metadata-by-filter-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by filter
Bulk update Access Model Metadata Attribute Values using a filter

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-filter-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlement_attribute_bulk_update_filter_request | [**EntitlementAttributeBulkUpdateFilterRequest**](../models/entitlement-attribute-bulk-update-filter-request) | True  | Attribute metadata bulk update request body.

### Return type
[**AccessModelMetadataBulkUpdateResponse**](../models/access-model-metadata-bulk-update-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | AccessModelMetadataBulkUpdateResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.access_model_metadata_bulk_update_response import AccessModelMetadataBulkUpdateResponse
from sailpoint.access_model_metadata.models.entitlement_attribute_bulk_update_filter_request import EntitlementAttributeBulkUpdateFilterRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    entitlement_attribute_bulk_update_filter_request = '''{
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "filters" : "id eq 2c9180867817ac4d017817c491119a20",
          "replaceScope" : "attribute",
          "operation" : "add"
        }''' # EntitlementAttributeBulkUpdateFilterRequest | Attribute metadata bulk update request body.

    try:
        # Metadata Attribute update by filter
        new_entitlement_attribute_bulk_update_filter_request = EntitlementAttributeBulkUpdateFilterRequest.from_json(entitlement_attribute_bulk_update_filter_request)
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_filter_v1(entitlement_attribute_bulk_update_filter_request=new_entitlement_attribute_bulk_update_filter_request)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_filter_v1(new_entitlement_attribute_bulk_update_filter_request)
        print("The response of AccessModelMetadataApi->update_access_model_metadata_by_filter_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->update_access_model_metadata_by_filter_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-access-model-metadata-by-ids-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by ids
Bulk update Access Model Metadata Attribute Values using ids.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-ids-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlement_attribute_bulk_update_ids_request | [**EntitlementAttributeBulkUpdateIdsRequest**](../models/entitlement-attribute-bulk-update-ids-request) | True  | Attribute metadata bulk update request body.

### Return type
[**AccessModelMetadataBulkUpdateResponse**](../models/access-model-metadata-bulk-update-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | AccessModelMetadataBulkUpdateResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.access_model_metadata_bulk_update_response import AccessModelMetadataBulkUpdateResponse
from sailpoint.access_model_metadata.models.entitlement_attribute_bulk_update_ids_request import EntitlementAttributeBulkUpdateIdsRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    entitlement_attribute_bulk_update_ids_request = '''{
          "entitlements" : [ "2c9180867817ac4d017817c491119a20", "2c9180867817ac4d017817c491119a21" ],
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "attribute",
          "operation" : "add"
        }''' # EntitlementAttributeBulkUpdateIdsRequest | Attribute metadata bulk update request body.

    try:
        # Metadata Attribute update by ids
        new_entitlement_attribute_bulk_update_ids_request = EntitlementAttributeBulkUpdateIdsRequest.from_json(entitlement_attribute_bulk_update_ids_request)
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_ids_v1(entitlement_attribute_bulk_update_ids_request=new_entitlement_attribute_bulk_update_ids_request)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_ids_v1(new_entitlement_attribute_bulk_update_ids_request)
        print("The response of AccessModelMetadataApi->update_access_model_metadata_by_ids_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->update_access_model_metadata_by_ids_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-access-model-metadata-by-query-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by query
Bulk update Access Model Metadata Attribute Values using a query

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-query-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlement_attribute_bulk_update_query_request | [**EntitlementAttributeBulkUpdateQueryRequest**](../models/entitlement-attribute-bulk-update-query-request) | True  | Attribute metadata bulk update request body.

### Return type
[**AccessModelMetadataBulkUpdateResponse**](../models/access-model-metadata-bulk-update-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | AccessModelMetadataBulkUpdateResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.access_model_metadata_bulk_update_response import AccessModelMetadataBulkUpdateResponse
from sailpoint.access_model_metadata.models.entitlement_attribute_bulk_update_query_request import EntitlementAttributeBulkUpdateQueryRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    entitlement_attribute_bulk_update_query_request = '''{
          "query" : {
            "queryDsl" : {
              "match" : {
                "name" : "john.doe"
              }
            },
            "aggregationType" : "DSL",
            "aggregationsVersion" : "",
            "query" : {
              "query" : "name:a*",
              "timeZone" : "America/Chicago",
              "fields" : "[\"firstName,lastName,email\"]",
              "innerHit" : {
                "query" : "source.name:\\\"Active Directory\\\"",
                "type" : "access"
              }
            },
            "aggregationsDsl" : { },
            "sort" : [ "displayName", "+id" ],
            "filters" : { },
            "queryVersion" : "",
            "queryType" : "SAILPOINT",
            "includeNested" : true,
            "queryResultFilter" : {
              "excludes" : [ "stacktrace" ],
              "includes" : [ "name", "displayName" ]
            },
            "indices" : [ "identities" ],
            "typeAheadQuery" : {
              "field" : "source.name",
              "size" : 100,
              "query" : "Work",
              "sortByValue" : true,
              "nestedType" : "access",
              "sort" : "asc",
              "maxExpansions" : 10
            },
            "textQuery" : {
              "contains" : true,
              "terms" : [ "The quick brown fox", "3141592", "7" ],
              "matchAny" : false,
              "fields" : [ "displayName", "employeeNumber", "roleCount" ]
            },
            "searchAfter" : [ "John Doe", "2c91808375d8e80a0175e1f88a575221" ],
            "aggregations" : {
              "filter" : {
                "field" : "access.type",
                "name" : "Entitlements",
                "type" : "TERM",
                "value" : "ENTITLEMENT"
              },
              "bucket" : {
                "field" : "attributes.city",
                "size" : 100,
                "minDocCount" : 2,
                "name" : "Identity Locations",
                "type" : "TERMS"
              },
              "metric" : {
                "field" : "@access.name",
                "name" : "Access Name Count",
                "type" : "COUNT"
              },
              "subAggregation" : {
                "filter" : {
                  "field" : "access.type",
                  "name" : "Entitlements",
                  "type" : "TERM",
                  "value" : "ENTITLEMENT"
                },
                "bucket" : {
                  "field" : "attributes.city",
                  "size" : 100,
                  "minDocCount" : 2,
                  "name" : "Identity Locations",
                  "type" : "TERMS"
                },
                "metric" : {
                  "field" : "@access.name",
                  "name" : "Access Name Count",
                  "type" : "COUNT"
                },
                "subAggregation" : {
                  "filter" : {
                    "field" : "access.type",
                    "name" : "Entitlements",
                    "type" : "TERM",
                    "value" : "ENTITLEMENT"
                  },
                  "bucket" : {
                    "field" : "attributes.city",
                    "size" : 100,
                    "minDocCount" : 2,
                    "name" : "Identity Locations",
                    "type" : "TERMS"
                  },
                  "metric" : {
                    "field" : "@access.name",
                    "name" : "Access Name Count",
                    "type" : "COUNT"
                  },
                  "nested" : {
                    "name" : "id",
                    "type" : "access"
                  }
                },
                "nested" : {
                  "name" : "id",
                  "type" : "access"
                }
              },
              "nested" : {
                "name" : "id",
                "type" : "access"
              }
            }
          },
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "attribute",
          "operation" : "add"
        }''' # EntitlementAttributeBulkUpdateQueryRequest | Attribute metadata bulk update request body.

    try:
        # Metadata Attribute update by query
        new_entitlement_attribute_bulk_update_query_request = EntitlementAttributeBulkUpdateQueryRequest.from_json(entitlement_attribute_bulk_update_query_request)
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_query_v1(entitlement_attribute_bulk_update_query_request=new_entitlement_attribute_bulk_update_query_request)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_query_v1(new_entitlement_attribute_bulk_update_query_request)
        print("The response of AccessModelMetadataApi->update_access_model_metadata_by_query_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->update_access_model_metadata_by_query_v1: %s\n" % e)
```



[[Back to top]](#) 




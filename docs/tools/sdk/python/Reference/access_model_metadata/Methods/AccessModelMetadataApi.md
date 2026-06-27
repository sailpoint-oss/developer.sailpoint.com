---
id: access-model-metadata
title: Access_Model_Metadata
pagination_label: Access_Model_Metadata
sidebar_label: Access_Model_Metadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Access_Model_Metadata', 'Access_Model_Metadata'] 
slug: /tools/sdk/python/access-model-metadata/methods/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'Access_Model_Metadata', 'Access_Model_Metadata']
---

# sailpoint.access_model_metadata.AccessModelMetadataApi
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement metadata. Support for role and access profile metadata will be introduced in a subsequent release.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-attribute-v1**](#create-access-model-metadata-attribute-v1) | **POST** `/access-model-metadata/v1/attributes` | Create access model metadata attribute
[**create-access-model-metadata-attribute-value-v1**](#create-access-model-metadata-attribute-value-v1) | **POST** `/access-model-metadata/v1/attributes/{key}/values` | Create access model metadata value
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


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-access-model-metadata-attribute-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | attributedto | [**Attributedto**](../models/attributedto) | True  | Attribute to create

### Return type
[**Attributedto**](../models/attributedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created | Attributedto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attributedto import Attributedto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    attributedto = '''sailpoint.access_model_metadata.Attributedto()''' # Attributedto | Attribute to create

    try:
        # Create access model metadata attribute
        new_attributedto = Attributedto.from_json(attributedto)
        results = AccessModelMetadataApi(api_client).create_access_model_metadata_attribute_v1(attributedto=new_attributedto)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).create_access_model_metadata_attribute_v1(new_attributedto)
        print("The response of AccessModelMetadataApi->create_access_model_metadata_attribute_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->create_access_model_metadata_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-access-model-metadata-attribute-value-v1
Create access model metadata value
Create a new value for an existing Access Model Metadata Attribute.    


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-access-model-metadata-attribute-value-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
 Body  | attributevaluedto | [**Attributevaluedto**](../models/attributevaluedto) | True  | Attribute value to create

### Return type
[**Attributevaluedto**](../models/attributevaluedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created | Attributevaluedto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attributevaluedto import Attributevaluedto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    attributevaluedto = '''sailpoint.access_model_metadata.Attributevaluedto()''' # Attributevaluedto | Attribute value to create

    try:
        # Create access model metadata value
        new_attributevaluedto = Attributevaluedto.from_json(attributevaluedto)
        results = AccessModelMetadataApi(api_client).create_access_model_metadata_attribute_value_v1(key=key, attributevaluedto=new_attributevaluedto)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).create_access_model_metadata_attribute_value_v1(key, new_attributevaluedto)
        print("The response of AccessModelMetadataApi->create_access_model_metadata_attribute_value_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->create_access_model_metadata_attribute_value_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-model-metadata-attribute-v1
Get access model metadata attribute
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-model-metadata-attribute-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.

### Return type
[**Attributedto**](../models/attributedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | Attributedto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attributedto import Attributedto
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-model-metadata-attribute-value-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
Path   | value | **str** | True  | Technical name of the Attribute value.

### Return type
[**Attributevaluedto**](../models/attributevaluedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | Attributevaluedto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attributevaluedto import Attributevaluedto
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
Get a list of Access Model Metadata Attributes

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-access-model-metadata-attribute-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key**
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Attributedto]**](../models/attributedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | List[Attributedto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attributedto import Attributedto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'name eq \"Privacy\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional)
    sorters = 'name,-key' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List access model metadata attributes
        
        results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_v1()
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_v1(filters, sorters, limit, count)
        print("The response of AccessModelMetadataApi->list_access_model_metadata_attribute_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->list_access_model_metadata_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-access-model-metadata-attribute-value-v1
List access model metadata values
Get a list of Access Model Metadata Attribute Values

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-access-model-metadata-attribute-value-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Attributevaluedto]**](../models/attributevaluedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | List[Attributevaluedto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attributevaluedto import Attributevaluedto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List access model metadata values
        
        results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_value_v1(key=key)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_value_v1(key, limit, count)
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
The following fields are patchable: **name**, **description**, **multiselect**, **values**


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-attribute-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | JSON Patch array to apply

### Return type
[**Attributedto**](../models/attributedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK - Attribute updated successfully | Attributedto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attributedto import Attributedto
from sailpoint.access_model_metadata.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    jsonpatchoperation = '''[sailpoint.access_model_metadata.Jsonpatchoperation()]''' # List[Jsonpatchoperation] | JSON Patch array to apply

    try:
        # Update access model metadata attribute
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_attribute_v1(key=key, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_attribute_v1(key, new_jsonpatchoperation)
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


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-attribute-value-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
Path   | value | **str** | True  | Technical name of the Attribute value.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | JSON Patch array to apply

### Return type
[**Attributevaluedto**](../models/attributevaluedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK - Attribute value updated successfully | Attributevaluedto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.attributevaluedto import Attributevaluedto
from sailpoint.access_model_metadata.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    value = 'public' # str | Technical name of the Attribute value. # str | Technical name of the Attribute value.
    jsonpatchoperation = '''[sailpoint.access_model_metadata.Jsonpatchoperation()]''' # List[Jsonpatchoperation] | JSON Patch array to apply

    try:
        # Update access model metadata value
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_attribute_value_v1(key=key, value=value, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_attribute_value_v1(key, value, new_jsonpatchoperation)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-by-filter-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlementattributebulkupdatefilterrequest | [**Entitlementattributebulkupdatefilterrequest**](../models/entitlementattributebulkupdatefilterrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Accessmodelmetadatabulkupdateresponse**](../models/accessmodelmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | Accessmodelmetadatabulkupdateresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.accessmodelmetadatabulkupdateresponse import Accessmodelmetadatabulkupdateresponse
from sailpoint.access_model_metadata.models.entitlementattributebulkupdatefilterrequest import Entitlementattributebulkupdatefilterrequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    entitlementattributebulkupdatefilterrequest = '''sailpoint.access_model_metadata.Entitlementattributebulkupdatefilterrequest()''' # Entitlementattributebulkupdatefilterrequest | Attribute metadata bulk update request body.

    try:
        # Metadata Attribute update by filter
        new_entitlementattributebulkupdatefilterrequest = Entitlementattributebulkupdatefilterrequest.from_json(entitlementattributebulkupdatefilterrequest)
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_filter_v1(entitlementattributebulkupdatefilterrequest=new_entitlementattributebulkupdatefilterrequest)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_filter_v1(new_entitlementattributebulkupdatefilterrequest)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-by-ids-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlementattributebulkupdateidsrequest | [**Entitlementattributebulkupdateidsrequest**](../models/entitlementattributebulkupdateidsrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Accessmodelmetadatabulkupdateresponse**](../models/accessmodelmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | Accessmodelmetadatabulkupdateresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.accessmodelmetadatabulkupdateresponse import Accessmodelmetadatabulkupdateresponse
from sailpoint.access_model_metadata.models.entitlementattributebulkupdateidsrequest import Entitlementattributebulkupdateidsrequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    entitlementattributebulkupdateidsrequest = '''sailpoint.access_model_metadata.Entitlementattributebulkupdateidsrequest()''' # Entitlementattributebulkupdateidsrequest | Attribute metadata bulk update request body.

    try:
        # Metadata Attribute update by ids
        new_entitlementattributebulkupdateidsrequest = Entitlementattributebulkupdateidsrequest.from_json(entitlementattributebulkupdateidsrequest)
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_ids_v1(entitlementattributebulkupdateidsrequest=new_entitlementattributebulkupdateidsrequest)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_ids_v1(new_entitlementattributebulkupdateidsrequest)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-by-query-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlementattributebulkupdatequeryrequest | [**Entitlementattributebulkupdatequeryrequest**](../models/entitlementattributebulkupdatequeryrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Accessmodelmetadatabulkupdateresponse**](../models/accessmodelmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | Accessmodelmetadatabulkupdateresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttributeV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttributeV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_model_metadata.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.access_model_metadata.api_client import ApiClient
from sailpoint.access_model_metadata.models.accessmodelmetadatabulkupdateresponse import Accessmodelmetadatabulkupdateresponse
from sailpoint.access_model_metadata.models.entitlementattributebulkupdatequeryrequest import Entitlementattributebulkupdatequeryrequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    entitlementattributebulkupdatequeryrequest = '''sailpoint.access_model_metadata.Entitlementattributebulkupdatequeryrequest()''' # Entitlementattributebulkupdatequeryrequest | Attribute metadata bulk update request body.

    try:
        # Metadata Attribute update by query
        new_entitlementattributebulkupdatequeryrequest = Entitlementattributebulkupdatequeryrequest.from_json(entitlementattributebulkupdatequeryrequest)
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_query_v1(entitlementattributebulkupdatequeryrequest=new_entitlementattributebulkupdatequeryrequest)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_query_v1(new_entitlementattributebulkupdatequeryrequest)
        print("The response of AccessModelMetadataApi->update_access_model_metadata_by_query_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->update_access_model_metadata_by_query_v1: %s\n" % e)
```



[[Back to top]](#) 




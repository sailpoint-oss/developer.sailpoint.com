---
id: beta-access-model-metadata
title: Access_Model_Metadata
pagination_label: Access_Model_Metadata
sidebar_label: Access_Model_Metadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Access_Model_Metadata', 'BetaAccess_Model_Metadata'] 
slug: /tools/sdk/python/beta/methods/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'Access_Model_Metadata', 'BetaAccess_Model_Metadata']
---

# sailpoint.beta.AccessModelMetadataApi
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement metadata. Support for role and access profile metadata will be introduced in a subsequent release.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-access-model-metadata-attribute**](#get-access-model-metadata-attribute) | **GET** `/access-model-metadata/attributes/{key}` | Get Access Model Metadata Attribute
[**get-access-model-metadata-attribute-value**](#get-access-model-metadata-attribute-value) | **GET** `/access-model-metadata/attributes/{key}/values/{value}` | Get Access Model Metadata Value
[**list-access-model-metadata-attribute**](#list-access-model-metadata-attribute) | **GET** `/access-model-metadata/attributes` | List Access Model Metadata Attributes
[**list-access-model-metadata-attribute-value**](#list-access-model-metadata-attribute-value) | **GET** `/access-model-metadata/attributes/{key}/values` | List Access Model Metadata Values


## get-access-model-metadata-attribute
Get Access Model Metadata Attribute
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-model-metadata-attribute)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.attribute_dto import AttributeDTO
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.

    try:
        # Get Access Model Metadata Attribute
        
        results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute(key=key)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute(key)
        print("The response of AccessModelMetadataApi->get_access_model_metadata_attribute:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->get_access_model_metadata_attribute: %s\n" % e)
```



[[Back to top]](#) 

## get-access-model-metadata-attribute-value
Get Access Model Metadata Value
Get single Access Model Metadata Attribute Value

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-model-metadata-attribute-value)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.attribute_value_dto import AttributeValueDTO
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    value = 'public' # str | Technical name of the Attribute value. # str | Technical name of the Attribute value.

    try:
        # Get Access Model Metadata Value
        
        results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute_value(key=key, value=value)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute_value(key, value)
        print("The response of AccessModelMetadataApi->get_access_model_metadata_attribute_value:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->get_access_model_metadata_attribute_value: %s\n" % e)
```



[[Back to top]](#) 

## list-access-model-metadata-attribute
List Access Model Metadata Attributes
Get a list of Access Model Metadata Attributes

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-access-model-metadata-attribute)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators: *and*

### Return type
[**List[AttributeDTO]**](../models/attribute-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | List[AttributeDTO] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.attribute_dto import AttributeDTO
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'name eq \"Privacy\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators: *and* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators: *and* (optional)

    try:
        # List Access Model Metadata Attributes
        
        results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute()
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute(filters)
        print("The response of AccessModelMetadataApi->list_access_model_metadata_attribute:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->list_access_model_metadata_attribute: %s\n" % e)
```



[[Back to top]](#) 

## list-access-model-metadata-attribute-value
List Access Model Metadata Values
Get a list of Access Model Metadata Attribute Values

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-access-model-metadata-attribute-value)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.

### Return type
[**List[AttributeValueDTO]**](../models/attribute-value-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | List[AttributeValueDTO] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.attribute_value_dto import AttributeValueDTO
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.

    try:
        # List Access Model Metadata Values
        
        results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_value(key=key)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_value(key)
        print("The response of AccessModelMetadataApi->list_access_model_metadata_attribute_value:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->list_access_model_metadata_attribute_value: %s\n" % e)
```



[[Back to top]](#) 




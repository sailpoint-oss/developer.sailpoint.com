---
id: v2025-access-model-metadata
title: Access_Model_Metadata
pagination_label: Access_Model_Metadata
sidebar_label: Access_Model_Metadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Access_Model_Metadata', 'V2025Access_Model_Metadata'] 
slug: /tools/sdk/python/v2025/methods/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'Access_Model_Metadata', 'V2025Access_Model_Metadata']
---

# sailpoint.v2025.AccessModelMetadataApi
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement metadata. Support for role and access profile metadata will be introduced in a subsequent release.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-access-model-metadata-attribute**](#get-access-model-metadata-attribute) | **GET** `/access-model-metadata/attributes/{key}` | Get access model metadata attribute
[**get-access-model-metadata-attribute-value**](#get-access-model-metadata-attribute-value) | **GET** `/access-model-metadata/attributes/{key}/values/{value}` | Get access model metadata value
[**list-access-model-metadata-attribute**](#list-access-model-metadata-attribute) | **GET** `/access-model-metadata/attributes` | List access model metadata attributes
[**list-access-model-metadata-attribute-value**](#list-access-model-metadata-attribute-value) | **GET** `/access-model-metadata/attributes/{key}/values` | List access model metadata values
[**update-access-model-metadata-by-filter**](#update-access-model-metadata-by-filter) | **POST** `/access-model-metadata/bulk-update/filter` | Metadata Attribute update by filter
[**update-access-model-metadata-by-ids**](#update-access-model-metadata-by-ids) | **POST** `/access-model-metadata/bulk-update/ids` | Metadata Attribute update by ids
[**update-access-model-metadata-by-query**](#update-access-model-metadata-by-query) | **POST** `/access-model-metadata/bulk-update/query` | Metadata Attribute update by query


## get-access-model-metadata-attribute
Get access model metadata attribute
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-access-model-metadata-attribute)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.attribute_dto import AttributeDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.

    try:
        # Get access model metadata attribute
        
        results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute(key=key)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute(key)
        print("The response of AccessModelMetadataApi->get_access_model_metadata_attribute:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->get_access_model_metadata_attribute: %s\n" % e)
```



[[Back to top]](#) 

## get-access-model-metadata-attribute-value
Get access model metadata value
Get single Access Model Metadata Attribute Value

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-access-model-metadata-attribute-value)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.attribute_value_dto import AttributeValueDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    value = 'public' # str | Technical name of the Attribute value. # str | Technical name of the Attribute value.

    try:
        # Get access model metadata value
        
        results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute_value(key=key, value=value)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).get_access_model_metadata_attribute_value(key, value)
        print("The response of AccessModelMetadataApi->get_access_model_metadata_attribute_value:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->get_access_model_metadata_attribute_value: %s\n" % e)
```



[[Back to top]](#) 

## list-access-model-metadata-attribute
List access model metadata attributes
Get a list of Access Model Metadata Attributes

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-access-model-metadata-attribute)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  **Supported composite operators**: *and*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key**
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[AttributeDTO]**](../models/attribute-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | List[AttributeDTO] |  -  |
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
from sailpoint.v2025.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.attribute_dto import AttributeDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'name eq \"Privacy\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  **Supported composite operators**: *and* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  **Supported composite operators**: *and* (optional)
    sorters = 'name,-key' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List access model metadata attributes
        
        results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute()
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute(filters, sorters, offset, limit, count)
        print("The response of AccessModelMetadataApi->list_access_model_metadata_attribute:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->list_access_model_metadata_attribute: %s\n" % e)
```



[[Back to top]](#) 

## list-access-model-metadata-attribute-value
List access model metadata values
Get a list of Access Model Metadata Attribute Values

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-access-model-metadata-attribute-value)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | Technical name of the Attribute.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[AttributeValueDTO]**](../models/attribute-value-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | List[AttributeValueDTO] |  -  |
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
from sailpoint.v2025.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.attribute_value_dto import AttributeValueDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List access model metadata values
        
        results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_value(key=key)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).list_access_model_metadata_attribute_value(key, offset, limit, count)
        print("The response of AccessModelMetadataApi->list_access_model_metadata_attribute_value:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->list_access_model_metadata_attribute_value: %s\n" % e)
```



[[Back to top]](#) 

## update-access-model-metadata-by-filter
Metadata Attribute update by filter
Bulk update Access Model Metadata Attribute Values using a filter

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-access-model-metadata-by-filter)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.access_model_metadata_bulk_update_response import AccessModelMetadataBulkUpdateResponse
from sailpoint.v2025.models.entitlement_attribute_bulk_update_filter_request import EntitlementAttributeBulkUpdateFilterRequest
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
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_filter(entitlement_attribute_bulk_update_filter_request=new_entitlement_attribute_bulk_update_filter_request)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_filter(new_entitlement_attribute_bulk_update_filter_request)
        print("The response of AccessModelMetadataApi->update_access_model_metadata_by_filter:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->update_access_model_metadata_by_filter: %s\n" % e)
```



[[Back to top]](#) 

## update-access-model-metadata-by-ids
Metadata Attribute update by ids
Bulk update Access Model Metadata Attribute Values using ids.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-access-model-metadata-by-ids)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.access_model_metadata_bulk_update_response import AccessModelMetadataBulkUpdateResponse
from sailpoint.v2025.models.entitlement_attribute_bulk_update_ids_request import EntitlementAttributeBulkUpdateIdsRequest
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
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_ids(entitlement_attribute_bulk_update_ids_request=new_entitlement_attribute_bulk_update_ids_request)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_ids(new_entitlement_attribute_bulk_update_ids_request)
        print("The response of AccessModelMetadataApi->update_access_model_metadata_by_ids:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->update_access_model_metadata_by_ids: %s\n" % e)
```



[[Back to top]](#) 

## update-access-model-metadata-by-query
Metadata Attribute update by query
Bulk update Access Model Metadata Attribute Values using a query

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-access-model-metadata-by-query)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.access_model_metadata_api import AccessModelMetadataApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.access_model_metadata_bulk_update_response import AccessModelMetadataBulkUpdateResponse
from sailpoint.v2025.models.entitlement_attribute_bulk_update_query_request import EntitlementAttributeBulkUpdateQueryRequest
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
              "fields" : "[firstName,lastName,email]",
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
        results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_query(entitlement_attribute_bulk_update_query_request=new_entitlement_attribute_bulk_update_query_request)
        # Below is a request that includes all optional parameters
        # results = AccessModelMetadataApi(api_client).update_access_model_metadata_by_query(new_entitlement_attribute_bulk_update_query_request)
        print("The response of AccessModelMetadataApi->update_access_model_metadata_by_query:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessModelMetadataApi->update_access_model_metadata_by_query: %s\n" % e)
```



[[Back to top]](#) 




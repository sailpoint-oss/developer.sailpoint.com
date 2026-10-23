# Entitlements

# sailpoint.entitlements.EntitlementsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-for-entitlement-v1**](#create-access-model-metadata-for-entitlement-v1) | **POST** `/entitlements/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add metadata to an entitlement.
[**delete-access-model-metadata-from-entitlement-v1**](#delete-access-model-metadata-from-entitlement-v1) | **DELETE** `/entitlements/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove metadata from an entitlement.
[**get-entitlement-request-config-v1**](#get-entitlement-request-config-v1) | **GET** `/entitlements/v1/{id}/entitlement-request-config` | Get entitlement request config
[**get-entitlement-v1**](#get-entitlement-v1) | **GET** `/entitlements/v1/{id}` | Get an entitlement
[**import-entitlements-by-source-v1**](#import-entitlements-by-source-v1) | **POST** `/entitlements/v1/aggregate/sources/{id}` | Aggregate entitlements
[**list-entitlement-children-v1**](#list-entitlement-children-v1) | **GET** `/entitlements/v1/{id}/children` | List of entitlements children
[**list-entitlement-parents-v1**](#list-entitlement-parents-v1) | **GET** `/entitlements/v1/{id}/parents` | List of entitlements parents
[**list-entitlements-by-account-v1**](#list-entitlements-by-account-v1) | **GET** `/entitlements/v1/account/{accountId}/entitlements` | Get entitlements for an account
[**list-entitlements-v1**](#list-entitlements-v1) | **GET** `/entitlements/v1` | Gets a list of entitlements.
[**patch-entitlement-v1**](#patch-entitlement-v1) | **PATCH** `/entitlements/v1/{id}` | Patch an entitlement
[**put-entitlement-request-config-v1**](#put-entitlement-request-config-v1) | **PUT** `/entitlements/v1/{id}/entitlement-request-config` | Replace entitlement request config
[**reset-source-entitlements-v1**](#reset-source-entitlements-v1) | **POST** `/entitlements/v1/reset/sources/{id}` | Reset source entitlements
[**update-entitlements-in-bulk-v1**](#update-entitlements-in-bulk-v1) | **POST** `/entitlements/v1/bulk-update` | Bulk update an entitlement list
[**update-entitlements-metadata-by-filter-v1**](#update-entitlements-metadata-by-filter-v1) | **POST** `/entitlements/v1/access-model-metadata/bulk-update/filter` | Bulk-update metadata by filter
[**update-entitlements-metadata-by-ids-v1**](#update-entitlements-metadata-by-ids-v1) | **POST** `/entitlements/v1/access-model-metadata/bulk-update/ids` | Bulk-update metadata by ids
[**update-entitlements-metadata-by-query-v1**](#update-entitlements-metadata-by-query-v1) | **POST** `/entitlements/v1/access-model-metadata/bulk-update/query` | Bulk-update metadata by query


## create-access-model-metadata-for-entitlement-v1
Add metadata to an entitlement.
Add single Access Model Metadata to an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-for-entitlement-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The entitlement id.
Path   | attribute_key | **str** | True  | Technical name of the Attribute.
Path   | attribute_value | **str** | True  | Technical name of the Attribute Value.

### Return type
[**Entitlement**](../models/entitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created | Entitlement |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlement import Entitlement
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808c74ff913f0175097daa9d59cd' # str | The entitlement id. # str | The entitlement id.
    attribute_key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    attribute_value = 'public' # str | Technical name of the Attribute Value. # str | Technical name of the Attribute Value.

    try:
        # Add metadata to an entitlement.
        
        results = EntitlementsApi(api_client).create_access_model_metadata_for_entitlement_v1(id=id, attribute_key=attribute_key, attribute_value=attribute_value)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).create_access_model_metadata_for_entitlement_v1(id, attribute_key, attribute_value)
        print("The response of EntitlementsApi->create_access_model_metadata_for_entitlement_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->create_access_model_metadata_for_entitlement_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-access-model-metadata-from-entitlement-v1
Remove metadata from an entitlement.
Remove single Access Model Metadata from an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-from-entitlement-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The entitlement id.
Path   | attribute_key | **str** | True  | Technical name of the Attribute.
Path   | attribute_value | **str** | True  | Technical name of the Attribute Value.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808c74ff913f0175097daa9d59cd' # str | The entitlement id. # str | The entitlement id.
    attribute_key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    attribute_value = 'public' # str | Technical name of the Attribute Value. # str | Technical name of the Attribute Value.

    try:
        # Remove metadata from an entitlement.
        
        EntitlementsApi(api_client).delete_access_model_metadata_from_entitlement_v1(id=id, attribute_key=attribute_key, attribute_value=attribute_value)
        # Below is a request that includes all optional parameters
        # EntitlementsApi(api_client).delete_access_model_metadata_from_entitlement_v1(id, attribute_key, attribute_value)
    except Exception as e:
        print("Exception when calling EntitlementsApi->delete_access_model_metadata_from_entitlement_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlement-request-config-v1
Get entitlement request config
This API returns the entitlement request config for a specified entitlement.
The `accessRequestConfig.formDefinitionId` field associates an optional custom form with entitlement access requests.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-request-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Entitlement Id

### Return type
[**EntitlementRequestConfig**](../models/entitlement-request-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An Entitlement Request Config | EntitlementRequestConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlement_request_config import EntitlementRequestConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808874ff91550175097daaec161c' # str | Entitlement Id # str | Entitlement Id

    try:
        # Get entitlement request config
        
        results = EntitlementsApi(api_client).get_entitlement_request_config_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).get_entitlement_request_config_v1(id)
        print("The response of EntitlementsApi->get_entitlement_request_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->get_entitlement_request_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlement-v1
Get an entitlement
This API returns an entitlement by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The entitlement ID

### Return type
[**EntitlementV2**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An entitlement | EntitlementV2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlement_v2 import EntitlementV2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808874ff91550175097daaec161c' # str | The entitlement ID # str | The entitlement ID

    try:
        # Get an entitlement
        
        results = EntitlementsApi(api_client).get_entitlement_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).get_entitlement_v1(id)
        print("The response of EntitlementsApi->get_entitlement_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->get_entitlement_v1: %s\n" % e)
```



[[Back to top]](#) 

## import-entitlements-by-source-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Aggregate entitlements
Starts an entitlement aggregation on the specified source. Though this endpoint has been deprecated, you can find its Beta equivalent [here](https://developer.sailpoint.com/docs/api/import-entitlements-v-1).

If the target source is a direct connection, then the request body must be empty. You will also need to make sure the Content-Type header is not set. If you set the Content-Type header without specifying a body, then you will receive a 500 error.

If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`.

[API Spec](https://developer.sailpoint.com/docs/api/import-entitlements-by-source-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source Id
   | csv_file | **bytearray** |   (optional) | The CSV file containing the source entitlements to aggregate.

### Return type
[**LoadEntitlementTask**](../models/load-entitlement-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Aggregate Entitlements Task | LoadEntitlementTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.load_entitlement_task import LoadEntitlementTask
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source Id # str | Source Id
    csv_file = None # bytearray | The CSV file containing the source entitlements to aggregate. (optional) # bytearray | The CSV file containing the source entitlements to aggregate. (optional)

    try:
        # Aggregate entitlements
        
        results = EntitlementsApi(api_client).import_entitlements_by_source_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).import_entitlements_by_source_v1(id, csv_file)
        print("The response of EntitlementsApi->import_entitlements_by_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->import_entitlements_by_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-entitlement-children-v1
List of entitlements children
This API returns a list of all child entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-children-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Entitlement Id
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | search_after | **str** |   (optional) | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq*

### Return type
[**List[EntitlementV2]**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of entitlements children from an entitlement | List[EntitlementV2] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlement_v2 import EntitlementV2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808874ff91550175097daaec161c' # str | Entitlement Id # str | Entitlement Id
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    search_after = 'Account Payable,2c91808375d8e80a0175e1f88a575221' # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    sorters = 'name,id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
    filters = 'attribute eq \"memberOf\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)

    try:
        # List of entitlements children
        
        results = EntitlementsApi(api_client).list_entitlement_children_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).list_entitlement_children_v1(id, limit, offset, count, search_after, sorters, filters)
        print("The response of EntitlementsApi->list_entitlement_children_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->list_entitlement_children_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-entitlement-parents-v1
List of entitlements parents
This API returns a list of all parent entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-parents-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Entitlement Id
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | search_after | **str** |   (optional) | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq*

### Return type
[**List[EntitlementV2]**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of entitlements parents from an entitlement | List[EntitlementV2] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlement_v2 import EntitlementV2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808c74ff913f0175097daa9d59cd' # str | Entitlement Id # str | Entitlement Id
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    search_after = 'Account Payable,2c91808375d8e80a0175e1f88a575221' # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    sorters = 'name,id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
    filters = 'attribute eq \"memberOf\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)

    try:
        # List of entitlements parents
        
        results = EntitlementsApi(api_client).list_entitlement_parents_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).list_entitlement_parents_v1(id, limit, offset, count, search_after, sorters, filters)
        print("The response of EntitlementsApi->list_entitlement_parents_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->list_entitlement_parents_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-entitlements-by-account-v1
Get entitlements for an account
This API returns a list of all entitlements associated with the given account ID. The account must exist; if not found, the API returns 404.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlements-by-account-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | account_id | **str** | True  | The account ID to get entitlements for
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | search_after | **str** |   (optional) | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable**

### Return type
[**List[EntitlementV2]**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of entitlements for the account | List[EntitlementV2] |  * total-count - Total number of results (when count is requested).  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlement_v2 import EntitlementV2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    account_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The account ID to get entitlements for # str | The account ID to get entitlements for
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    search_after = 'Account Payable,2c91808375d8e80a0175e1f88a575221' # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    sorters = 'name,id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)

    try:
        # Get entitlements for an account
        
        results = EntitlementsApi(api_client).list_entitlements_by_account_v1(account_id=account_id)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).list_entitlements_by_account_v1(account_id, limit, offset, count, search_after, sorters)
        print("The response of EntitlementsApi->list_entitlements_by_account_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->list_entitlements_by_account_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-entitlements-v1
Gets a list of entitlements.
This API returns a list of entitlements. Any authenticated token can call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlements-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | segmented_for_identity | **str** |   (optional) | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID.
  Query | for_segment_ids | **str** |   (optional) | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs.
  Query | include_unsegmented | **bool** |   (optional) (default to True) | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | search_after | **str** |   (optional) | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq*

### Return type
[**List[EntitlementV2]**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of entitlements | List[EntitlementV2] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlement_v2 import EntitlementV2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    segmented_for_identity = 'e554098913544630b5985e9042f5e44b' # str | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. (optional) # str | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. (optional)
    for_segment_ids = '041727d4-7d95-4779-b891-93cf41e98249,a378c9fa-bae5-494c-804e-a1e30f69f649' # str | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. (optional) # str | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. (optional)
    include_unsegmented = True # bool | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error. (optional) (default to True) # bool | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error. (optional) (default to True)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    search_after = 'Account Payable,2c91808375d8e80a0175e1f88a575221' # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    sorters = 'name,id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
    filters = 'attribute eq \"memberOf\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)

    try:
        # Gets a list of entitlements.
        
        results = EntitlementsApi(api_client).list_entitlements_v1()
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).list_entitlements_v1(segmented_for_identity, for_segment_ids, include_unsegmented, offset, limit, count, search_after, sorters, filters)
        print("The response of EntitlementsApi->list_entitlements_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->list_entitlements_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-entitlement-v1
Patch an entitlement
This API updates an existing entitlement using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable: **requestable**, **segments**, **privilegeOverride/level**, **owner**, **name**, **description**, **manuallyUpdatedFields**, and **accessModelMetadata**

When you're patching owner, only owner type and owner id must be provided. Owner name is optional, and it won't be modified. If the owner name is provided, it should correspond to the real name. The only owner type currently supported is IDENTITY.

When you're patching **accessModelMetadata**, each attribute's **key** must match the key of an existing access model metadata attribute, and each **value** must be one of the values configured for that key. Use [List access model metadata attributes](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-v-1) to look up the available keys and values.

[API Spec](https://developer.sailpoint.com/docs/api/patch-entitlement-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the entitlement to patch
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) |   (optional) | 

### Return type
[**EntitlementV2**](../models/entitlement-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the entitlement as updated. | EntitlementV2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlement_v2 import EntitlementV2
from sailpoint.entitlements.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808a7813090a017814121e121518' # str | ID of the entitlement to patch # str | ID of the entitlement to patch
    json_patch_operation = '''[{"op":"add","path":"/segments/-","value":"f7b1b8a3-5fed-4fd4-ad29-82014e137e19"}]''' # List[JsonPatchOperation] |  (optional)

    try:
        # Patch an entitlement
        
        results = EntitlementsApi(api_client).patch_entitlement_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).patch_entitlement_v1(id, new_json_patch_operation)
        print("The response of EntitlementsApi->patch_entitlement_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->patch_entitlement_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-entitlement-request-config-v1
Replace entitlement request config
This API replaces the entitlement request config for a specified entitlement.
Set `accessRequestConfig.formDefinitionId` to associate an optional custom form with entitlement access requests.

[API Spec](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Entitlement ID
 Body  | entitlement_request_config | [**EntitlementRequestConfig**](../models/entitlement-request-config) | True  | 

### Return type
[**EntitlementRequestConfig**](../models/entitlement-request-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the entitlement request config as updated. | EntitlementRequestConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlement_request_config import EntitlementRequestConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808a7813090a017814121e121518' # str | Entitlement ID # str | Entitlement ID
    entitlement_request_config = '''{
          "accessRequestConfig" : {
            "denialCommentRequired" : false,
            "approvalSchemes" : [ {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            } ],
            "reauthorizationRequired" : false,
            "formDefinitionId" : "78258e80-e9e2-4e1a-a11f-ce0b7c62f25d",
            "requestCommentRequired" : true,
            "requireEndDate" : true,
            "maxPermittedAccessDuration" : {
              "value" : 5,
              "timeUnit" : "DAYS"
            }
          },
          "revocationRequestConfig" : {
            "approvalSchemes" : [ {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            } ]
          }
        }''' # EntitlementRequestConfig | 

    try:
        # Replace entitlement request config
        new_entitlement_request_config = EntitlementRequestConfig.from_json(entitlement_request_config)
        results = EntitlementsApi(api_client).put_entitlement_request_config_v1(id=id, entitlement_request_config=new_entitlement_request_config)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).put_entitlement_request_config_v1(id, new_entitlement_request_config)
        print("The response of EntitlementsApi->put_entitlement_request_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->put_entitlement_request_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## reset-source-entitlements-v1
Reset source entitlements
Remove all entitlements from a specific source.
To reload the accounts along with the entitlements you removed, you must run an unoptimized aggregation.  To do so, use [Account Aggregation](https://developer.sailpoint.com/docs/api/import-accounts-v-1) with `disableOptimization` = `true`. 

[API Spec](https://developer.sailpoint.com/docs/api/reset-source-entitlements-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of source for the entitlement reset

### Return type
[**EntitlementSourceResetBaseReferenceDto**](../models/entitlement-source-reset-base-reference-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Entitlement source reset task result | EntitlementSourceResetBaseReferenceDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlement_source_reset_base_reference_dto import EntitlementSourceResetBaseReferenceDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808a7813090a017814121919ecca' # str | ID of source for the entitlement reset # str | ID of source for the entitlement reset

    try:
        # Reset source entitlements
        
        results = EntitlementsApi(api_client).reset_source_entitlements_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).reset_source_entitlements_v1(id)
        print("The response of EntitlementsApi->reset_source_entitlements_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->reset_source_entitlements_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-entitlements-in-bulk-v1
Bulk update an entitlement list
This API applies an update to every entitlement of the list.


The number of entitlements to update is limited to 50 items maximum.


The JsonPatch update follows the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
examples of allowed operations :
`**{ "op": "replace", "path": "/requestable","value": boolean }**`
`**{ "op": "replace", "path": "/privilegeOverride/level","value": string }**`

A token with ORG_ADMIN or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-in-bulk-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlement_bulk_update_request | [**EntitlementBulkUpdateRequest**](../models/entitlement-bulk-update-request) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlement_bulk_update_request import EntitlementBulkUpdateRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    entitlement_bulk_update_request = '''{
          "entitlementIds" : [ "2c91808a7624751a01762f19d665220d", "2c91808a7624751a01762f19d67c220e", "2c91808a7624751a01762f19d692220f" ],
          "jsonPatch" : [ {
            "op" : "replace",
            "path" : "/requestable",
            "value" : false
          }, {
            "op" : "replace",
            "path" : "/privilegeOverride/level",
            "value" : "HIGH"
          } ]
        }''' # EntitlementBulkUpdateRequest | 

    try:
        # Bulk update an entitlement list
        new_entitlement_bulk_update_request = EntitlementBulkUpdateRequest.from_json(entitlement_bulk_update_request)
        EntitlementsApi(api_client).update_entitlements_in_bulk_v1(entitlement_bulk_update_request=new_entitlement_bulk_update_request)
        # Below is a request that includes all optional parameters
        # EntitlementsApi(api_client).update_entitlements_in_bulk_v1(new_entitlement_bulk_update_request)
    except Exception as e:
        print("Exception when calling EntitlementsApi->update_entitlements_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-entitlements-metadata-by-filter-v1
Bulk-update metadata by filter
This API initiates a bulk update of Access Model Metadata for every entitlement matching the supplied filter expression.

The update is processed asynchronously. The response returns the ID of the task performing the update.

Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByFilterV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-filter-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlementmetadatabulkupdatebyfilterrequest | [**Entitlementmetadatabulkupdatebyfilterrequest**](../models/entitlementmetadatabulkupdatebyfilterrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Entitlementmetadatabulkupdateresponse**](../models/entitlementmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Returned if the bulk update request was created. | Entitlementmetadatabulkupdateresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlementmetadatabulkupdatebyfilterrequest import Entitlementmetadatabulkupdatebyfilterrequest
from sailpoint.entitlements.models.entitlementmetadatabulkupdateresponse import Entitlementmetadatabulkupdateresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    entitlementmetadatabulkupdatebyfilterrequest = '''{
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "filters" : "id eq 2c9180867817ac4d017817c491119a20",
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }''' # Entitlementmetadatabulkupdatebyfilterrequest | Attribute metadata bulk update request body.

    try:
        # Bulk-update metadata by filter
        new_entitlementmetadatabulkupdatebyfilterrequest = Entitlementmetadatabulkupdatebyfilterrequest.from_json(entitlementmetadatabulkupdatebyfilterrequest)
        results = EntitlementsApi(api_client).update_entitlements_metadata_by_filter_v1(entitlementmetadatabulkupdatebyfilterrequest=new_entitlementmetadatabulkupdatebyfilterrequest)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).update_entitlements_metadata_by_filter_v1(new_entitlementmetadatabulkupdatebyfilterrequest)
        print("The response of EntitlementsApi->update_entitlements_metadata_by_filter_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->update_entitlements_metadata_by_filter_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-entitlements-metadata-by-ids-v1
Bulk-update metadata by ids
This API initiates a bulk update of Access Model Metadata for one or more entitlements by a list of entitlement IDs.

The update is processed asynchronously. The response returns the ID of the task performing the update.

The maximum entitlement count in a single request is 3000. Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByIdsV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-ids-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlementmetadatabulkupdatebyidrequest | [**Entitlementmetadatabulkupdatebyidrequest**](../models/entitlementmetadatabulkupdatebyidrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Entitlementmetadatabulkupdateresponse**](../models/entitlementmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Returned if the bulk update request was created. | Entitlementmetadatabulkupdateresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlementmetadatabulkupdatebyidrequest import Entitlementmetadatabulkupdatebyidrequest
from sailpoint.entitlements.models.entitlementmetadatabulkupdateresponse import Entitlementmetadatabulkupdateresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    entitlementmetadatabulkupdatebyidrequest = '''{
          "entitlements" : [ "2c9180867817ac4d017817c491119a20", "2c9180867817ac4d017817c491119a21" ],
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }''' # Entitlementmetadatabulkupdatebyidrequest | Attribute metadata bulk update request body.

    try:
        # Bulk-update metadata by ids
        new_entitlementmetadatabulkupdatebyidrequest = Entitlementmetadatabulkupdatebyidrequest.from_json(entitlementmetadatabulkupdatebyidrequest)
        results = EntitlementsApi(api_client).update_entitlements_metadata_by_ids_v1(entitlementmetadatabulkupdatebyidrequest=new_entitlementmetadatabulkupdatebyidrequest)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).update_entitlements_metadata_by_ids_v1(new_entitlementmetadatabulkupdatebyidrequest)
        print("The response of EntitlementsApi->update_entitlements_metadata_by_ids_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->update_entitlements_metadata_by_ids_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-entitlements-metadata-by-query-v1
Bulk-update metadata by query
This API initiates a bulk update of Access Model Metadata for every entitlement matching the supplied search query.

The update is processed asynchronously. The response returns the ID of the task performing the update.

Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByQueryV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-query-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | entitlementmetadatabulkupdatebyqueryrequest | [**Entitlementmetadatabulkupdatebyqueryrequest**](../models/entitlementmetadatabulkupdatebyqueryrequest) | True  | Attribute metadata bulk update request body.

### Return type
[**Entitlementmetadatabulkupdateresponse**](../models/entitlementmetadatabulkupdateresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Returned if the bulk update request was created. | Entitlementmetadatabulkupdateresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlements.api.entitlements_api import EntitlementsApi
from sailpoint.entitlements.api_client import ApiClient
from sailpoint.entitlements.models.entitlementmetadatabulkupdatebyqueryrequest import Entitlementmetadatabulkupdatebyqueryrequest
from sailpoint.entitlements.models.entitlementmetadatabulkupdateresponse import Entitlementmetadatabulkupdateresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    entitlementmetadatabulkupdatebyqueryrequest = '''{
          "query" : {
            "indices" : [ "entitlements" ],
            "queryType" : "TEXT",
            "textQuery" : {
              "terms" : [ "test123" ],
              "fields" : [ "id" ],
              "matchAny" : false,
              "contains" : true
            },
            "includeNested" : false
          },
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }''' # Entitlementmetadatabulkupdatebyqueryrequest | Attribute metadata bulk update request body.

    try:
        # Bulk-update metadata by query
        new_entitlementmetadatabulkupdatebyqueryrequest = Entitlementmetadatabulkupdatebyqueryrequest.from_json(entitlementmetadatabulkupdatebyqueryrequest)
        results = EntitlementsApi(api_client).update_entitlements_metadata_by_query_v1(entitlementmetadatabulkupdatebyqueryrequest=new_entitlementmetadatabulkupdatebyqueryrequest)
        # Below is a request that includes all optional parameters
        # results = EntitlementsApi(api_client).update_entitlements_metadata_by_query_v1(new_entitlementmetadatabulkupdatebyqueryrequest)
        print("The response of EntitlementsApi->update_entitlements_metadata_by_query_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementsApi->update_entitlements_metadata_by_query_v1: %s\n" % e)
```



[[Back to top]](#) 




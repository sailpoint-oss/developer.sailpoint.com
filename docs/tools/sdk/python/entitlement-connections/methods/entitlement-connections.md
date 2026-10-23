# Entitlement_Connections

# sailpoint.entitlement_connections.EntitlementConnectionsApi
  Use this API to search and manage entitlement connections.
Entitlement connections represent the relationship between an identity account and an entitlement on a source, including its access type and JIT lifecycle state.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-entitlement-connections-for-current-identity-v1**](#list-entitlement-connections-for-current-identity-v1) | **GET** `/entitlement-connections/v1/current-identity` | List my entitlement connections
[**list-entitlement-connections-v1**](#list-entitlement-connections-v1) | **GET** `/entitlement-connections/v1` | List entitlement connections
[**patch-entitlement-connection-by-id-v1**](#patch-entitlement-connection-by-id-v1) | **PATCH** `/entitlement-connections/v1/{connectionId}` | Update entitlement connection


## list-entitlement-connections-for-current-identity-v1
List my entitlement connections
Returns entitlement connections constrained to the authenticated identity.
This endpoint proxies to Search and supports standard collection query parameters.


[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-connections-for-current-identity-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | search_after | **str** |   (optional) | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  The authenticated identity scope is always applied by the service. 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration** 

### Return type
[**List[EntitlementConnectionSearchHit]**](../models/entitlement-connection-search-hit)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of entitlement connections for the current identity. | List[EntitlementConnectionSearchHit] |  * X-Total-Count - Included when `count=true` and available from Search.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementConnectionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
412 | Precondition Failed - Returned in response if API/Feature not enabled for an organization. | ListEntitlementConnectionsV1412Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementConnectionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlement_connections.api.entitlement_connections_api import EntitlementConnectionsApi
from sailpoint.entitlement_connections.api_client import ApiClient
from sailpoint.entitlement_connections.models.entitlement_connection_search_hit import EntitlementConnectionSearchHit
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    search_after = 'Account Payable,2c91808375d8e80a0175e1f88a575221' # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    filters = 'state.value co \"Available\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  The authenticated identity scope is always applied by the service.  (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  The authenticated identity scope is always applied by the service.  (optional)
    sorters = 'id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  (optional)

    try:
        # List my entitlement connections
        
        results = EntitlementConnectionsApi(api_client).list_entitlement_connections_for_current_identity_v1()
        # Below is a request that includes all optional parameters
        # results = EntitlementConnectionsApi(api_client).list_entitlement_connections_for_current_identity_v1(offset, limit, count, search_after, filters, sorters)
        print("The response of EntitlementConnectionsApi->list_entitlement_connections_for_current_identity_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementConnectionsApi->list_entitlement_connections_for_current_identity_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-entitlement-connections-v1
List entitlement connections
Returns entitlement connections for the tenant.

This endpoint proxies to Search and supports standard collection query parameters.
The `filters` and `sorters` values support the Entitlement Connections search fields documented by ECS.


[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-connections-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | search_after | **str** |   (optional) | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le* 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  Prefix a field with `-` for descending order. 

### Return type
[**List[EntitlementConnectionSearchHit]**](../models/entitlement-connection-search-hit)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of entitlement connections. | List[EntitlementConnectionSearchHit] |  * X-Total-Count - Included when `count=true` and available from Search.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementConnectionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
412 | Precondition Failed - Returned in response if API/Feature not enabled for an organization. | ListEntitlementConnectionsV1412Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementConnectionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlement_connections.api.entitlement_connections_api import EntitlementConnectionsApi
from sailpoint.entitlement_connections.api_client import ApiClient
from sailpoint.entitlement_connections.models.entitlement_connection_search_hit import EntitlementConnectionSearchHit
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    search_after = 'Account Payable,2c91808375d8e80a0175e1f88a575221' # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # str | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    filters = 'type eq \"JIT\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  (optional)
    sorters = '-type,id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  Prefix a field with `-` for descending order.  (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  Prefix a field with `-` for descending order.  (optional)

    try:
        # List entitlement connections
        
        results = EntitlementConnectionsApi(api_client).list_entitlement_connections_v1()
        # Below is a request that includes all optional parameters
        # results = EntitlementConnectionsApi(api_client).list_entitlement_connections_v1(offset, limit, count, search_after, filters, sorters)
        print("The response of EntitlementConnectionsApi->list_entitlement_connections_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementConnectionsApi->list_entitlement_connections_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-entitlement-connection-by-id-v1
Update entitlement connection
Applies JSON Patch operations to an entitlement connection selected by `connectionId`.


[API Spec](https://developer.sailpoint.com/docs/api/patch-entitlement-connection-by-id-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | connection_id | **str** | True  | Connection ID (UUID with or without hyphens).
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
[**EntitlementConnection**](../models/entitlement-connection)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated entitlement connection. | EntitlementConnection |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListEntitlementConnectionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
412 | Precondition Failed - Returned in response if API/Feature not enabled for an organization. | ListEntitlementConnectionsV1412Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListEntitlementConnectionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.entitlement_connections.api.entitlement_connections_api import EntitlementConnectionsApi
from sailpoint.entitlement_connections.api_client import ApiClient
from sailpoint.entitlement_connections.models.entitlement_connection import EntitlementConnection
from sailpoint.entitlement_connections.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    connection_id = '6c692d9972f8400ca4560a68f62c4c5f' # str | Connection ID (UUID with or without hyphens). # str | Connection ID (UUID with or without hyphens).
    json_patch_operation = '''[sailpoint.entitlement_connections.JsonPatchOperation()]''' # List[JsonPatchOperation] | 

    try:
        # Update entitlement connection
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = EntitlementConnectionsApi(api_client).patch_entitlement_connection_by_id_v1(connection_id=connection_id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = EntitlementConnectionsApi(api_client).patch_entitlement_connection_by_id_v1(connection_id, new_json_patch_operation)
        print("The response of EntitlementConnectionsApi->patch_entitlement_connection_by_id_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling EntitlementConnectionsApi->patch_entitlement_connection_by_id_v1: %s\n" % e)
```



[[Back to top]](#) 




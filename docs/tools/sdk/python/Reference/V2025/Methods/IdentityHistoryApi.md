---
id: v2025-identity-history
title: Identity_History
pagination_label: Identity_History
sidebar_label: Identity_History
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identity_History', 'V2025Identity_History'] 
slug: /tools/sdk/python/v2025/methods/identity-history
tags: ['SDK', 'Software Development Kit', 'Identity_History', 'V2025Identity_History']
---

# sailpoint.v2025.IdentityHistoryApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compare-identity-snapshots**](#compare-identity-snapshots) | **GET** `/historical-identities/{id}/compare` | Gets a difference of count for each access item types for the given identity between 2 snapshots
[**compare-identity-snapshots-access-type**](#compare-identity-snapshots-access-type) | **GET** `/historical-identities/{id}/compare/{access-type}` | Gets a list of differences of specific accesstype for the given identity between 2 snapshots
[**get-historical-identity**](#get-historical-identity) | **GET** `/historical-identities/{id}` | Get latest snapshot of identity
[**get-historical-identity-events**](#get-historical-identity-events) | **GET** `/historical-identities/{id}/events` | Lists all events for the given identity
[**get-identity-snapshot**](#get-identity-snapshot) | **GET** `/historical-identities/{id}/snapshots/{date}` | Gets an identity snapshot at a given date
[**get-identity-snapshot-summary**](#get-identity-snapshot-summary) | **GET** `/historical-identities/{id}/snapshot-summary` | Gets the summary for the event count for a specific identity
[**get-identity-start-date**](#get-identity-start-date) | **GET** `/historical-identities/{id}/start-date` | Gets the start date of the identity
[**list-historical-identities**](#list-historical-identities) | **GET** `/historical-identities` | Lists all the identities
[**list-identity-access-items**](#list-identity-access-items) | **GET** `/historical-identities/{id}/access-items` | List access items by identity
[**list-identity-snapshot-access-items**](#list-identity-snapshot-access-items) | **GET** `/historical-identities/{id}/snapshots/{date}/access-items` | Gets the list of identity access items at a given date filterd by item type
[**list-identity-snapshots**](#list-identity-snapshots) | **GET** `/historical-identities/{id}/snapshots` | Lists all the snapshots for the identity


## compare-identity-snapshots
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
Gets a difference of count for each access item types for the given identity between 2 snapshots
This method gets a difference of count for each access item types for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/compare-identity-snapshots)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | snapshot1 | **str** |   (optional) | The snapshot 1 of identity
  Query | snapshot2 | **str** |   (optional) | The snapshot 2 of identity
  Query | access_item_types | **[]str** |   (optional) | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[IdentityCompareResponse]**](../models/identity-compare-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A IdentityCompare object with difference details for each access item type | List[IdentityCompareResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.identity_history_api import IdentityHistoryApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.identity_compare_response import IdentityCompareResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The identity id # str | The identity id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    snapshot1 = '2007-03-01T13:00:00Z' # str | The snapshot 1 of identity (optional) # str | The snapshot 1 of identity (optional)
    snapshot2 = '2008-03-01T13:00:00Z' # str | The snapshot 2 of identity (optional) # str | The snapshot 2 of identity (optional)
    access_item_types = '''['access_item_types_example']''' # List[str] | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned  (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Gets a difference of count for each access item types for the given identity between 2 snapshots
        
        results = IdentityHistoryApi(api_client).compare_identity_snapshots(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IdentityHistoryApi(api_client).compare_identity_snapshots(id, x_sail_point_experimental, snapshot1, snapshot2, access_item_types, limit, offset, count)
        print("The response of IdentityHistoryApi->compare_identity_snapshots:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityHistoryApi->compare_identity_snapshots: %s\n" % e)
```



[[Back to top]](#) 

## compare-identity-snapshots-access-type
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
Gets a list of differences of specific accesstype for the given identity between 2 snapshots
This method gets a list of differences of specific accessType for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/compare-identity-snapshots-access-type)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity id
Path   | access_type | **str** | True  | The specific type which needs to be compared
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | access_associated | **bool** |   (optional) | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added & removed
  Query | snapshot1 | **str** |   (optional) | The snapshot 1 of identity
  Query | snapshot2 | **str** |   (optional) | The snapshot 2 of identity
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[AccessItemDiff]**](../models/access-item-diff)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of events for the identity | List[AccessItemDiff] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.identity_history_api import IdentityHistoryApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.access_item_diff import AccessItemDiff
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The identity id # str | The identity id
    access_type = 'role' # str | The specific type which needs to be compared # str | The specific type which needs to be compared
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    access_associated = 2007-03-01T13:00:00Z # bool | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added & removed (optional) # bool | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added & removed (optional)
    snapshot1 = '2008-03-01T13:00:00Z' # str | The snapshot 1 of identity (optional) # str | The snapshot 1 of identity (optional)
    snapshot2 = '2009-03-01T13:00:00Z' # str | The snapshot 2 of identity (optional) # str | The snapshot 2 of identity (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Gets a list of differences of specific accesstype for the given identity between 2 snapshots
        
        results = IdentityHistoryApi(api_client).compare_identity_snapshots_access_type(id=id, access_type=access_type, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IdentityHistoryApi(api_client).compare_identity_snapshots_access_type(id, access_type, x_sail_point_experimental, access_associated, snapshot1, snapshot2, limit, offset, count)
        print("The response of IdentityHistoryApi->compare_identity_snapshots_access_type:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityHistoryApi->compare_identity_snapshots_access_type: %s\n" % e)
```



[[Back to top]](#) 

## get-historical-identity
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
Get latest snapshot of identity
This method retrieves a specified identity Requires authorization scope of 'idn:identity-history:read'

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-historical-identity)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**IdentityHistoryResponse**](../models/identity-history-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The identity object. | IdentityHistoryResponse |  -  |
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
from sailpoint.v2025.api.identity_history_api import IdentityHistoryApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.identity_history_response import IdentityHistoryResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The identity id # str | The identity id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get latest snapshot of identity
        
        results = IdentityHistoryApi(api_client).get_historical_identity(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IdentityHistoryApi(api_client).get_historical_identity(id, x_sail_point_experimental)
        print("The response of IdentityHistoryApi->get_historical_identity:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityHistoryApi->get_historical_identity: %s\n" % e)
```



[[Back to top]](#) 

## get-historical-identity-events
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
Lists all events for the given identity
This method retrieves all access events for the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-historical-identity-events)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | var_from | **str** |   (optional) | The optional instant until which access events are returned
  Query | event_types | **[]str** |   (optional) | An optional list of event types to return.  If null or empty, all events are returned
  Query | access_item_types | **[]str** |   (optional) | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[GetHistoricalIdentityEvents200ResponseInner]**](../models/get-historical-identity-events200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The list of events for the identity | List[GetHistoricalIdentityEvents200ResponseInner] |  -  |
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
from sailpoint.v2025.api.identity_history_api import IdentityHistoryApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.get_historical_identity_events200_response_inner import GetHistoricalIdentityEvents200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The identity id # str | The identity id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    var_from = '2024-03-01T13:00:00Z' # str | The optional instant until which access events are returned (optional) # str | The optional instant until which access events are returned (optional)
    event_types = '''['[AccessAddedEvent, AccessRemovedEvent]']''' # List[str] | An optional list of event types to return.  If null or empty, all events are returned (optional)
    access_item_types = '''['[entitlement, account]']''' # List[str] | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Lists all events for the given identity
        
        results = IdentityHistoryApi(api_client).get_historical_identity_events(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IdentityHistoryApi(api_client).get_historical_identity_events(id, x_sail_point_experimental, var_from, event_types, access_item_types, limit, offset, count)
        print("The response of IdentityHistoryApi->get_historical_identity_events:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityHistoryApi->get_historical_identity_events: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-snapshot
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
Gets an identity snapshot at a given date
This method retrieves a specified identity snapshot at a given date Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-identity-snapshot)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity id
Path   | var_date | **str** | True  | The specified date
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**IdentityHistoryResponse**](../models/identity-history-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The identity object. | IdentityHistoryResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.identity_history_api import IdentityHistoryApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.identity_history_response import IdentityHistoryResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The identity id # str | The identity id
    var_date = '2007-03-01T13:00:00Z' # str | The specified date # str | The specified date
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Gets an identity snapshot at a given date
        
        results = IdentityHistoryApi(api_client).get_identity_snapshot(id=id, var_date=var_date, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IdentityHistoryApi(api_client).get_identity_snapshot(id, var_date, x_sail_point_experimental)
        print("The response of IdentityHistoryApi->get_identity_snapshot:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityHistoryApi->get_identity_snapshot: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-snapshot-summary
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
Gets the summary for the event count for a specific identity
This method gets the summary for the event count for a specific identity by month/day Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-identity-snapshot-summary)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | before | **str** |   (optional) | The date before which snapshot summary is required
  Query | interval | **str** |   (optional) | The interval indicating day or month. Defaults to month if not specified
  Query | time_zone | **str** |   (optional) | The time zone. Defaults to UTC if not provided
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[MetricResponse]**](../models/metric-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A summary list of identity changes in date histogram format. | List[MetricResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.identity_history_api import IdentityHistoryApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.metric_response import MetricResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The identity id # str | The identity id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    before = '2007-03-01T13:00:00Z' # str | The date before which snapshot summary is required (optional) # str | The date before which snapshot summary is required (optional)
    interval = 'interval_example' # str | The interval indicating day or month. Defaults to month if not specified (optional) # str | The interval indicating day or month. Defaults to month if not specified (optional)
    time_zone = 'UTC' # str | The time zone. Defaults to UTC if not provided (optional) # str | The time zone. Defaults to UTC if not provided (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Gets the summary for the event count for a specific identity
        
        results = IdentityHistoryApi(api_client).get_identity_snapshot_summary(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IdentityHistoryApi(api_client).get_identity_snapshot_summary(id, x_sail_point_experimental, before, interval, time_zone, limit, offset, count)
        print("The response of IdentityHistoryApi->get_identity_snapshot_summary:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityHistoryApi->get_identity_snapshot_summary: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-start-date
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
Gets the start date of the identity
This method retrieves start date of the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-identity-start-date)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
**str**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The start date of the identity | str |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.identity_history_api import IdentityHistoryApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The identity id # str | The identity id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Gets the start date of the identity
        
        results = IdentityHistoryApi(api_client).get_identity_start_date(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IdentityHistoryApi(api_client).get_identity_start_date(id, x_sail_point_experimental)
        print("The response of IdentityHistoryApi->get_identity_start_date:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityHistoryApi->get_identity_start_date: %s\n" % e)
```



[[Back to top]](#) 

## list-historical-identities
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
Lists all the identities
This gets the list of identities for the customer. This list end point does not support count=true request param. The total  count of identities would never be returned even if the count param is specified in the request Requires authorization scope of 'idn:identity-history:read'

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-historical-identities)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | starts_with_query | **str** |   (optional) | This param is used for starts-with search for first, last and display name of the identity
  Query | is_deleted | **bool** |   (optional) | Indicates if we want to only list down deleted identities or not.
  Query | is_active | **bool** |   (optional) | Indicates if we want to only list active or inactive identities.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[IdentityListItem]**](../models/identity-list-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of identities for the customer. | List[IdentityListItem] |  -  |
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
from sailpoint.v2025.api.identity_history_api import IdentityHistoryApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.identity_list_item import IdentityListItem
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    starts_with_query = 'Ada' # str | This param is used for starts-with search for first, last and display name of the identity (optional) # str | This param is used for starts-with search for first, last and display name of the identity (optional)
    is_deleted = true # bool | Indicates if we want to only list down deleted identities or not. (optional) # bool | Indicates if we want to only list down deleted identities or not. (optional)
    is_active = true # bool | Indicates if we want to only list active or inactive identities. (optional) # bool | Indicates if we want to only list active or inactive identities. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # Lists all the identities
        
        results = IdentityHistoryApi(api_client).list_historical_identities(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IdentityHistoryApi(api_client).list_historical_identities(x_sail_point_experimental, starts_with_query, is_deleted, is_active, limit, offset)
        print("The response of IdentityHistoryApi->list_historical_identities:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityHistoryApi->list_historical_identities: %s\n" % e)
```



[[Back to top]](#) 

## list-identity-access-items
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
List access items by identity
This method retrieves a list of access item for the identity filtered by the access item type


[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-identity-access-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | type | **str** |   (optional) | The type of access item for the identity. If not provided, it defaults to account
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[ListIdentityAccessItems200ResponseInner]**](../models/list-identity-access-items200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The list of access items. | List[ListIdentityAccessItems200ResponseInner] |  -  |
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
from sailpoint.v2025.api.identity_history_api import IdentityHistoryApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.list_identity_access_items200_response_inner import ListIdentityAccessItems200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The identity id # str | The identity id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    type = 'account' # str | The type of access item for the identity. If not provided, it defaults to account (optional) # str | The type of access item for the identity. If not provided, it defaults to account (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List access items by identity
        
        results = IdentityHistoryApi(api_client).list_identity_access_items(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IdentityHistoryApi(api_client).list_identity_access_items(id, x_sail_point_experimental, type, limit, count, offset)
        print("The response of IdentityHistoryApi->list_identity_access_items:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityHistoryApi->list_identity_access_items: %s\n" % e)
```



[[Back to top]](#) 

## list-identity-snapshot-access-items
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
Gets the list of identity access items at a given date filterd by item type
This method retrieves the list of identity access items at a given date filterd by item type Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-identity-snapshot-access-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity id
Path   | var_date | **str** | True  | The specified date
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | type | **str** |   (optional) | The access item type

### Return type
[**List[ListIdentityAccessItems200ResponseInner]**](../models/list-identity-access-items200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The identity object. | List[ListIdentityAccessItems200ResponseInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.identity_history_api import IdentityHistoryApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.list_identity_access_items200_response_inner import ListIdentityAccessItems200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The identity id # str | The identity id
    var_date = '2007-03-01T13:00:00Z' # str | The specified date # str | The specified date
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    type = 'account' # str | The access item type (optional) # str | The access item type (optional)

    try:
        # Gets the list of identity access items at a given date filterd by item type
        
        results = IdentityHistoryApi(api_client).list_identity_snapshot_access_items(id=id, var_date=var_date, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IdentityHistoryApi(api_client).list_identity_snapshot_access_items(id, var_date, x_sail_point_experimental, type)
        print("The response of IdentityHistoryApi->list_identity_snapshot_access_items:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityHistoryApi->list_identity_snapshot_access_items: %s\n" % e)
```



[[Back to top]](#) 

## list-identity-snapshots
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
Lists all the snapshots for the identity
This method retrieves all the snapshots for the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-identity-snapshots)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | start | **str** |   (optional) | The specified start date
  Query | interval | **str** |   (optional) | The interval indicating the range in day or month for the specified interval-name
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[IdentitySnapshotSummaryResponse]**](../models/identity-snapshot-summary-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of identity summary for each snapshot. | List[IdentitySnapshotSummaryResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.identity_history_api import IdentityHistoryApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.identity_snapshot_summary_response import IdentitySnapshotSummaryResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The identity id # str | The identity id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    start = '2007-03-01T13:00:00Z' # str | The specified start date (optional) # str | The specified start date (optional)
    interval = 'interval_example' # str | The interval indicating the range in day or month for the specified interval-name (optional) # str | The interval indicating the range in day or month for the specified interval-name (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Lists all the snapshots for the identity
        
        results = IdentityHistoryApi(api_client).list_identity_snapshots(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = IdentityHistoryApi(api_client).list_identity_snapshots(id, x_sail_point_experimental, start, interval, limit, offset, count)
        print("The response of IdentityHistoryApi->list_identity_snapshots:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityHistoryApi->list_identity_snapshots: %s\n" % e)
```



[[Back to top]](#) 




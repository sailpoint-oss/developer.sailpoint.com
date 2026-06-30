---
id: saved-search
title: Saved_Search
pagination_label: Saved_Search
sidebar_label: Saved_Search
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Saved_Search', 'Saved_Search'] 
slug: /tools/sdk/python/saved-search/methods/saved-search
tags: ['SDK', 'Software Development Kit', 'Saved_Search', 'Saved_Search']
---

# sailpoint.saved_search.SavedSearchApi
  Use this API to implement saved search functionality. 
With saved search functionality in place, users can save search queries and then view those saved searches, as well as rerun them. 

Search queries in Identity Security Cloud can grow very long and specific, which can make reconstructing them difficult or tedious, so it can be especially helpful to save search queries. 
It also opens the possibility to configure Identity Security Cloud to run the saved queries on a schedule, which is essential to detecting user information and access changes throughout an organization&#39;s tenant and across all its sources. 
Refer to [Scheduled Search](https://developer.sailpoint.com/docs/api/v2025/scheduled-search/) for more information about running saved searches on a schedule. 

In Identity Security Cloud, users can save searches under a name, and then they can access that saved search and run it again when they want. 

Refer to [Managing Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html) for more information about saving searches and using them.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-saved-search-v1**](#create-saved-search-v1) | **POST** `/saved-searches/v1` | Create a saved search
[**delete-saved-search-v1**](#delete-saved-search-v1) | **DELETE** `/saved-searches/v1/{id}` | Delete document by id
[**execute-saved-search-v1**](#execute-saved-search-v1) | **POST** `/saved-searches/v1/{id}/execute` | Execute a saved search by id
[**get-saved-search-v1**](#get-saved-search-v1) | **GET** `/saved-searches/v1/{id}` | Return saved search by id
[**list-saved-searches-v1**](#list-saved-searches-v1) | **GET** `/saved-searches/v1` | A list of saved searches
[**put-saved-search-v1**](#put-saved-search-v1) | **PUT** `/saved-searches/v1/{id}` | Updates an existing saved search 


## create-saved-search-v1
Create a saved search
Creates a new saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-saved-search-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | create_saved_search_v1_request | [**CreateSavedSearchV1Request**](../models/create-saved-search-v1-request) | True  | The saved search to persist.

### Return type
[**Savedsearch**](../models/savedsearch)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The persisted saved search. | Savedsearch |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.saved_search.api.saved_search_api import SavedSearchApi
from sailpoint.saved_search.api_client import ApiClient
from sailpoint.saved_search.models.create_saved_search_v1_request import CreateSavedSearchV1Request
from sailpoint.saved_search.models.savedsearch import Savedsearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    create_saved_search_v1_request = '''sailpoint.saved_search.CreateSavedSearchV1Request()''' # CreateSavedSearchV1Request | The saved search to persist.

    try:
        # Create a saved search
        new_create_saved_search_v1_request = CreateSavedSearchV1Request.from_json(create_saved_search_v1_request)
        results = SavedSearchApi(api_client).create_saved_search_v1(create_saved_search_v1_request=new_create_saved_search_v1_request)
        # Below is a request that includes all optional parameters
        # results = SavedSearchApi(api_client).create_saved_search_v1(new_create_saved_search_v1_request)
        print("The response of SavedSearchApi->create_saved_search_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SavedSearchApi->create_saved_search_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-saved-search-v1
Delete document by id
Deletes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-saved-search-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the requested document.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No Content - Indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.saved_search.api.saved_search_api import SavedSearchApi
from sailpoint.saved_search.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.

    try:
        # Delete document by id
        
        SavedSearchApi(api_client).delete_saved_search_v1(id=id)
        # Below is a request that includes all optional parameters
        # SavedSearchApi(api_client).delete_saved_search_v1(id)
    except Exception as e:
        print("Exception when calling SavedSearchApi->delete_saved_search_v1: %s\n" % e)
```



[[Back to top]](#) 

## execute-saved-search-v1
Execute a saved search by id
Executes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/execute-saved-search-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the requested document.
 Body  | searcharguments | [**Searcharguments**](../models/searcharguments) | True  | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.saved_search.api.saved_search_api import SavedSearchApi
from sailpoint.saved_search.api_client import ApiClient
from sailpoint.saved_search.models.searcharguments import Searcharguments
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.
    searcharguments = '''sailpoint.saved_search.Searcharguments()''' # Searcharguments | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided. 

    try:
        # Execute a saved search by id
        new_searcharguments = Searcharguments.from_json(searcharguments)
        SavedSearchApi(api_client).execute_saved_search_v1(id=id, searcharguments=new_searcharguments)
        # Below is a request that includes all optional parameters
        # SavedSearchApi(api_client).execute_saved_search_v1(id, new_searcharguments)
    except Exception as e:
        print("Exception when calling SavedSearchApi->execute_saved_search_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-saved-search-v1
Return saved search by id
Returns the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-saved-search-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the requested document.

### Return type
[**Savedsearch**](../models/savedsearch)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The requested saved search. | Savedsearch |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.saved_search.api.saved_search_api import SavedSearchApi
from sailpoint.saved_search.api_client import ApiClient
from sailpoint.saved_search.models.savedsearch import Savedsearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.

    try:
        # Return saved search by id
        
        results = SavedSearchApi(api_client).get_saved_search_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SavedSearchApi(api_client).get_saved_search_v1(id)
        print("The response of SavedSearchApi->get_saved_search_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SavedSearchApi->get_saved_search_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-saved-searches-v1
A list of saved searches
Returns a list of saved searches.


[API Spec](https://developer.sailpoint.com/docs/api/v1/list-saved-searches-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*

### Return type
[**List[Savedsearch]**](../models/savedsearch)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The list of requested saved searches. | List[Savedsearch] |  * X-Total-Count - The total result count (returned only if the *count* parameter is specified as *true*).  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.saved_search.api.saved_search_api import SavedSearchApi
from sailpoint.saved_search.api_client import ApiClient
from sailpoint.saved_search.models.savedsearch import Savedsearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'owner.id eq \"7a724640-0c17-4ce9-a8c3-4a89738459c8\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* (optional)

    try:
        # A list of saved searches
        
        results = SavedSearchApi(api_client).list_saved_searches_v1()
        # Below is a request that includes all optional parameters
        # results = SavedSearchApi(api_client).list_saved_searches_v1(offset, limit, count, filters)
        print("The response of SavedSearchApi->list_saved_searches_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SavedSearchApi->list_saved_searches_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-saved-search-v1
Updates an existing saved search 
Updates an existing saved search. 

>**NOTE: You cannot update the `owner` of the saved search.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/put-saved-search-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the requested document.
 Body  | savedsearch | [**Savedsearch**](../models/savedsearch) | True  | The saved search to persist.

### Return type
[**Savedsearch**](../models/savedsearch)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The persisted saved search. | Savedsearch |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSavedSearchesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSavedSearchesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.saved_search.api.saved_search_api import SavedSearchApi
from sailpoint.saved_search.api_client import ApiClient
from sailpoint.saved_search.models.savedsearch import Savedsearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.
    savedsearch = '''sailpoint.saved_search.Savedsearch()''' # Savedsearch | The saved search to persist.

    try:
        # Updates an existing saved search 
        new_savedsearch = Savedsearch.from_json(savedsearch)
        results = SavedSearchApi(api_client).put_saved_search_v1(id=id, savedsearch=new_savedsearch)
        # Below is a request that includes all optional parameters
        # results = SavedSearchApi(api_client).put_saved_search_v1(id, new_savedsearch)
        print("The response of SavedSearchApi->put_saved_search_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SavedSearchApi->put_saved_search_v1: %s\n" % e)
```



[[Back to top]](#) 




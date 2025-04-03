---
id: saved-search
title: Saved_Search
pagination_label: Saved_Search
sidebar_label: Saved_Search
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Saved_Search', 'Saved_Search'] 
slug: /tools/sdk/python/v3/methods/saved-search
tags: ['SDK', 'Software Development Kit', 'Saved_Search', 'Saved_Search']
---

# sailpoint.v3.SavedSearchApi
  Use this API to implement saved search functionality. 
With saved search functionality in place, users can save search queries and then view those saved searches, as well as rerun them. 

Search queries in Identity Security Cloud can grow very long and specific, which can make reconstructing them difficult or tedious, so it can be especially helpful to save search queries. 
It also opens the possibility to configure Identity Security Cloud to run the saved queries on a schedule, which is essential to detecting user information and access changes throughout an organization&#39;s tenant and across all its sources. 
Refer to [Scheduled Search](https://developer.sailpoint.com/docs/api/v3/scheduled-search/) for more information about running saved searches on a schedule. 

In Identity Security Cloud, users can save searches under a name, and then they can access that saved search and run it again when they want. 

Refer to [Managing Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html) for more information about saving searches and using them.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-saved-search**](#create-saved-search) | **POST** `/saved-searches` | Create a saved search
[**delete-saved-search**](#delete-saved-search) | **DELETE** `/saved-searches/{id}` | Delete document by ID
[**execute-saved-search**](#execute-saved-search) | **POST** `/saved-searches/{id}/execute` | Execute a saved search by ID
[**get-saved-search**](#get-saved-search) | **GET** `/saved-searches/{id}` | Return saved search by ID
[**list-saved-searches**](#list-saved-searches) | **GET** `/saved-searches` | A list of Saved Searches
[**put-saved-search**](#put-saved-search) | **PUT** `/saved-searches/{id}` | Updates an existing saved search 


## create-saved-search
Create a saved search
Creates a new saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/create-saved-search)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | create_saved_search_request | [**CreateSavedSearchRequest**](../models/create-saved-search-request) | True  | The saved search to persist.

### Return type
[**SavedSearch**](../models/saved-search)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The persisted saved search. | SavedSearch |  -  |
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
from sailpoint.v3.api.saved_search_api import SavedSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.create_saved_search_request import CreateSavedSearchRequest
from sailpoint.v3.models.saved_search import SavedSearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    create_saved_search_request = '''sailpoint.v3.CreateSavedSearchRequest()''' # CreateSavedSearchRequest | The saved search to persist.

    try:
        # Create a saved search
        new_create_saved_search_request = CreateSavedSearchRequest.from_json(create_saved_search_request)
        results = SavedSearchApi(api_client).create_saved_search(create_saved_search_request=new_create_saved_search_request)
        # Below is a request that includes all optional parameters
        # results = SavedSearchApi(api_client).create_saved_search(new_create_saved_search_request)
        print("The response of SavedSearchApi->create_saved_search:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SavedSearchApi->create_saved_search: %s\n" % e)
```



[[Back to top]](#) 

## delete-saved-search
Delete document by ID
Deletes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-saved-search)

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
from sailpoint.v3.api.saved_search_api import SavedSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.

    try:
        # Delete document by ID
        
        SavedSearchApi(api_client).delete_saved_search(id=id)
        # Below is a request that includes all optional parameters
        # SavedSearchApi(api_client).delete_saved_search(id)
    except Exception as e:
        print("Exception when calling SavedSearchApi->delete_saved_search: %s\n" % e)
```



[[Back to top]](#) 

## execute-saved-search
Execute a saved search by ID
Executes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/execute-saved-search)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the requested document.
 Body  | search_arguments | [**SearchArguments**](../models/search-arguments) | True  | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. |  |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
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
from sailpoint.v3.api.saved_search_api import SavedSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.search_arguments import SearchArguments
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.
    search_arguments = '''{
          "owner" : "",
          "recipients" : [ {
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          }, {
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          } ],
          "scheduleId" : "7a724640-0c17-4ce9-a8c3-4a89738459c8"
        }''' # SearchArguments | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided. 

    try:
        # Execute a saved search by ID
        new_search_arguments = SearchArguments.from_json(search_arguments)
        SavedSearchApi(api_client).execute_saved_search(id=id, search_arguments=new_search_arguments)
        # Below is a request that includes all optional parameters
        # SavedSearchApi(api_client).execute_saved_search(id, new_search_arguments)
    except Exception as e:
        print("Exception when calling SavedSearchApi->execute_saved_search: %s\n" % e)
```



[[Back to top]](#) 

## get-saved-search
Return saved search by ID
Returns the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-saved-search)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the requested document.

### Return type
[**SavedSearch**](../models/saved-search)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The requested saved search. | SavedSearch |  -  |
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
from sailpoint.v3.api.saved_search_api import SavedSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.saved_search import SavedSearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.

    try:
        # Return saved search by ID
        
        results = SavedSearchApi(api_client).get_saved_search(id=id)
        # Below is a request that includes all optional parameters
        # results = SavedSearchApi(api_client).get_saved_search(id)
        print("The response of SavedSearchApi->get_saved_search:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SavedSearchApi->get_saved_search: %s\n" % e)
```



[[Back to top]](#) 

## list-saved-searches
A list of Saved Searches
Returns a list of saved searches.


[API Spec](https://developer.sailpoint.com/docs/api/v3/list-saved-searches)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*

### Return type
[**List[SavedSearch]**](../models/saved-search)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The list of requested saved searches. | List[SavedSearch] |  * X-Total-Count - The total result count (returned only if the *count* parameter is specified as *true*).  |
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
from sailpoint.v3.api.saved_search_api import SavedSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.saved_search import SavedSearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'owner.id eq \"7a724640-0c17-4ce9-a8c3-4a89738459c8\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* (optional)

    try:
        # A list of Saved Searches
        
        results = SavedSearchApi(api_client).list_saved_searches()
        # Below is a request that includes all optional parameters
        # results = SavedSearchApi(api_client).list_saved_searches(offset, limit, count, filters)
        print("The response of SavedSearchApi->list_saved_searches:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SavedSearchApi->list_saved_searches: %s\n" % e)
```



[[Back to top]](#) 

## put-saved-search
Updates an existing saved search 
Updates an existing saved search. 

>**NOTE: You cannot update the `owner` of the saved search.**


[API Spec](https://developer.sailpoint.com/docs/api/v3/put-saved-search)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the requested document.
 Body  | saved_search | [**SavedSearch**](../models/saved-search) | True  | The saved search to persist.

### Return type
[**SavedSearch**](../models/saved-search)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The persisted saved search. | SavedSearch |  -  |
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
from sailpoint.v3.api.saved_search_api import SavedSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.saved_search import SavedSearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.
    saved_search = '''{
          "owner" : {
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "created" : "2018-06-25T20:22:28.104Z",
          "columns" : {
            "identity" : [ {
              "field" : "displayName",
              "header" : "Display Name"
            }, {
              "field" : "e-mail",
              "header" : "Work Email"
            } ]
          },
          "query" : "@accounts(disabled:true)",
          "description" : "Disabled accounts",
          "orderBy" : {
            "identity" : [ "lastName", "firstName" ],
            "role" : [ "name" ]
          },
          "sort" : [ "displayName" ],
          "filters" : {
            "terms" : [ "account_count", "account_count" ],
            "range" : {
              "lower" : {
                "inclusive" : false,
                "value" : "1"
              },
              "upper" : {
                "inclusive" : false,
                "value" : "1"
              }
            },
            "exclude" : false,
            "type" : "RANGE"
          },
          "ownerId" : "2c91808568c529c60168cca6f90c1313",
          "indices" : [ "identities" ],
          "public" : false,
          "name" : "Disabled accounts",
          "modified" : "2018-06-25T20:22:28.104Z",
          "id" : "0de46054-fe90-434a-b84e-c6b3359d0c64",
          "fields" : [ "disabled" ]
        }''' # SavedSearch | The saved search to persist.

    try:
        # Updates an existing saved search 
        new_saved_search = SavedSearch.from_json(saved_search)
        results = SavedSearchApi(api_client).put_saved_search(id=id, saved_search=new_saved_search)
        # Below is a request that includes all optional parameters
        # results = SavedSearchApi(api_client).put_saved_search(id, new_saved_search)
        print("The response of SavedSearchApi->put_saved_search:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SavedSearchApi->put_saved_search: %s\n" % e)
```



[[Back to top]](#) 




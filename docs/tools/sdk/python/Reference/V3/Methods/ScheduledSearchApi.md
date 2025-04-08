---
id: scheduled-search
title: Scheduled_Search
pagination_label: Scheduled_Search
sidebar_label: Scheduled_Search
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Scheduled_Search', 'Scheduled_Search'] 
slug: /tools/sdk/python/v3/methods/scheduled-search
tags: ['SDK', 'Software Development Kit', 'Scheduled_Search', 'Scheduled_Search']
---

# sailpoint.v3.ScheduledSearchApi
  Use this API to implement scheduled search functionality. 
With scheduled search functionality in place, users can run saved search queries on their tenants on a schedule, and Identity Security Cloud emails them the search results. 
Users can also share these search results with other users by email by adding those users as subscribers, or those users can subscribe themselves. 

One of the greatest benefits of saving searches is the ability to run those searches on a schedule. 
This is essential for organizations to constantly detect any changes to user information or access throughout their tenants and across all their sources. 
For example, the manager Amanda Ross can schedule a saved search &quot;manager.name:amanda.ross AND attributes.location:austin&quot; on a schedule to regularly stay aware of changes with the Austin employees reporting to her.
Identity Security Cloud emails her the search results when the search runs, so she can work on other tasks instead of actively running this search.

In Identity Security Cloud, scheduling a search involves a subscription. 
Users can create a subscription for a saved search and schedule it to run daily, weekly, or monthly (you can only use one schedule option at a time). 
The user can add other identities as subscribers so when the scheduled search runs, the subscribers and the user all receive emails. 

By default, subscriptions exclude detailed results from the emails, for security purposes. 
Including detailed results about user access in an email may expose sensitive information.
However, the subscription creator can choose to include the information in the emails.  

By default, Identity Security Cloud sends emails to the subscribers even when the searches do not return new results. 
However, the subscription creator can choose to suppress these empty emails. 

Users can also subscribe to saved searches that already have existing subscriptions so they receive emails when the searches run. 
A saved search can have up to 10 subscriptions configured at a time. 

The subscription creator can enable, disable, or delete the subscription. 

Refer to [Subscribing to Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html#subscribing-to-saved-searches) for more information about scheduling searches and subscribing to them.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-scheduled-search**](#create-scheduled-search) | **POST** `/scheduled-searches` | Create a new scheduled search
[**delete-scheduled-search**](#delete-scheduled-search) | **DELETE** `/scheduled-searches/{id}` | Delete a Scheduled Search
[**get-scheduled-search**](#get-scheduled-search) | **GET** `/scheduled-searches/{id}` | Get a Scheduled Search
[**list-scheduled-search**](#list-scheduled-search) | **GET** `/scheduled-searches` | List scheduled searches
[**unsubscribe-scheduled-search**](#unsubscribe-scheduled-search) | **POST** `/scheduled-searches/{id}/unsubscribe` | Unsubscribe a recipient from Scheduled Search
[**update-scheduled-search**](#update-scheduled-search) | **PUT** `/scheduled-searches/{id}` | Update an existing Scheduled Search


## create-scheduled-search
Create a new scheduled search
Creates a new scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/create-scheduled-search)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | create_scheduled_search_request | [**CreateScheduledSearchRequest**](../models/create-scheduled-search-request) | True  | The scheduled search to persist.

### Return type
[**ScheduledSearch**](../models/scheduled-search)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The persisted scheduled search. | ScheduledSearch |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.scheduled_search_api import ScheduledSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.create_scheduled_search_request import CreateScheduledSearchRequest
from sailpoint.v3.models.scheduled_search import ScheduledSearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    create_scheduled_search_request = '''{savedSearchId=9c620e13-cd33-4804-a13d-403bd7bcdbad, schedule={type=DAILY, hours={type=LIST, values=[9]}}, recipients=[{type=IDENTITY, id=2c9180867624cbd7017642d8c8c81f67}]}''' # CreateScheduledSearchRequest | The scheduled search to persist.

    try:
        # Create a new scheduled search
        new_create_scheduled_search_request = CreateScheduledSearchRequest.from_json(create_scheduled_search_request)
        results = ScheduledSearchApi(api_client).create_scheduled_search(create_scheduled_search_request=new_create_scheduled_search_request)
        # Below is a request that includes all optional parameters
        # results = ScheduledSearchApi(api_client).create_scheduled_search(new_create_scheduled_search_request)
        print("The response of ScheduledSearchApi->create_scheduled_search:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ScheduledSearchApi->create_scheduled_search: %s\n" % e)
```



[[Back to top]](#) 

## delete-scheduled-search
Delete a Scheduled Search
Deletes the specified scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-scheduled-search)

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
from sailpoint.v3.api.scheduled_search_api import ScheduledSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.

    try:
        # Delete a Scheduled Search
        
        ScheduledSearchApi(api_client).delete_scheduled_search(id=id)
        # Below is a request that includes all optional parameters
        # ScheduledSearchApi(api_client).delete_scheduled_search(id)
    except Exception as e:
        print("Exception when calling ScheduledSearchApi->delete_scheduled_search: %s\n" % e)
```



[[Back to top]](#) 

## get-scheduled-search
Get a Scheduled Search
Returns the specified scheduled search.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-scheduled-search)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the requested document.

### Return type
[**ScheduledSearch**](../models/scheduled-search)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The requested scheduled search. | ScheduledSearch |  -  |
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
from sailpoint.v3.api.scheduled_search_api import ScheduledSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.scheduled_search import ScheduledSearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.

    try:
        # Get a Scheduled Search
        
        results = ScheduledSearchApi(api_client).get_scheduled_search(id=id)
        # Below is a request that includes all optional parameters
        # results = ScheduledSearchApi(api_client).get_scheduled_search(id)
        print("The response of ScheduledSearchApi->get_scheduled_search:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ScheduledSearchApi->get_scheduled_search: %s\n" % e)
```



[[Back to top]](#) 

## list-scheduled-search
List scheduled searches
Returns a list of scheduled searches.


[API Spec](https://developer.sailpoint.com/docs/api/v3/list-scheduled-search)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq*

### Return type
[**List[ScheduledSearch]**](../models/scheduled-search)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The list of requested scheduled searches. | List[ScheduledSearch] |  * X-Total-Count - The total result count (returned only if the *count* parameter is specified as *true*).  |
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
from sailpoint.v3.api.scheduled_search_api import ScheduledSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.scheduled_search import ScheduledSearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'savedSearchId eq \"6cc0945d-9eeb-4948-9033-72d066e1153e\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq* (optional)

    try:
        # List scheduled searches
        
        results = ScheduledSearchApi(api_client).list_scheduled_search()
        # Below is a request that includes all optional parameters
        # results = ScheduledSearchApi(api_client).list_scheduled_search(offset, limit, count, filters)
        print("The response of ScheduledSearchApi->list_scheduled_search:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ScheduledSearchApi->list_scheduled_search: %s\n" % e)
```



[[Back to top]](#) 

## unsubscribe-scheduled-search
Unsubscribe a recipient from Scheduled Search
Unsubscribes a recipient from the specified scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/unsubscribe-scheduled-search)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the requested document.
 Body  | typed_reference | [**TypedReference**](../models/typed-reference) | True  | The recipient to be removed from the scheduled search. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No Content - Indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.scheduled_search_api import ScheduledSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.typed_reference import TypedReference
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.
    typed_reference = '''{
          "id" : "2c91808568c529c60168cca6f90c1313",
          "type" : "IDENTITY"
        }''' # TypedReference | The recipient to be removed from the scheduled search. 

    try:
        # Unsubscribe a recipient from Scheduled Search
        new_typed_reference = TypedReference.from_json(typed_reference)
        ScheduledSearchApi(api_client).unsubscribe_scheduled_search(id=id, typed_reference=new_typed_reference)
        # Below is a request that includes all optional parameters
        # ScheduledSearchApi(api_client).unsubscribe_scheduled_search(id, new_typed_reference)
    except Exception as e:
        print("Exception when calling ScheduledSearchApi->unsubscribe_scheduled_search: %s\n" % e)
```



[[Back to top]](#) 

## update-scheduled-search
Update an existing Scheduled Search
Updates an existing scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/update-scheduled-search)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the requested document.
 Body  | scheduled_search | [**ScheduledSearch**](../models/scheduled-search) | True  | The scheduled search to persist.

### Return type
[**ScheduledSearch**](../models/scheduled-search)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The persisted scheduled search. | ScheduledSearch |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.scheduled_search_api import ScheduledSearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.scheduled_search import ScheduledSearch
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.
    scheduled_search = '''{
          "owner" : {
            "id" : "2c9180867624cbd7017642d8c8c81f67",
            "type" : "IDENTITY"
          },
          "displayQueryDetails" : false,
          "created" : "",
          "description" : "Daily disabled accounts",
          "ownerId" : "2c9180867624cbd7017642d8c8c81f67",
          "enabled" : false,
          "schedule" : {
            "hours" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
            },
            "months" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
            },
            "timeZoneId" : "America/Chicago",
            "days" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
            },
            "expiration" : "2018-06-25T20:22:28.104Z",
            "type" : "WEEKLY"
          },
          "recipients" : [ {
            "id" : "2c9180867624cbd7017642d8c8c81f67",
            "type" : "IDENTITY"
          }, {
            "id" : "2c9180867624cbd7017642d8c8c81f67",
            "type" : "IDENTITY"
          } ],
          "savedSearchId" : "554f1511-f0a1-4744-ab14-599514d3e57c",
          "name" : "Daily disabled accounts",
          "modified" : "",
          "id" : "0de46054-fe90-434a-b84e-c6b3359d0c64",
          "emailEmptyResults" : false
        }''' # ScheduledSearch | The scheduled search to persist.

    try:
        # Update an existing Scheduled Search
        new_scheduled_search = ScheduledSearch.from_json(scheduled_search)
        results = ScheduledSearchApi(api_client).update_scheduled_search(id=id, scheduled_search=new_scheduled_search)
        # Below is a request that includes all optional parameters
        # results = ScheduledSearchApi(api_client).update_scheduled_search(id, new_scheduled_search)
        print("The response of ScheduledSearchApi->update_scheduled_search:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ScheduledSearchApi->update_scheduled_search: %s\n" % e)
```



[[Back to top]](#) 




---
id: v2024-work-items
title: Work_Items
pagination_label: Work_Items
sidebar_label: Work_Items
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Work_Items', 'V2024Work_Items'] 
slug: /tools/sdk/python/v2024/methods/work-items
tags: ['SDK', 'Software Development Kit', 'Work_Items', 'V2024Work_Items']
---

# sailpoint.v2024.WorkItemsApi
  Use this API to implement work item functionality. 
With this functionality in place, users can manage their work items (tasks). 

Work items refer to the tasks users see in Identity Security Cloud&#39;s Task Manager. 
They can see the pending work items they need to complete, as well as the work items they have already completed. 
Task Manager lists the work items along with the involved sources, identities, accounts, and the timestamp when the work item was created. 
For example, a user may see a pending &#39;Create an Account&#39; work item for the identity Fred.Astaire in GitHub for Fred&#39;s GitHub account, fred-astaire-sp. 
Once the user completes the work item, the work item will be listed with his or her other completed work items. 

To complete work items, users can use their dashboards and select the &#39;My Tasks&#39; widget. 
The widget will list any work items they need to complete, and they can select the work item from the list to review its details. 
When they complete the work item, they can select &#39;Mark Complete&#39; to add it to their list of completed work items. 

Refer to [Task Manager](https://documentation.sailpoint.com/saas/user-help/task_manager.html) for more information about work items, including the different types of work items users may need to complete.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-approval-item**](#approve-approval-item) | **POST** `/work-items/{id}/approve/{approvalItemId}` | Approve an Approval Item
[**approve-approval-items-in-bulk**](#approve-approval-items-in-bulk) | **POST** `/work-items/bulk-approve/{id}` | Bulk approve Approval Items
[**complete-work-item**](#complete-work-item) | **POST** `/work-items/{id}` | Complete a Work Item
[**forward-work-item**](#forward-work-item) | **POST** `/work-items/{id}/forward` | Forward a Work Item
[**get-completed-work-items**](#get-completed-work-items) | **GET** `/work-items/completed` | Completed Work Items
[**get-count-completed-work-items**](#get-count-completed-work-items) | **GET** `/work-items/completed/count` | Count Completed Work Items
[**get-count-work-items**](#get-count-work-items) | **GET** `/work-items/count` | Count Work Items
[**get-work-item**](#get-work-item) | **GET** `/work-items/{id}` | Get a Work Item
[**get-work-items-summary**](#get-work-items-summary) | **GET** `/work-items/summary` | Work Items Summary
[**list-work-items**](#list-work-items) | **GET** `/work-items` | List Work Items
[**reject-approval-item**](#reject-approval-item) | **POST** `/work-items/{id}/reject/{approvalItemId}` | Reject an Approval Item
[**reject-approval-items-in-bulk**](#reject-approval-items-in-bulk) | **POST** `/work-items/bulk-reject/{id}` | Bulk reject Approval Items
[**submit-account-selection**](#submit-account-selection) | **POST** `/work-items/{id}/submit-account-selection` | Submit Account Selections


## approve-approval-item
Approve an Approval Item
This API approves an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/approve-approval-item)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item
Path   | approval_item_id | **str** | True  | The ID of the approval item.

### Return type
[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A work items details object. | WorkItems |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items import WorkItems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item
    approval_item_id = '1211bcaa32112bcef6122adb21cef1ac' # str | The ID of the approval item. # str | The ID of the approval item.

    try:
        # Approve an Approval Item
        
        results = WorkItemsApi(api_client).approve_approval_item(id=id, approval_item_id=approval_item_id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).approve_approval_item(id, approval_item_id)
        print("The response of WorkItemsApi->approve_approval_item:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->approve_approval_item: %s\n" % e)
```



[[Back to top]](#) 

## approve-approval-items-in-bulk
Bulk approve Approval Items
This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/approve-approval-items-in-bulk)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item

### Return type
[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A work items details object. | WorkItems |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items import WorkItems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item

    try:
        # Bulk approve Approval Items
        
        results = WorkItemsApi(api_client).approve_approval_items_in_bulk(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).approve_approval_items_in_bulk(id)
        print("The response of WorkItemsApi->approve_approval_items_in_bulk:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->approve_approval_items_in_bulk: %s\n" % e)
```



[[Back to top]](#) 

## complete-work-item
Complete a Work Item
This API completes a work item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/complete-work-item)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item
 Body  | body | **str** |   (optional) | Body is the request payload to create form definition request

### Return type
[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A WorkItems object | WorkItems |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items import WorkItems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item
    body = 'body_example' # str | Body is the request payload to create form definition request (optional) # str | Body is the request payload to create form definition request (optional)

    try:
        # Complete a Work Item
        
        results = WorkItemsApi(api_client).complete_work_item(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).complete_work_item(id, new_body)
        print("The response of WorkItemsApi->complete_work_item:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->complete_work_item: %s\n" % e)
```



[[Back to top]](#) 

## forward-work-item
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
Forward a Work Item
This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/forward-work-item)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | work_item_forward | [**WorkItemForward**](../models/work-item-forward) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Success, but no data is returned. |  |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_item_forward import WorkItemForward
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    work_item_forward = '''{
          "targetOwnerId" : "2c9180835d2e5168015d32f890ca1581",
          "comment" : "I'm going on vacation.",
          "sendNotifications" : true
        }''' # WorkItemForward | 

    try:
        # Forward a Work Item
        new_work_item_forward = WorkItemForward.from_json(work_item_forward)
        WorkItemsApi(api_client).forward_work_item(id=id, x_sail_point_experimental=x_sail_point_experimental, work_item_forward=new_work_item_forward)
        # Below is a request that includes all optional parameters
        # WorkItemsApi(api_client).forward_work_item(id, x_sail_point_experimental, new_work_item_forward)
    except Exception as e:
        print("Exception when calling WorkItemsApi->forward_work_item: %s\n" % e)
```



[[Back to top]](#) 

## get-completed-work-items
Completed Work Items
This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-completed-work-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[WorkItems]**](../models/work-items)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of completed work items. | List[WorkItems] |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items import WorkItems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = '1211bcaa32112bcef6122adb21cef1ac' # str | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional) # str | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Completed Work Items
        
        results = WorkItemsApi(api_client).get_completed_work_items()
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).get_completed_work_items(owner_id, limit, offset, count)
        print("The response of WorkItemsApi->get_completed_work_items:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->get_completed_work_items: %s\n" % e)
```



[[Back to top]](#) 

## get-count-completed-work-items
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
Count Completed Work Items
This gets a count of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-count-completed-work-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | owner_id | **str** |   (optional) | ID of the work item owner.

### Return type
[**WorkItemsCount**](../models/work-items-count)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of work items | WorkItemsCount |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items_count import WorkItemsCount
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    owner_id = 'owner_id_example' # str | ID of the work item owner. (optional) # str | ID of the work item owner. (optional)

    try:
        # Count Completed Work Items
        
        results = WorkItemsApi(api_client).get_count_completed_work_items(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).get_count_completed_work_items(x_sail_point_experimental, owner_id)
        print("The response of WorkItemsApi->get_count_completed_work_items:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->get_count_completed_work_items: %s\n" % e)
```



[[Back to top]](#) 

## get-count-work-items
Count Work Items
This gets a count of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-count-work-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | ID of the work item owner.

### Return type
[**WorkItemsCount**](../models/work-items-count)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of work items | WorkItemsCount |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items_count import WorkItemsCount
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = 'ef38f94347e94562b5bb8424a56397d8' # str | ID of the work item owner. (optional) # str | ID of the work item owner. (optional)

    try:
        # Count Work Items
        
        results = WorkItemsApi(api_client).get_count_work_items()
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).get_count_work_items(owner_id)
        print("The response of WorkItemsApi->get_count_work_items:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->get_count_work_items: %s\n" % e)
```



[[Back to top]](#) 

## get-work-item
Get a Work Item
This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-work-item)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the work item.

### Return type
[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The work item with the given ID. | WorkItems |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items import WorkItems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | ID of the work item. # str | ID of the work item.

    try:
        # Get a Work Item
        
        results = WorkItemsApi(api_client).get_work_item(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).get_work_item(id)
        print("The response of WorkItemsApi->get_work_item:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->get_work_item: %s\n" % e)
```



[[Back to top]](#) 

## get-work-items-summary
Work Items Summary
This gets a summary of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-work-items-summary)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | ID of the work item owner.

### Return type
[**WorkItemsSummary**](../models/work-items-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of work items | WorkItemsSummary |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items_summary import WorkItemsSummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = '1211bcaa32112bcef6122adb21cef1ac' # str | ID of the work item owner. (optional) # str | ID of the work item owner. (optional)

    try:
        # Work Items Summary
        
        results = WorkItemsApi(api_client).get_work_items_summary()
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).get_work_items_summary(owner_id)
        print("The response of WorkItemsApi->get_work_items_summary:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->get_work_items_summary: %s\n" % e)
```



[[Back to top]](#) 

## list-work-items
List Work Items
This gets a collection of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-work-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | owner_id | **str** |   (optional) | ID of the work item owner.

### Return type
[**List[WorkItems]**](../models/work-items)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of work items | List[WorkItems] |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items import WorkItems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    owner_id = '1211bcaa32112bcef6122adb21cef1ac' # str | ID of the work item owner. (optional) # str | ID of the work item owner. (optional)

    try:
        # List Work Items
        
        results = WorkItemsApi(api_client).list_work_items()
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).list_work_items(limit, offset, count, owner_id)
        print("The response of WorkItemsApi->list_work_items:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->list_work_items: %s\n" % e)
```



[[Back to top]](#) 

## reject-approval-item
Reject an Approval Item
This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/reject-approval-item)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item
Path   | approval_item_id | **str** | True  | The ID of the approval item.

### Return type
[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A work items details object. | WorkItems |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items import WorkItems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item
    approval_item_id = '1211bcaa32112bcef6122adb21cef1ac' # str | The ID of the approval item. # str | The ID of the approval item.

    try:
        # Reject an Approval Item
        
        results = WorkItemsApi(api_client).reject_approval_item(id=id, approval_item_id=approval_item_id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).reject_approval_item(id, approval_item_id)
        print("The response of WorkItemsApi->reject_approval_item:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->reject_approval_item: %s\n" % e)
```



[[Back to top]](#) 

## reject-approval-items-in-bulk
Bulk reject Approval Items
This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/reject-approval-items-in-bulk)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item

### Return type
[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A work items details object. | WorkItems |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items import WorkItems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item

    try:
        # Bulk reject Approval Items
        
        results = WorkItemsApi(api_client).reject_approval_items_in_bulk(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).reject_approval_items_in_bulk(id)
        print("The response of WorkItemsApi->reject_approval_items_in_bulk:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->reject_approval_items_in_bulk: %s\n" % e)
```



[[Back to top]](#) 

## submit-account-selection
Submit Account Selections
This API submits account selections. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/submit-account-selection)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item
 Body  | request_body | **map[string]object** | True  | Account Selection Data map, keyed on fieldName

### Return type
[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A work items details object. | WorkItems |  -  |
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
from sailpoint.v2024.api.work_items_api import WorkItemsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.work_items import WorkItems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item
    request_body = {fieldName=fieldValue} # Dict[str, object] | Account Selection Data map, keyed on fieldName # Dict[str, object] | Account Selection Data map, keyed on fieldName

    try:
        # Submit Account Selections
        new_request_body = RequestBody.from_json(request_body)
        results = WorkItemsApi(api_client).submit_account_selection(id=id, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).submit_account_selection(id, new_request_body)
        print("The response of WorkItemsApi->submit_account_selection:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->submit_account_selection: %s\n" % e)
```



[[Back to top]](#) 




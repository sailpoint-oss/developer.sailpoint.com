---
id: work-items
title: Work_Items
pagination_label: Work_Items
sidebar_label: Work_Items
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Work_Items', 'Work_Items'] 
slug: /tools/sdk/python/work-items/methods/work-items
tags: ['SDK', 'Software Development Kit', 'Work_Items', 'Work_Items']
---

# sailpoint.work_items.WorkItemsApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-approval-item-v1**](#approve-approval-item-v1) | **POST** `/work-items/v1/{id}/approve/{approvalItemId}` | Approve an approval item
[**approve-approval-items-in-bulk-v1**](#approve-approval-items-in-bulk-v1) | **POST** `/work-items/v1/bulk-approve/{id}` | Bulk approve approval items
[**complete-work-item-v1**](#complete-work-item-v1) | **POST** `/work-items/v1/{id}` | Complete a work item
[**forward-work-item-v1**](#forward-work-item-v1) | **POST** `/work-items/v1/{id}/forward` | Forward a work item
[**get-completed-work-items-v1**](#get-completed-work-items-v1) | **GET** `/work-items/v1/completed` | Completed work items
[**get-count-completed-work-items-v1**](#get-count-completed-work-items-v1) | **GET** `/work-items/v1/completed/count` | Count completed work items
[**get-count-work-items-v1**](#get-count-work-items-v1) | **GET** `/work-items/v1/count` | Count work items
[**get-work-item-v1**](#get-work-item-v1) | **GET** `/work-items/v1/{id}` | Get a work item
[**get-work-items-summary-v1**](#get-work-items-summary-v1) | **GET** `/work-items/v1/summary` | Work items summary
[**list-work-items-v1**](#list-work-items-v1) | **GET** `/work-items/v1` | List work items
[**reject-approval-item-v1**](#reject-approval-item-v1) | **POST** `/work-items/v1/{id}/reject/{approvalItemId}` | Reject an approval item
[**reject-approval-items-in-bulk-v1**](#reject-approval-items-in-bulk-v1) | **POST** `/work-items/v1/bulk-reject/{id}` | Bulk reject approval items
[**submit-account-selection-v1**](#submit-account-selection-v1) | **POST** `/work-items/v1/{id}/submit-account-selection` | Submit account selections


## approve-approval-item-v1
Approve an approval item
This API approves an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-approval-item-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item
Path   | approval_item_id | **str** | True  | The ID of the approval item.

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A work items details object. | Workitems |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitems import Workitems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item
    approval_item_id = '1211bcaa32112bcef6122adb21cef1ac' # str | The ID of the approval item. # str | The ID of the approval item.

    try:
        # Approve an approval item
        
        results = WorkItemsApi(api_client).approve_approval_item_v1(id=id, approval_item_id=approval_item_id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).approve_approval_item_v1(id, approval_item_id)
        print("The response of WorkItemsApi->approve_approval_item_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->approve_approval_item_v1: %s\n" % e)
```



[[Back to top]](#) 

## approve-approval-items-in-bulk-v1
Bulk approve approval items
This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-approval-items-in-bulk-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A work items details object. | Workitems |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitems import Workitems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item

    try:
        # Bulk approve approval items
        
        results = WorkItemsApi(api_client).approve_approval_items_in_bulk_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).approve_approval_items_in_bulk_v1(id)
        print("The response of WorkItemsApi->approve_approval_items_in_bulk_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->approve_approval_items_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## complete-work-item-v1
Complete a work item
This API completes a work item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/complete-work-item-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item
 Body  | body | **str** |   (optional) | Body is the request payload to create form definition request

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A WorkItems object | Workitems |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitems import Workitems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item
    body = 'body_example' # str | Body is the request payload to create form definition request (optional) # str | Body is the request payload to create form definition request (optional)

    try:
        # Complete a work item
        
        results = WorkItemsApi(api_client).complete_work_item_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).complete_work_item_v1(id, new_body)
        print("The response of WorkItemsApi->complete_work_item_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->complete_work_item_v1: %s\n" % e)
```



[[Back to top]](#) 

## forward-work-item-v1
Forward a work item
This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/forward-work-item-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item
 Body  | workitemforward | [**Workitemforward**](../models/workitemforward) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Success, but no data is returned. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitemforward import Workitemforward
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item
    workitemforward = '''sailpoint.work_items.Workitemforward()''' # Workitemforward | 

    try:
        # Forward a work item
        new_workitemforward = Workitemforward.from_json(workitemforward)
        WorkItemsApi(api_client).forward_work_item_v1(id=id, workitemforward=new_workitemforward)
        # Below is a request that includes all optional parameters
        # WorkItemsApi(api_client).forward_work_item_v1(id, new_workitemforward)
    except Exception as e:
        print("Exception when calling WorkItemsApi->forward_work_item_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-completed-work-items-v1
Completed work items
This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-completed-work-items-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Workitems]**](../models/workitems)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of completed work items. | List[Workitems] |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitems import Workitems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = '1211bcaa32112bcef6122adb21cef1ac' # str | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional) # str | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Completed work items
        
        results = WorkItemsApi(api_client).get_completed_work_items_v1()
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).get_completed_work_items_v1(owner_id, limit, offset, count)
        print("The response of WorkItemsApi->get_completed_work_items_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->get_completed_work_items_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-count-completed-work-items-v1
Count completed work items
This gets a count of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-count-completed-work-items-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | ID of the work item owner.

### Return type
[**Workitemscount**](../models/workitemscount)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of work items | Workitemscount |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitemscount import Workitemscount
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = 'owner_id_example' # str | ID of the work item owner. (optional) # str | ID of the work item owner. (optional)

    try:
        # Count completed work items
        
        results = WorkItemsApi(api_client).get_count_completed_work_items_v1()
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).get_count_completed_work_items_v1(owner_id)
        print("The response of WorkItemsApi->get_count_completed_work_items_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->get_count_completed_work_items_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-count-work-items-v1
Count work items
This gets a count of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-count-work-items-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | ID of the work item owner.

### Return type
[**Workitemscount**](../models/workitemscount)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of work items | Workitemscount |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitemscount import Workitemscount
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = 'ef38f94347e94562b5bb8424a56397d8' # str | ID of the work item owner. (optional) # str | ID of the work item owner. (optional)

    try:
        # Count work items
        
        results = WorkItemsApi(api_client).get_count_work_items_v1()
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).get_count_work_items_v1(owner_id)
        print("The response of WorkItemsApi->get_count_work_items_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->get_count_work_items_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-work-item-v1
Get a work item
This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-work-item-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the work item.

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The work item with the given ID. | Workitems |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitems import Workitems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | ID of the work item. # str | ID of the work item.

    try:
        # Get a work item
        
        results = WorkItemsApi(api_client).get_work_item_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).get_work_item_v1(id)
        print("The response of WorkItemsApi->get_work_item_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->get_work_item_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-work-items-summary-v1
Work items summary
This gets a summary of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-work-items-summary-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | ID of the work item owner.

### Return type
[**Workitemssummary**](../models/workitemssummary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of work items | Workitemssummary |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitemssummary import Workitemssummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = '1211bcaa32112bcef6122adb21cef1ac' # str | ID of the work item owner. (optional) # str | ID of the work item owner. (optional)

    try:
        # Work items summary
        
        results = WorkItemsApi(api_client).get_work_items_summary_v1()
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).get_work_items_summary_v1(owner_id)
        print("The response of WorkItemsApi->get_work_items_summary_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->get_work_items_summary_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-work-items-v1
List work items
This gets a collection of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-work-items-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | owner_id | **str** |   (optional) | ID of the work item owner.

### Return type
[**List[Workitems]**](../models/workitems)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of work items | List[Workitems] |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitems import Workitems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    owner_id = '1211bcaa32112bcef6122adb21cef1ac' # str | ID of the work item owner. (optional) # str | ID of the work item owner. (optional)

    try:
        # List work items
        
        results = WorkItemsApi(api_client).list_work_items_v1()
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).list_work_items_v1(limit, offset, count, owner_id)
        print("The response of WorkItemsApi->list_work_items_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->list_work_items_v1: %s\n" % e)
```



[[Back to top]](#) 

## reject-approval-item-v1
Reject an approval item
This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-item-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item
Path   | approval_item_id | **str** | True  | The ID of the approval item.

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A work items details object. | Workitems |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitems import Workitems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item
    approval_item_id = '1211bcaa32112bcef6122adb21cef1ac' # str | The ID of the approval item. # str | The ID of the approval item.

    try:
        # Reject an approval item
        
        results = WorkItemsApi(api_client).reject_approval_item_v1(id=id, approval_item_id=approval_item_id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).reject_approval_item_v1(id, approval_item_id)
        print("The response of WorkItemsApi->reject_approval_item_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->reject_approval_item_v1: %s\n" % e)
```



[[Back to top]](#) 

## reject-approval-items-in-bulk-v1
Bulk reject approval items
This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-items-in-bulk-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A work items details object. | Workitems |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitems import Workitems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item

    try:
        # Bulk reject approval items
        
        results = WorkItemsApi(api_client).reject_approval_items_in_bulk_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).reject_approval_items_in_bulk_v1(id)
        print("The response of WorkItemsApi->reject_approval_items_in_bulk_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->reject_approval_items_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## submit-account-selection-v1
Submit account selections
This API submits account selections. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/submit-account-selection-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the work item
 Body  | request_body | **map[string]object** | True  | Account Selection Data map, keyed on fieldName

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A work items details object. | Workitems |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.work_items.api.work_items_api import WorkItemsApi
from sailpoint.work_items.api_client import ApiClient
from sailpoint.work_items.models.workitems import Workitems
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the work item # str | The ID of the work item
    request_body = {"fieldName":"fieldValue"} # Dict[str, object] | Account Selection Data map, keyed on fieldName # Dict[str, object] | Account Selection Data map, keyed on fieldName

    try:
        # Submit account selections
        new_request_body = RequestBody.from_json(request_body)
        results = WorkItemsApi(api_client).submit_account_selection_v1(id=id, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = WorkItemsApi(api_client).submit_account_selection_v1(id, new_request_body)
        print("The response of WorkItemsApi->submit_account_selection_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkItemsApi->submit_account_selection_v1: %s\n" % e)
```



[[Back to top]](#) 




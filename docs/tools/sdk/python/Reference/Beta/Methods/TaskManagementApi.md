---
id: beta-task-management
title: Task_Management
pagination_label: Task_Management
sidebar_label: Task_Management
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Task_Management', 'BetaTask_Management'] 
slug: /tools/sdk/python/beta/methods/task-management
tags: ['SDK', 'Software Development Kit', 'Task_Management', 'BetaTask_Management']
---

# sailpoint.beta.TaskManagementApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-pending-task-headers**](#get-pending-task-headers) | **HEAD** `/task-status/pending-tasks` | Retrieve Pending Task List Headers
[**get-pending-tasks**](#get-pending-tasks) | **GET** `/task-status/pending-tasks` | Retrieve Pending Task Status List
[**get-task-status**](#get-task-status) | **GET** `/task-status/{id}` | Get Task Status by ID
[**get-task-status-list**](#get-task-status-list) | **GET** `/task-status` | Retrieve Task Status List
[**update-task-status**](#update-task-status) | **PATCH** `/task-status/{id}` | Update Task Status by ID


## get-pending-task-headers
Retrieve Pending Task List Headers
Responds with headers only for list of task statuses for pending tasks.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-pending-task-headers)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Retrieve headers for a list of TaskStatus for pending tasks. |  |  -  |
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.beta.api.task_management_api import TaskManagementApi
from sailpoint.beta.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieve Pending Task List Headers
        
        TaskManagementApi(api_client).get_pending_task_headers()
        # Below is a request that includes all optional parameters
        # TaskManagementApi(api_client).get_pending_task_headers(offset, limit, count)
    except Exception as e:
        print("Exception when calling TaskManagementApi->get_pending_task_headers: %s\n" % e)
```



[[Back to top]](#) 

## get-pending-tasks
Retrieve Pending Task Status List
Retrieve a list of statuses for pending tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-pending-tasks)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[TaskStatus]**](../models/task-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a list of TaskStatus for pending tasks. | List[TaskStatus] |  -  |
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.beta.api.task_management_api import TaskManagementApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.task_status import TaskStatus
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieve Pending Task Status List
        
        results = TaskManagementApi(api_client).get_pending_tasks()
        # Below is a request that includes all optional parameters
        # results = TaskManagementApi(api_client).get_pending_tasks(offset, limit, count)
        print("The response of TaskManagementApi->get_pending_tasks:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling TaskManagementApi->get_pending_tasks: %s\n" % e)
```



[[Back to top]](#) 

## get-task-status
Get Task Status by ID
Get task status by task ID. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-task-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Task ID.

### Return type
[**TaskStatus**](../models/task-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a TaskStatus for the task with the given task ID. | TaskStatus |  -  |
403 | Forbidden, generally due to a lack of security rights |  |  -  |
404 | TaskStatus with the given id was not found. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.task_management_api import TaskManagementApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.task_status import TaskStatus
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '00eebcf881994e419d72e757fd30dc0e' # str | Task ID. # str | Task ID.

    try:
        # Get Task Status by ID
        
        results = TaskManagementApi(api_client).get_task_status(id=id)
        # Below is a request that includes all optional parameters
        # results = TaskManagementApi(api_client).get_task_status(id)
        print("The response of TaskManagementApi->get_task_status:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling TaskManagementApi->get_task_status: %s\n" % e)
```



[[Back to top]](#) 

## get-task-status-list
Retrieve Task Status List
Use this endpoint to get a list of statuses for **completed** tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned. To get a list of statuses for **in-progress** tasks, please use the [retrieve pending task status list](https://developer.sailpoint.com/docs/api/beta/get-pending-tasks) endpoint.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-task-status-list)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in*  **type**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created**

### Return type
[**List[TaskStatus]**](../models/task-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a TaskStatus for the task with the given task ID. | List[TaskStatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.task_management_api import TaskManagementApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.task_status import TaskStatus
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'completionStatus eq \"Success\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in*  **type**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in*  **type**: *eq, in* (optional)
    sorters = '-created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** (optional)

    try:
        # Retrieve Task Status List
        
        results = TaskManagementApi(api_client).get_task_status_list()
        # Below is a request that includes all optional parameters
        # results = TaskManagementApi(api_client).get_task_status_list(limit, offset, count, filters, sorters)
        print("The response of TaskManagementApi->get_task_status_list:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling TaskManagementApi->get_task_status_list: %s\n" % e)
```



[[Back to top]](#) 

## update-task-status
Update Task Status by ID
Update a current task status by task ID. Use this API to clear a pending task by updating the completionStatus and completed attributes.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-task-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Task ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The JSONPatch payload used to update the object.

### Return type
[**TaskStatus**](../models/task-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates the PATCH operation succeeded, and the API returns the updated task object. | TaskStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.task_management_api import TaskManagementApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.json_patch_operation import JsonPatchOperation
from sailpoint.beta.models.task_status import TaskStatus
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '00eebcf881994e419d72e757fd30dc0e' # str | Task ID. # str | Task ID.
    json_patch_operation = '''[sailpoint.beta.JsonPatchOperation()]''' # List[JsonPatchOperation] | The JSONPatch payload used to update the object.

    try:
        # Update Task Status by ID
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = TaskManagementApi(api_client).update_task_status(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = TaskManagementApi(api_client).update_task_status(id, new_json_patch_operation)
        print("The response of TaskManagementApi->update_task_status:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling TaskManagementApi->update_task_status: %s\n" % e)
```



[[Back to top]](#) 




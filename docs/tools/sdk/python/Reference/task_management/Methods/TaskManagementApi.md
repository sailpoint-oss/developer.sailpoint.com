---
id: task-management
title: Task_Management
pagination_label: Task_Management
sidebar_label: Task_Management
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Task_Management', 'Task_Management'] 
slug: /tools/sdk/python/task-management/methods/task-management
tags: ['SDK', 'Software Development Kit', 'Task_Management', 'Task_Management']
---

# sailpoint.task_management.TaskManagementApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-task-status-list-v1**](#get-task-status-list-v1) | **GET** `/task-status/v1` | Retrieve task status list
[**get-task-status-v1**](#get-task-status-v1) | **GET** `/task-status/v1/{id}` | Get task status by id
[**update-task-status-v1**](#update-task-status-v1) | **PATCH** `/task-status/v1/{id}` | Update task status by id


## get-task-status-list-v1
Retrieve task status list
Use this endpoint to get a list of statuses for **all** tasks, including completed, in-progress, terminated, and errored tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks. Data for tasks older than 90 days will not be returned. For a list of **in-progress** tasks, apply the isnull filter to the Completion Status field.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-task-status-list-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in, isnull*  **type**: *eq, in*  **launcher**: *eq, in*  **Possible Values:** CLOUD_ACCOUNT_AGGREGATION, CLOUD_GROUP_AGGREGATION, CLOUD_PROCESS_UNCORRELATED_ACCOUNTS, CLOUD_REFRESH_ROLE, SOURCE_APPLICATION_DISCOVERY, AI_AGENT_AGGREGATION, CLOUD_ENTITLEMENT_IMPORT, CLOUD_UNCORRELATED_REFRESH, CLOUD_IDENTITY_AGGREGATION, CLOUD_ATTRIBUTE_SYNCHRONIZATION, IDENTITY_REFRESH, APPLICATION_DISCOVERY, MACHINE_IDENTITY_AGGREGATION, MACHINE_IDENTITY_DELETION, ACCOUNT_DELETION
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created**

### Return type
[**List[Taskstatus]**](../models/taskstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a TaskStatus for the task with the given task ID. | List[Taskstatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTaskStatusV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTaskStatusV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.task_management.api.task_management_api import TaskManagementApi
from sailpoint.task_management.api_client import ApiClient
from sailpoint.task_management.models.taskstatus import Taskstatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'type eq \"CLOUD_ACCOUNT_AGGREGATION\" and completionStatus isnull' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in, isnull*  **type**: *eq, in*  **launcher**: *eq, in*  **Possible Values:** CLOUD_ACCOUNT_AGGREGATION, CLOUD_GROUP_AGGREGATION, CLOUD_PROCESS_UNCORRELATED_ACCOUNTS, CLOUD_REFRESH_ROLE, SOURCE_APPLICATION_DISCOVERY, AI_AGENT_AGGREGATION, CLOUD_ENTITLEMENT_IMPORT, CLOUD_UNCORRELATED_REFRESH, CLOUD_IDENTITY_AGGREGATION, CLOUD_ATTRIBUTE_SYNCHRONIZATION, IDENTITY_REFRESH, APPLICATION_DISCOVERY, MACHINE_IDENTITY_AGGREGATION, MACHINE_IDENTITY_DELETION, ACCOUNT_DELETION (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in, isnull*  **type**: *eq, in*  **launcher**: *eq, in*  **Possible Values:** CLOUD_ACCOUNT_AGGREGATION, CLOUD_GROUP_AGGREGATION, CLOUD_PROCESS_UNCORRELATED_ACCOUNTS, CLOUD_REFRESH_ROLE, SOURCE_APPLICATION_DISCOVERY, AI_AGENT_AGGREGATION, CLOUD_ENTITLEMENT_IMPORT, CLOUD_UNCORRELATED_REFRESH, CLOUD_IDENTITY_AGGREGATION, CLOUD_ATTRIBUTE_SYNCHRONIZATION, IDENTITY_REFRESH, APPLICATION_DISCOVERY, MACHINE_IDENTITY_AGGREGATION, MACHINE_IDENTITY_DELETION, ACCOUNT_DELETION (optional)
    sorters = '-created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** (optional)

    try:
        # Retrieve task status list
        
        results = TaskManagementApi(api_client).get_task_status_list_v1()
        # Below is a request that includes all optional parameters
        # results = TaskManagementApi(api_client).get_task_status_list_v1(limit, offset, count, filters, sorters)
        print("The response of TaskManagementApi->get_task_status_list_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TaskManagementApi->get_task_status_list_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-task-status-v1
Get task status by id
Get task status by task ID. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-task-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Task ID.

### Return type
[**Taskstatus**](../models/taskstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a TaskStatus for the task with the given task ID. | Taskstatus |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTaskStatusV1401Response |  -  |
403 | Forbidden, generally due to a lack of security rights |  |  -  |
404 | TaskStatus with the given id was not found. |  |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTaskStatusV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.task_management.api.task_management_api import TaskManagementApi
from sailpoint.task_management.api_client import ApiClient
from sailpoint.task_management.models.taskstatus import Taskstatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '00eebcf881994e419d72e757fd30dc0e' # str | Task ID. # str | Task ID.

    try:
        # Get task status by id
        
        results = TaskManagementApi(api_client).get_task_status_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = TaskManagementApi(api_client).get_task_status_v1(id)
        print("The response of TaskManagementApi->get_task_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TaskManagementApi->get_task_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-task-status-v1
Update task status by id
Update a current task status by task ID. Use this API to clear a pending task by updating the completionStatus and completed attributes.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-task-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Task ID.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | The JSONPatch payload used to update the object.

### Return type
[**Taskstatus**](../models/taskstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates the PATCH operation succeeded, and the API returns the updated task object. | Taskstatus |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTaskStatusV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTaskStatusV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.task_management.api.task_management_api import TaskManagementApi
from sailpoint.task_management.api_client import ApiClient
from sailpoint.task_management.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.task_management.models.taskstatus import Taskstatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '00eebcf881994e419d72e757fd30dc0e' # str | Task ID. # str | Task ID.
    jsonpatchoperation = '''[sailpoint.task_management.Jsonpatchoperation()]''' # List[Jsonpatchoperation] | The JSONPatch payload used to update the object.

    try:
        # Update task status by id
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = TaskManagementApi(api_client).update_task_status_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = TaskManagementApi(api_client).update_task_status_v1(id, new_jsonpatchoperation)
        print("The response of TaskManagementApi->update_task_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TaskManagementApi->update_task_status_v1: %s\n" % e)
```



[[Back to top]](#) 




---
id: v1-task-management
title: TaskManagement
pagination_label: TaskManagement
sidebar_label: TaskManagement
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TaskManagement', 'v1TaskManagement']
slug: /tools/sdk/typescript/task_management/methods/task-management
tags: ['SDK', 'Software Development Kit', 'TaskManagement', 'v1TaskManagement']
---

# TaskManagementV1Api
   
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in, isnull*  **type**: *eq, in*  **launcher**: *eq, in*  **Possible Values:** CLOUD_ACCOUNT_AGGREGATION, CLOUD_GROUP_AGGREGATION, CLOUD_PROCESS_UNCORRELATED_ACCOUNTS, CLOUD_REFRESH_ROLE, SOURCE_APPLICATION_DISCOVERY, AI_AGENT_AGGREGATION, CLOUD_ENTITLEMENT_IMPORT, CLOUD_UNCORRELATED_REFRESH, CLOUD_IDENTITY_AGGREGATION, CLOUD_ATTRIBUTE_SYNCHRONIZATION, IDENTITY_REFRESH, APPLICATION_DISCOVERY, MACHINE_IDENTITY_AGGREGATION, MACHINE_IDENTITY_DELETION, ACCOUNT_DELETION | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** | [optional] [default to undefined]

### Return type

`Array<TaskstatusV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TaskManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TaskManagementV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = type eq "CLOUD_ACCOUNT_AGGREGATION" and completionStatus isnull; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in, isnull*  **type**: *eq, in*  **launcher**: *eq, in*  **Possible Values:** CLOUD_ACCOUNT_AGGREGATION, CLOUD_GROUP_AGGREGATION, CLOUD_PROCESS_UNCORRELATED_ACCOUNTS, CLOUD_REFRESH_ROLE, SOURCE_APPLICATION_DISCOVERY, AI_AGENT_AGGREGATION, CLOUD_ENTITLEMENT_IMPORT, CLOUD_UNCORRELATED_REFRESH, CLOUD_IDENTITY_AGGREGATION, CLOUD_ATTRIBUTE_SYNCHRONIZATION, IDENTITY_REFRESH, APPLICATION_DISCOVERY, MACHINE_IDENTITY_AGGREGATION, MACHINE_IDENTITY_DELETION, ACCOUNT_DELETION (optional)
const sorters: string = -created; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** (optional)
const result = await apiInstance.getTaskStatusListV1({  });
console.log(result);
```

[[Back to top]](#)

## get-task-status-v1
Get task status by id
Get task status by task ID. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-task-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Task ID. |  [default to undefined]

### Return type

`TaskstatusV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TaskManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TaskManagementV1Api(configuration);
const id: string = 00eebcf881994e419d72e757fd30dc0e; // Task ID.
const result = await apiInstance.getTaskStatusV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## update-task-status-v1
Update task status by id
Update a current task status by task ID. Use this API to clear a pending task by updating the completionStatus and completed attributes.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-task-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Task ID. |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` | The JSONPatch payload used to update the object. | 

### Return type

`TaskstatusV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { TaskManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TaskManagementV1Api(configuration);
const id: string = 00eebcf881994e419d72e757fd30dc0e; // Task ID.
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = ; // The JSONPatch payload used to update the object.
const result = await apiInstance.updateTaskStatusV1({ id: id, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)


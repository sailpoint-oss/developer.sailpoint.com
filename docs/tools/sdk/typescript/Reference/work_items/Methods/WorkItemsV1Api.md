---
id: v1-work-items
title: WorkItems
pagination_label: WorkItems
sidebar_label: WorkItems
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'WorkItems', 'v1WorkItems']
slug: /tools/sdk/typescript/work_items/methods/work-items
tags: ['SDK', 'Software Development Kit', 'WorkItems', 'v1WorkItems']
---

# WorkItemsV1Api
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]
**approvalItemId** | `string` | The ID of the approval item. |  [default to undefined]

### Return type

`WorkitemsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the work item
const approvalItemId: string = 1211bcaa32112bcef6122adb21cef1ac; // The ID of the approval item.
const result = await apiInstance.approveApprovalItemV1({ id: id, approvalItemId: approvalItemId });
console.log(result);
```

[[Back to top]](#)

## approve-approval-items-in-bulk-v1
Bulk approve approval items
This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-approval-items-in-bulk-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]

### Return type

`WorkitemsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the work item
const result = await apiInstance.approveApprovalItemsInBulkV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## complete-work-item-v1
Complete a work item
This API completes a work item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/complete-work-item-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]
**body** | `string` | Body is the request payload to create form definition request | [optional]

### Return type

`WorkitemsV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the work item
const body: string = body_example; // Body is the request payload to create form definition request (optional)
const result = await apiInstance.completeWorkItemV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## forward-work-item-v1
Forward a work item
This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/forward-work-item-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]
**workitemforwardV1** | `WorkitemforwardV1` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the work item
const workitemforwardV1: WorkitemforwardV1 = ; // 
const result = await apiInstance.forwardWorkItemV1({ id: id, workitemforwardV1: workitemforwardV1 });
console.log(result);
```

[[Back to top]](#)

## get-completed-work-items-v1
Completed work items
This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-completed-work-items-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<WorkitemsV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const ownerId: string = 1211bcaa32112bcef6122adb21cef1ac; // The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getCompletedWorkItemsV1({  });
console.log(result);
```

[[Back to top]](#)

## get-count-completed-work-items-v1
Count completed work items
This gets a count of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-count-completed-work-items-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | ID of the work item owner. | [optional] [default to undefined]

### Return type

`WorkitemscountV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const ownerId: string = ownerId_example; // ID of the work item owner. (optional)
const result = await apiInstance.getCountCompletedWorkItemsV1({  });
console.log(result);
```

[[Back to top]](#)

## get-count-work-items-v1
Count work items
This gets a count of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-count-work-items-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | ID of the work item owner. | [optional] [default to undefined]

### Return type

`WorkitemscountV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const ownerId: string = ef38f94347e94562b5bb8424a56397d8; // ID of the work item owner. (optional)
const result = await apiInstance.getCountWorkItemsV1({  });
console.log(result);
```

[[Back to top]](#)

## get-work-item-v1
Get a work item
This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-work-item-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the work item. |  [default to undefined]

### Return type

`WorkitemsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const id: string = 2c9180835d191a86015d28455b4a2329; // ID of the work item.
const result = await apiInstance.getWorkItemV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-work-items-summary-v1
Work items summary
This gets a summary of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-work-items-summary-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | ID of the work item owner. | [optional] [default to undefined]

### Return type

`WorkitemssummaryV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const ownerId: string = 1211bcaa32112bcef6122adb21cef1ac; // ID of the work item owner. (optional)
const result = await apiInstance.getWorkItemsSummaryV1({  });
console.log(result);
```

[[Back to top]](#)

## list-work-items-v1
List work items
This gets a collection of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-work-items-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**ownerId** | `string` | ID of the work item owner. | [optional] [default to undefined]

### Return type

`Array<WorkitemsV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const ownerId: string = 1211bcaa32112bcef6122adb21cef1ac; // ID of the work item owner. (optional)
const result = await apiInstance.listWorkItemsV1({  });
console.log(result);
```

[[Back to top]](#)

## reject-approval-item-v1
Reject an approval item
This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-item-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]
**approvalItemId** | `string` | The ID of the approval item. |  [default to undefined]

### Return type

`WorkitemsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the work item
const approvalItemId: string = 1211bcaa32112bcef6122adb21cef1ac; // The ID of the approval item.
const result = await apiInstance.rejectApprovalItemV1({ id: id, approvalItemId: approvalItemId });
console.log(result);
```

[[Back to top]](#)

## reject-approval-items-in-bulk-v1
Bulk reject approval items
This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-items-in-bulk-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]

### Return type

`WorkitemsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the work item
const result = await apiInstance.rejectApprovalItemsInBulkV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## submit-account-selection-v1
Submit account selections
This API submits account selections. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/submit-account-selection-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]
**requestBody** |  | Account Selection Data map, keyed on fieldName | 

### Return type

`WorkitemsV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { WorkItemsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkItemsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the work item
const requestBody: { [key: string]: any; } = {"fieldName":"fieldValue"}; // Account Selection Data map, keyed on fieldName
const result = await apiInstance.submitAccountSelectionV1({ id: id, requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)


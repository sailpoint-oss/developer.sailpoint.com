# WorkItems

# WorkItemsService
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
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

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

[API Spec](https://developer.sailpoint.com/docs/api/approve-approval-item-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ApproveApprovalItemV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]
**approvalItemId** | `string` | The ID of the approval item. |  [default to undefined]

### Return type

`Observable<WorkItems>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  approveApprovalItemV1(): void {
    const id: string = ; // The ID of the work item
    const approvalItemId: string = ; // The ID of the approval item.
    this.api.approveApprovalItemV1({ id: id, approvalItemId: approvalItemId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## approve-approval-items-in-bulk-v1
Bulk approve approval items
This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/approve-approval-items-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ApproveApprovalItemsInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]

### Return type

`Observable<WorkItems>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  approveApprovalItemsInBulkV1(): void {
    const id: string = ; // The ID of the work item
    this.api.approveApprovalItemsInBulkV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## complete-work-item-v1
Complete a work item
This API completes a work item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/complete-work-item-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CompleteWorkItemV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]
**body** | `string` | Body is the request payload to create form definition request | [optional]

### Return type

`Observable<WorkItems>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  completeWorkItemV1(): void {
    const id: string = ; // The ID of the work item
    const body: string = ; // Body is the request payload to create form definition request (optional)
    this.api.completeWorkItemV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## forward-work-item-v1
Forward a work item
This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/forward-work-item-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ForwardWorkItemV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]
**workItemForward** | `WorkItemForward` |  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';
import { WorkItemForward } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  forwardWorkItemV1(): void {
    const id: string = ; // The ID of the work item
    const workItemForward: WorkItemForward = ; // 
    this.api.forwardWorkItemV1({ id: id, workItemForward: workItemForward }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-completed-work-items-v1
Completed work items
This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/get-completed-work-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetCompletedWorkItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<WorkItems>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  getCompletedWorkItemsV1(): void {
    const ownerId: string = ; // The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getCompletedWorkItemsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-count-completed-work-items-v1
Count completed work items
This gets a count of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/get-count-completed-work-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetCountCompletedWorkItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | ID of the work item owner. | [optional] [default to undefined]

### Return type

`Observable<WorkItemsCount>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  getCountCompletedWorkItemsV1(): void {
    const ownerId: string = ; // ID of the work item owner. (optional)
    this.api.getCountCompletedWorkItemsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-count-work-items-v1
Count work items
This gets a count of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/get-count-work-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetCountWorkItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | ID of the work item owner. | [optional] [default to undefined]

### Return type

`Observable<WorkItemsCount>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  getCountWorkItemsV1(): void {
    const ownerId: string = ; // ID of the work item owner. (optional)
    this.api.getCountWorkItemsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-work-item-v1
Get a work item
This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/get-work-item-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetWorkItemV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the work item. |  [default to undefined]

### Return type

`Observable<WorkItems>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  getWorkItemV1(): void {
    const id: string = ; // ID of the work item.
    this.api.getWorkItemV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-work-items-summary-v1
Work items summary
This gets a summary of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/get-work-items-summary-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetWorkItemsSummaryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | ID of the work item owner. | [optional] [default to undefined]

### Return type

`Observable<WorkItemsSummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  getWorkItemsSummaryV1(): void {
    const ownerId: string = ; // ID of the work item owner. (optional)
    this.api.getWorkItemsSummaryV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-work-items-v1
List work items
This gets a collection of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/list-work-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListWorkItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**ownerId** | `string` | ID of the work item owner. | [optional] [default to undefined]

### Return type

`Observable<Array<WorkItems>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  listWorkItemsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const ownerId: string = ; // ID of the work item owner. (optional)
    this.api.listWorkItemsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## reject-approval-item-v1
Reject an approval item
This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/reject-approval-item-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `RejectApprovalItemV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]
**approvalItemId** | `string` | The ID of the approval item. |  [default to undefined]

### Return type

`Observable<WorkItems>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  rejectApprovalItemV1(): void {
    const id: string = ; // The ID of the work item
    const approvalItemId: string = ; // The ID of the approval item.
    this.api.rejectApprovalItemV1({ id: id, approvalItemId: approvalItemId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## reject-approval-items-in-bulk-v1
Bulk reject approval items
This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/reject-approval-items-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `RejectApprovalItemsInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]

### Return type

`Observable<WorkItems>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  rejectApprovalItemsInBulkV1(): void {
    const id: string = ; // The ID of the work item
    this.api.rejectApprovalItemsInBulkV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## submit-account-selection-v1
Submit account selections
This API submits account selections. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/submit-account-selection-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SubmitAccountSelectionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the work item |  [default to undefined]
**requestBody** |  | Account Selection Data map, keyed on fieldName | 

### Return type

`Observable<WorkItems>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkItemsService } from '@sailpoint/angular-sdk/work_items';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkItemsService);

  submitAccountSelectionV1(): void {
    const id: string = ; // The ID of the work item
    const requestBody: { [key: string]: any; } = ; // Account Selection Data map, keyed on fieldName
    this.api.submitAccountSelectionV1({ id: id, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)


# Workflows

# WorkflowsService
  Workflows allow administrators to create custom automation scripts directly within Identity Security Cloud.  These automation scripts respond to [event triggers](https://developer.sailpoint.com/docs/extensibility/event-triggers/#how-to-get-started-with-event-triggers) and perform a series of actions to perform tasks that are either too cumbersome or not available in the Identity Security Cloud UI.  Workflows can be configured via a graphical user interface within Identity Security Cloud, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-workflow-execution-v1**](#cancel-workflow-execution-v1) | **POST** `/workflow-executions/v1/{id}/cancel` | Cancel workflow execution by id
[**create-external-execute-workflow-v1**](#create-external-execute-workflow-v1) | **POST** `/workflows/v1/execute/external/{id}` | Execute workflow via external trigger
[**create-workflow-external-trigger-v1**](#create-workflow-external-trigger-v1) | **POST** `/workflows/v1/{id}/external/oauth-clients` | Generate external trigger oauth client
[**create-workflow-v1**](#create-workflow-v1) | **POST** `/workflows/v1` | Create workflow
[**delete-workflow-v1**](#delete-workflow-v1) | **DELETE** `/workflows/v1/{id}` | Delete workflow by id
[**get-workflow-execution-history-v1**](#get-workflow-execution-history-v1) | **GET** `/workflow-executions/v1/{id}/history` | Get workflow execution history
[**get-workflow-execution-history-v2-for-v1**](#get-workflow-execution-history-v2-for-v1) | **GET** `/workflow-executions/v1/{id}/history-v2` | Get updated workflow execution history
[**get-workflow-execution-v1**](#get-workflow-execution-v1) | **GET** `/workflow-executions/v1/{id}` | Get workflow execution
[**get-workflow-executions-v1**](#get-workflow-executions-v1) | **GET** `/workflows/v1/{id}/executions` | List workflow executions
[**get-workflow-v1**](#get-workflow-v1) | **GET** `/workflows/v1/{id}` | Get workflow by id
[**list-complete-workflow-library-v1**](#list-complete-workflow-library-v1) | **GET** `/workflow-library/v1` | List complete workflow library
[**list-workflow-library-actions-v1**](#list-workflow-library-actions-v1) | **GET** `/workflow-library/v1/actions` | List workflow library actions
[**list-workflow-library-operators-v1**](#list-workflow-library-operators-v1) | **GET** `/workflow-library/v1/operators` | List workflow library operators
[**list-workflow-library-triggers-v1**](#list-workflow-library-triggers-v1) | **GET** `/workflow-library/v1/triggers` | List workflow library triggers
[**list-workflows-v1**](#list-workflows-v1) | **GET** `/workflows/v1` | List workflows
[**patch-workflow-v1**](#patch-workflow-v1) | **PATCH** `/workflows/v1/{id}` | Patch workflow
[**put-workflow-v1**](#put-workflow-v1) | **PUT** `/workflows/v1/{id}` | Update workflow
[**test-external-execute-workflow-v1**](#test-external-execute-workflow-v1) | **POST** `/workflows/v1/execute/external/{id}/test` | Test workflow via external trigger
[**test-workflow-v1**](#test-workflow-v1) | **POST** `/workflows/v1/{id}/test` | Test workflow by id


## cancel-workflow-execution-v1
Cancel workflow execution by id
Use this API to cancel a running workflow execution.

[API Spec](https://developer.sailpoint.com/docs/api/cancel-workflow-execution-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CancelWorkflowExecutionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The workflow execution ID |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  cancelWorkflowExecutionV1(): void {
    const id: string = ; // The workflow execution ID
    this.api.cancelWorkflowExecutionV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-external-execute-workflow-v1
Execute workflow via external trigger
This endpoint allows a service outside of IdentityNow to initiate a workflow that uses the "External Trigger" step.  The external service will invoke this endpoint with the input data it wants to send to the workflow in the body.

[API Spec](https://developer.sailpoint.com/docs/api/create-external-execute-workflow-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateExternalExecuteWorkflowV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow |  [default to undefined]
**createExternalExecuteWorkflowV1Request** | `CreateExternalExecuteWorkflowV1Request` |  | [optional]

### Return type

`Observable<CreateExternalExecuteWorkflowV1200Response>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';
import { CreateExternalExecuteWorkflowV1Request } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  createExternalExecuteWorkflowV1(): void {
    const id: string = ; // Id of the workflow
    const createExternalExecuteWorkflowV1Request: CreateExternalExecuteWorkflowV1Request = ; //  (optional)
    this.api.createExternalExecuteWorkflowV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-workflow-external-trigger-v1
Generate external trigger oauth client
Create OAuth client ID, client secret, and callback URL for use in an external trigger.  External triggers will need this information to generate an access token to authenticate to the callback URL and submit a trigger payload that will initiate the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/create-workflow-external-trigger-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateWorkflowExternalTriggerV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow |  [default to undefined]

### Return type

`Observable<WorkflowOAuthClient>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  createWorkflowExternalTriggerV1(): void {
    const id: string = ; // Id of the workflow
    this.api.createWorkflowExternalTriggerV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-workflow-v1
Create workflow
Create a new workflow with the desired trigger and steps specified in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/create-workflow-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateWorkflowV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createWorkflowV1Request** | `CreateWorkflowV1Request` |  | 

### Return type

`Observable<Workflow>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';
import { CreateWorkflowV1Request } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  createWorkflowV1(): void {
    const createWorkflowV1Request: CreateWorkflowV1Request = ; // 
    this.api.createWorkflowV1({ createWorkflowV1Request: createWorkflowV1Request }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-workflow-v1
Delete workflow by id
Delete a workflow.  **Enabled workflows cannot be deleted**.  They must first be disabled.

[API Spec](https://developer.sailpoint.com/docs/api/delete-workflow-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteWorkflowV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the Workflow |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  deleteWorkflowV1(): void {
    const id: string = ; // Id of the Workflow
    this.api.deleteWorkflowV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-workflow-execution-history-v1
Get workflow execution history
Get a detailed history of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/get-workflow-execution-history-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetWorkflowExecutionHistoryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow execution |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Observable<Array<WorkflowExecutionEvent>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  getWorkflowExecutionHistoryV1(): void {
    const id: string = ; // Id of the workflow execution
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getWorkflowExecutionHistoryV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-workflow-execution-history-v2-for-v1
Get updated workflow execution history
Gets a workflow execution history, trigger input, and workflow definition of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/get-workflow-execution-history-v2-for-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetWorkflowExecutionHistoryV2ForV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow execution |  [default to undefined]

### Return type

`Observable<WorkflowExecutionHistory>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  getWorkflowExecutionHistoryV2ForV1(): void {
    const id: string = ; // Id of the workflow execution
    this.api.getWorkflowExecutionHistoryV2ForV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-workflow-execution-v1
Get workflow execution
Use this API to get a single workflow execution. Workflow executions are available for up to 90 days before being archived. If you attempt to access a workflow execution that has been archived, you will receive a "404 Not Found" response.

[API Spec](https://developer.sailpoint.com/docs/api/get-workflow-execution-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetWorkflowExecutionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Workflow execution ID. |  [default to undefined]

### Return type

`Observable<Array<WorkflowExecution>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  getWorkflowExecutionV1(): void {
    const id: string = ; // Workflow execution ID.
    this.api.getWorkflowExecutionV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-workflow-executions-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
List workflow executions
[Deprecated] This endpoint will be removed in July 2028. Use this API to list a specified workflow's executions. Workflow executions are available for up to 90 days before being archived. By default, you can get a maximum of 250 executions. To get executions past the first 250 records, you can do the following:
1. Use the [Get Workflows](https://developer.sailpoint.com/docs/api/list-workflows-v-1) endpoint to get your workflows.
2. Get your workflow ID from the response.
3. You can then do either of the following:

  - Filter to find relevant workflow executions.
  For example, you can filter for failed workflow executions: `GET /workflows/:workflowID/executions?filters=status eq "Failed"`

  - Paginate through results with the `offset` parameter.
  For example, you can page through 50 executions per page and use that as a way to get to the records past the first 250.
  Refer to [Paginating Results](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results) for more information about the query parameters you can use to achieve pagination.

[API Spec](https://developer.sailpoint.com/docs/api/get-workflow-executions-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetWorkflowExecutionsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Workflow ID. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<WorkflowExecution>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  getWorkflowExecutionsV1(): void {
    const id: string = ; // Workflow ID.
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional)
    this.api.getWorkflowExecutionsV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-workflow-v1
Get workflow by id
Get a single workflow by id.

[API Spec](https://developer.sailpoint.com/docs/api/get-workflow-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetWorkflowV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow |  [default to undefined]

### Return type

`Observable<Workflow>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  getWorkflowV1(): void {
    const id: string = ; // Id of the workflow
    this.api.getWorkflowV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-complete-workflow-library-v1
List complete workflow library
This lists all triggers, actions, and operators in the library

[API Spec](https://developer.sailpoint.com/docs/api/list-complete-workflow-library-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListCompleteWorkflowLibraryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Observable<Array<ListCompleteWorkflowLibraryV1200ResponseInner>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  listCompleteWorkflowLibraryV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.listCompleteWorkflowLibraryV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-workflow-library-actions-v1
List workflow library actions
This lists the workflow actions available to you.

[API Spec](https://developer.sailpoint.com/docs/api/list-workflow-library-actions-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListWorkflowLibraryActionsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<WorkflowLibraryAction>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  listWorkflowLibraryActionsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional)
    this.api.listWorkflowLibraryActionsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-workflow-library-operators-v1
List workflow library operators
This lists the workflow operators available to you

[API Spec](https://developer.sailpoint.com/docs/api/list-workflow-library-operators-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListWorkflowLibraryOperatorsV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<Array<WorkflowLibraryOperator>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  listWorkflowLibraryOperatorsV1(): void {
    this.api.listWorkflowLibraryOperatorsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-workflow-library-triggers-v1
List workflow library triggers
This lists the workflow triggers available to you

[API Spec](https://developer.sailpoint.com/docs/api/list-workflow-library-triggers-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListWorkflowLibraryTriggersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<WorkflowLibraryTrigger>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  listWorkflowLibraryTriggersV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq* (optional)
    this.api.listWorkflowLibraryTriggersV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-workflows-v1
List workflows
List all workflows in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-workflows-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListWorkflowsV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<Array<Workflow>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  listWorkflowsV1(): void {
    this.api.listWorkflowsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-workflow-v1
Patch workflow
Partially update an existing Workflow using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

[API Spec](https://developer.sailpoint.com/docs/api/patch-workflow-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchWorkflowV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the Workflow |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` |  | 

### Return type

`Observable<Workflow>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  patchWorkflowV1(): void {
    const id: string = ; // Id of the Workflow
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // 
    this.api.patchWorkflowV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-workflow-v1
Update workflow
Perform a full update of a workflow.  The updated workflow object is returned in the response.

[API Spec](https://developer.sailpoint.com/docs/api/put-workflow-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutWorkflowV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the Workflow |  [default to undefined]
**workflowBody** | `WorkflowBody` |  | 

### Return type

`Observable<Workflow>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';
import { WorkflowBody } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  putWorkflowV1(): void {
    const id: string = ; // Id of the Workflow
    const workflowBody: WorkflowBody = ; // 
    this.api.putWorkflowV1({ id: id, workflowBody: workflowBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## test-external-execute-workflow-v1
Test workflow via external trigger
Validate a workflow with an "External Trigger" can receive input.  The response includes the input that the workflow received, which can be used to validate that the input is intact when it reaches the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/test-external-execute-workflow-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `TestExternalExecuteWorkflowV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow |  [default to undefined]
**testExternalExecuteWorkflowV1Request** | `TestExternalExecuteWorkflowV1Request` |  | [optional]

### Return type

`Observable<TestExternalExecuteWorkflowV1200Response>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';
import { TestExternalExecuteWorkflowV1Request } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  testExternalExecuteWorkflowV1(): void {
    const id: string = ; // Id of the workflow
    const testExternalExecuteWorkflowV1Request: TestExternalExecuteWorkflowV1Request = ; //  (optional)
    this.api.testExternalExecuteWorkflowV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## test-workflow-v1
Test workflow by id
:::info

Workflow must be disabled in order to use this endpoint.

:::

Test a workflow with the provided input data.  The input data should resemble the input that the trigger will send the workflow.  See the [event trigger documentation](https://developer.sailpoint.com/docs/extensibility/event-triggers/available) for an example input for the trigger that initiates this workflow.

This endpoint will return an execution ID, which can be used to lookup more information about the execution using the `Get a Workflow Execution` endpoint.

**This will cause a live run of the workflow, which could result in unintended modifications to your IDN tenant.**


[API Spec](https://developer.sailpoint.com/docs/api/test-workflow-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `TestWorkflowV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow |  [default to undefined]
**testWorkflowV1Request** | `TestWorkflowV1Request` |  | 

### Return type

`Observable<TestWorkflowV1200Response>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { WorkflowsService } from '@sailpoint/angular-sdk/workflows';
import { TestWorkflowV1Request } from '@sailpoint/angular-sdk/workflows';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(WorkflowsService);

  testWorkflowV1(): void {
    const id: string = ; // Id of the workflow
    const testWorkflowV1Request: TestWorkflowV1Request = ; // 
    this.api.testWorkflowV1({ id: id, testWorkflowV1Request: testWorkflowV1Request }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)


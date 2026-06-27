---
id: v1-workflows
title: Workflows
pagination_label: Workflows
sidebar_label: Workflows
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Workflows', 'v1Workflows']
slug: /tools/sdk/typescript/workflows/methods/workflows
tags: ['SDK', 'Software Development Kit', 'Workflows', 'v1Workflows']
---

# WorkflowsV1Api
  Workflows allow administrators to create custom automation scripts directly within Identity Security Cloud.  These automation scripts respond to [event triggers](https://developer.sailpoint.com/docs/extensibility/event-triggers/#how-to-get-started-with-event-triggers) and perform a series of actions to perform tasks that are either too cumbersome or not available in the Identity Security Cloud UI.  Workflows can be configured via a graphical user interface within Identity Security Cloud, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-workflow-execution-v1**](#cancel-workflow-execution-v1) | **POST** `/workflow-executions/v1/{id}/cancel` | Cancel workflow execution by id
[**create-external-execute-workflow-v1**](#create-external-execute-workflow-v1) | **POST** `/workflows/v1/execute/external/{id}` | Execute workflow via external trigger
[**create-workflow-external-trigger-v1**](#create-workflow-external-trigger-v1) | **POST** `/workflows/v1/{id}/external/oauth-clients` | Generate external trigger oauth client
[**create-workflow-v1**](#create-workflow-v1) | **POST** `/workflows/v1` | Create workflow
[**delete-workflow-v1**](#delete-workflow-v1) | **DELETE** `/workflows/v1/{id}` | Delete workflow by id
[**get-workflow-execution-history-v1**](#get-workflow-execution-history-v1) | **GET** `/workflow-executions/v1/{id}/history` | Get workflow execution history
[**get-workflow-execution-history-v2**](#get-workflow-execution-history-v2) | **GET** `/workflow-executions/v1/{id}/history-v2` | Get updated workflow execution history
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-workflow-execution-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The workflow execution ID |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // The workflow execution ID
const result = await apiInstance.cancelWorkflowExecutionV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## create-external-execute-workflow-v1
Execute workflow via external trigger
This endpoint allows a service outside of IdentityNow to initiate a workflow that uses the "External Trigger" step.  The external service will invoke this endpoint with the input data it wants to send to the workflow in the body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-external-execute-workflow-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow |  [default to undefined]
**createExternalExecuteWorkflowV1RequestV1** | `CreateExternalExecuteWorkflowV1RequestV1` |  | [optional]

### Return type

`CreateExternalExecuteWorkflowV1200ResponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Id of the workflow
const createExternalExecuteWorkflowV1RequestV1: CreateExternalExecuteWorkflowV1RequestV1 = ; //  (optional)
const result = await apiInstance.createExternalExecuteWorkflowV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## create-workflow-external-trigger-v1
Generate external trigger oauth client
Create OAuth client ID, client secret, and callback URL for use in an external trigger.  External triggers will need this information to generate an access token to authenticate to the callback URL and submit a trigger payload that will initiate the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-workflow-external-trigger-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow |  [default to undefined]

### Return type

`WorkflowoauthclientV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Id of the workflow
const result = await apiInstance.createWorkflowExternalTriggerV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## create-workflow-v1
Create workflow
Create a new workflow with the desired trigger and steps specified in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-workflow-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createWorkflowV1RequestV1** | `CreateWorkflowV1RequestV1` |  | 

### Return type

`WorkflowV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const createWorkflowV1RequestV1: CreateWorkflowV1RequestV1 = {"name":"Send Email","owner":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"William Wilson"},"description":"Send an email to the identity who's attributes changed.","definition":{"start":"Send Email Test","steps":{"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"action"},"success":{"type":"success"}}},"enabled":false,"trigger":{"type":"EVENT","attributes":{"id":"idn:identity-attributes-changed","filter":"$.changes[?(@.attribute == 'manager')]"}}}; // 
const result = await apiInstance.createWorkflowV1({ createWorkflowV1RequestV1: createWorkflowV1RequestV1 });
console.log(result);
```

[[Back to top]](#)

## delete-workflow-v1
Delete workflow by id
Delete a workflow.  **Enabled workflows cannot be deleted**.  They must first be disabled.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-workflow-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the Workflow |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Id of the Workflow
const result = await apiInstance.deleteWorkflowV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-workflow-execution-history-v1
Get workflow execution history
Get a detailed history of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-history-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow execution |  [default to undefined]

### Return type

`Array<WorkflowexecutioneventV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Id of the workflow execution
const result = await apiInstance.getWorkflowExecutionHistoryV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-workflow-execution-history-v2
Get updated workflow execution history
Gets a workflow execution history, trigger input, and workflow definition of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-history-v2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow execution |  [default to undefined]

### Return type

`WorkflowexecutionhistoryV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Id of the workflow execution
const result = await apiInstance.getWorkflowExecutionHistoryV2({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-workflow-execution-v1
Get workflow execution
Use this API to get a single workflow execution. Workflow executions are available for up to 90 days before being archived. If you attempt to access a workflow execution that has been archived, you will receive a "404 Not Found" response.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Workflow execution ID. |  [default to undefined]

### Return type

`Array<WorkflowexecutionV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Workflow execution ID.
const result = await apiInstance.getWorkflowExecutionV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-workflow-executions-v1
List workflow executions
Use this API to list a specified workflow's executions. Workflow executions are available for up to 90 days before being archived. By default, you can get a maximum of 250 executions. To get executions past the first 250 records, you can do the following:
1. Use the [Get Workflows](https://developer.sailpoint.com/idn/api/beta/list-workflows) endpoint to get your workflows.
2. Get your workflow ID from the response.
3. You can then do either of the following:

  - Filter to find relevant workflow executions.
  For example, you can filter for failed workflow executions: `GET /workflows/:workflowID/executions?filters=status eq "Failed"`

  - Paginate through results with the `offset` parameter.
  For example, you can page through 50 executions per page and use that as a way to get to the records past the first 250.
  Refer to [Paginating Results](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results) for more information about the query parameters you can use to achieve pagination.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-executions-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Workflow ID. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* | [optional] [default to undefined]

### Return type

`Array<WorkflowexecutionV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Workflow ID.
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = status eq "Failed"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional)
const result = await apiInstance.getWorkflowExecutionsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-workflow-v1
Get workflow by id
Get a single workflow by id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow |  [default to undefined]

### Return type

`WorkflowV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Id of the workflow
const result = await apiInstance.getWorkflowV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-complete-workflow-library-v1
List complete workflow library
This lists all triggers, actions, and operators in the library

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-complete-workflow-library-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<ListCompleteWorkflowLibraryV1200ResponseInnerV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listCompleteWorkflowLibraryV1({  });
console.log(result);
```

[[Back to top]](#)

## list-workflow-library-actions-v1
List workflow library actions
This lists the workflow actions available to you.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-actions-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] [default to undefined]

### Return type

`Array<WorkflowlibraryactionV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = id eq "sp:create-campaign"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional)
const result = await apiInstance.listWorkflowLibraryActionsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-workflow-library-operators-v1
List workflow library operators
This lists the workflow operators available to you

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-operators-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Array<WorkflowlibraryoperatorV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const result = await apiInstance.listWorkflowLibraryOperatorsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-workflow-library-triggers-v1
List workflow library triggers
This lists the workflow triggers available to you

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-triggers-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq* | [optional] [default to undefined]

### Return type

`Array<WorkflowlibrarytriggerV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = id eq "idn:identity-attributes-changed"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq* (optional)
const result = await apiInstance.listWorkflowLibraryTriggersV1({  });
console.log(result);
```

[[Back to top]](#)

## list-workflows-v1
List workflows
List all workflows in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflows-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Array<WorkflowV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const result = await apiInstance.listWorkflowsV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-workflow-v1
Patch workflow
Partially update an existing Workflow using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-workflow-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the Workflow |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` |  | 

### Return type

`WorkflowV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Id of the Workflow
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = [{"op":"replace","path":"/name","value":"Send Email"},{"op":"replace","path":"/owner","value":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"William Wilson"}},{"op":"replace","path":"/description","value":"Send an email to the identity who's attributes changed."},{"op":"replace","path":"/enabled","value":false},{"op":"replace","path":"/definition","value":{"start":"Send Email Test","steps":{"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"action"},"success":{"type":"success"}}}},{"op":"replace","path":"/trigger","value":{"type":"EVENT","attributes":{"id":"idn:identity-attributes-changed"}}}]; // 
const result = await apiInstance.patchWorkflowV1({ id: id, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

## put-workflow-v1
Update workflow
Perform a full update of a workflow.  The updated workflow object is returned in the response.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-workflow-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the Workflow |  [default to undefined]
**workflowbodyV1** | `WorkflowbodyV1` |  | 

### Return type

`WorkflowV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Id of the Workflow
const workflowbodyV1: WorkflowbodyV1 = ; // 
const result = await apiInstance.putWorkflowV1({ id: id, workflowbodyV1: workflowbodyV1 });
console.log(result);
```

[[Back to top]](#)

## test-external-execute-workflow-v1
Test workflow via external trigger
Validate a workflow with an "External Trigger" can receive input.  The response includes the input that the workflow received, which can be used to validate that the input is intact when it reaches the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-external-execute-workflow-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow |  [default to undefined]
**testExternalExecuteWorkflowV1RequestV1** | `TestExternalExecuteWorkflowV1RequestV1` |  | [optional]

### Return type

`TestExternalExecuteWorkflowV1200ResponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Id of the workflow
const testExternalExecuteWorkflowV1RequestV1: TestExternalExecuteWorkflowV1RequestV1 = ; //  (optional)
const result = await apiInstance.testExternalExecuteWorkflowV1({ id: id });
console.log(result);
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


[API Spec](https://developer.sailpoint.com/docs/api/v1/test-workflow-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the workflow |  [default to undefined]
**testWorkflowV1RequestV1** | `TestWorkflowV1RequestV1` |  | 

### Return type

`TestWorkflowV1200ResponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { WorkflowsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new WorkflowsV1Api(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Id of the workflow
const testWorkflowV1RequestV1: TestWorkflowV1RequestV1 = {"input":{"identity":{"id":"ee769173319b41d19ccec6cea52f237b","name":"john.doe","type":"IDENTITY"},"changes":[{"attribute":"department","oldValue":"sales","newValue":"marketing"},{"attribute":"manager","oldValue":{"id":"ee769173319b41d19ccec6c235423237b","name":"nice.guy","type":"IDENTITY"},"newValue":{"id":"ee769173319b41d19ccec6c235423236c","name":"mean.guy","type":"IDENTITY"}},{"attribute":"email","oldValue":"john.doe@hotmail.com","newValue":"john.doe@gmail.com"}]}}; // 
const result = await apiInstance.testWorkflowV1({ id: id, testWorkflowV1RequestV1: testWorkflowV1RequestV1 });
console.log(result);
```

[[Back to top]](#)


---
id: v1-workflows
title: Workflows
pagination_label: Workflows
sidebar_label: Workflows
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflows', 'V1Workflows'] 
slug: /tools/sdk/go/workflows/methods/workflows
tags: ['SDK', 'Software Development Kit', 'Workflows', 'V1Workflows']
---

# WorkflowsAPI
  Workflows allow administrators to create custom automation scripts directly within Identity Security Cloud.  These automation scripts respond to [event triggers](https://developer.sailpoint.com/docs/extensibility/event-triggers/#how-to-get-started-with-event-triggers) and perform a series of actions to perform tasks that are either too cumbersome or not available in the Identity Security Cloud UI.  Workflows can be configured via a graphical user interface within Identity Security Cloud, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-workflow-execution-v1**](#cancel-workflow-execution-v1) | **Post** `/workflow-executions/v1/{id}/cancel` | Cancel workflow execution by id
[**create-external-execute-workflow-v1**](#create-external-execute-workflow-v1) | **Post** `/workflows/v1/execute/external/{id}` | Execute workflow via external trigger
[**create-workflow-external-trigger-v1**](#create-workflow-external-trigger-v1) | **Post** `/workflows/v1/{id}/external/oauth-clients` | Generate external trigger oauth client
[**create-workflow-v1**](#create-workflow-v1) | **Post** `/workflows/v1` | Create workflow
[**delete-workflow-v1**](#delete-workflow-v1) | **Delete** `/workflows/v1/{id}` | Delete workflow by id
[**get-workflow-execution-history-v1**](#get-workflow-execution-history-v1) | **Get** `/workflow-executions/v1/{id}/history` | Get workflow execution history
[**get-workflow-execution-history-v2**](#get-workflow-execution-history-v2) | **Get** `/workflow-executions/v1/{id}/history-v2` | Get updated workflow execution history
[**get-workflow-execution-v1**](#get-workflow-execution-v1) | **Get** `/workflow-executions/v1/{id}` | Get workflow execution
[**get-workflow-executions-v1**](#get-workflow-executions-v1) | **Get** `/workflows/v1/{id}/executions` | List workflow executions
[**get-workflow-v1**](#get-workflow-v1) | **Get** `/workflows/v1/{id}` | Get workflow by id
[**list-complete-workflow-library-v1**](#list-complete-workflow-library-v1) | **Get** `/workflow-library/v1` | List complete workflow library
[**list-workflow-library-actions-v1**](#list-workflow-library-actions-v1) | **Get** `/workflow-library/v1/actions` | List workflow library actions
[**list-workflow-library-operators-v1**](#list-workflow-library-operators-v1) | **Get** `/workflow-library/v1/operators` | List workflow library operators
[**list-workflow-library-triggers-v1**](#list-workflow-library-triggers-v1) | **Get** `/workflow-library/v1/triggers` | List workflow library triggers
[**list-workflows-v1**](#list-workflows-v1) | **Get** `/workflows/v1` | List workflows
[**patch-workflow-v1**](#patch-workflow-v1) | **Patch** `/workflows/v1/{id}` | Patch workflow
[**put-workflow-v1**](#put-workflow-v1) | **Put** `/workflows/v1/{id}` | Update workflow
[**test-external-execute-workflow-v1**](#test-external-execute-workflow-v1) | **Post** `/workflows/v1/execute/external/{id}/test` | Test workflow via external trigger
[**test-workflow-v1**](#test-workflow-v1) | **Post** `/workflows/v1/{id}/test` | Test workflow by id


## cancel-workflow-execution-v1
Cancel workflow execution by id
Use this API to cancel a running workflow execution.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-workflow-execution-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The workflow execution ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelWorkflowExecutionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | The workflow execution ID # string | The workflow execution ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.WorkflowsAPI.CancelWorkflowExecutionV1(context.Background(), id).Execute()
	  //r, err := apiClient.WorkflowsAPI.CancelWorkflowExecutionV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.CancelWorkflowExecutionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## create-external-execute-workflow-v1
Execute workflow via external trigger
This endpoint allows a service outside of IdentityNow to initiate a workflow that uses the "External Trigger" step.  The external service will invoke this endpoint with the input data it wants to send to the workflow in the body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-external-execute-workflow-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateExternalExecuteWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createExternalExecuteWorkflowV1Request** | [**CreateExternalExecuteWorkflowV1Request**](../models/create-external-execute-workflow-v1-request) |  | 

### Return type

[**CreateExternalExecuteWorkflowV1200Response**](../models/create-external-execute-workflow-v1200-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow # string | Id of the workflow
    createexternalexecuteworkflowv1request := []byte(``) // CreateExternalExecuteWorkflowV1Request |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.CreateExternalExecuteWorkflowV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.CreateExternalExecuteWorkflowV1(context.Background(), id).CreateExternalExecuteWorkflowV1Request(createExternalExecuteWorkflowV1Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.CreateExternalExecuteWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateExternalExecuteWorkflowV1`: CreateExternalExecuteWorkflowV1200Response
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.CreateExternalExecuteWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-workflow-external-trigger-v1
Generate external trigger oauth client
Create OAuth client ID, client secret, and callback URL for use in an external trigger.  External triggers will need this information to generate an access token to authenticate to the callback URL and submit a trigger payload that will initiate the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-workflow-external-trigger-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateWorkflowExternalTriggerV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Workflowoauthclient**](../models/workflowoauthclient)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow # string | Id of the workflow

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.CreateWorkflowExternalTriggerV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.CreateWorkflowExternalTriggerV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.CreateWorkflowExternalTriggerV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateWorkflowExternalTriggerV1`: Workflowoauthclient
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.CreateWorkflowExternalTriggerV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-workflow-v1
Create workflow
Create a new workflow with the desired trigger and steps specified in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-workflow-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWorkflowV1Request** | [**CreateWorkflowV1Request**](../models/create-workflow-v1-request) |  | 

### Return type

[**Workflow**](../models/workflow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/workflows"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    createworkflowv1request := []byte(`{"name":"Send Email","owner":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"William Wilson"},"description":"Send an email to the identity who's attributes changed.","definition":{"start":"Send Email Test","steps":{"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"action"},"success":{"type":"success"}}},"enabled":false,"trigger":{"type":"EVENT","attributes":{"id":"idn:identity-attributes-changed","filter":"$.changes[?(@.attribute == 'manager')]"}}}`) // CreateWorkflowV1Request | 

    var createWorkflowV1Request v1.CreateWorkflowV1Request
    if err := json.Unmarshal(createworkflowv1request, &createWorkflowV1Request); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.CreateWorkflowV1(context.Background()).CreateWorkflowV1Request(createWorkflowV1Request).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.CreateWorkflowV1(context.Background()).CreateWorkflowV1Request(createWorkflowV1Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.CreateWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateWorkflowV1`: Workflow
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.CreateWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-workflow-v1
Delete workflow by id
Delete a workflow.  **Enabled workflows cannot be deleted**.  They must first be disabled.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-workflow-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the Workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the Workflow # string | Id of the Workflow

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.WorkflowsAPI.DeleteWorkflowV1(context.Background(), id).Execute()
	  //r, err := apiClient.WorkflowsAPI.DeleteWorkflowV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.DeleteWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-workflow-execution-history-v1
Get workflow execution history
Get a detailed history of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-history-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow execution | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflowExecutionHistoryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Workflowexecutionevent**](../models/workflowexecutionevent)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow execution # string | Id of the workflow execution

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.GetWorkflowExecutionHistoryV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.GetWorkflowExecutionHistoryV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.GetWorkflowExecutionHistoryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkflowExecutionHistoryV1`: []Workflowexecutionevent
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.GetWorkflowExecutionHistoryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-workflow-execution-history-v2
Get updated workflow execution history
Gets a workflow execution history, trigger input, and workflow definition of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-history-v2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow execution | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflowExecutionHistoryV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Workflowexecutionhistory**](../models/workflowexecutionhistory)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow execution # string | Id of the workflow execution

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.GetWorkflowExecutionHistoryV2(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.GetWorkflowExecutionHistoryV2(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.GetWorkflowExecutionHistoryV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkflowExecutionHistoryV2`: Workflowexecutionhistory
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.GetWorkflowExecutionHistoryV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-workflow-execution-v1
Get workflow execution
Use this API to get a single workflow execution. Workflow executions are available for up to 90 days before being archived. If you attempt to access a workflow execution that has been archived, you will receive a "404 Not Found" response.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Workflow execution ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflowExecutionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Workflowexecution**](../models/workflowexecution)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Workflow execution ID. # string | Workflow execution ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.GetWorkflowExecutionV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.GetWorkflowExecutionV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.GetWorkflowExecutionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkflowExecutionV1`: []Workflowexecution
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.GetWorkflowExecutionV1`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Workflow ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflowExecutionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* | 

### Return type

[**[]Workflowexecution**](../models/workflowexecution)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Workflow ID. # string | Workflow ID.
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters := `status eq "Failed"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.GetWorkflowExecutionsV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.GetWorkflowExecutionsV1(context.Background(), id).Limit(limit).Offset(offset).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.GetWorkflowExecutionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkflowExecutionsV1`: []Workflowexecution
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.GetWorkflowExecutionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-workflow-v1
Get workflow by id
Get a single workflow by id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Workflow**](../models/workflow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow # string | Id of the workflow

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.GetWorkflowV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.GetWorkflowV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.GetWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkflowV1`: Workflow
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.GetWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-complete-workflow-library-v1
List complete workflow library
This lists all triggers, actions, and operators in the library

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-complete-workflow-library-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCompleteWorkflowLibraryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]ListCompleteWorkflowLibraryV1200ResponseInner**](../models/list-complete-workflow-library-v1200-response-inner)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.ListCompleteWorkflowLibraryV1(context.Background()).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.ListCompleteWorkflowLibraryV1(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.ListCompleteWorkflowLibraryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListCompleteWorkflowLibraryV1`: []ListCompleteWorkflowLibraryV1200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.ListCompleteWorkflowLibraryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workflow-library-actions-v1
List workflow library actions
This lists the workflow actions available to you.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-actions-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWorkflowLibraryActionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* | 

### Return type

[**[]Workflowlibraryaction**](../models/workflowlibraryaction)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters := `id eq "sp:create-campaign"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.ListWorkflowLibraryActionsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.ListWorkflowLibraryActionsV1(context.Background()).Limit(limit).Offset(offset).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.ListWorkflowLibraryActionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkflowLibraryActionsV1`: []Workflowlibraryaction
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.ListWorkflowLibraryActionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workflow-library-operators-v1
List workflow library operators
This lists the workflow operators available to you

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-operators-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListWorkflowLibraryOperatorsV1Request struct via the builder pattern


### Return type

[**[]Workflowlibraryoperator**](../models/workflowlibraryoperator)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.ListWorkflowLibraryOperatorsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.ListWorkflowLibraryOperatorsV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.ListWorkflowLibraryOperatorsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkflowLibraryOperatorsV1`: []Workflowlibraryoperator
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.ListWorkflowLibraryOperatorsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workflow-library-triggers-v1
List workflow library triggers
This lists the workflow triggers available to you

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-triggers-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWorkflowLibraryTriggersV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq* | 

### Return type

[**[]Workflowlibrarytrigger**](../models/workflowlibrarytrigger)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters := `id eq "idn:identity-attributes-changed"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.ListWorkflowLibraryTriggersV1(context.Background()).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.ListWorkflowLibraryTriggersV1(context.Background()).Limit(limit).Offset(offset).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.ListWorkflowLibraryTriggersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkflowLibraryTriggersV1`: []Workflowlibrarytrigger
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.ListWorkflowLibraryTriggersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workflows-v1
List workflows
List all workflows in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflows-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListWorkflowsV1Request struct via the builder pattern


### Return type

[**[]Workflow**](../models/workflow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.ListWorkflowsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.ListWorkflowsV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.ListWorkflowsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkflowsV1`: []Workflow
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.ListWorkflowsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-workflow-v1
Patch workflow
Partially update an existing Workflow using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-workflow-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the Workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) |  | 

### Return type

[**Workflow**](../models/workflow)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/workflows"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the Workflow # string | Id of the Workflow
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/name","value":"Send Email"},{"op":"replace","path":"/owner","value":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"William Wilson"}},{"op":"replace","path":"/description","value":"Send an email to the identity who's attributes changed."},{"op":"replace","path":"/enabled","value":false},{"op":"replace","path":"/definition","value":{"start":"Send Email Test","steps":{"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"action"},"success":{"type":"success"}}}},{"op":"replace","path":"/trigger","value":{"type":"EVENT","attributes":{"id":"idn:identity-attributes-changed"}}}]`) // []Jsonpatchoperation | 

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.PatchWorkflowV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.PatchWorkflowV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.PatchWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchWorkflowV1`: Workflow
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.PatchWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-workflow-v1
Update workflow
Perform a full update of a workflow.  The updated workflow object is returned in the response.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-workflow-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the Workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **workflowbody** | [**Workflowbody**](../models/workflowbody) |  | 

### Return type

[**Workflow**](../models/workflow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/workflows"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the Workflow # string | Id of the Workflow
    workflowbody := []byte(``) // Workflowbody | 

    var workflowbody v1.Workflowbody
    if err := json.Unmarshal(workflowbody, &workflowbody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.PutWorkflowV1(context.Background(), id).Workflowbody(workflowbody).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.PutWorkflowV1(context.Background(), id).Workflowbody(workflowbody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.PutWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutWorkflowV1`: Workflow
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.PutWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)

## test-external-execute-workflow-v1
Test workflow via external trigger
Validate a workflow with an "External Trigger" can receive input.  The response includes the input that the workflow received, which can be used to validate that the input is intact when it reaches the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-external-execute-workflow-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestExternalExecuteWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **testExternalExecuteWorkflowV1Request** | [**TestExternalExecuteWorkflowV1Request**](../models/test-external-execute-workflow-v1-request) |  | 

### Return type

[**TestExternalExecuteWorkflowV1200Response**](../models/test-external-execute-workflow-v1200-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow # string | Id of the workflow
    testexternalexecuteworkflowv1request := []byte(``) // TestExternalExecuteWorkflowV1Request |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.TestExternalExecuteWorkflowV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.TestExternalExecuteWorkflowV1(context.Background(), id).TestExternalExecuteWorkflowV1Request(testExternalExecuteWorkflowV1Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.TestExternalExecuteWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestExternalExecuteWorkflowV1`: TestExternalExecuteWorkflowV1200Response
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.TestExternalExecuteWorkflowV1`: %v\n", resp)
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


[API Spec](https://developer.sailpoint.com/docs/api/v1/test-workflow-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestWorkflowV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **testWorkflowV1Request** | [**TestWorkflowV1Request**](../models/test-workflow-v1-request) |  | 

### Return type

[**TestWorkflowV1200Response**](../models/test-workflow-v1200-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/workflows"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/workflows"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow # string | Id of the workflow
    testworkflowv1request := []byte(`{"input":{"identity":{"id":"ee769173319b41d19ccec6cea52f237b","name":"john.doe","type":"IDENTITY"},"changes":[{"attribute":"department","oldValue":"sales","newValue":"marketing"},{"attribute":"manager","oldValue":{"id":"ee769173319b41d19ccec6c235423237b","name":"nice.guy","type":"IDENTITY"},"newValue":{"id":"ee769173319b41d19ccec6c235423236c","name":"mean.guy","type":"IDENTITY"}},{"attribute":"email","oldValue":"john.doe@hotmail.com","newValue":"john.doe@gmail.com"}]}}`) // TestWorkflowV1Request | 

    var testWorkflowV1Request v1.TestWorkflowV1Request
    if err := json.Unmarshal(testworkflowv1request, &testWorkflowV1Request); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkflowsAPI.TestWorkflowV1(context.Background(), id).TestWorkflowV1Request(testWorkflowV1Request).Execute()
	  //resp, r, err := apiClient.WorkflowsAPI.TestWorkflowV1(context.Background(), id).TestWorkflowV1Request(testWorkflowV1Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.TestWorkflowV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestWorkflowV1`: TestWorkflowV1200Response
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.TestWorkflowV1`: %v\n", resp)
}
```

[[Back to top]](#)


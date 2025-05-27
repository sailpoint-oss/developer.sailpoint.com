---
id: v2025-workflows
title: Workflows
pagination_label: Workflows
sidebar_label: Workflows
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflows', 'V2025Workflows'] 
slug: /tools/sdk/go/v2025/methods/workflows
tags: ['SDK', 'Software Development Kit', 'Workflows', 'V2025Workflows']
---

# WorkflowsAPI
  Workflows allow administrators to create custom automation scripts directly within Identity Security Cloud.  These automation scripts respond to [event triggers](https://developer.sailpoint.com/docs/extensibility/event-triggers/#how-to-get-started-with-event-triggers) and perform a series of actions to perform tasks that are either too cumbersome or not available in the Identity Security Cloud UI.  Workflows can be configured via a graphical user interface within Identity Security Cloud, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-workflow-execution**](#cancel-workflow-execution) | **Post** `/workflow-executions/{id}/cancel` | Cancel workflow execution by id
[**create-external-execute-workflow**](#create-external-execute-workflow) | **Post** `/workflows/execute/external/{id}` | Execute workflow via external trigger
[**create-workflow**](#create-workflow) | **Post** `/workflows` | Create workflow
[**create-workflow-external-trigger**](#create-workflow-external-trigger) | **Post** `/workflows/{id}/external/oauth-clients` | Generate external trigger oauth client
[**delete-workflow**](#delete-workflow) | **Delete** `/workflows/{id}` | Delete workflow by id
[**get-workflow**](#get-workflow) | **Get** `/workflows/{id}` | Get workflow by id
[**get-workflow-execution**](#get-workflow-execution) | **Get** `/workflow-executions/{id}` | Get workflow execution
[**get-workflow-execution-history**](#get-workflow-execution-history) | **Get** `/workflow-executions/{id}/history` | Get workflow execution history
[**get-workflow-executions**](#get-workflow-executions) | **Get** `/workflows/{id}/executions` | List workflow executions
[**list-complete-workflow-library**](#list-complete-workflow-library) | **Get** `/workflow-library` | List complete workflow library
[**list-workflow-library-actions**](#list-workflow-library-actions) | **Get** `/workflow-library/actions` | List workflow library actions
[**list-workflow-library-operators**](#list-workflow-library-operators) | **Get** `/workflow-library/operators` | List workflow library operators
[**list-workflow-library-triggers**](#list-workflow-library-triggers) | **Get** `/workflow-library/triggers` | List workflow library triggers
[**list-workflows**](#list-workflows) | **Get** `/workflows` | List workflows
[**patch-workflow**](#patch-workflow) | **Patch** `/workflows/{id}` | Patch workflow
[**put-workflow**](#put-workflow) | **Put** `/workflows/{id}` | Update workflow
[**test-external-execute-workflow**](#test-external-execute-workflow) | **Post** `/workflows/execute/external/{id}/test` | Test workflow via external trigger
[**test-workflow**](#test-workflow) | **Post** `/workflows/{id}/test` | Test workflow by id


## cancel-workflow-execution
Cancel workflow execution by id
Use this API to cancel a running workflow execution.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/cancel-workflow-execution)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The workflow execution ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelWorkflowExecutionRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | The workflow execution ID # string | The workflow execution ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.WorkflowsAPI.CancelWorkflowExecution(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.WorkflowsAPI.CancelWorkflowExecution(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.CancelWorkflowExecution``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## create-external-execute-workflow
Execute workflow via external trigger
This endpoint allows a service outside of IdentityNow to initiate a workflow that uses the "External Trigger" step.  The external service will invoke this endpoint with the input data it wants to send to the workflow in the body.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-external-execute-workflow)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateExternalExecuteWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createExternalExecuteWorkflowRequest** | [**CreateExternalExecuteWorkflowRequest**](../models/create-external-execute-workflow-request) |  | 

### Return type

[**CreateExternalExecuteWorkflow200Response**](../models/create-external-execute-workflow200-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow # string | Id of the workflow
    createexternalexecuteworkflowrequest := []byte(``) // CreateExternalExecuteWorkflowRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.CreateExternalExecuteWorkflow(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.CreateExternalExecuteWorkflow(context.Background(), id).CreateExternalExecuteWorkflowRequest(createExternalExecuteWorkflowRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.CreateExternalExecuteWorkflow``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateExternalExecuteWorkflow`: CreateExternalExecuteWorkflow200Response
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.CreateExternalExecuteWorkflow`: %v\n", resp)
}
```

[[Back to top]](#)

## create-workflow
Create workflow
Create a new workflow with the desired trigger and steps specified in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-workflow)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWorkflowRequest** | [**CreateWorkflowRequest**](../models/create-workflow-request) |  | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    createworkflowrequest := []byte(`{name=Send Email, owner={type=IDENTITY, id=2c91808568c529c60168cca6f90c1313, name=William Wilson}, description=Send an email to the identity who's attributes changed., definition={start=Send Email Test, steps={Send Email={actionId=sp:send-email, attributes={body=This is a test, from=sailpoint@sailpoint.com, recipientId.$=$.identity.id, subject=test}, nextStep=success, selectResult=null, type=action}, success={type=success}}}, enabled=false, trigger={type=EVENT, attributes={id=idn:identity-attributes-changed, filter=$.changes[?(@.attribute == 'manager')]}}}`) // CreateWorkflowRequest | 

    var createWorkflowRequest v2025.CreateWorkflowRequest
    if err := json.Unmarshal(createworkflowrequest, &createWorkflowRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.CreateWorkflow(context.Background()).CreateWorkflowRequest(createWorkflowRequest).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.CreateWorkflow(context.Background()).CreateWorkflowRequest(createWorkflowRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.CreateWorkflow``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateWorkflow`: Workflow
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.CreateWorkflow`: %v\n", resp)
}
```

[[Back to top]](#)

## create-workflow-external-trigger
Generate external trigger oauth client
Create OAuth client ID, client secret, and callback URL for use in an external trigger.  External triggers will need this information to generate an access token to authenticate to the callback URL and submit a trigger payload that will initiate the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-workflow-external-trigger)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateWorkflowExternalTriggerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**WorkflowOAuthClient**](../models/workflow-o-auth-client)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow # string | Id of the workflow

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.CreateWorkflowExternalTrigger(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.CreateWorkflowExternalTrigger(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.CreateWorkflowExternalTrigger``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateWorkflowExternalTrigger`: WorkflowOAuthClient
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.CreateWorkflowExternalTrigger`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-workflow
Delete workflow by id
Delete a workflow.  **Enabled workflows cannot be deleted**.  They must first be disabled.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-workflow)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the Workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkflowRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the Workflow # string | Id of the Workflow

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.WorkflowsAPI.DeleteWorkflow(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.WorkflowsAPI.DeleteWorkflow(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.DeleteWorkflow``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-workflow
Get workflow by id
Get a single workflow by id.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-workflow)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflowRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow # string | Id of the workflow

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.GetWorkflow(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.GetWorkflow(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.GetWorkflow``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkflow`: Workflow
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.GetWorkflow`: %v\n", resp)
}
```

[[Back to top]](#)

## get-workflow-execution
Get workflow execution
Use this API to get a single workflow execution. Workflow executions are available for up to 90 days before being archived. If you attempt to access a workflow execution that has been archived, you will receive a "404 Not Found" response.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-workflow-execution)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Workflow execution ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflowExecutionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**map[string]interface{}**

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Workflow execution ID. # string | Workflow execution ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.GetWorkflowExecution(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.GetWorkflowExecution(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.GetWorkflowExecution``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkflowExecution`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.GetWorkflowExecution`: %v\n", resp)
}
```

[[Back to top]](#)

## get-workflow-execution-history
Get workflow execution history
Get a detailed history of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-workflow-execution-history)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow execution | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflowExecutionHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]WorkflowExecutionEvent**](../models/workflow-execution-event)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow execution # string | Id of the workflow execution

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.GetWorkflowExecutionHistory(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.GetWorkflowExecutionHistory(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.GetWorkflowExecutionHistory``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkflowExecutionHistory`: []WorkflowExecutionEvent
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.GetWorkflowExecutionHistory`: %v\n", resp)
}
```

[[Back to top]](#)

## get-workflow-executions
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-workflow-executions)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Workflow ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflowExecutionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* | 

### Return type

[**[]WorkflowExecution**](../models/workflow-execution)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Workflow ID. # string | Workflow ID.
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `status eq "Failed"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.GetWorkflowExecutions(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.GetWorkflowExecutions(context.Background(), id).Limit(limit).Offset(offset).Count(count).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.GetWorkflowExecutions``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkflowExecutions`: []WorkflowExecution
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.GetWorkflowExecutions`: %v\n", resp)
}
```

[[Back to top]](#)

## list-complete-workflow-library
List complete workflow library
This lists all triggers, actions, and operators in the library

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-complete-workflow-library)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCompleteWorkflowLibraryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]ListCompleteWorkflowLibrary200ResponseInner**](../models/list-complete-workflow-library200-response-inner)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.ListCompleteWorkflowLibrary(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.ListCompleteWorkflowLibrary(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.ListCompleteWorkflowLibrary``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListCompleteWorkflowLibrary`: []ListCompleteWorkflowLibrary200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.ListCompleteWorkflowLibrary`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workflow-library-actions
List workflow library actions
This lists the workflow actions available to you.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-workflow-library-actions)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWorkflowLibraryActionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* | 

### Return type

[**[]WorkflowLibraryAction**](../models/workflow-library-action)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters := `id eq "sp:create-campaign"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.ListWorkflowLibraryActions(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.ListWorkflowLibraryActions(context.Background()).Limit(limit).Offset(offset).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.ListWorkflowLibraryActions``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkflowLibraryActions`: []WorkflowLibraryAction
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.ListWorkflowLibraryActions`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workflow-library-operators
List workflow library operators
This lists the workflow operators available to you

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-workflow-library-operators)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListWorkflowLibraryOperatorsRequest struct via the builder pattern


### Return type

[**[]WorkflowLibraryOperator**](../models/workflow-library-operator)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.ListWorkflowLibraryOperators(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.ListWorkflowLibraryOperators(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.ListWorkflowLibraryOperators``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkflowLibraryOperators`: []WorkflowLibraryOperator
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.ListWorkflowLibraryOperators`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workflow-library-triggers
List workflow library triggers
This lists the workflow triggers available to you

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-workflow-library-triggers)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWorkflowLibraryTriggersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* | 

### Return type

[**[]WorkflowLibraryTrigger**](../models/workflow-library-trigger)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters := `id eq "idn:identity-attributes-changed"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.ListWorkflowLibraryTriggers(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.ListWorkflowLibraryTriggers(context.Background()).Limit(limit).Offset(offset).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.ListWorkflowLibraryTriggers``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkflowLibraryTriggers`: []WorkflowLibraryTrigger
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.ListWorkflowLibraryTriggers`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workflows
List workflows
List all workflows in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-workflows)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListWorkflowsRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.ListWorkflows(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.ListWorkflows(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.ListWorkflows``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkflows`: []Workflow
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.ListWorkflows`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-workflow
Patch workflow
Partially update an existing Workflow using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-workflow)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the Workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) |  | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the Workflow # string | Id of the Workflow
    jsonpatchoperation := []byte(`[{op=replace, path=/name, value=Send Email}, {op=replace, path=/owner, value={type=IDENTITY, id=2c91808568c529c60168cca6f90c1313, name=William Wilson}}, {op=replace, path=/description, value=Send an email to the identity who's attributes changed.}, {op=replace, path=/enabled, value=false}, {op=replace, path=/definition, value={start=Send Email Test, steps={Send Email={actionId=sp:send-email, attributes={body=This is a test, from=sailpoint@sailpoint.com, recipientId.$=$.identity.id, subject=test}, nextStep=success, selectResult=null, type=action}, success={type=success}}}}, {op=replace, path=/trigger, value={type=EVENT, attributes={id=idn:identity-attributes-changed}}}]`) // []JsonPatchOperation | 

    var jsonPatchOperation []v2025.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.PatchWorkflow(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.PatchWorkflow(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.PatchWorkflow``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchWorkflow`: Workflow
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.PatchWorkflow`: %v\n", resp)
}
```

[[Back to top]](#)

## put-workflow
Update workflow
Perform a full update of a workflow.  The updated workflow object is returned in the response.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-workflow)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the Workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **workflowBody** | [**WorkflowBody**](../models/workflow-body) |  | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the Workflow # string | Id of the Workflow
    workflowbody := []byte(`{
          "owner" : {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "name" : "Send Email",
          "description" : "Send an email to the identity who's attributes changed.",
          "definition" : {
            "start" : "Send Email Test",
            "steps" : {
              "Send Email" : {
                "actionId" : "sp:send-email",
                "attributes" : {
                  "body" : "This is a test",
                  "from" : "sailpoint@sailpoint.com",
                  "recipientId.$" : "$.identity.id",
                  "subject" : "test"
                },
                "nextStep" : "success",
                "type" : "ACTION"
              },
              "success" : {
                "type" : "success"
              }
            }
          },
          "trigger" : {
            "displayName" : "displayName",
            "attributes" : "{}",
            "type" : "EVENT"
          },
          "enabled" : false
        }`) // WorkflowBody | 

    var workflowBody v2025.WorkflowBody
    if err := json.Unmarshal(workflowbody, &workflowBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.PutWorkflow(context.Background(), id).WorkflowBody(workflowBody).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.PutWorkflow(context.Background(), id).WorkflowBody(workflowBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.PutWorkflow``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutWorkflow`: Workflow
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.PutWorkflow`: %v\n", resp)
}
```

[[Back to top]](#)

## test-external-execute-workflow
Test workflow via external trigger
Validate a workflow with an "External Trigger" can receive input.  The response includes the input that the workflow received, which can be used to validate that the input is intact when it reaches the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/test-external-execute-workflow)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestExternalExecuteWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **testExternalExecuteWorkflowRequest** | [**TestExternalExecuteWorkflowRequest**](../models/test-external-execute-workflow-request) |  | 

### Return type

[**TestExternalExecuteWorkflow200Response**](../models/test-external-execute-workflow200-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow # string | Id of the workflow
    testexternalexecuteworkflowrequest := []byte(``) // TestExternalExecuteWorkflowRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.TestExternalExecuteWorkflow(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.TestExternalExecuteWorkflow(context.Background(), id).TestExternalExecuteWorkflowRequest(testExternalExecuteWorkflowRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.TestExternalExecuteWorkflow``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestExternalExecuteWorkflow`: TestExternalExecuteWorkflow200Response
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.TestExternalExecuteWorkflow`: %v\n", resp)
}
```

[[Back to top]](#)

## test-workflow
Test workflow by id
:::info

Workflow must be disabled in order to use this endpoint.

:::

Test a workflow with the provided input data.  The input data should resemble the input that the trigger will send the workflow.  See the [event trigger documentation](https://developer.sailpoint.com/idn/docs/event-triggers/available) for an example input for the trigger that initiates this workflow.

This endpoint will return an execution ID, which can be used to lookup more information about the execution using the `Get a Workflow Execution` endpoint.

**This will cause a live run of the workflow, which could result in unintended modifications to your IDN tenant.**


[API Spec](https://developer.sailpoint.com/docs/api/v2025/test-workflow)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the workflow | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **testWorkflowRequest** | [**TestWorkflowRequest**](../models/test-workflow-request) |  | 

### Return type

[**TestWorkflow200Response**](../models/test-workflow200-response)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the workflow # string | Id of the workflow
    testworkflowrequest := []byte(`{input={identity={id=ee769173319b41d19ccec6cea52f237b, name=john.doe, type=IDENTITY}, changes=[{attribute=department, oldValue=sales, newValue=marketing}, {attribute=manager, oldValue={id=ee769173319b41d19ccec6c235423237b, name=nice.guy, type=IDENTITY}, newValue={id=ee769173319b41d19ccec6c235423236c, name=mean.guy, type=IDENTITY}}, {attribute=email, oldValue=john.doe@hotmail.com, newValue=john.doe@gmail.com}]}}`) // TestWorkflowRequest | 

    var testWorkflowRequest v2025.TestWorkflowRequest
    if err := json.Unmarshal(testworkflowrequest, &testWorkflowRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.WorkflowsAPI.TestWorkflow(context.Background(), id).TestWorkflowRequest(testWorkflowRequest).Execute()
	  //resp, r, err := apiClient.V2025.WorkflowsAPI.TestWorkflow(context.Background(), id).TestWorkflowRequest(testWorkflowRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkflowsAPI.TestWorkflow``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestWorkflow`: TestWorkflow200Response
    fmt.Fprintf(os.Stdout, "Response from `WorkflowsAPI.TestWorkflow`: %v\n", resp)
}
```

[[Back to top]](#)


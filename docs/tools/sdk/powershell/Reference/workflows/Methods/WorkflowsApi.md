---
id: workflows
title: Workflows
pagination_label: Workflows
sidebar_label: Workflows
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflows', 'Workflows'] 
slug: /tools/sdk/powershell/workflows/methods/workflows
tags: ['SDK', 'Software Development Kit', 'Workflows', 'Workflows']
---

# Workflows
  Workflows allow administrators to create custom automation scripts directly within Identity Security Cloud.  These automation scripts respond to [event triggers](https://developer.sailpoint.com/docs/extensibility/event-triggers/#how-to-get-started-with-event-triggers) and perform a series of actions to perform tasks that are either too cumbersome or not available in the Identity Security Cloud UI.  Workflows can be configured via a graphical user interface within Identity Security Cloud, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Suspend-WorkflowExecutionV1**](#cancel-workflow-execution-v1) | **POST** `/workflow-executions/v1/{id}/cancel` | Cancel workflow execution by id
[**New-ExternalExecuteWorkflowV1**](#create-external-execute-workflow-v1) | **POST** `/workflows/v1/execute/external/{id}` | Execute workflow via external trigger
[**New-WorkflowExternalTriggerV1**](#create-workflow-external-trigger-v1) | **POST** `/workflows/v1/{id}/external/oauth-clients` | Generate external trigger oauth client
[**New-WorkflowV1**](#create-workflow-v1) | **POST** `/workflows/v1` | Create workflow
[**Remove-WorkflowV1**](#delete-workflow-v1) | **DELETE** `/workflows/v1/{id}` | Delete workflow by id
[**Get-WorkflowExecutionHistoryV1**](#get-workflow-execution-history-v1) | **GET** `/workflow-executions/v1/{id}/history` | Get workflow execution history
[**Get-WorkflowExecutionHistoryV2**](#get-workflow-execution-history-v2) | **GET** `/workflow-executions/v1/{id}/history-v2` | Get updated workflow execution history
[**Get-WorkflowExecutionV1**](#get-workflow-execution-v1) | **GET** `/workflow-executions/v1/{id}` | Get workflow execution
[**Get-WorkflowExecutionsV1**](#get-workflow-executions-v1) | **GET** `/workflows/v1/{id}/executions` | List workflow executions
[**Get-WorkflowV1**](#get-workflow-v1) | **GET** `/workflows/v1/{id}` | Get workflow by id
[**Get-CompleteWorkflowLibraryV1**](#list-complete-workflow-library-v1) | **GET** `/workflow-library/v1` | List complete workflow library
[**Get-WorkflowLibraryActionsV1**](#list-workflow-library-actions-v1) | **GET** `/workflow-library/v1/actions` | List workflow library actions
[**Get-WorkflowLibraryOperatorsV1**](#list-workflow-library-operators-v1) | **GET** `/workflow-library/v1/operators` | List workflow library operators
[**Get-WorkflowLibraryTriggersV1**](#list-workflow-library-triggers-v1) | **GET** `/workflow-library/v1/triggers` | List workflow library triggers
[**Get-WorkflowsV1**](#list-workflows-v1) | **GET** `/workflows/v1` | List workflows
[**Update-WorkflowV1**](#patch-workflow-v1) | **PATCH** `/workflows/v1/{id}` | Patch workflow
[**Send-WorkflowV1**](#put-workflow-v1) | **PUT** `/workflows/v1/{id}` | Update workflow
[**Test-ExternalExecuteWorkflowV1**](#test-external-execute-workflow-v1) | **POST** `/workflows/v1/execute/external/{id}/test` | Test workflow via external trigger
[**Test-WorkflowV1**](#test-workflow-v1) | **POST** `/workflows/v1/{id}/test` | Test workflow by id


## cancel-workflow-execution-v1
Use this API to cancel a running workflow execution.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-workflow-execution-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The workflow execution ID

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | The workflow execution ID

# Cancel workflow execution by id

try {
    Suspend-WorkflowExecutionV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Suspend-WorkflowExecutionV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-WorkflowExecutionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-external-execute-workflow-v1
This endpoint allows a service outside of IdentityNow to initiate a workflow that uses the "External Trigger" step.  The external service will invoke this endpoint with the input data it wants to send to the workflow in the body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-external-execute-workflow-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow
 Body  | CreateExternalExecuteWorkflowV1Request | [**CreateExternalExecuteWorkflowV1Request**](../models/create-external-execute-workflow-v1-request) |   (optional) | 

### Return type
[**CreateExternalExecuteWorkflowV1200Response**](../models/create-external-execute-workflow-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Workflow object | CreateExternalExecuteWorkflowV1200Response
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow
$CreateExternalExecuteWorkflowV1Request = @""@

# Execute workflow via external trigger

try {
    New-ExternalExecuteWorkflowV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # New-ExternalExecuteWorkflowV1 -Id $Id -CreateExternalExecuteWorkflowV1Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ExternalExecuteWorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-workflow-external-trigger-v1
Create OAuth client ID, client secret, and callback URL for use in an external trigger.  External triggers will need this information to generate an access token to authenticate to the callback URL and submit a trigger payload that will initiate the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-workflow-external-trigger-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow

### Return type
[**Workflowoauthclient**](../models/workflowoauthclient)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The OAuth Client object | Workflowoauthclient
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow

# Generate external trigger oauth client

try {
    New-WorkflowExternalTriggerV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # New-WorkflowExternalTriggerV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-WorkflowExternalTriggerV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-workflow-v1
Create a new workflow with the desired trigger and steps specified in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-workflow-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CreateWorkflowV1Request | [**CreateWorkflowV1Request**](../models/create-workflow-v1-request) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Workflow object | Workflow
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CreateWorkflowV1Request = @"{"name":"Send Email","owner":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"William Wilson"},"description":"Send an email to the identity who's attributes changed.","definition":{"start":"Send Email Test","steps":{"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"action"},"success":{"type":"success"}}},"enabled":false,"trigger":{"type":"EVENT","attributes":{"id":"idn:identity-attributes-changed","filter":"$.changes[?(@.attribute == 'manager')]"}}}"@

# Create workflow

try {
    $Result = ConvertFrom-JsonToCreateWorkflowV1Request -Json $CreateWorkflowV1Request
    New-WorkflowV1 -CreateWorkflowV1Request $Result 
    
    # Below is a request that includes all optional parameters
    # New-WorkflowV1 -CreateWorkflowV1Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-WorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-workflow-v1
Delete a workflow.  **Enabled workflows cannot be deleted**.  They must first be disabled.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-workflow-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the Workflow

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the Workflow

# Delete workflow by id

try {
    Remove-WorkflowV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-WorkflowV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-WorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-workflow-execution-history-v1
Get a detailed history of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-history-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow execution

### Return type
[**Workflowexecutionevent[]**](../models/workflowexecutionevent)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow execution events for the given workflow execution | Workflowexecutionevent[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow execution

# Get workflow execution history

try {
    Get-WorkflowExecutionHistoryV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-WorkflowExecutionHistoryV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkflowExecutionHistoryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-workflow-execution-history-v2
Gets a workflow execution history, trigger input, and workflow definition of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-history-v2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow execution

### Return type
[**Workflowexecutionhistory**](../models/workflowexecutionhistory)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow workflow definition, execution events, and workflow trigger for the given workflow execution | Workflowexecutionhistory
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow execution

# Get updated workflow execution history

try {
    Get-WorkflowExecutionHistoryV2 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-WorkflowExecutionHistoryV2 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkflowExecutionHistoryV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-workflow-execution-v1
Use this API to get a single workflow execution. Workflow executions are available for up to 90 days before being archived. If you attempt to access a workflow execution that has been archived, you will receive a "404 Not Found" response.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Workflow execution ID.

### Return type
[**Workflowexecution[]**](../models/workflowexecution)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Workflow execution. | Workflowexecution[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Workflow execution ID.

# Get workflow execution

try {
    Get-WorkflowExecutionV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-WorkflowExecutionV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkflowExecutionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-workflow-executions-v1
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
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Workflow ID.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq*

### Return type
[**Workflowexecution[]**](../models/workflowexecution)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow executions for the specified workflow. | Workflowexecution[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Workflow ID.
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'status eq "Failed"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional)

# List workflow executions

try {
    Get-WorkflowExecutionsV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-WorkflowExecutionsV1 -Id $Id -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkflowExecutionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-workflow-v1
Get a single workflow by id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The workflow object | Workflow
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow

# Get workflow by id

try {
    Get-WorkflowV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-WorkflowV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-complete-workflow-library-v1
This lists all triggers, actions, and operators in the library

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-complete-workflow-library-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**ListCompleteWorkflowLibraryV1200ResponseInner[]**](../models/list-complete-workflow-library-v1200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow steps | ListCompleteWorkflowLibraryV1200ResponseInner[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List complete workflow library

try {
    Get-CompleteWorkflowLibraryV1 
    
    # Below is a request that includes all optional parameters
    # Get-CompleteWorkflowLibraryV1 -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CompleteWorkflowLibraryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-workflow-library-actions-v1
This lists the workflow actions available to you.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-actions-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*

### Return type
[**Workflowlibraryaction[]**](../models/workflowlibraryaction)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow actions | Workflowlibraryaction[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'id eq "sp:create-campaign"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional)

# List workflow library actions

try {
    Get-WorkflowLibraryActionsV1 
    
    # Below is a request that includes all optional parameters
    # Get-WorkflowLibraryActionsV1 -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkflowLibraryActionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-workflow-library-operators-v1
This lists the workflow operators available to you

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-operators-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Workflowlibraryoperator[]**](../models/workflowlibraryoperator)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow operators | Workflowlibraryoperator[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# List workflow library operators

try {
    Get-WorkflowLibraryOperatorsV1 
    
    # Below is a request that includes all optional parameters
    # Get-WorkflowLibraryOperatorsV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkflowLibraryOperatorsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-workflow-library-triggers-v1
This lists the workflow triggers available to you

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-triggers-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq*

### Return type
[**Workflowlibrarytrigger[]**](../models/workflowlibrarytrigger)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow triggers | Workflowlibrarytrigger[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'id eq "idn:identity-attributes-changed"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq* (optional)

# List workflow library triggers

try {
    Get-WorkflowLibraryTriggersV1 
    
    # Below is a request that includes all optional parameters
    # Get-WorkflowLibraryTriggersV1 -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkflowLibraryTriggersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-workflows-v1
List all workflows in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflows-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Workflow[]**](../models/workflow)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflows | Workflow[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# List workflows

try {
    Get-WorkflowsV1 
    
    # Below is a request that includes all optional parameters
    # Get-WorkflowsV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkflowsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-workflow-v1
Partially update an existing Workflow using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-workflow-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the Workflow
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Workflow object | Workflow
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the Workflow
 $Jsonpatchoperation = @"[{"op":"replace","path":"/name","value":"Send Email"},{"op":"replace","path":"/owner","value":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"William Wilson"}},{"op":"replace","path":"/description","value":"Send an email to the identity who's attributes changed."},{"op":"replace","path":"/enabled","value":false},{"op":"replace","path":"/definition","value":{"start":"Send Email Test","steps":{"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"action"},"success":{"type":"success"}}}},{"op":"replace","path":"/trigger","value":{"type":"EVENT","attributes":{"id":"idn:identity-attributes-changed"}}}]"@ # Jsonpatchoperation[] | 
 

# Patch workflow

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-WorkflowV1 -Id $Id -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-WorkflowV1 -Id $Id -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-WorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-workflow-v1
Perform a full update of a workflow.  The updated workflow object is returned in the response.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-workflow-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the Workflow
 Body  | Workflowbody | [**Workflowbody**](../models/workflowbody) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Workflow object | Workflow
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the Workflow
$Workflowbody = @""@

# Update workflow

try {
    $Result = ConvertFrom-JsonToWorkflowbody -Json $Workflowbody
    Send-WorkflowV1 -Id $Id -Workflowbody $Result 
    
    # Below is a request that includes all optional parameters
    # Send-WorkflowV1 -Id $Id -Workflowbody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-WorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-external-execute-workflow-v1
Validate a workflow with an "External Trigger" can receive input.  The response includes the input that the workflow received, which can be used to validate that the input is intact when it reaches the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-external-execute-workflow-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow
 Body  | TestExternalExecuteWorkflowV1Request | [**TestExternalExecuteWorkflowV1Request**](../models/test-external-execute-workflow-v1-request) |   (optional) | 

### Return type
[**TestExternalExecuteWorkflowV1200Response**](../models/test-external-execute-workflow-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the test input | TestExternalExecuteWorkflowV1200Response
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow
$TestExternalExecuteWorkflowV1Request = @""@

# Test workflow via external trigger

try {
    Test-ExternalExecuteWorkflowV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Test-ExternalExecuteWorkflowV1 -Id $Id -TestExternalExecuteWorkflowV1Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-ExternalExecuteWorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-workflow-v1
:::info

Workflow must be disabled in order to use this endpoint.

:::

Test a workflow with the provided input data.  The input data should resemble the input that the trigger will send the workflow.  See the [event trigger documentation](https://developer.sailpoint.com/docs/extensibility/event-triggers/available) for an example input for the trigger that initiates this workflow.

This endpoint will return an execution ID, which can be used to lookup more information about the execution using the `Get a Workflow Execution` endpoint.

**This will cause a live run of the workflow, which could result in unintended modifications to your IDN tenant.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/test-workflow-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow
 Body  | TestWorkflowV1Request | [**TestWorkflowV1Request**](../models/test-workflow-v1-request) | True  | 

### Return type
[**TestWorkflowV1200Response**](../models/test-workflow-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Workflow object | TestWorkflowV1200Response
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow
$TestWorkflowV1Request = @"{"input":{"identity":{"id":"ee769173319b41d19ccec6cea52f237b","name":"john.doe","type":"IDENTITY"},"changes":[{"attribute":"department","oldValue":"sales","newValue":"marketing"},{"attribute":"manager","oldValue":{"id":"ee769173319b41d19ccec6c235423237b","name":"nice.guy","type":"IDENTITY"},"newValue":{"id":"ee769173319b41d19ccec6c235423236c","name":"mean.guy","type":"IDENTITY"}},{"attribute":"email","oldValue":"john.doe@hotmail.com","newValue":"john.doe@gmail.com"}]}}"@

# Test workflow by id

try {
    $Result = ConvertFrom-JsonToTestWorkflowV1Request -Json $TestWorkflowV1Request
    Test-WorkflowV1 -Id $Id -TestWorkflowV1Request $Result 
    
    # Below is a request that includes all optional parameters
    # Test-WorkflowV1 -Id $Id -TestWorkflowV1Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-WorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

---
id: v2025-workflows
title: Workflows
pagination_label: Workflows
sidebar_label: Workflows
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflows', 'V2025Workflows'] 
slug: /tools/sdk/powershell/v2025/methods/workflows
tags: ['SDK', 'Software Development Kit', 'Workflows', 'V2025Workflows']
---

# Workflows
  Workflows allow administrators to create custom automation scripts directly within Identity Security Cloud.  These automation scripts respond to [event triggers](https://developer.sailpoint.com/docs/extensibility/event-triggers/#how-to-get-started-with-event-triggers) and perform a series of actions to perform tasks that are either too cumbersome or not available in the Identity Security Cloud UI.  Workflows can be configured via a graphical user interface within Identity Security Cloud, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Suspend-V2025WorkflowExecution**](#cancel-workflow-execution) | **POST** `/workflow-executions/{id}/cancel` | Cancel workflow execution by id
[**New-V2025ExternalExecuteWorkflow**](#create-external-execute-workflow) | **POST** `/workflows/execute/external/{id}` | Execute workflow via external trigger
[**New-V2025Workflow**](#create-workflow) | **POST** `/workflows` | Create workflow
[**New-V2025WorkflowExternalTrigger**](#create-workflow-external-trigger) | **POST** `/workflows/{id}/external/oauth-clients` | Generate external trigger oauth client
[**Remove-V2025Workflow**](#delete-workflow) | **DELETE** `/workflows/{id}` | Delete workflow by id
[**Get-V2025Workflow**](#get-workflow) | **GET** `/workflows/{id}` | Get workflow by id
[**Get-V2025WorkflowExecution**](#get-workflow-execution) | **GET** `/workflow-executions/{id}` | Get workflow execution
[**Get-V2025WorkflowExecutionHistory**](#get-workflow-execution-history) | **GET** `/workflow-executions/{id}/history` | Get workflow execution history
[**Get-V2025WorkflowExecutions**](#get-workflow-executions) | **GET** `/workflows/{id}/executions` | List workflow executions
[**Get-V2025CompleteWorkflowLibrary**](#list-complete-workflow-library) | **GET** `/workflow-library` | List complete workflow library
[**Get-V2025WorkflowLibraryActions**](#list-workflow-library-actions) | **GET** `/workflow-library/actions` | List workflow library actions
[**Get-V2025WorkflowLibraryOperators**](#list-workflow-library-operators) | **GET** `/workflow-library/operators` | List workflow library operators
[**Get-V2025WorkflowLibraryTriggers**](#list-workflow-library-triggers) | **GET** `/workflow-library/triggers` | List workflow library triggers
[**Get-V2025Workflows**](#list-workflows) | **GET** `/workflows` | List workflows
[**Update-V2025Workflow**](#patch-workflow) | **PATCH** `/workflows/{id}` | Patch workflow
[**Send-V2025Workflow**](#put-workflow) | **PUT** `/workflows/{id}` | Update workflow
[**Test-V2025ExternalExecuteWorkflow**](#test-external-execute-workflow) | **POST** `/workflows/execute/external/{id}/test` | Test workflow via external trigger
[**Test-V2025Workflow**](#test-workflow) | **POST** `/workflows/{id}/test` | Test workflow by id


## cancel-workflow-execution
Use this API to cancel a running workflow execution.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/cancel-workflow-execution)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | The workflow execution ID

# Cancel workflow execution by id

try {
    Suspend-V2025WorkflowExecution -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Suspend-V2025WorkflowExecution -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-V2025WorkflowExecution"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-external-execute-workflow
This endpoint allows a service outside of IdentityNow to initiate a workflow that uses the "External Trigger" step.  The external service will invoke this endpoint with the input data it wants to send to the workflow in the body.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-external-execute-workflow)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow
 Body  | CreateExternalExecuteWorkflowRequest | [**CreateExternalExecuteWorkflowRequest**](../models/create-external-execute-workflow-request) |   (optional) | 

### Return type
[**CreateExternalExecuteWorkflow200Response**](../models/create-external-execute-workflow200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Workflow object | CreateExternalExecuteWorkflow200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow
$CreateExternalExecuteWorkflowRequest = @""@

# Execute workflow via external trigger

try {
    New-V2025ExternalExecuteWorkflow -Id $Id 
    
    # Below is a request that includes all optional parameters
    # New-V2025ExternalExecuteWorkflow -Id $Id -CreateExternalExecuteWorkflowRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025ExternalExecuteWorkflow"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-workflow
Create a new workflow with the desired trigger and steps specified in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-workflow)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CreateWorkflowRequest | [**CreateWorkflowRequest**](../models/create-workflow-request) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Workflow object | Workflow
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CreateWorkflowRequest = @"{name=Send Email, owner={type=IDENTITY, id=2c91808568c529c60168cca6f90c1313, name=William Wilson}, description=Send an email to the identity who's attributes changed., definition={start=Send Email Test, steps={Send Email={actionId=sp:send-email, attributes={body=This is a test, from=sailpoint@sailpoint.com, recipientId.$=$.identity.id, subject=test}, nextStep=success, selectResult=null, type=action}, success={type=success}}}, enabled=false, trigger={type=EVENT, attributes={id=idn:identity-attributes-changed, filter=$.changes[?(@.attribute == 'manager')]}}}"@

# Create workflow

try {
    $Result = ConvertFrom-JsonToCreateWorkflowRequest -Json $CreateWorkflowRequest
    New-V2025Workflow -CreateWorkflowRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025Workflow -CreateWorkflowRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025Workflow"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-workflow-external-trigger
Create OAuth client ID, client secret, and callback URL for use in an external trigger.  External triggers will need this information to generate an access token to authenticate to the callback URL and submit a trigger payload that will initiate the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-workflow-external-trigger)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow

### Return type
[**WorkflowOAuthClient**](../models/workflow-o-auth-client)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The OAuth Client object | WorkflowOAuthClient
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow

# Generate external trigger oauth client

try {
    New-V2025WorkflowExternalTrigger -Id $Id 
    
    # Below is a request that includes all optional parameters
    # New-V2025WorkflowExternalTrigger -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025WorkflowExternalTrigger"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-workflow
Delete a workflow.  **Enabled workflows cannot be deleted**.  They must first be disabled.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-workflow)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the Workflow

# Delete workflow by id

try {
    Remove-V2025Workflow -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025Workflow -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025Workflow"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-workflow
Get a single workflow by id.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-workflow)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow

# Get workflow by id

try {
    Get-V2025Workflow -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Workflow -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Workflow"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-workflow-execution
Use this API to get a single workflow execution. Workflow executions are available for up to 90 days before being archived. If you attempt to access a workflow execution that has been archived, you will receive a "404 Not Found" response.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-workflow-execution)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Workflow execution ID.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Workflow execution. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Workflow execution ID.

# Get workflow execution

try {
    Get-V2025WorkflowExecution -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025WorkflowExecution -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025WorkflowExecution"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-workflow-execution-history
Get a detailed history of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-workflow-execution-history)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow execution

### Return type
[**WorkflowExecutionEvent[]**](../models/workflow-execution-event)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow execution events for the given workflow execution | WorkflowExecutionEvent[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow execution

# Get workflow execution history

try {
    Get-V2025WorkflowExecutionHistory -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025WorkflowExecutionHistory -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025WorkflowExecutionHistory"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-workflow-executions
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

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Workflow ID.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq*

### Return type
[**WorkflowExecution[]**](../models/workflow-execution)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow executions for the specified workflow. | WorkflowExecution[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

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
    Get-V2025WorkflowExecutions -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025WorkflowExecutions -Id $Id -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025WorkflowExecutions"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-complete-workflow-library
This lists all triggers, actions, and operators in the library

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-complete-workflow-library)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**ListCompleteWorkflowLibrary200ResponseInner[]**](../models/list-complete-workflow-library200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow steps | ListCompleteWorkflowLibrary200ResponseInner[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List complete workflow library

try {
    Get-V2025CompleteWorkflowLibrary 
    
    # Below is a request that includes all optional parameters
    # Get-V2025CompleteWorkflowLibrary -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025CompleteWorkflowLibrary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-workflow-library-actions
This lists the workflow actions available to you.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-workflow-library-actions)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*

### Return type
[**WorkflowLibraryAction[]**](../models/workflow-library-action)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow actions | WorkflowLibraryAction[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

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
    Get-V2025WorkflowLibraryActions 
    
    # Below is a request that includes all optional parameters
    # Get-V2025WorkflowLibraryActions -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025WorkflowLibraryActions"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-workflow-library-operators
This lists the workflow operators available to you

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-workflow-library-operators)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**WorkflowLibraryOperator[]**](../models/workflow-library-operator)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow operators | WorkflowLibraryOperator[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# List workflow library operators

try {
    Get-V2025WorkflowLibraryOperators 
    
    # Below is a request that includes all optional parameters
    # Get-V2025WorkflowLibraryOperators  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025WorkflowLibraryOperators"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-workflow-library-triggers
This lists the workflow triggers available to you

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-workflow-library-triggers)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*

### Return type
[**WorkflowLibraryTrigger[]**](../models/workflow-library-trigger)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflow triggers | WorkflowLibraryTrigger[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'id eq "idn:identity-attributes-changed"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional)

# List workflow library triggers

try {
    Get-V2025WorkflowLibraryTriggers 
    
    # Below is a request that includes all optional parameters
    # Get-V2025WorkflowLibraryTriggers -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025WorkflowLibraryTriggers"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-workflows
List all workflows in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-workflows)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Workflow[]**](../models/workflow)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of workflows | Workflow[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# List workflows

try {
    Get-V2025Workflows 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Workflows  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Workflows"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-workflow
Partially update an existing Workflow using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-workflow)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the Workflow
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Workflow object | Workflow
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the Workflow
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | 
 

# Patch workflow

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2025Workflow -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025Workflow -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025Workflow"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-workflow
Perform a full update of a workflow.  The updated workflow object is returned in the response.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-workflow)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the Workflow
 Body  | WorkflowBody | [**WorkflowBody**](../models/workflow-body) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Workflow object | Workflow
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the Workflow
$WorkflowBody = @"{
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
    "attributes" : {
      "description" : "Triggered when an identity's manager attribute changes",
      "formDefinitionId" : "Admin_Access_Request_Form",
      "attributeToFilter" : "LifecycleState",
      "id" : "idn:identity-attributes-changed",
      "filter.$" : "$.changes[?(@.attribute == 'manager')]"
    },
    "type" : "EVENT"
  },
  "enabled" : false
}"@

# Update workflow

try {
    $Result = ConvertFrom-JsonToWorkflowBody -Json $WorkflowBody
    Send-V2025Workflow -Id $Id -WorkflowBody $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2025Workflow -Id $Id -WorkflowBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2025Workflow"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-external-execute-workflow
Validate a workflow with an "External Trigger" can receive input.  The response includes the input that the workflow received, which can be used to validate that the input is intact when it reaches the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/test-external-execute-workflow)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow
 Body  | TestExternalExecuteWorkflowRequest | [**TestExternalExecuteWorkflowRequest**](../models/test-external-execute-workflow-request) |   (optional) | 

### Return type
[**TestExternalExecuteWorkflow200Response**](../models/test-external-execute-workflow200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the test input | TestExternalExecuteWorkflow200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow
$TestExternalExecuteWorkflowRequest = @""@

# Test workflow via external trigger

try {
    Test-V2025ExternalExecuteWorkflow -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Test-V2025ExternalExecuteWorkflow -Id $Id -TestExternalExecuteWorkflowRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-V2025ExternalExecuteWorkflow"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-workflow
:::info

Workflow must be disabled in order to use this endpoint.

:::

Test a workflow with the provided input data.  The input data should resemble the input that the trigger will send the workflow.  See the [event trigger documentation](https://developer.sailpoint.com/idn/docs/event-triggers/available) for an example input for the trigger that initiates this workflow.

This endpoint will return an execution ID, which can be used to lookup more information about the execution using the `Get a Workflow Execution` endpoint.

**This will cause a live run of the workflow, which could result in unintended modifications to your IDN tenant.**


[API Spec](https://developer.sailpoint.com/docs/api/v2025/test-workflow)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the workflow
 Body  | TestWorkflowRequest | [**TestWorkflowRequest**](../models/test-workflow-request) | True  | 

### Return type
[**TestWorkflow200Response**](../models/test-workflow200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Workflow object | TestWorkflow200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow
$TestWorkflowRequest = @"{input={identity={id=ee769173319b41d19ccec6cea52f237b, name=john.doe, type=IDENTITY}, changes=[{attribute=department, oldValue=sales, newValue=marketing}, {attribute=manager, oldValue={id=ee769173319b41d19ccec6c235423237b, name=nice.guy, type=IDENTITY}, newValue={id=ee769173319b41d19ccec6c235423236c, name=mean.guy, type=IDENTITY}}, {attribute=email, oldValue=john.doe@hotmail.com, newValue=john.doe@gmail.com}]}}"@

# Test workflow by id

try {
    $Result = ConvertFrom-JsonToTestWorkflowRequest -Json $TestWorkflowRequest
    Test-V2025Workflow -Id $Id -TestWorkflowRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Test-V2025Workflow -Id $Id -TestWorkflowRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-V2025Workflow"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

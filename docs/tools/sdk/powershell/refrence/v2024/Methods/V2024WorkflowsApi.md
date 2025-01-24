---
id: workflows
title: Workflows
pagination_label: Workflows
sidebar_label: Workflows
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflows'] 
slug: /tools/sdk/powershell/v2024/methods/workflows
tags: ['SDK', 'Software Development Kit', 'Workflows']
---


# Workflows

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Suspend-V2024WorkflowExecution**](#cancel-workflow-execution) | **POST** `/workflow-executions/{id}/cancel` | Cancel Workflow Execution by ID
[**New-V2024ExternalExecuteWorkflow**](#create-external-execute-workflow) | **POST** `/workflows/execute/external/{id}` | Execute Workflow via External Trigger
[**New-V2024Workflow**](#create-workflow) | **POST** `/workflows` | Create Workflow
[**New-V2024WorkflowExternalTrigger**](#create-workflow-external-trigger) | **POST** `/workflows/{id}/external/oauth-clients` | Generate External Trigger OAuth Client
[**Remove-V2024Workflow**](#delete-workflow) | **DELETE** `/workflows/{id}` | Delete Workflow By Id
[**Get-V2024Workflow**](#get-workflow) | **GET** `/workflows/{id}` | Get Workflow By Id
[**Get-V2024WorkflowExecution**](#get-workflow-execution) | **GET** `/workflow-executions/{id}` | Get Workflow Execution
[**Get-V2024WorkflowExecutionHistory**](#get-workflow-execution-history) | **GET** `/workflow-executions/{id}/history` | Get Workflow Execution History
[**Get-V2024WorkflowExecutions**](#get-workflow-executions) | **GET** `/workflows/{id}/executions` | List Workflow Executions
[**Get-V2024CompleteWorkflowLibrary**](#list-complete-workflow-library) | **GET** `/workflow-library` | List Complete Workflow Library
[**Get-V2024WorkflowLibraryActions**](#list-workflow-library-actions) | **GET** `/workflow-library/actions` | List Workflow Library Actions
[**Get-V2024WorkflowLibraryOperators**](#list-workflow-library-operators) | **GET** `/workflow-library/operators` | List Workflow Library Operators
[**Get-V2024WorkflowLibraryTriggers**](#list-workflow-library-triggers) | **GET** `/workflow-library/triggers` | List Workflow Library Triggers
[**Get-V2024Workflows**](#list-workflows) | **GET** `/workflows` | List Workflows
[**Update-V2024Workflow**](#patch-workflow) | **PATCH** `/workflows/{id}` | Patch Workflow
[**Send-V2024Workflow**](#put-workflow) | **PUT** `/workflows/{id}` | Update Workflow
[**Test-V2024ExternalExecuteWorkflow**](#test-external-execute-workflow) | **POST** `/workflows/execute/external/{id}/test` | Test Workflow via External Trigger
[**Test-V2024Workflow**](#test-workflow) | **POST** `/workflows/{id}/test` | Test Workflow By Id


## cancel-workflow-execution

Use this API to cancel a running workflow execution.

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
# Cancel Workflow Execution by ID
try {
    Suspend-V2024WorkflowExecution-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Suspend-V2024WorkflowExecution -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-V2024WorkflowExecution"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## create-external-execute-workflow

This endpoint allows a service outside of IdentityNow to initiate a workflow that uses the "External Trigger" step.  The external service will invoke this endpoint with the input data it wants to send to the workflow in the body.

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
# Execute Workflow via External Trigger
try {
    New-V2024ExternalExecuteWorkflow-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # New-V2024ExternalExecuteWorkflow -V2024Id $Id -V2024CreateExternalExecuteWorkflowRequest $CreateExternalExecuteWorkflowRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024ExternalExecuteWorkflow"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## create-workflow

Create a new workflow with the desired trigger and steps specified in the request body.

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
# Create Workflow
try {
    $Result = ConvertFrom-JsonToCreateWorkflowRequest -Json $CreateWorkflowRequest
    New-V2024Workflow-V2024CreateWorkflowRequest $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024Workflow -V2024CreateWorkflowRequest $CreateWorkflowRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024Workflow"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## create-workflow-external-trigger

Create OAuth client ID, client secret, and callback URL for use in an external trigger.  External triggers will need this information to generate an access token to authenticate to the callback URL and submit a trigger payload that will initiate the workflow.

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
# Generate External Trigger OAuth Client
try {
    New-V2024WorkflowExternalTrigger-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # New-V2024WorkflowExternalTrigger -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024WorkflowExternalTrigger"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-workflow

Delete a workflow.  **Enabled workflows cannot be deleted**.  They must first be disabled.

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
# Delete Workflow By Id
try {
    Remove-V2024Workflow-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024Workflow -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024Workflow"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-workflow

Get a single workflow by id.

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
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the workflow
# Get Workflow By Id
try {
    Get-V2024Workflow-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024Workflow -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Workflow"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-workflow-execution

Use this API to get a single workflow execution. Workflow executions are available for up to 90 days before being archived. If you attempt to access a workflow execution that has been archived, you will receive a "404 Not Found" response.

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
# Get Workflow Execution
try {
    Get-V2024WorkflowExecution-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024WorkflowExecution -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024WorkflowExecution"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-workflow-execution-history

Get a detailed history of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

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
# Get Workflow Execution History
try {
    Get-V2024WorkflowExecutionHistory-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024WorkflowExecutionHistory -V2024Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024WorkflowExecutionHistory"
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

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Workflow ID.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
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
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'status eq "Failed"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional)
# List Workflow Executions
try {
    Get-V2024WorkflowExecutions-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024WorkflowExecutions -V2024Id $Id -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count -V2024Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024WorkflowExecutions"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-complete-workflow-library

This lists all triggers, actions, and operators in the library

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
# List Complete Workflow Library
try {
    Get-V2024CompleteWorkflowLibrary
    
    # Below is a request that includes all optional parameters
    # Get-V2024CompleteWorkflowLibrary -V2024Limit $Limit -V2024Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024CompleteWorkflowLibrary"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-workflow-library-actions

This lists the workflow actions available to you.

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
# List Workflow Library Actions
try {
    Get-V2024WorkflowLibraryActions
    
    # Below is a request that includes all optional parameters
    # Get-V2024WorkflowLibraryActions -V2024Limit $Limit -V2024Offset $Offset -V2024Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024WorkflowLibraryActions"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-workflow-library-operators

This lists the workflow operators available to you

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
# List Workflow Library Operators
try {
    Get-V2024WorkflowLibraryOperators
    
    # Below is a request that includes all optional parameters
    # Get-V2024WorkflowLibraryOperators  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024WorkflowLibraryOperators"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-workflow-library-triggers

This lists the workflow triggers available to you

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
# List Workflow Library Triggers
try {
    Get-V2024WorkflowLibraryTriggers
    
    # Below is a request that includes all optional parameters
    # Get-V2024WorkflowLibraryTriggers -V2024Limit $Limit -V2024Offset $Offset -V2024Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024WorkflowLibraryTriggers"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-workflows

List all workflows in the tenant.

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
# List Workflows
try {
    Get-V2024Workflows
    
    # Below is a request that includes all optional parameters
    # Get-V2024Workflows  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Workflows"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-workflow

Partially update an existing Workflow using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

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
 # JsonPatchOperation[] | 
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Patch Workflow
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024Workflow-V2024Id $Id -V2024JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024Workflow -V2024Id $Id -V2024JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024Workflow"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## put-workflow

Perform a full update of a workflow.  The updated workflow object is returned in the response.

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
      "attributeToFilter" : "LifecycleState",
      "id" : "idn:identity-attributes-changed",
      "filter.$" : "$.changes[?(@.attribute == 'manager')]"
    },
    "type" : "EVENT"
  },
  "enabled" : false
}"@
# Update Workflow
try {
    $Result = ConvertFrom-JsonToWorkflowBody -Json $WorkflowBody
    Send-V2024Workflow-V2024Id $Id -V2024WorkflowBody $Result
    
    # Below is a request that includes all optional parameters
    # Send-V2024Workflow -V2024Id $Id -V2024WorkflowBody $WorkflowBody  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024Workflow"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## test-external-execute-workflow

Validate a workflow with an "External Trigger" can receive input.  The response includes the input that the workflow received, which can be used to validate that the input is intact when it reaches the workflow.

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
# Test Workflow via External Trigger
try {
    Test-V2024ExternalExecuteWorkflow-V2024Id $Id 
    
    # Below is a request that includes all optional parameters
    # Test-V2024ExternalExecuteWorkflow -V2024Id $Id -V2024TestExternalExecuteWorkflowRequest $TestExternalExecuteWorkflowRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-V2024ExternalExecuteWorkflow"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## test-workflow

Test a workflow with the provided input data.  The input data should resemble the input that the trigger will send the workflow.  See the [event trigger documentation](https://developer.sailpoint.com/idn/docs/event-triggers/available) for an example input for the trigger that initiates this workflow.
This endpoint will return an execution ID, which can be used to lookup more information about the execution using the `Get a Workflow Execution` endpoint.
**This will cause a live run of the workflow, which could result in unintended modifications to your IDN tenant.**

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
# Test Workflow By Id
try {
    $Result = ConvertFrom-JsonToTestWorkflowRequest -Json $TestWorkflowRequest
    Test-V2024Workflow-V2024Id $Id -V2024TestWorkflowRequest $Result
    
    # Below is a request that includes all optional parameters
    # Test-V2024Workflow -V2024Id $Id -V2024TestWorkflowRequest $TestWorkflowRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-V2024Workflow"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 



---
id: workflows
title: Workflows
pagination_label: Workflows
sidebar_label: Workflows
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workflows', 'Workflows'] 
slug: /tools/sdk/python/v3/methods/workflows
tags: ['SDK', 'Software Development Kit', 'Workflows', 'Workflows']
---

# sailpoint.v3.WorkflowsApi
  Workflows allow administrators to create custom automation scripts directly within Identity Security Cloud.  These automation scripts respond to [event triggers](https://developer.sailpoint.com/docs/extensibility/event-triggers/#how-to-get-started-with-event-triggers) and perform a series of actions to perform tasks that are either too cumbersome or not available in the Identity Security Cloud UI.  Workflows can be configured via a graphical user interface within Identity Security Cloud, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-workflow-execution**](#cancel-workflow-execution) | **POST** `/workflow-executions/{id}/cancel` | Cancel workflow execution by id
[**create-external-execute-workflow**](#create-external-execute-workflow) | **POST** `/workflows/execute/external/{id}` | Execute workflow via external trigger
[**create-workflow**](#create-workflow) | **POST** `/workflows` | Create workflow
[**create-workflow-external-trigger**](#create-workflow-external-trigger) | **POST** `/workflows/{id}/external/oauth-clients` | Generate external trigger oauth client
[**delete-workflow**](#delete-workflow) | **DELETE** `/workflows/{id}` | Delete workflow by id
[**get-workflow**](#get-workflow) | **GET** `/workflows/{id}` | Get workflow by id
[**get-workflow-execution**](#get-workflow-execution) | **GET** `/workflow-executions/{id}` | Get workflow execution
[**get-workflow-execution-history**](#get-workflow-execution-history) | **GET** `/workflow-executions/{id}/history` | Get workflow execution history
[**get-workflow-executions**](#get-workflow-executions) | **GET** `/workflows/{id}/executions` | List workflow executions
[**list-complete-workflow-library**](#list-complete-workflow-library) | **GET** `/workflow-library` | List complete workflow library
[**list-workflow-library-actions**](#list-workflow-library-actions) | **GET** `/workflow-library/actions` | List workflow library actions
[**list-workflow-library-operators**](#list-workflow-library-operators) | **GET** `/workflow-library/operators` | List workflow library operators
[**list-workflow-library-triggers**](#list-workflow-library-triggers) | **GET** `/workflow-library/triggers` | List workflow library triggers
[**list-workflows**](#list-workflows) | **GET** `/workflows` | List workflows
[**patch-workflow**](#patch-workflow) | **PATCH** `/workflows/{id}` | Patch workflow
[**put-workflow**](#put-workflow) | **PUT** `/workflows/{id}` | Update workflow
[**test-external-execute-workflow**](#test-external-execute-workflow) | **POST** `/workflows/execute/external/{id}/test` | Test workflow via external trigger
[**test-workflow**](#test-workflow) | **POST** `/workflows/{id}/test` | Test workflow by id


## cancel-workflow-execution
Cancel workflow execution by id
Use this API to cancel a running workflow execution.

[API Spec](https://developer.sailpoint.com/docs/api/v3/cancel-workflow-execution)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The workflow execution ID

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | The workflow execution ID # str | The workflow execution ID

    try:
        # Cancel workflow execution by id
        
        WorkflowsApi(api_client).cancel_workflow_execution(id=id)
        # Below is a request that includes all optional parameters
        # WorkflowsApi(api_client).cancel_workflow_execution(id)
    except Exception as e:
        print("Exception when calling WorkflowsApi->cancel_workflow_execution: %s\n" % e)
```



[[Back to top]](#) 

## create-external-execute-workflow
Execute workflow via external trigger
This endpoint allows a service outside of IdentityNow to initiate a workflow that uses the "External Trigger" step.  The external service will invoke this endpoint with the input data it wants to send to the workflow in the body.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-external-execute-workflow)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow
 Body  | create_external_execute_workflow_request | [**CreateExternalExecuteWorkflowRequest**](../models/create-external-execute-workflow-request) |   (optional) | 

### Return type
[**CreateExternalExecuteWorkflow200Response**](../models/create-external-execute-workflow200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Workflow object | CreateExternalExecuteWorkflow200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.create_external_execute_workflow200_response import CreateExternalExecuteWorkflow200Response
from sailpoint.v3.models.create_external_execute_workflow_request import CreateExternalExecuteWorkflowRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow # str | Id of the workflow
    create_external_execute_workflow_request = '''sailpoint.v3.CreateExternalExecuteWorkflowRequest()''' # CreateExternalExecuteWorkflowRequest |  (optional)

    try:
        # Execute workflow via external trigger
        
        results = WorkflowsApi(api_client).create_external_execute_workflow(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).create_external_execute_workflow(id, new_create_external_execute_workflow_request)
        print("The response of WorkflowsApi->create_external_execute_workflow:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->create_external_execute_workflow: %s\n" % e)
```



[[Back to top]](#) 

## create-workflow
Create workflow
Create a new workflow with the desired trigger and steps specified in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-workflow)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | create_workflow_request | [**CreateWorkflowRequest**](../models/create-workflow-request) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Workflow object | Workflow |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.create_workflow_request import CreateWorkflowRequest
from sailpoint.v3.models.workflow import Workflow
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    create_workflow_request = '''{name=Send Email, owner={type=IDENTITY, id=2c91808568c529c60168cca6f90c1313, name=William Wilson}, description=Send an email to the identity who's attributes changed., definition={start=Send Email Test, steps={Send Email={actionId=sp:send-email, attributes={body=This is a test, from=sailpoint@sailpoint.com, recipientId.$=$.identity.id, subject=test}, nextStep=success, selectResult=null, type=action}, success={type=success}}}, enabled=false, trigger={type=EVENT, attributes={id=idn:identity-attributes-changed, filter=$.changes[?(@.attribute == 'manager')]}}}''' # CreateWorkflowRequest | 

    try:
        # Create workflow
        new_create_workflow_request = CreateWorkflowRequest.from_json(create_workflow_request)
        results = WorkflowsApi(api_client).create_workflow(create_workflow_request=new_create_workflow_request)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).create_workflow(new_create_workflow_request)
        print("The response of WorkflowsApi->create_workflow:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->create_workflow: %s\n" % e)
```



[[Back to top]](#) 

## create-workflow-external-trigger
Generate external trigger oauth client
Create OAuth client ID, client secret, and callback URL for use in an external trigger.  External triggers will need this information to generate an access token to authenticate to the callback URL and submit a trigger payload that will initiate the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-workflow-external-trigger)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow

### Return type
[**WorkflowOAuthClient**](../models/workflow-o-auth-client)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The OAuth Client object | WorkflowOAuthClient |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.workflow_o_auth_client import WorkflowOAuthClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow # str | Id of the workflow

    try:
        # Generate external trigger oauth client
        
        results = WorkflowsApi(api_client).create_workflow_external_trigger(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).create_workflow_external_trigger(id)
        print("The response of WorkflowsApi->create_workflow_external_trigger:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->create_workflow_external_trigger: %s\n" % e)
```



[[Back to top]](#) 

## delete-workflow
Delete workflow by id
Delete a workflow.  **Enabled workflows cannot be deleted**.  They must first be disabled.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-workflow)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the Workflow

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the Workflow # str | Id of the Workflow

    try:
        # Delete workflow by id
        
        WorkflowsApi(api_client).delete_workflow(id=id)
        # Below is a request that includes all optional parameters
        # WorkflowsApi(api_client).delete_workflow(id)
    except Exception as e:
        print("Exception when calling WorkflowsApi->delete_workflow: %s\n" % e)
```



[[Back to top]](#) 

## get-workflow
Get workflow by id
Get a single workflow by id.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-workflow)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow
  Query | workflow_metrics | **bool** |   (optional) (default to True) | disable workflow metrics

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The workflow object | Workflow |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.workflow import Workflow
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow # str | Id of the workflow
    workflow_metrics = True # bool | disable workflow metrics (optional) (default to True) # bool | disable workflow metrics (optional) (default to True)

    try:
        # Get workflow by id
        
        results = WorkflowsApi(api_client).get_workflow(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).get_workflow(id, workflow_metrics)
        print("The response of WorkflowsApi->get_workflow:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->get_workflow: %s\n" % e)
```



[[Back to top]](#) 

## get-workflow-execution
Get workflow execution
Get a single workflow execution. Workflow executions are available for up to 90 days before being archived. If you attempt to access a workflow execution that has been archived, you will receive a "404 Not Found" response.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-workflow-execution)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Workflow execution ID.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Workflow execution. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Workflow execution ID. # str | Workflow execution ID.

    try:
        # Get workflow execution
        
        results = WorkflowsApi(api_client).get_workflow_execution(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).get_workflow_execution(id)
        print("The response of WorkflowsApi->get_workflow_execution:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->get_workflow_execution: %s\n" % e)
```



[[Back to top]](#) 

## get-workflow-execution-history
Get workflow execution history
Get a detailed history of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-workflow-execution-history)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow execution

### Return type
[**List[WorkflowExecutionEvent]**](../models/workflow-execution-event)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow execution events for the given workflow execution | List[WorkflowExecutionEvent] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.workflow_execution_event import WorkflowExecutionEvent
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow execution # str | Id of the workflow execution

    try:
        # Get workflow execution history
        
        results = WorkflowsApi(api_client).get_workflow_execution_history(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).get_workflow_execution_history(id)
        print("The response of WorkflowsApi->get_workflow_execution_history:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->get_workflow_execution_history: %s\n" % e)
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

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-workflow-executions)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Workflow ID.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq*

### Return type
[**List[WorkflowExecution]**](../models/workflow-execution)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow executions for the specified workflow. | List[WorkflowExecution] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.workflow_execution import WorkflowExecution
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Workflow ID. # str | Workflow ID.
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters = 'status eq \"Failed\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional)

    try:
        # List workflow executions
        
        results = WorkflowsApi(api_client).get_workflow_executions(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).get_workflow_executions(id, limit, offset, filters)
        print("The response of WorkflowsApi->get_workflow_executions:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->get_workflow_executions: %s\n" % e)
```



[[Back to top]](#) 

## list-complete-workflow-library
List complete workflow library
This lists all triggers, actions, and operators in the library

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-complete-workflow-library)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[ListCompleteWorkflowLibrary200ResponseInner]**](../models/list-complete-workflow-library200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow steps | List[ListCompleteWorkflowLibrary200ResponseInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.list_complete_workflow_library200_response_inner import ListCompleteWorkflowLibrary200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List complete workflow library
        
        results = WorkflowsApi(api_client).list_complete_workflow_library()
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).list_complete_workflow_library(limit, offset)
        print("The response of WorkflowsApi->list_complete_workflow_library:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->list_complete_workflow_library: %s\n" % e)
```



[[Back to top]](#) 

## list-workflow-library-actions
List workflow library actions
This lists the workflow actions available to you.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-workflow-library-actions)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*

### Return type
[**List[WorkflowLibraryAction]**](../models/workflow-library-action)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow actions | List[WorkflowLibraryAction] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.workflow_library_action import WorkflowLibraryAction
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters = 'id eq \"sp:create-campaign\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional)

    try:
        # List workflow library actions
        
        results = WorkflowsApi(api_client).list_workflow_library_actions()
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).list_workflow_library_actions(limit, offset, filters)
        print("The response of WorkflowsApi->list_workflow_library_actions:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->list_workflow_library_actions: %s\n" % e)
```



[[Back to top]](#) 

## list-workflow-library-operators
List workflow library operators
This lists the workflow operators available to you

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-workflow-library-operators)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[WorkflowLibraryOperator]**](../models/workflow-library-operator)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow operators | List[WorkflowLibraryOperator] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.workflow_library_operator import WorkflowLibraryOperator
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List workflow library operators
        
        results = WorkflowsApi(api_client).list_workflow_library_operators()
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).list_workflow_library_operators()
        print("The response of WorkflowsApi->list_workflow_library_operators:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->list_workflow_library_operators: %s\n" % e)
```



[[Back to top]](#) 

## list-workflow-library-triggers
List workflow library triggers
This lists the workflow triggers available to you

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-workflow-library-triggers)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*

### Return type
[**List[WorkflowLibraryTrigger]**](../models/workflow-library-trigger)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow triggers | List[WorkflowLibraryTrigger] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.workflow_library_trigger import WorkflowLibraryTrigger
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters = 'id eq \"idn:identity-attributes-changed\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional)

    try:
        # List workflow library triggers
        
        results = WorkflowsApi(api_client).list_workflow_library_triggers()
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).list_workflow_library_triggers(limit, offset, filters)
        print("The response of WorkflowsApi->list_workflow_library_triggers:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->list_workflow_library_triggers: %s\n" % e)
```



[[Back to top]](#) 

## list-workflows
List workflows
List all workflows in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-workflows)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | trigger_id | **str** |   (optional) | Trigger ID
  Query | connector_instance_id | **str** |   (optional) | Connector Instance ID
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Workflow]**](../models/workflow)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflows | List[Workflow] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.workflow import Workflow
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    trigger_id = 'idn:identity-created' # str | Trigger ID (optional) # str | Trigger ID (optional)
    connector_instance_id = '28541fec-bb81-4ad4-88ef-0f7d213adcad' # str | Connector Instance ID (optional) # str | Connector Instance ID (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List workflows
        
        results = WorkflowsApi(api_client).list_workflows()
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).list_workflows(trigger_id, connector_instance_id, limit, offset)
        print("The response of WorkflowsApi->list_workflows:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->list_workflows: %s\n" % e)
```



[[Back to top]](#) 

## patch-workflow
Patch workflow
Partially update an existing Workflow using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

[API Spec](https://developer.sailpoint.com/docs/api/v3/patch-workflow)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the Workflow
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Workflow object | Workflow |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.json_patch_operation import JsonPatchOperation
from sailpoint.v3.models.workflow import Workflow
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the Workflow # str | Id of the Workflow
    json_patch_operation = '''[{op=replace, path=/name, value=Send Email}, {op=replace, path=/owner, value={type=IDENTITY, id=2c91808568c529c60168cca6f90c1313, name=William Wilson}}, {op=replace, path=/description, value=Send an email to the identity who's attributes changed.}, {op=replace, path=/enabled, value=false}, {op=replace, path=/definition, value={start=Send Email Test, steps={Send Email={actionId=sp:send-email, attributes={body=This is a test, from=sailpoint@sailpoint.com, recipientId.$=$.identity.id, subject=test}, nextStep=success, selectResult=null, type=action}, success={type=success}}}}, {op=replace, path=/trigger, value={type=EVENT, attributes={id=idn:identity-attributes-changed}}}]''' # List[JsonPatchOperation] | 

    try:
        # Patch workflow
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = WorkflowsApi(api_client).patch_workflow(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).patch_workflow(id, new_json_patch_operation)
        print("The response of WorkflowsApi->patch_workflow:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->patch_workflow: %s\n" % e)
```



[[Back to top]](#) 

## put-workflow
Update workflow
Perform a full update of a workflow.  The updated workflow object is returned in the response.

[API Spec](https://developer.sailpoint.com/docs/api/v3/put-workflow)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the Workflow
 Body  | workflow_body | [**WorkflowBody**](../models/workflow-body) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Workflow object | Workflow |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.workflow import Workflow
from sailpoint.v3.models.workflow_body import WorkflowBody
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the Workflow # str | Id of the Workflow
    workflow_body = '''{
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
        }''' # WorkflowBody | 

    try:
        # Update workflow
        new_workflow_body = WorkflowBody.from_json(workflow_body)
        results = WorkflowsApi(api_client).put_workflow(id=id, workflow_body=new_workflow_body)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).put_workflow(id, new_workflow_body)
        print("The response of WorkflowsApi->put_workflow:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->put_workflow: %s\n" % e)
```



[[Back to top]](#) 

## test-external-execute-workflow
Test workflow via external trigger
Validate a workflow with an "External Trigger" can receive input.  The response includes the input that the workflow received, which can be used to validate that the input is intact when it reaches the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v3/test-external-execute-workflow)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow
 Body  | test_external_execute_workflow_request | [**TestExternalExecuteWorkflowRequest**](../models/test-external-execute-workflow-request) |   (optional) | 

### Return type
[**TestExternalExecuteWorkflow200Response**](../models/test-external-execute-workflow200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the test input | TestExternalExecuteWorkflow200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.test_external_execute_workflow200_response import TestExternalExecuteWorkflow200Response
from sailpoint.v3.models.test_external_execute_workflow_request import TestExternalExecuteWorkflowRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow # str | Id of the workflow
    test_external_execute_workflow_request = '''sailpoint.v3.TestExternalExecuteWorkflowRequest()''' # TestExternalExecuteWorkflowRequest |  (optional)

    try:
        # Test workflow via external trigger
        
        results = WorkflowsApi(api_client).test_external_execute_workflow(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).test_external_execute_workflow(id, new_test_external_execute_workflow_request)
        print("The response of WorkflowsApi->test_external_execute_workflow:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->test_external_execute_workflow: %s\n" % e)
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


[API Spec](https://developer.sailpoint.com/docs/api/v3/test-workflow)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow
 Body  | test_workflow_request | [**TestWorkflowRequest**](../models/test-workflow-request) | True  | 

### Return type
[**TestWorkflow200Response**](../models/test-workflow200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Workflow object | TestWorkflow200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.workflows_api import WorkflowsApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.test_workflow200_response import TestWorkflow200Response
from sailpoint.v3.models.test_workflow_request import TestWorkflowRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow # str | Id of the workflow
    test_workflow_request = '''{input={identity={id=ee769173319b41d19ccec6cea52f237b, name=john.doe, type=IDENTITY}, changes=[{attribute=department, oldValue=sales, newValue=marketing}, {attribute=manager, oldValue={id=ee769173319b41d19ccec6c235423237b, name=nice.guy, type=IDENTITY}, newValue={id=ee769173319b41d19ccec6c235423236c, name=mean.guy, type=IDENTITY}}, {attribute=email, oldValue=john.doe@hotmail.com, newValue=john.doe@gmail.com}]}}''' # TestWorkflowRequest | 

    try:
        # Test workflow by id
        new_test_workflow_request = TestWorkflowRequest.from_json(test_workflow_request)
        results = WorkflowsApi(api_client).test_workflow(id=id, test_workflow_request=new_test_workflow_request)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).test_workflow(id, new_test_workflow_request)
        print("The response of WorkflowsApi->test_workflow:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->test_workflow: %s\n" % e)
```



[[Back to top]](#) 




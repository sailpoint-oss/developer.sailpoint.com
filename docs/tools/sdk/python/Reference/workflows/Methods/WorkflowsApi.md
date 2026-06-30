---
id: workflows
title: Workflows
pagination_label: Workflows
sidebar_label: Workflows
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workflows', 'Workflows'] 
slug: /tools/sdk/python/workflows/methods/workflows
tags: ['SDK', 'Software Development Kit', 'Workflows', 'Workflows']
---

# sailpoint.workflows.WorkflowsApi
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

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The workflow execution ID

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | The workflow execution ID # str | The workflow execution ID

    try:
        # Cancel workflow execution by id
        
        WorkflowsApi(api_client).cancel_workflow_execution_v1(id=id)
        # Below is a request that includes all optional parameters
        # WorkflowsApi(api_client).cancel_workflow_execution_v1(id)
    except Exception as e:
        print("Exception when calling WorkflowsApi->cancel_workflow_execution_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-external-execute-workflow-v1
Execute workflow via external trigger
This endpoint allows a service outside of IdentityNow to initiate a workflow that uses the "External Trigger" step.  The external service will invoke this endpoint with the input data it wants to send to the workflow in the body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-external-execute-workflow-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow
 Body  | create_external_execute_workflow_v1_request | [**CreateExternalExecuteWorkflowV1Request**](../models/create-external-execute-workflow-v1-request) |   (optional) | 

### Return type
[**CreateExternalExecuteWorkflowV1200Response**](../models/create-external-execute-workflow-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Workflow object | CreateExternalExecuteWorkflowV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.create_external_execute_workflow_v1200_response import CreateExternalExecuteWorkflowV1200Response
from sailpoint.workflows.models.create_external_execute_workflow_v1_request import CreateExternalExecuteWorkflowV1Request
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow # str | Id of the workflow
    create_external_execute_workflow_v1_request = '''sailpoint.workflows.CreateExternalExecuteWorkflowV1Request()''' # CreateExternalExecuteWorkflowV1Request |  (optional)

    try:
        # Execute workflow via external trigger
        
        results = WorkflowsApi(api_client).create_external_execute_workflow_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).create_external_execute_workflow_v1(id, new_create_external_execute_workflow_v1_request)
        print("The response of WorkflowsApi->create_external_execute_workflow_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->create_external_execute_workflow_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-workflow-external-trigger-v1
Generate external trigger oauth client
Create OAuth client ID, client secret, and callback URL for use in an external trigger.  External triggers will need this information to generate an access token to authenticate to the callback URL and submit a trigger payload that will initiate the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-workflow-external-trigger-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow

### Return type
[**Workflowoauthclient**](../models/workflowoauthclient)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The OAuth Client object | Workflowoauthclient |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.workflowoauthclient import Workflowoauthclient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow # str | Id of the workflow

    try:
        # Generate external trigger oauth client
        
        results = WorkflowsApi(api_client).create_workflow_external_trigger_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).create_workflow_external_trigger_v1(id)
        print("The response of WorkflowsApi->create_workflow_external_trigger_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->create_workflow_external_trigger_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-workflow-v1
Create workflow
Create a new workflow with the desired trigger and steps specified in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-workflow-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | create_workflow_v1_request | [**CreateWorkflowV1Request**](../models/create-workflow-v1-request) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Workflow object | Workflow |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.create_workflow_v1_request import CreateWorkflowV1Request
from sailpoint.workflows.models.workflow import Workflow
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    create_workflow_v1_request = '''{"name":"Send Email","owner":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"William Wilson"},"description":"Send an email to the identity who's attributes changed.","definition":{"start":"Send Email Test","steps":{"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"action"},"success":{"type":"success"}}},"enabled":false,"trigger":{"type":"EVENT","attributes":{"id":"idn:identity-attributes-changed","filter":"$.changes[?(@.attribute == 'manager')]"}}}''' # CreateWorkflowV1Request | 

    try:
        # Create workflow
        new_create_workflow_v1_request = CreateWorkflowV1Request.from_json(create_workflow_v1_request)
        results = WorkflowsApi(api_client).create_workflow_v1(create_workflow_v1_request=new_create_workflow_v1_request)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).create_workflow_v1(new_create_workflow_v1_request)
        print("The response of WorkflowsApi->create_workflow_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->create_workflow_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-workflow-v1
Delete workflow by id
Delete a workflow.  **Enabled workflows cannot be deleted**.  They must first be disabled.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-workflow-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the Workflow # str | Id of the Workflow

    try:
        # Delete workflow by id
        
        WorkflowsApi(api_client).delete_workflow_v1(id=id)
        # Below is a request that includes all optional parameters
        # WorkflowsApi(api_client).delete_workflow_v1(id)
    except Exception as e:
        print("Exception when calling WorkflowsApi->delete_workflow_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-workflow-execution-history-v1
Get workflow execution history
Get a detailed history of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-history-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow execution

### Return type
[**List[Workflowexecutionevent]**](../models/workflowexecutionevent)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow execution events for the given workflow execution | List[Workflowexecutionevent] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.workflowexecutionevent import Workflowexecutionevent
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow execution # str | Id of the workflow execution

    try:
        # Get workflow execution history
        
        results = WorkflowsApi(api_client).get_workflow_execution_history_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).get_workflow_execution_history_v1(id)
        print("The response of WorkflowsApi->get_workflow_execution_history_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->get_workflow_execution_history_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-workflow-execution-history-v2
Get updated workflow execution history
Gets a workflow execution history, trigger input, and workflow definition of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-history-v2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow execution

### Return type
[**Workflowexecutionhistory**](../models/workflowexecutionhistory)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow workflow definition, execution events, and workflow trigger for the given workflow execution | Workflowexecutionhistory |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.workflowexecutionhistory import Workflowexecutionhistory
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow execution # str | Id of the workflow execution

    try:
        # Get updated workflow execution history
        
        results = WorkflowsApi(api_client).get_workflow_execution_history_v2(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).get_workflow_execution_history_v2(id)
        print("The response of WorkflowsApi->get_workflow_execution_history_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->get_workflow_execution_history_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-workflow-execution-v1
Get workflow execution
Use this API to get a single workflow execution. Workflow executions are available for up to 90 days before being archived. If you attempt to access a workflow execution that has been archived, you will receive a "404 Not Found" response.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-execution-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Workflow execution ID.

### Return type
[**List[Workflowexecution]**](../models/workflowexecution)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Workflow execution. | List[Workflowexecution] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.workflowexecution import Workflowexecution
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Workflow execution ID. # str | Workflow execution ID.

    try:
        # Get workflow execution
        
        results = WorkflowsApi(api_client).get_workflow_execution_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).get_workflow_execution_v1(id)
        print("The response of WorkflowsApi->get_workflow_execution_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->get_workflow_execution_v1: %s\n" % e)
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

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Workflow ID.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq*

### Return type
[**List[Workflowexecution]**](../models/workflowexecution)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow executions for the specified workflow. | List[Workflowexecution] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.workflowexecution import Workflowexecution
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Workflow ID. # str | Workflow ID.
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters = 'status eq \"Failed\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **start_time**: *eq, lt, le, gt, ge*  **status**: *eq* (optional)

    try:
        # List workflow executions
        
        results = WorkflowsApi(api_client).get_workflow_executions_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).get_workflow_executions_v1(id, limit, offset, filters)
        print("The response of WorkflowsApi->get_workflow_executions_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->get_workflow_executions_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-workflow-v1
Get workflow by id
Get a single workflow by id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-workflow-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The workflow object | Workflow |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.workflow import Workflow
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow # str | Id of the workflow

    try:
        # Get workflow by id
        
        results = WorkflowsApi(api_client).get_workflow_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).get_workflow_v1(id)
        print("The response of WorkflowsApi->get_workflow_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->get_workflow_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-complete-workflow-library-v1
List complete workflow library
This lists all triggers, actions, and operators in the library

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-complete-workflow-library-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[ListCompleteWorkflowLibraryV1200ResponseInner]**](../models/list-complete-workflow-library-v1200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow steps | List[ListCompleteWorkflowLibraryV1200ResponseInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.list_complete_workflow_library_v1200_response_inner import ListCompleteWorkflowLibraryV1200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List complete workflow library
        
        results = WorkflowsApi(api_client).list_complete_workflow_library_v1()
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).list_complete_workflow_library_v1(limit, offset)
        print("The response of WorkflowsApi->list_complete_workflow_library_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->list_complete_workflow_library_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-workflow-library-actions-v1
List workflow library actions
This lists the workflow actions available to you.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-actions-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*

### Return type
[**List[Workflowlibraryaction]**](../models/workflowlibraryaction)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow actions | List[Workflowlibraryaction] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.workflowlibraryaction import Workflowlibraryaction
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters = 'id eq \"sp:create-campaign\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional)

    try:
        # List workflow library actions
        
        results = WorkflowsApi(api_client).list_workflow_library_actions_v1()
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).list_workflow_library_actions_v1(limit, offset, filters)
        print("The response of WorkflowsApi->list_workflow_library_actions_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->list_workflow_library_actions_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-workflow-library-operators-v1
List workflow library operators
This lists the workflow operators available to you

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-operators-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[Workflowlibraryoperator]**](../models/workflowlibraryoperator)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow operators | List[Workflowlibraryoperator] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.workflowlibraryoperator import Workflowlibraryoperator
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List workflow library operators
        
        results = WorkflowsApi(api_client).list_workflow_library_operators_v1()
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).list_workflow_library_operators_v1()
        print("The response of WorkflowsApi->list_workflow_library_operators_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->list_workflow_library_operators_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-workflow-library-triggers-v1
List workflow library triggers
This lists the workflow triggers available to you

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflow-library-triggers-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq*

### Return type
[**List[Workflowlibrarytrigger]**](../models/workflowlibrarytrigger)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflow triggers | List[Workflowlibrarytrigger] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.workflowlibrarytrigger import Workflowlibrarytrigger
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters = 'id eq \"idn:identity-attributes-changed\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **type**: *eq* (optional)

    try:
        # List workflow library triggers
        
        results = WorkflowsApi(api_client).list_workflow_library_triggers_v1()
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).list_workflow_library_triggers_v1(limit, offset, filters)
        print("The response of WorkflowsApi->list_workflow_library_triggers_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->list_workflow_library_triggers_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-workflows-v1
List workflows
List all workflows in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-workflows-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[Workflow]**](../models/workflow)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of workflows | List[Workflow] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.workflow import Workflow
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List workflows
        
        results = WorkflowsApi(api_client).list_workflows_v1()
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).list_workflows_v1()
        print("The response of WorkflowsApi->list_workflows_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->list_workflows_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-workflow-v1
Patch workflow
Partially update an existing Workflow using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-workflow-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the Workflow
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Workflow object | Workflow |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.workflows.models.workflow import Workflow
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the Workflow # str | Id of the Workflow
    jsonpatchoperation = '''[{"op":"replace","path":"/name","value":"Send Email"},{"op":"replace","path":"/owner","value":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"William Wilson"}},{"op":"replace","path":"/description","value":"Send an email to the identity who's attributes changed."},{"op":"replace","path":"/enabled","value":false},{"op":"replace","path":"/definition","value":{"start":"Send Email Test","steps":{"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"action"},"success":{"type":"success"}}}},{"op":"replace","path":"/trigger","value":{"type":"EVENT","attributes":{"id":"idn:identity-attributes-changed"}}}]''' # List[Jsonpatchoperation] | 

    try:
        # Patch workflow
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = WorkflowsApi(api_client).patch_workflow_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).patch_workflow_v1(id, new_jsonpatchoperation)
        print("The response of WorkflowsApi->patch_workflow_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->patch_workflow_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-workflow-v1
Update workflow
Perform a full update of a workflow.  The updated workflow object is returned in the response.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-workflow-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the Workflow
 Body  | workflowbody | [**Workflowbody**](../models/workflowbody) | True  | 

### Return type
[**Workflow**](../models/workflow)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Workflow object | Workflow |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.workflow import Workflow
from sailpoint.workflows.models.workflowbody import Workflowbody
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the Workflow # str | Id of the Workflow
    workflowbody = '''sailpoint.workflows.Workflowbody()''' # Workflowbody | 

    try:
        # Update workflow
        new_workflowbody = Workflowbody.from_json(workflowbody)
        results = WorkflowsApi(api_client).put_workflow_v1(id=id, workflowbody=new_workflowbody)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).put_workflow_v1(id, new_workflowbody)
        print("The response of WorkflowsApi->put_workflow_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->put_workflow_v1: %s\n" % e)
```



[[Back to top]](#) 

## test-external-execute-workflow-v1
Test workflow via external trigger
Validate a workflow with an "External Trigger" can receive input.  The response includes the input that the workflow received, which can be used to validate that the input is intact when it reaches the workflow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-external-execute-workflow-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow
 Body  | test_external_execute_workflow_v1_request | [**TestExternalExecuteWorkflowV1Request**](../models/test-external-execute-workflow-v1-request) |   (optional) | 

### Return type
[**TestExternalExecuteWorkflowV1200Response**](../models/test-external-execute-workflow-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the test input | TestExternalExecuteWorkflowV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.test_external_execute_workflow_v1200_response import TestExternalExecuteWorkflowV1200Response
from sailpoint.workflows.models.test_external_execute_workflow_v1_request import TestExternalExecuteWorkflowV1Request
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow # str | Id of the workflow
    test_external_execute_workflow_v1_request = '''sailpoint.workflows.TestExternalExecuteWorkflowV1Request()''' # TestExternalExecuteWorkflowV1Request |  (optional)

    try:
        # Test workflow via external trigger
        
        results = WorkflowsApi(api_client).test_external_execute_workflow_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).test_external_execute_workflow_v1(id, new_test_external_execute_workflow_v1_request)
        print("The response of WorkflowsApi->test_external_execute_workflow_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->test_external_execute_workflow_v1: %s\n" % e)
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

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the workflow
 Body  | test_workflow_v1_request | [**TestWorkflowV1Request**](../models/test-workflow-v1-request) | True  | 

### Return type
[**TestWorkflowV1200Response**](../models/test-workflow-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Workflow object | TestWorkflowV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkflowsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkflowsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.workflows.api.workflows_api import WorkflowsApi
from sailpoint.workflows.api_client import ApiClient
from sailpoint.workflows.models.test_workflow_v1200_response import TestWorkflowV1200Response
from sailpoint.workflows.models.test_workflow_v1_request import TestWorkflowV1Request
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the workflow # str | Id of the workflow
    test_workflow_v1_request = '''{"input":{"identity":{"id":"ee769173319b41d19ccec6cea52f237b","name":"john.doe","type":"IDENTITY"},"changes":[{"attribute":"department","oldValue":"sales","newValue":"marketing"},{"attribute":"manager","oldValue":{"id":"ee769173319b41d19ccec6c235423237b","name":"nice.guy","type":"IDENTITY"},"newValue":{"id":"ee769173319b41d19ccec6c235423236c","name":"mean.guy","type":"IDENTITY"}},{"attribute":"email","oldValue":"john.doe@hotmail.com","newValue":"john.doe@gmail.com"}]}}''' # TestWorkflowV1Request | 

    try:
        # Test workflow by id
        new_test_workflow_v1_request = TestWorkflowV1Request.from_json(test_workflow_v1_request)
        results = WorkflowsApi(api_client).test_workflow_v1(id=id, test_workflow_v1_request=new_test_workflow_v1_request)
        # Below is a request that includes all optional parameters
        # results = WorkflowsApi(api_client).test_workflow_v1(id, new_test_workflow_v1_request)
        print("The response of WorkflowsApi->test_workflow_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkflowsApi->test_workflow_v1: %s\n" % e)
```



[[Back to top]](#) 




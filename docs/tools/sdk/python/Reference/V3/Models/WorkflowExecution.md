---
id: workflow-execution
title: WorkflowExecution
pagination_label: WorkflowExecution
sidebar_label: WorkflowExecution
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowExecution', 'WorkflowExecution'] 
slug: /tools/sdk/python/v3/models/workflow-execution
tags: ['SDK', 'Software Development Kit', 'WorkflowExecution', 'WorkflowExecution']
---

# WorkflowExecution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Workflow execution ID. | [optional] 
**workflow_id** | **str** | Workflow ID. | [optional] 
**request_id** | **str** | Backend ID that tracks a workflow request in the system. Provide this ID in a customer support ticket for debugging purposes. | [optional] 
**start_time** | **datetime** | Date/time when the workflow started. | [optional] 
**close_time** | **datetime** | Date/time when the workflow ended. | [optional] 
**status** |  **Enum** [  'Completed',    'Failed',    'Canceled',    'Executing' ] | Workflow execution status. | [optional] 
}

## Example

```python
from sailpoint.v3.models.workflow_execution import WorkflowExecution

workflow_execution = WorkflowExecution(
id='b393f4e2-4785-4d7f-ab27-3a6b8ded4c81',
workflow_id='d201c5d9-d37b-4a2f-af14-66414f39d568',
request_id='41e12a74fa7b4a6a98ae47887b64acdb',
start_time='2022-02-07T20:13:29.356648026Z',
close_time='2022-02-07T20:13:31.682410165Z',
status='Completed'
)

```
[[Back to top]](#) 


---
id: beta-workflow-execution-event
title: WorkflowExecutionEvent
pagination_label: WorkflowExecutionEvent
sidebar_label: WorkflowExecutionEvent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowExecutionEvent', 'BetaWorkflowExecutionEvent'] 
slug: /tools/sdk/python/beta/models/workflow-execution-event
tags: ['SDK', 'Software Development Kit', 'WorkflowExecutionEvent', 'BetaWorkflowExecutionEvent']
---

# WorkflowExecutionEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'WorkflowExecutionScheduled',    'WorkflowExecutionStarted',    'WorkflowExecutionCompleted',    'WorkflowExecutionFailed',    'WorkflowTaskScheduled',    'WorkflowTaskStarted',    'WorkflowTaskCompleted',    'WorkflowTaskFailed',    'ActivityTaskScheduled',    'ActivityTaskStarted',    'ActivityTaskCompleted',    'ActivityTaskFailed' ] | The type of event | [optional] 
**timestamp** | **datetime** | The date-time when the event occurred | [optional] 
**attributes** | **object** | Additional attributes associated with the event | [optional] 
}

## Example

```python
from sailpoint.beta.models.workflow_execution_event import WorkflowExecutionEvent

workflow_execution_event = WorkflowExecutionEvent(
type=WorkflowTaskScheduled,
timestamp='2022-02-07T20:13:31.640618296Z',
attributes={}
)

```
[[Back to top]](#) 


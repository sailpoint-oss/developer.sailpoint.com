---
id: workflowexecutionevent
title: Workflowexecutionevent
pagination_label: Workflowexecutionevent
sidebar_label: Workflowexecutionevent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workflowexecutionevent', 'Workflowexecutionevent'] 
slug: /tools/sdk/python/workflows/models/workflowexecutionevent
tags: ['SDK', 'Software Development Kit', 'Workflowexecutionevent', 'Workflowexecutionevent']
---

# Workflowexecutionevent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'WorkflowExecutionScheduled',    'WorkflowExecutionStarted',    'WorkflowExecutionCompleted',    'WorkflowExecutionFailed',    'WorkflowTaskScheduled',    'WorkflowTaskStarted',    'WorkflowTaskCompleted',    'WorkflowTaskFailed',    'ActivityTaskScheduled',    'ActivityTaskStarted',    'ActivityTaskCompleted',    'ActivityTaskFailed',    'StartChildWorkflowExecutionInitiated',    'ChildWorkflowExecutionStarted',    'ChildWorkflowExecutionCompleted',    'ChildWorkflowExecutionFailed' ] | The type of event | [optional] 
**timestamp** | **datetime** | The date-time when the event occurred | [optional] 
**attributes** | **object** | Additional attributes associated with the event | [optional] 
}

## Example

```python
from sailpoint.workflows.models.workflowexecutionevent import Workflowexecutionevent

workflowexecutionevent = Workflowexecutionevent(
type='WorkflowTaskScheduled',
timestamp='2022-02-07T20:13:31.640618296Z',
attributes={}
)

```
[[Back to top]](#) 


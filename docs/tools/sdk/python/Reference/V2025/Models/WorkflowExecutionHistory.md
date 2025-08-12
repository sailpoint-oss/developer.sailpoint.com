---
id: v2025-workflow-execution-history
title: WorkflowExecutionHistory
pagination_label: WorkflowExecutionHistory
sidebar_label: WorkflowExecutionHistory
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowExecutionHistory', 'V2025WorkflowExecutionHistory'] 
slug: /tools/sdk/python/v2025/models/workflow-execution-history
tags: ['SDK', 'Software Development Kit', 'WorkflowExecutionHistory', 'V2025WorkflowExecutionHistory']
---

# WorkflowExecutionHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition** | **object** | The workflow definition for the workflow execution | [optional] 
**history** | **object** | List of workflow execution events for the given workflow execution | [optional] 
**trigger** | **object** | The trigger that initiated the workflow execution | [optional] 
}

## Example

```python
from sailpoint.v2025.models.workflow_execution_history import WorkflowExecutionHistory

workflow_execution_history = WorkflowExecutionHistory(
definition=None,
history=None,
trigger=None
)

```
[[Back to top]](#) 


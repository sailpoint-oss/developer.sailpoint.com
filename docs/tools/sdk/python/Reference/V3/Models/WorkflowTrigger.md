---
id: workflow-trigger
title: WorkflowTrigger
pagination_label: WorkflowTrigger
sidebar_label: WorkflowTrigger
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowTrigger', 'WorkflowTrigger'] 
slug: /tools/sdk/python/v3/models/workflow-trigger
tags: ['SDK', 'Software Development Kit', 'WorkflowTrigger', 'WorkflowTrigger']
---

# WorkflowTrigger

The trigger that starts the workflow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'EVENT',    'EXTERNAL',    'SCHEDULED',    '' ] | The trigger type | [required]
**display_name** | **str** |  | [optional] 
**attributes** | [**WorkflowTriggerAttributes**](workflow-trigger-attributes) |  | [required]
}

## Example

```python
from sailpoint.v3.models.workflow_trigger import WorkflowTrigger

workflow_trigger = WorkflowTrigger(
type='EVENT',
display_name='',
attributes=
)

```
[[Back to top]](#) 


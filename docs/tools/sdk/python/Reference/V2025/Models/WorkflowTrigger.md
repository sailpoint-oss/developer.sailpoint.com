---
id: v2025-workflow-trigger
title: WorkflowTrigger
pagination_label: WorkflowTrigger
sidebar_label: WorkflowTrigger
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowTrigger', 'V2025WorkflowTrigger'] 
slug: /tools/sdk/python/v2025/models/workflow-trigger
tags: ['SDK', 'Software Development Kit', 'WorkflowTrigger', 'V2025WorkflowTrigger']
---

# WorkflowTrigger

The trigger that starts the workflow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'EVENT',    'EXTERNAL',    'SCHEDULED',    '' ] | The trigger type | [required]
**display_name** | **str** | The trigger display name | [optional] 
**attributes** | [**WorkflowTriggerAttributes**](workflow-trigger-attributes) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.workflow_trigger import WorkflowTrigger

workflow_trigger = WorkflowTrigger(
type='EVENT',
display_name='',
attributes=
)

```
[[Back to top]](#) 


---
id: v2025-workflow-modified-by
title: WorkflowModifiedBy
pagination_label: WorkflowModifiedBy
sidebar_label: WorkflowModifiedBy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowModifiedBy', 'V2025WorkflowModifiedBy'] 
slug: /tools/sdk/python/v2025/models/workflow-modified-by
tags: ['SDK', 'Software Development Kit', 'WorkflowModifiedBy', 'V2025WorkflowModifiedBy']
---

# WorkflowModifiedBy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] |  | [optional] 
**id** | **str** | Identity ID | [optional] 
**name** | **str** | Human-readable display name of identity. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.workflow_modified_by import WorkflowModifiedBy

workflow_modified_by = WorkflowModifiedBy(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Thomas Edison'
)

```
[[Back to top]](#) 


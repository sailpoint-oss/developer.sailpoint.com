---
id: beta-workflow-all-of-creator
title: WorkflowAllOfCreator
pagination_label: WorkflowAllOfCreator
sidebar_label: WorkflowAllOfCreator
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowAllOfCreator', 'BetaWorkflowAllOfCreator'] 
slug: /tools/sdk/python/beta/models/workflow-all-of-creator
tags: ['SDK', 'Software Development Kit', 'WorkflowAllOfCreator', 'BetaWorkflowAllOfCreator']
---

# WorkflowAllOfCreator

Workflow creator's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Workflow creator's DTO type. | [optional] 
**id** | **str** | Workflow creator's identity ID. | [optional] 
**name** | **str** | Workflow creator's display name. | [optional] 
}

## Example

```python
from sailpoint.beta.models.workflow_all_of_creator import WorkflowAllOfCreator

workflow_all_of_creator = WorkflowAllOfCreator(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 


---
id: workflowmodifiedby
title: Workflowmodifiedby
pagination_label: Workflowmodifiedby
sidebar_label: Workflowmodifiedby
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workflowmodifiedby', 'Workflowmodifiedby'] 
slug: /tools/sdk/python/workflows/models/workflowmodifiedby
tags: ['SDK', 'Software Development Kit', 'Workflowmodifiedby', 'Workflowmodifiedby']
---

# Workflowmodifiedby


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] |  | [optional] 
**id** | **str** | Identity ID | [optional] 
**name** | **str** | Human-readable display name of identity. | [optional] 
}

## Example

```python
from sailpoint.workflows.models.workflowmodifiedby import Workflowmodifiedby

workflowmodifiedby = Workflowmodifiedby(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Thomas Edison'
)

```
[[Back to top]](#) 


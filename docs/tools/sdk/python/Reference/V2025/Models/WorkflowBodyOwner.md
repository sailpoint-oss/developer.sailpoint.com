---
id: v2025-workflow-body-owner
title: WorkflowBodyOwner
pagination_label: WorkflowBodyOwner
sidebar_label: WorkflowBodyOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowBodyOwner', 'V2025WorkflowBodyOwner'] 
slug: /tools/sdk/python/v2025/models/workflow-body-owner
tags: ['SDK', 'Software Development Kit', 'WorkflowBodyOwner', 'V2025WorkflowBodyOwner']
---

# WorkflowBodyOwner

The identity that owns the workflow.  The owner's permissions in IDN will determine what actions the workflow is allowed to perform.  Ownership can be changed by updating the owner in a PUT or PATCH request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | The type of object that is referenced | [optional] 
**id** | **str** | The unique ID of the object | [optional] 
**name** | **str** | The name of the object | [optional] 
}

## Example

```python
from sailpoint.v2025.models.workflow_body_owner import WorkflowBodyOwner

workflow_body_owner = WorkflowBodyOwner(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 


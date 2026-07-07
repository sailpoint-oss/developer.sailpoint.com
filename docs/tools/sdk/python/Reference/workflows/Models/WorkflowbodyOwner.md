---
id: workflowbody-owner
title: WorkflowbodyOwner
pagination_label: WorkflowbodyOwner
sidebar_label: WorkflowbodyOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowbodyOwner', 'WorkflowbodyOwner'] 
slug: /tools/sdk/python/workflows/models/workflowbody-owner
tags: ['SDK', 'Software Development Kit', 'WorkflowbodyOwner', 'WorkflowbodyOwner']
---

# WorkflowbodyOwner

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
from sailpoint.workflows.models.workflowbody_owner import WorkflowbodyOwner

workflowbody_owner = WorkflowbodyOwner(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 


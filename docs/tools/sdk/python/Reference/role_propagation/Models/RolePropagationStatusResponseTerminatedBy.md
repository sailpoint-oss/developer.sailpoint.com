---
id: role-propagation-status-response-terminated-by
title: RolePropagationStatusResponseTerminatedBy
pagination_label: RolePropagationStatusResponseTerminatedBy
sidebar_label: RolePropagationStatusResponseTerminatedBy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RolePropagationStatusResponseTerminatedBy', 'RolePropagationStatusResponseTerminatedBy'] 
slug: /tools/sdk/python/role-propagation/models/role-propagation-status-response-terminated-by
tags: ['SDK', 'Software Development Kit', 'RolePropagationStatusResponseTerminatedBy', 'RolePropagationStatusResponseTerminatedBy']
---

# RolePropagationStatusResponseTerminatedBy

Identity who terminated the Role Propagation process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the Identity who terminated the Role Propagation process. | [optional] 
**id** | **str** | ID of the Identity who terminated the Role Propagation process. | [optional] 
**name** | **str** | Name of the Identity who terminated the Role Propagation process. | [optional] 
}

## Example

```python
from sailpoint.role_propagation.models.role_propagation_status_response_terminated_by import RolePropagationStatusResponseTerminatedBy

role_propagation_status_response_terminated_by = RolePropagationStatusResponseTerminatedBy(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 


---
id: role-propagation-status-response-launched-by
title: RolePropagationStatusResponseLaunchedBy
pagination_label: RolePropagationStatusResponseLaunchedBy
sidebar_label: RolePropagationStatusResponseLaunchedBy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RolePropagationStatusResponseLaunchedBy', 'RolePropagationStatusResponseLaunchedBy'] 
slug: /tools/sdk/python/role-propagation/models/role-propagation-status-response-launched-by
tags: ['SDK', 'Software Development Kit', 'RolePropagationStatusResponseLaunchedBy', 'RolePropagationStatusResponseLaunchedBy']
---

# RolePropagationStatusResponseLaunchedBy

Identity who launched the Role Propagation process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the identity who launched the Role Propagation process. | [optional] 
**id** | **str** | ID of the identity who launched the Role Propagation process. | [optional] 
**name** | **str** | Name of the identity who launched the Role Propagation process. | [optional] 
}

## Example

```python
from sailpoint.role_propagation.models.role_propagation_status_response_launched_by import RolePropagationStatusResponseLaunchedBy

role_propagation_status_response_launched_by = RolePropagationStatusResponseLaunchedBy(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 


---
id: v2025-violation-owner-assignment-config-owner-ref
title: ViolationOwnerAssignmentConfigOwnerRef
pagination_label: ViolationOwnerAssignmentConfigOwnerRef
sidebar_label: ViolationOwnerAssignmentConfigOwnerRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ViolationOwnerAssignmentConfigOwnerRef', 'V2025ViolationOwnerAssignmentConfigOwnerRef'] 
slug: /tools/sdk/python/v2025/models/violation-owner-assignment-config-owner-ref
tags: ['SDK', 'Software Development Kit', 'ViolationOwnerAssignmentConfigOwnerRef', 'V2025ViolationOwnerAssignmentConfigOwnerRef']
---

# ViolationOwnerAssignmentConfigOwnerRef

The owner of the violation assignment config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP',    'MANAGER' ] | Owner type. | [optional] 
**id** | **str** | Owner's ID. | [optional] 
**name** | **str** | Owner's name. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.violation_owner_assignment_config_owner_ref import ViolationOwnerAssignmentConfigOwnerRef

violation_owner_assignment_config_owner_ref = ViolationOwnerAssignmentConfigOwnerRef(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 


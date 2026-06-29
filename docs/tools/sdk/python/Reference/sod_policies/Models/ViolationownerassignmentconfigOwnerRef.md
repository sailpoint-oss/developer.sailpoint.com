---
id: violationownerassignmentconfig-owner-ref
title: ViolationownerassignmentconfigOwnerRef
pagination_label: ViolationownerassignmentconfigOwnerRef
sidebar_label: ViolationownerassignmentconfigOwnerRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ViolationownerassignmentconfigOwnerRef', 'ViolationownerassignmentconfigOwnerRef'] 
slug: /tools/sdk/python/sod-policies/models/violationownerassignmentconfig-owner-ref
tags: ['SDK', 'Software Development Kit', 'ViolationownerassignmentconfigOwnerRef', 'ViolationownerassignmentconfigOwnerRef']
---

# ViolationownerassignmentconfigOwnerRef

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
from sailpoint.sod_policies.models.violationownerassignmentconfig_owner_ref import ViolationownerassignmentconfigOwnerRef

violationownerassignmentconfig_owner_ref = ViolationownerassignmentconfigOwnerRef(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 


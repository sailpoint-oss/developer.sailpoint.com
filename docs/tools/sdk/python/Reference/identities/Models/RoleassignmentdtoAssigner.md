---
id: roleassignmentdto-assigner
title: RoleassignmentdtoAssigner
pagination_label: RoleassignmentdtoAssigner
sidebar_label: RoleassignmentdtoAssigner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleassignmentdtoAssigner', 'RoleassignmentdtoAssigner'] 
slug: /tools/sdk/python/identities/models/roleassignmentdto-assigner
tags: ['SDK', 'Software Development Kit', 'RoleassignmentdtoAssigner', 'RoleassignmentdtoAssigner']
---

# RoleassignmentdtoAssigner

The identity that performed the assignment. This could be blank or system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'UNKNOWN' ] | Object type | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.identities.models.roleassignmentdto_assigner import RoleassignmentdtoAssigner

roleassignmentdto_assigner = RoleassignmentdtoAssigner(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 


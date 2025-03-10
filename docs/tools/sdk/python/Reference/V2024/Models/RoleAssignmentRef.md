---
id: v2024-role-assignment-ref
title: RoleAssignmentRef
pagination_label: RoleAssignmentRef
sidebar_label: RoleAssignmentRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleAssignmentRef', 'V2024RoleAssignmentRef'] 
slug: /tools/sdk/python/v2024/models/role-assignment-ref
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentRef', 'V2024RoleAssignmentRef']
---

# RoleAssignmentRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Assignment Id | [optional] 
**role** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_assignment_ref import RoleAssignmentRef

role_assignment_ref = RoleAssignmentRef(
id='1cbb0705b38c4226b1334eadd8874086',
role=sailpoint.v2024.models.base_reference_dto.BaseReferenceDto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 


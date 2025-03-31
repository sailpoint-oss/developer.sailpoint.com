---
id: beta-role-assignment-ref
title: RoleAssignmentRef
pagination_label: RoleAssignmentRef
sidebar_label: RoleAssignmentRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleAssignmentRef', 'BetaRoleAssignmentRef'] 
slug: /tools/sdk/python/beta/models/role-assignment-ref
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentRef', 'BetaRoleAssignmentRef']
---

# RoleAssignmentRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Assignment Id | [optional] 
**role** | [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.role_assignment_ref import RoleAssignmentRef

role_assignment_ref = RoleAssignmentRef(
id='1cbb0705b38c4226b1334eadd8874086',
role=sailpoint.beta.models.base_reference_dto_1.BaseReferenceDto_1(
                    id = 'ff8081814d977c21014da056804a0af3', 
                    name = 'Github', )
)

```
[[Back to top]](#) 


---
id: v2025-get-role-assignments200-response-inner
title: GetRoleAssignments200ResponseInner
pagination_label: GetRoleAssignments200ResponseInner
sidebar_label: GetRoleAssignments200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetRoleAssignments200ResponseInner', 'V2025GetRoleAssignments200ResponseInner'] 
slug: /tools/sdk/python/v2025/models/get-role-assignments200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetRoleAssignments200ResponseInner', 'V2025GetRoleAssignments200ResponseInner']
---

# GetRoleAssignments200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Assignment Id | [optional] 
**role** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**added_date** | **datetime** | Date that the assignment was added | [optional] 
**comments** | **str** | Comments added by the user when the assignment was made | [optional] 
**assignment_source** | **str** | Source describing how this assignment was made | [optional] 
**assigner** | [**RoleAssignmentDtoAssigner**](role-assignment-dto-assigner) |  | [optional] 
**assigned_dimensions** | [**[]BaseReferenceDto**](base-reference-dto) | Dimensions assigned related to this role | [optional] 
**assignment_context** | [**RoleAssignmentDtoAssignmentContext**](role-assignment-dto-assignment-context) |  | [optional] 
**account_targets** | [**[]RoleTargetDto**](role-target-dto) |  | [optional] 
**remove_date** | **datetime** | Date that the assignment will be removed | [optional] 
}

## Example

```python
from sailpoint.v2025.models.get_role_assignments200_response_inner import GetRoleAssignments200ResponseInner

get_role_assignments200_response_inner = GetRoleAssignments200ResponseInner(
id='1cbb0705b38c4226b1334eadd8874086',
role=sailpoint.v2025.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
added_date='2025-07-11T18:45:37.098Z',
comments='I'm a new Engineer and need this role to do my work',
assignment_source='UI',
assigner=sailpoint.v2025.models.role_assignment_dto_assigner.RoleAssignmentDto_assigner(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
assigned_dimensions=[{id=1acc8ffe5fcf457090de28bee2af36ee, type=DIMENSION, name=Northeast region}],
assignment_context={requested={contextAttributes=[{attribute=department, value=Engineering, derived=false}]}, matched=[{id=e7697a1e96d04db1ac7b0f4544915d2c, type=DIMENSION, name=Engineer}], computedDate=Wed Feb 14 10:58:42},
account_targets=[
                    sailpoint.v2025.models.role_target_dto.Role Target Dto(
                        source = sailpoint.v2025.models.base_reference_dto.Base Reference Dto(
                            type = 'IDENTITY', 
                            id = '2c91808568c529c60168cca6f90c1313', 
                            name = 'William Wilson', ), 
                        account_info = sailpoint.v2025.models.account_info_dto.Account Info Dto(
                            native_identity = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                            display_name = 'Abby.Smith', 
                            uuid = '{ad9fc391-246d-40af-b248-b6556a2b7c01}', ), 
                        role_name = 'Marketing', )
                    ],
remove_date='2026-07-11T18:45:37.098Z'
)

```
[[Back to top]](#) 


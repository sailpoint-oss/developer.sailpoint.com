---
id: beta-role-assignment-dto
title: RoleAssignmentDto
pagination_label: RoleAssignmentDto
sidebar_label: RoleAssignmentDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleAssignmentDto', 'BetaRoleAssignmentDto'] 
slug: /tools/sdk/python/beta/models/role-assignment-dto
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentDto', 'BetaRoleAssignmentDto']
---

# RoleAssignmentDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Assignment Id | [optional] 
**role** | [**BaseRoleReferenceDto**](base-role-reference-dto) |  | [optional] 
**comments** | **str** | Comments added by the user when the assignment was made | [optional] 
**assignment_source** | **str** | Source describing how this assignment was made | [optional] 
**assigner** | [**RoleAssignmentDtoAssigner**](role-assignment-dto-assigner) |  | [optional] 
**assigned_dimensions** | [**[]BaseReferenceDto1**](base-reference-dto1) | Dimensions assigned related to this role | [optional] 
**assignment_context** | [**RoleAssignmentDtoAssignmentContext**](role-assignment-dto-assignment-context) |  | [optional] 
**account_targets** | [**[]RoleTargetDto**](role-target-dto) |  | [optional] 
**remove_date** | **datetime** | Date that the assignment will be removed | [optional] 
**added_date** | **datetime** | Date that the assignment was added | [optional] 
}

## Example

```python
from sailpoint.beta.models.role_assignment_dto import RoleAssignmentDto

role_assignment_dto = RoleAssignmentDto(
id='1cbb0705b38c4226b1334eadd8874086',
role=sailpoint.beta.models.base_reference_dto.Base Reference Dto(
                    type = 'ROLE', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
comments='I'm a new Engineer and need this role to do my work',
assignment_source='UI',
assigner=sailpoint.beta.models.role_assignment_dto_assigner.RoleAssignmentDto_assigner(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
assigned_dimensions=[{id=1acc8ffe5fcf457090de28bee2af36ee, type=DIMENSION, name=Northeast region}],
assignment_context={requested={contextAttributes=[{attribute=department, value=Engineering, derived=false}]}, matched=[{id=e7697a1e96d04db1ac7b0f4544915d2c, type=DIMENSION, name=Engineer}], computedDate=Wed Feb 14 10:58:42},
account_targets=[
                    sailpoint.beta.models.role_target_dto.Role Target Dto(
                        source = sailpoint.beta.models.base_reference_dto.Base Reference Dto(
                            id = 'ff8081814d977c21014da056804a0af3', 
                            name = 'Github', ), 
                        account_info = sailpoint.beta.models.account_info_dto.Account Info Dto(
                            native_identity = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                            display_name = 'Abby.Smith', 
                            uuid = '{ad9fc391-246d-40af-b248-b6556a2b7c01}', ), 
                        role_name = 'Marketing', )
                    ],
remove_date='2026-07-11T18:45:37.098Z',
added_date='2025-07-11T18:45:37.098Z'
)

```
[[Back to top]](#) 


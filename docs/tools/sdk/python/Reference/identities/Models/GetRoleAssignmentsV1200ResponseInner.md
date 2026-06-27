---
id: get-role-assignments-v1200-response-inner
title: GetRoleAssignmentsV1200ResponseInner
pagination_label: GetRoleAssignmentsV1200ResponseInner
sidebar_label: GetRoleAssignmentsV1200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetRoleAssignmentsV1200ResponseInner', 'GetRoleAssignmentsV1200ResponseInner'] 
slug: /tools/sdk/python/identities/models/get-role-assignments-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetRoleAssignmentsV1200ResponseInner', 'GetRoleAssignmentsV1200ResponseInner']
---

# GetRoleAssignmentsV1200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Assignment Id | [optional] 
**role** | [**Basereferencedto**](basereferencedto) |  | [optional] 
**added_date** | **datetime** | Date that the assignment was added | [optional] 
**start_date** | **datetime** | Date when assignment will be active, if access was requested with a future start date. If null, assignment is active immediately | [optional] 
**remove_date** | **datetime** | Date that the assignment will be removed | [optional] 
**comments** | **str** | Comments added by the user when the assignment was made | [optional] 
**assignment_source** | **str** | Source describing how this assignment was made | [optional] 
**assigner** | [**RoleassignmentdtoAssigner**](roleassignmentdto-assigner) |  | [optional] 
**assigned_dimensions** | [**[]Basereferencedto**](basereferencedto) | Dimensions assigned related to this role | [optional] 
**assignment_context** | [**RoleassignmentdtoAssignmentContext**](roleassignmentdto-assignment-context) |  | [optional] 
**account_targets** | [**[]Roletargetdto**](roletargetdto) |  | [optional] 
}

## Example

```python
from sailpoint.identities.models.get_role_assignments_v1200_response_inner import GetRoleAssignmentsV1200ResponseInner

get_role_assignments_v1200_response_inner = GetRoleAssignmentsV1200ResponseInner(
id='1cbb0705b38c4226b1334eadd8874086',
role=sailpoint.identities.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
added_date='2025-07-11T18:45:37.098Z',
start_date='2026-07-10T18:45:37.098Z',
remove_date='2026-07-11T18:45:37.098Z',
comments='I'm a new Engineer and need this role to do my work',
assignment_source='UI',
assigner=sailpoint.identities.models.roleassignmentdto_assigner.roleassignmentdto_assigner(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
assigned_dimensions=[{id=1acc8ffe5fcf457090de28bee2af36ee, type=DIMENSION, name=Northeast region}],
assignment_context={"requested":{"contextAttributes":[{"attribute":"department","value":"Engineering","derived":false}]},"matched":[{"id":"e7697a1e96d04db1ac7b0f4544915d2c","type":"DIMENSION","name":"Engineer"}],"computedDate":"Wed Feb 14 10:58:42"},
account_targets=[
                    sailpoint.identities.models.role_target_dto.Role Target Dto(
                        source = sailpoint.identities.models.base_reference_dto.Base Reference Dto(
                            type = 'IDENTITY', 
                            id = '2c91808568c529c60168cca6f90c1313', 
                            name = 'William Wilson', ), 
                        account_info = sailpoint.identities.models.account_info_dto.Account Info Dto(
                            native_identity = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                            display_name = 'Abby.Smith', 
                            uuid = '{ad9fc391-246d-40af-b248-b6556a2b7c01}', ), 
                        role = sailpoint.identities.models.base_reference_dto.Base Reference Dto(
                            id = '2c91808568c529c60168cca6f90c1313', 
                            name = 'William Wilson', ), )
                    ]
)

```
[[Back to top]](#) 


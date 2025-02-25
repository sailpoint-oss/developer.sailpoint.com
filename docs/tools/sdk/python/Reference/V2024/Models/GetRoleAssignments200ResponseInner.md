---
id: v2024-get-role-assignments200-response-inner
title: GetRoleAssignments200ResponseInner
pagination_label: GetRoleAssignments200ResponseInner
sidebar_label: GetRoleAssignments200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetRoleAssignments200ResponseInner', 'V2024GetRoleAssignments200ResponseInner'] 
slug: /tools/sdk/python/v2024/models/get-role-assignments200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetRoleAssignments200ResponseInner', 'V2024GetRoleAssignments200ResponseInner']
---

# GetRoleAssignments200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Assignment Id | [optional] 
**role** | [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
**comments** | **str** | Comments added by the user when the assignment was made | [optional] 
**assignment_source** | **str** | Source describing how this assignment was made | [optional] 
**assigner** | [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
**assigned_dimensions** | [**[]BaseReferenceDto1**](base-reference-dto1) | Dimensions assigned related to this role | [optional] 
**assignment_context** | [**AssignmentContextDto**](assignment-context-dto) |  | [optional] 
**account_targets** | [**[]RoleTargetDto**](role-target-dto) |  | [optional] 
**remove_date** | **str** | Date that the assignment will be removed | [optional] 
}

## Example

```python
from sailpoint.v2024.models.get_role_assignments200_response_inner import GetRoleAssignments200ResponseInner

get_role_assignments200_response_inner = GetRoleAssignments200ResponseInner(
id='1cbb0705b38c4226b1334eadd8874086',
role=sailpoint.v2024.models.base_reference_dto_1.BaseReferenceDto_1(
                    id = 'ff8081814d977c21014da056804a0af3', 
                    name = 'Github', ),
comments='I'm a new Engineer and need this role to do my work',
assignment_source='UI',
assigner=sailpoint.v2024.models.base_reference_dto_1.BaseReferenceDto_1(
                    id = 'ff8081814d977c21014da056804a0af3', 
                    name = 'Github', ),
assigned_dimensions=[{id=1acc8ffe5fcf457090de28bee2af36ee, type=DIMENSION, name=Northeast region}],
assignment_context=sailpoint.v2024.models.assignment_context_dto.AssignmentContextDto(
                    requested = sailpoint.v2024.models.access_request_context.AccessRequestContext(
                        context_attributes = [
                            sailpoint.v2024.models.context_attribute_dto.ContextAttributeDto(
                                attribute = 'location', 
                                value = Austin, 
                                derived = False, )
                            ], ), 
                    matched = [
                        sailpoint.v2024.models.role_match_dto.RoleMatchDto(
                            role_ref = sailpoint.v2024.models.base_reference_dto_1.BaseReferenceDto_1(
                                id = 'ff8081814d977c21014da056804a0af3', 
                                name = 'Github', ), 
                            matched_attributes = [
                                sailpoint.v2024.models.context_attribute_dto.ContextAttributeDto(
                                    attribute = 'location', 
                                    derived = False, )
                                ], )
                        ], 
                    computed_date = 'Wed Feb 14 10:58:42', ),
account_targets=[
                    sailpoint.v2024.models.role_target_dto.RoleTargetDto(
                        source = sailpoint.v2024.models.base_reference_dto_1.BaseReferenceDto_1(
                            id = 'ff8081814d977c21014da056804a0af3', 
                            name = 'Github', ), 
                        account_info = sailpoint.v2024.models.account_info_dto.AccountInfoDto(
                            native_identity = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                            display_name = 'Abby.Smith', 
                            uuid = '{ad9fc391-246d-40af-b248-b6556a2b7c01}', ), 
                        role_name = 'Marketing', )
                    ],
remove_date='Wed Feb 14 10:58:42'
)

```
[[Back to top]](#) 


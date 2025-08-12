---
id: beta-get-role-assignments200-response-inner
title: GetRoleAssignments200ResponseInner
pagination_label: GetRoleAssignments200ResponseInner
sidebar_label: GetRoleAssignments200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetRoleAssignments200ResponseInner', 'BetaGetRoleAssignments200ResponseInner'] 
slug: /tools/sdk/python/beta/models/get-role-assignments200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetRoleAssignments200ResponseInner', 'BetaGetRoleAssignments200ResponseInner']
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
from sailpoint.beta.models.get_role_assignments200_response_inner import GetRoleAssignments200ResponseInner

get_role_assignments200_response_inner = GetRoleAssignments200ResponseInner(
id='1cbb0705b38c4226b1334eadd8874086',
role=sailpoint.beta.models.base_reference_dto.Base Reference Dto(
                    id = 'ff8081814d977c21014da056804a0af3', 
                    name = 'Github', ),
comments='I'm a new Engineer and need this role to do my work',
assignment_source='UI',
assigner=sailpoint.beta.models.base_reference_dto.Base Reference Dto(
                    id = 'ff8081814d977c21014da056804a0af3', 
                    name = 'Github', ),
assigned_dimensions=[{id=1acc8ffe5fcf457090de28bee2af36ee, type=DIMENSION, name=Northeast region}],
assignment_context=sailpoint.beta.models.assignment_context_dto.Assignment Context Dto(
                    requested = sailpoint.beta.models.access_request_context.Access Request Context(
                        context_attributes = [
                            sailpoint.beta.models.context_attribute_dto.Context Attribute Dto(
                                attribute = 'location', 
                                value = Austin, 
                                derived = False, )
                            ], ), 
                    matched = [
                        sailpoint.beta.models.role_match_dto.Role Match Dto(
                            role_ref = sailpoint.beta.models.base_reference_dto.Base Reference Dto(
                                id = 'ff8081814d977c21014da056804a0af3', 
                                name = 'Github', ), 
                            matched_attributes = [
                                sailpoint.beta.models.context_attribute_dto.Context Attribute Dto(
                                    attribute = 'location', 
                                    derived = False, )
                                ], )
                        ], 
                    computed_date = 'Wed Feb 14 10:58:42', ),
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
remove_date='Wed Feb 14 10:58:42'
)

```
[[Back to top]](#) 


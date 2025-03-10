---
id: v2024-role-assignment-dto-assignment-context
title: RoleAssignmentDtoAssignmentContext
pagination_label: RoleAssignmentDtoAssignmentContext
sidebar_label: RoleAssignmentDtoAssignmentContext
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleAssignmentDtoAssignmentContext', 'V2024RoleAssignmentDtoAssignmentContext'] 
slug: /tools/sdk/python/v2024/models/role-assignment-dto-assignment-context
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentDtoAssignmentContext', 'V2024RoleAssignmentDtoAssignmentContext']
---

# RoleAssignmentDtoAssignmentContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested** | [**AccessRequestContext**](access-request-context) |  | [optional] 
**matched** | [**[]RoleMatchDto**](role-match-dto) |  | [optional] 
**computed_date** | **str** | Date that the assignment will was evaluated | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_assignment_dto_assignment_context import RoleAssignmentDtoAssignmentContext

role_assignment_dto_assignment_context = RoleAssignmentDtoAssignmentContext(
requested=sailpoint.v2024.models.access_request_context.AccessRequestContext(
                    context_attributes = [
                        sailpoint.v2024.models.context_attribute_dto.ContextAttributeDto(
                            attribute = 'location', 
                            value = Austin, 
                            derived = False, )
                        ], ),
matched=[
                    sailpoint.v2024.models.role_match_dto.RoleMatchDto(
                        role_ref = sailpoint.v2024.models.base_reference_dto.BaseReferenceDto(
                            type = 'IDENTITY', 
                            id = '2c91808568c529c60168cca6f90c1313', 
                            name = 'William Wilson', ), 
                        matched_attributes = [
                            sailpoint.v2024.models.context_attribute_dto.ContextAttributeDto(
                                attribute = 'location', 
                                value = Austin, 
                                derived = False, )
                            ], )
                    ],
computed_date='Wed Feb 14 10:58:42'
)

```
[[Back to top]](#) 


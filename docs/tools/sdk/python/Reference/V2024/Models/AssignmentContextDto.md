---
id: v2024-assignment-context-dto
title: AssignmentContextDto
pagination_label: AssignmentContextDto
sidebar_label: AssignmentContextDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AssignmentContextDto', 'V2024AssignmentContextDto'] 
slug: /tools/sdk/python/v2024/models/assignment-context-dto
tags: ['SDK', 'Software Development Kit', 'AssignmentContextDto', 'V2024AssignmentContextDto']
---

# AssignmentContextDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested** | [**AccessRequestContext**](access-request-context) |  | [optional] 
**matched** | [**[]RoleMatchDto**](role-match-dto) |  | [optional] 
**computed_date** | **str** | Date that the assignment will was evaluated | [optional] 
}

## Example

```python
from sailpoint.v2024.models.assignment_context_dto import AssignmentContextDto

assignment_context_dto = AssignmentContextDto(
requested=sailpoint.v2024.models.access_request_context.Access Request Context(
                    context_attributes = [
                        sailpoint.v2024.models.context_attribute_dto.Context Attribute Dto(
                            attribute = 'location', 
                            value = Austin, 
                            derived = False, )
                        ], ),
matched=[
                    sailpoint.v2024.models.role_match_dto.Role Match Dto(
                        role_ref = sailpoint.v2024.models.base_reference_dto.Base Reference Dto(
                            type = 'IDENTITY', 
                            id = '2c91808568c529c60168cca6f90c1313', 
                            name = 'William Wilson', ), 
                        matched_attributes = [
                            sailpoint.v2024.models.context_attribute_dto.Context Attribute Dto(
                                attribute = 'location', 
                                value = Austin, 
                                derived = False, )
                            ], )
                    ],
computed_date='Wed Feb 14 10:58:42'
)

```
[[Back to top]](#) 


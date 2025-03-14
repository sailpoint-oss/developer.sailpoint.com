---
id: beta-assignment-context-dto
title: AssignmentContextDto
pagination_label: AssignmentContextDto
sidebar_label: AssignmentContextDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AssignmentContextDto', 'BetaAssignmentContextDto'] 
slug: /tools/sdk/python/beta/models/assignment-context-dto
tags: ['SDK', 'Software Development Kit', 'AssignmentContextDto', 'BetaAssignmentContextDto']
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
from sailpoint.beta.models.assignment_context_dto import AssignmentContextDto

assignment_context_dto = AssignmentContextDto(
requested=sailpoint.beta.models.access_request_context.AccessRequestContext(
                    context_attributes = [
                        sailpoint.beta.models.context_attribute_dto.ContextAttributeDto(
                            attribute = 'location', 
                            value = Austin, 
                            derived = False, )
                        ], ),
matched=[
                    sailpoint.beta.models.role_match_dto.RoleMatchDto(
                        role_ref = sailpoint.beta.models.base_reference_dto_1.BaseReferenceDto_1(
                            id = 'ff8081814d977c21014da056804a0af3', 
                            name = 'Github', ), 
                        matched_attributes = [
                            sailpoint.beta.models.context_attribute_dto.ContextAttributeDto(
                                attribute = 'location', 
                                value = Austin, 
                                derived = False, )
                            ], )
                    ],
computed_date='Wed Feb 14 10:58:42'
)

```
[[Back to top]](#) 


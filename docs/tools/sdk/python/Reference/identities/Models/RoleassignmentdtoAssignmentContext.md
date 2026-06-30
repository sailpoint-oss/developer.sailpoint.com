---
id: roleassignmentdto-assignment-context
title: RoleassignmentdtoAssignmentContext
pagination_label: RoleassignmentdtoAssignmentContext
sidebar_label: RoleassignmentdtoAssignmentContext
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleassignmentdtoAssignmentContext', 'RoleassignmentdtoAssignmentContext'] 
slug: /tools/sdk/python/identities/models/roleassignmentdto-assignment-context
tags: ['SDK', 'Software Development Kit', 'RoleassignmentdtoAssignmentContext', 'RoleassignmentdtoAssignmentContext']
---

# RoleassignmentdtoAssignmentContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested** | [**Accessrequestcontext**](accessrequestcontext) |  | [optional] 
**matched** | [**[]Rolematchdto**](rolematchdto) |  | [optional] 
**computed_date** | **str** | Date that the assignment will was evaluated | [optional] 
}

## Example

```python
from sailpoint.identities.models.roleassignmentdto_assignment_context import RoleassignmentdtoAssignmentContext

roleassignmentdto_assignment_context = RoleassignmentdtoAssignmentContext(
requested=sailpoint.identities.models.access_request_context.Access Request Context(
                    context_attributes = [
                        sailpoint.identities.models.context_attribute_dto.Context Attribute Dto(
                            attribute = 'location', 
                            value = Austin, 
                            derived = False, )
                        ], ),
matched=[
                    sailpoint.identities.models.role_match_dto.Role Match Dto(
                        role_ref = sailpoint.identities.models.base_reference_dto.Base Reference Dto(
                            type = 'IDENTITY', 
                            id = '2c91808568c529c60168cca6f90c1313', 
                            name = 'William Wilson', ), 
                        matched_attributes = [
                            sailpoint.identities.models.context_attribute_dto.Context Attribute Dto(
                                attribute = 'location', 
                                value = Austin, 
                                derived = False, )
                            ], )
                    ],
computed_date='Wed Feb 14 10:58:42'
)

```
[[Back to top]](#) 


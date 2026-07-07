---
id: assignmentcontextdto
title: Assignmentcontextdto
pagination_label: Assignmentcontextdto
sidebar_label: Assignmentcontextdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Assignmentcontextdto', 'Assignmentcontextdto'] 
slug: /tools/sdk/python/identities/models/assignmentcontextdto
tags: ['SDK', 'Software Development Kit', 'Assignmentcontextdto', 'Assignmentcontextdto']
---

# Assignmentcontextdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested** | [**Accessrequestcontext**](accessrequestcontext) |  | [optional] 
**matched** | [**[]Rolematchdto**](rolematchdto) |  | [optional] 
**computed_date** | **str** | Date that the assignment will was evaluated | [optional] 
}

## Example

```python
from sailpoint.identities.models.assignmentcontextdto import Assignmentcontextdto

assignmentcontextdto = Assignmentcontextdto(
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


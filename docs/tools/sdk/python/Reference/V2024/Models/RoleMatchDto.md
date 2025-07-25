---
id: v2024-role-match-dto
title: RoleMatchDto
pagination_label: RoleMatchDto
sidebar_label: RoleMatchDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMatchDto', 'V2024RoleMatchDto'] 
slug: /tools/sdk/python/v2024/models/role-match-dto
tags: ['SDK', 'Software Development Kit', 'RoleMatchDto', 'V2024RoleMatchDto']
---

# RoleMatchDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_ref** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**matched_attributes** | [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_match_dto import RoleMatchDto

role_match_dto = RoleMatchDto(
role_ref=sailpoint.v2024.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
matched_attributes=[
                    sailpoint.v2024.models.context_attribute_dto.Context Attribute Dto(
                        attribute = 'location', 
                        value = Austin, 
                        derived = False, )
                    ]
)

```
[[Back to top]](#) 


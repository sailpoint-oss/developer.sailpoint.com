---
id: v2025-role-match-dto
title: RoleMatchDto
pagination_label: RoleMatchDto
sidebar_label: RoleMatchDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMatchDto', 'V2025RoleMatchDto'] 
slug: /tools/sdk/python/v2025/models/role-match-dto
tags: ['SDK', 'Software Development Kit', 'RoleMatchDto', 'V2025RoleMatchDto']
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
from sailpoint.v2025.models.role_match_dto import RoleMatchDto

role_match_dto = RoleMatchDto(
role_ref=sailpoint.v2025.models.base_reference_dto.BaseReferenceDto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
matched_attributes=[
                    sailpoint.v2025.models.context_attribute_dto.ContextAttributeDto(
                        attribute = 'location', 
                        value = Austin, 
                        derived = False, )
                    ]
)

```
[[Back to top]](#) 


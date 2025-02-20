---
id: beta-role-match-dto
title: RoleMatchDto
pagination_label: RoleMatchDto
sidebar_label: RoleMatchDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMatchDto', 'BetaRoleMatchDto'] 
slug: /tools/sdk/python/beta/models/role-match-dto
tags: ['SDK', 'Software Development Kit', 'RoleMatchDto', 'BetaRoleMatchDto']
---

# RoleMatchDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_ref** | [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
**matched_attributes** | [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.role_match_dto import RoleMatchDto

role_match_dto = RoleMatchDto(
role_ref=sailpoint.beta.models.base_reference_dto_1.BaseReferenceDto_1(
                    id = 'ff8081814d977c21014da056804a0af3', 
                    name = 'Github', ),
matched_attributes=[
                    sailpoint.beta.models.context_attribute_dto.ContextAttributeDto(
                        attribute = 'location', 
                        value = Austin, 
                        derived = False, )
                    ]
)

```
[[Back to top]](#) 


---
id: beta-base-role-reference-dto
title: BaseRoleReferenceDto
pagination_label: BaseRoleReferenceDto
sidebar_label: BaseRoleReferenceDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseRoleReferenceDto', 'BetaBaseRoleReferenceDto'] 
slug: /tools/sdk/python/beta/models/base-role-reference-dto
tags: ['SDK', 'Software Development Kit', 'BaseRoleReferenceDto', 'BetaBaseRoleReferenceDto']
---

# BaseRoleReferenceDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | DTO type | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.beta.models.base_role_reference_dto import BaseRoleReferenceDto

base_role_reference_dto = BaseRoleReferenceDto(
type='ROLE',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 


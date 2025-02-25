---
id: beta-owner-reference-dto
title: OwnerReferenceDto
pagination_label: OwnerReferenceDto
sidebar_label: OwnerReferenceDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OwnerReferenceDto', 'BetaOwnerReferenceDto'] 
slug: /tools/sdk/python/beta/models/owner-reference-dto
tags: ['SDK', 'Software Development Kit', 'OwnerReferenceDto', 'BetaOwnerReferenceDto']
---

# OwnerReferenceDto

Simplified DTO for the owner object of the entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The owner id for the entitlement | [optional] 
**name** | **str** | The owner name for the entitlement | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | The type of the owner. Initially only type IDENTITY is supported | [optional] 
}

## Example

```python
from sailpoint.beta.models.owner_reference_dto import OwnerReferenceDto

owner_reference_dto = OwnerReferenceDto(
id='2a2fdacca5e345f18bf7970cfbb8fec2',
name='identity 1',
type='IDENTITY'
)

```
[[Back to top]](#) 


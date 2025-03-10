---
id: beta-owner-dto
title: OwnerDto
pagination_label: OwnerDto
sidebar_label: OwnerDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OwnerDto', 'BetaOwnerDto'] 
slug: /tools/sdk/python/beta/models/owner-dto
tags: ['SDK', 'Software Development Kit', 'OwnerDto', 'BetaOwnerDto']
---

# OwnerDto

Owner's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Owner's DTO type. | [optional] 
**id** | **str** | Owner's identity ID. | [optional] 
**name** | **str** | Owner's name. | [optional] 
}

## Example

```python
from sailpoint.beta.models.owner_dto import OwnerDto

owner_dto = OwnerDto(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 


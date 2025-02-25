---
id: owner-dto
title: OwnerDto
pagination_label: OwnerDto
sidebar_label: OwnerDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OwnerDto', 'OwnerDto'] 
slug: /tools/sdk/python/v3/models/owner-dto
tags: ['SDK', 'Software Development Kit', 'OwnerDto', 'OwnerDto']
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
from sailpoint.v3.models.owner_dto import OwnerDto

owner_dto = OwnerDto(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 


---
id: v2025-pat-owner
title: PatOwner
pagination_label: PatOwner
sidebar_label: PatOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PatOwner', 'V2025PatOwner'] 
slug: /tools/sdk/python/v2025/models/pat-owner
tags: ['SDK', 'Software Development Kit', 'PatOwner', 'V2025PatOwner']
---

# PatOwner

Personal access token owner's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Personal access token owner's DTO type. | [optional] 
**id** | **str** | Personal access token owner's identity ID. | [optional] 
**name** | **str** | Personal access token owner's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.pat_owner import PatOwner

pat_owner = PatOwner(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 


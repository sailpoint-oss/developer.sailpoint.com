---
id: v2024-source-deleted-actor
title: SourceDeletedActor
pagination_label: SourceDeletedActor
sidebar_label: SourceDeletedActor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceDeletedActor', 'V2024SourceDeletedActor'] 
slug: /tools/sdk/python/v2024/models/source-deleted-actor
tags: ['SDK', 'Software Development Kit', 'SourceDeletedActor', 'V2024SourceDeletedActor']
---

# SourceDeletedActor

Identity who deleted the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who deleted the source. | [required]
**id** | **str** | ID of identity who deleted the source. | [required]
**name** | **str** | Display name of identity who deleted the source. | [required]
}

## Example

```python
from sailpoint.v2024.models.source_deleted_actor import SourceDeletedActor

source_deleted_actor = SourceDeletedActor(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 


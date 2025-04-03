---
id: v2025-source-created-actor
title: SourceCreatedActor
pagination_label: SourceCreatedActor
sidebar_label: SourceCreatedActor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceCreatedActor', 'V2025SourceCreatedActor'] 
slug: /tools/sdk/python/v2025/models/source-created-actor
tags: ['SDK', 'Software Development Kit', 'SourceCreatedActor', 'V2025SourceCreatedActor']
---

# SourceCreatedActor

Identity who created the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who created the source. | [required]
**id** | **str** | ID of identity who created the source. | [required]
**name** | **str** | Display name of identity who created the source. | [required]
}

## Example

```python
from sailpoint.v2025.models.source_created_actor import SourceCreatedActor

source_created_actor = SourceCreatedActor(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 


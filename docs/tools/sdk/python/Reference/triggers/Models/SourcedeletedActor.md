---
id: sourcedeleted-actor
title: SourcedeletedActor
pagination_label: SourcedeletedActor
sidebar_label: SourcedeletedActor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourcedeletedActor', 'SourcedeletedActor'] 
slug: /tools/sdk/python/triggers/models/sourcedeleted-actor
tags: ['SDK', 'Software Development Kit', 'SourcedeletedActor', 'SourcedeletedActor']
---

# SourcedeletedActor

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
from sailpoint.triggers.models.sourcedeleted_actor import SourcedeletedActor

sourcedeleted_actor = SourcedeletedActor(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 


---
id: sourceupdated-actor
title: SourceupdatedActor
pagination_label: SourceupdatedActor
sidebar_label: SourceupdatedActor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceupdatedActor', 'SourceupdatedActor'] 
slug: /tools/sdk/python/triggers/models/sourceupdated-actor
tags: ['SDK', 'Software Development Kit', 'SourceupdatedActor', 'SourceupdatedActor']
---

# SourceupdatedActor

Identity who updated the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who updated the source. | [required]
**id** | **str** | ID of identity who updated the source. | [optional] 
**name** | **str** | Display name of identity who updated the source. | [required]
}

## Example

```python
from sailpoint.triggers.models.sourceupdated_actor import SourceupdatedActor

sourceupdated_actor = SourceupdatedActor(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 


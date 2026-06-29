---
id: sourcecreated-actor
title: SourcecreatedActor
pagination_label: SourcecreatedActor
sidebar_label: SourcecreatedActor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourcecreatedActor', 'SourcecreatedActor'] 
slug: /tools/sdk/python/triggers/models/sourcecreated-actor
tags: ['SDK', 'Software Development Kit', 'SourcecreatedActor', 'SourcecreatedActor']
---

# SourcecreatedActor

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
from sailpoint.triggers.models.sourcecreated_actor import SourcecreatedActor

sourcecreated_actor = SourcecreatedActor(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 


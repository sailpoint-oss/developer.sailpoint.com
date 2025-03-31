---
id: beta-source-updated-actor
title: SourceUpdatedActor
pagination_label: SourceUpdatedActor
sidebar_label: SourceUpdatedActor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceUpdatedActor', 'BetaSourceUpdatedActor'] 
slug: /tools/sdk/python/beta/models/source-updated-actor
tags: ['SDK', 'Software Development Kit', 'SourceUpdatedActor', 'BetaSourceUpdatedActor']
---

# SourceUpdatedActor

Identity who updated the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the identity who updated the source. | [required]
**id** | **str** | ID of the identity who updated the source. | [required]
**name** | **str** | Name of the identity who updated the source. | [required]
}

## Example

```python
from sailpoint.beta.models.source_updated_actor import SourceUpdatedActor

source_updated_actor = SourceUpdatedActor(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 


---
id: beta-source-updated
title: SourceUpdated
pagination_label: SourceUpdated
sidebar_label: SourceUpdated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceUpdated', 'BetaSourceUpdated'] 
slug: /tools/sdk/python/beta/models/source-updated
tags: ['SDK', 'Software Development Kit', 'SourceUpdated', 'BetaSourceUpdated']
---

# SourceUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Source's unique ID. | [required]
**name** | **str** | Source name. | [required]
**type** | **str** | Connection type. | [required]
**modified** | **datetime** | Date and time when the source was modified. | [required]
**connector** | **str** | Connector type used to connect to the source. | [required]
**actor** | [**SourceUpdatedActor**](source-updated-actor) |  | [required]
}

## Example

```python
from sailpoint.beta.models.source_updated import SourceUpdated

source_updated = SourceUpdated(
id='2c9180866166b5b0016167c32ef31a66',
name='Test source',
type='DIRECT_CONNECT',
modified='2021-03-29T22:01:50.474Z',
connector='active-directory',
actor=sailpoint.beta.models.source_updated_actor.SourceUpdated_actor(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 


---
id: v2024-source-updated
title: SourceUpdated
pagination_label: SourceUpdated
sidebar_label: SourceUpdated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceUpdated', 'V2024SourceUpdated'] 
slug: /tools/sdk/python/v2024/models/source-updated
tags: ['SDK', 'Software Development Kit', 'SourceUpdated', 'V2024SourceUpdated']
---

# SourceUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the source. | [required]
**name** | **str** | The user friendly name of the source. | [required]
**type** | **str** | The connection type of the source. | [required]
**modified** | **datetime** | The date and time the source was modified. | [required]
**connector** | **str** | The connector type used to connect to the source. | [required]
**actor** | [**SourceUpdatedActor**](source-updated-actor) |  | [required]
}

## Example

```python
from sailpoint.v2024.models.source_updated import SourceUpdated

source_updated = SourceUpdated(
id='2c9180866166b5b0016167c32ef31a66',
name='Corporate Active Directory',
type='DIRECT_CONNECT',
modified='2021-03-29T22:01:50.474Z',
connector='active-directory',
actor=sailpoint.v2024.models.source_updated_actor.SourceUpdated_actor(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 


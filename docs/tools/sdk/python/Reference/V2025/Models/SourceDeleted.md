---
id: v2025-source-deleted
title: SourceDeleted
pagination_label: SourceDeleted
sidebar_label: SourceDeleted
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceDeleted', 'V2025SourceDeleted'] 
slug: /tools/sdk/python/v2025/models/source-deleted
tags: ['SDK', 'Software Development Kit', 'SourceDeleted', 'V2025SourceDeleted']
---

# SourceDeleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the source. | [required]
**name** | **str** | Human friendly name of the source. | [required]
**type** | **str** | The connection type. | [required]
**deleted** | **datetime** | The date and time the source was deleted. | [required]
**connector** | **str** | The connector type used to connect to the source. | [required]
**actor** | [**SourceDeletedActor**](source-deleted-actor) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.source_deleted import SourceDeleted

source_deleted = SourceDeleted(
id='2c9180866166b5b0016167c32ef31a66',
name='Test source',
type='DIRECT_CONNECT',
deleted='2021-03-29T22:01:50.474Z',
connector='active-directory',
actor=sailpoint.v2025.models.source_deleted_actor.SourceDeleted_actor(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 


---
id: v2025-source-created
title: SourceCreated
pagination_label: SourceCreated
sidebar_label: SourceCreated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceCreated', 'V2025SourceCreated'] 
slug: /tools/sdk/python/v2025/models/source-created
tags: ['SDK', 'Software Development Kit', 'SourceCreated', 'V2025SourceCreated']
---

# SourceCreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the source. | [required]
**name** | **str** | Human friendly name of the source. | [required]
**type** | **str** | The connection type. | [required]
**created** | **datetime** | The date and time the source was created. | [required]
**connector** | **str** | The connector type used to connect to the source. | [required]
**actor** | [**SourceCreatedActor**](source-created-actor) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.source_created import SourceCreated

source_created = SourceCreated(
id='2c9180866166b5b0016167c32ef31a66',
name='Test source',
type='DIRECT_CONNECT',
created='2021-03-29T22:01:50.474Z',
connector='active-directory',
actor=sailpoint.v2025.models.source_created_actor.SourceCreated_actor(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 


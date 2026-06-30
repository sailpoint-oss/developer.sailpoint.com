---
id: sourcecreated
title: Sourcecreated
pagination_label: Sourcecreated
sidebar_label: Sourcecreated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourcecreated', 'Sourcecreated'] 
slug: /tools/sdk/python/triggers/models/sourcecreated
tags: ['SDK', 'Software Development Kit', 'Sourcecreated', 'Sourcecreated']
---

# Sourcecreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the source. | [required]
**name** | **str** | Human friendly name of the source. | [required]
**type** | **str** | The connection type. | [required]
**created** | **datetime** | The date and time the source was created. | [required]
**connector** | **str** | The connector type used to connect to the source. | [required]
**actor** | [**SourcecreatedActor**](sourcecreated-actor) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.sourcecreated import Sourcecreated

sourcecreated = Sourcecreated(
id='2c9180866166b5b0016167c32ef31a66',
name='Test source',
type='DIRECT_CONNECT',
created='2021-03-29T22:01:50.474Z',
connector='active-directory',
actor=sailpoint.triggers.models.sourcecreated_actor.sourcecreated_actor(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 


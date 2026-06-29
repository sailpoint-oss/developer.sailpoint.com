---
id: sourceupdated
title: Sourceupdated
pagination_label: Sourceupdated
sidebar_label: Sourceupdated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourceupdated', 'Sourceupdated'] 
slug: /tools/sdk/python/triggers/models/sourceupdated
tags: ['SDK', 'Software Development Kit', 'Sourceupdated', 'Sourceupdated']
---

# Sourceupdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the source. | [required]
**name** | **str** | The user friendly name of the source. | [required]
**type** | **str** | The connection type of the source. | [required]
**modified** | **datetime** | The date and time the source was modified. | [required]
**connector** | **str** | The connector type used to connect to the source. | [required]
**actor** | [**SourceupdatedActor**](sourceupdated-actor) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.sourceupdated import Sourceupdated

sourceupdated = Sourceupdated(
id='2c9180866166b5b0016167c32ef31a66',
name='Corporate Active Directory',
type='DIRECT_CONNECT',
modified='2021-03-29T22:01:50.474Z',
connector='active-directory',
actor=sailpoint.triggers.models.sourceupdated_actor.sourceupdated_actor(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 


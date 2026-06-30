---
id: peergroupmember
title: Peergroupmember
pagination_label: Peergroupmember
sidebar_label: Peergroupmember
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Peergroupmember', 'Peergroupmember'] 
slug: /tools/sdk/python/iai-peer-group-strategies/models/peergroupmember
tags: ['SDK', 'Software Development Kit', 'Peergroupmember', 'Peergroupmember']
---

# Peergroupmember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for the peer group member. | [optional] 
**type** | **str** | The type of the peer group member. | [optional] 
**peer_group_id** | **str** | The ID of the peer group. | [optional] 
**attributes** | **map[string]object** | Arbitrary key-value pairs, belonging to the peer group member. | [optional] 
}

## Example

```python
from sailpoint.iai_peer_group_strategies.models.peergroupmember import Peergroupmember

peergroupmember = Peergroupmember(
id='',
type='',
peer_group_id='',
attributes={
                    'key' : None
                    }
)

```
[[Back to top]](#) 


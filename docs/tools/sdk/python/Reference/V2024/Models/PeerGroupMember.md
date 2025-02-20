---
id: v2024-peer-group-member
title: PeerGroupMember
pagination_label: PeerGroupMember
sidebar_label: PeerGroupMember
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PeerGroupMember', 'V2024PeerGroupMember'] 
slug: /tools/sdk/python/v2024/models/peer-group-member
tags: ['SDK', 'Software Development Kit', 'PeerGroupMember', 'V2024PeerGroupMember']
---

# PeerGroupMember


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
from sailpoint.v2024.models.peer_group_member import PeerGroupMember

peer_group_member = PeerGroupMember(
id='',
type='',
peer_group_id='',
attributes={
                    'key' : None
                    }
)

```
[[Back to top]](#) 


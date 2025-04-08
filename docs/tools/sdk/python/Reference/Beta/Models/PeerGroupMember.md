---
id: beta-peer-group-member
title: PeerGroupMember
pagination_label: PeerGroupMember
sidebar_label: PeerGroupMember
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PeerGroupMember', 'BetaPeerGroupMember'] 
slug: /tools/sdk/python/beta/models/peer-group-member
tags: ['SDK', 'Software Development Kit', 'PeerGroupMember', 'BetaPeerGroupMember']
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
from sailpoint.beta.models.peer_group_member import PeerGroupMember

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


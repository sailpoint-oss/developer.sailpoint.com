---
id: beta-access-item-requester
title: AccessItemRequester
pagination_label: AccessItemRequester
sidebar_label: AccessItemRequester
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemRequester', 'BetaAccessItemRequester'] 
slug: /tools/sdk/python/beta/models/access-item-requester
tags: ['SDK', 'Software Development Kit', 'AccessItemRequester', 'BetaAccessItemRequester']
---

# AccessItemRequester

Access item requester's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Access item requester's DTO type. | [optional] 
**id** | **str** | Access item requester's identity ID. | [optional] 
**name** | **str** | Access item owner's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_item_requester import AccessItemRequester

access_item_requester = AccessItemRequester(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 


---
id: beta-access-item-diff
title: AccessItemDiff
pagination_label: AccessItemDiff
sidebar_label: AccessItemDiff
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemDiff', 'BetaAccessItemDiff'] 
slug: /tools/sdk/python/beta/models/access-item-diff
tags: ['SDK', 'Software Development Kit', 'AccessItemDiff', 'BetaAccessItemDiff']
---

# AccessItemDiff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the id of the access item | [optional] 
**event_type** |  **Enum** [  'ADD',    'REMOVE' ] |  | [optional] 
**display_name** | **str** | the display name of the access item | [optional] 
**source_name** | **str** | the source name of the access item | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_item_diff import AccessItemDiff

access_item_diff = AccessItemDiff(
id='',
event_type='ADD',
display_name='',
source_name=''
)

```
[[Back to top]](#) 


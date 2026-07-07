---
id: accessitemdiff
title: Accessitemdiff
pagination_label: Accessitemdiff
sidebar_label: Accessitemdiff
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessitemdiff', 'Accessitemdiff'] 
slug: /tools/sdk/python/identity-history/models/accessitemdiff
tags: ['SDK', 'Software Development Kit', 'Accessitemdiff', 'Accessitemdiff']
---

# Accessitemdiff


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
from sailpoint.identity_history.models.accessitemdiff import Accessitemdiff

accessitemdiff = Accessitemdiff(
id='',
event_type='ADD',
display_name='',
source_name=''
)

```
[[Back to top]](#) 


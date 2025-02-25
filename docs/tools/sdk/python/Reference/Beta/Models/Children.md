---
id: beta-children
title: Children
pagination_label: Children
sidebar_label: Children
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Children', 'BetaChildren'] 
slug: /tools/sdk/python/beta/models/children
tags: ['SDK', 'Software Development Kit', 'Children', 'BetaChildren']
---

# Children


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** | **str** |  | [optional] 
**attribute** | **str** |  | [optional] 
**value** | [**Value**](value) |  | [optional] 
**children** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.children import Children

children = Children(
operator='EQUALS',
attribute='country',
value=sailpoint.beta.models.value.Value(
                    type = 'STRING', ),
children=''
)

```
[[Back to top]](#) 


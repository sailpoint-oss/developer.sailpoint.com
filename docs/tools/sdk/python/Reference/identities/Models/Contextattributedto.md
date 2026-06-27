---
id: contextattributedto
title: Contextattributedto
pagination_label: Contextattributedto
sidebar_label: Contextattributedto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Contextattributedto', 'Contextattributedto'] 
slug: /tools/sdk/python/identities/models/contextattributedto
tags: ['SDK', 'Software Development Kit', 'Contextattributedto', 'Contextattributedto']
---

# Contextattributedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | The name of the attribute | [optional] 
**value** | [**ContextattributedtoValue**](contextattributedto-value) |  | [optional] 
**derived** | **bool** | True if the attribute was derived. | [optional] [default to False]
}

## Example

```python
from sailpoint.identities.models.contextattributedto import Contextattributedto

contextattributedto = Contextattributedto(
attribute='location',
value=Austin,
derived=False
)

```
[[Back to top]](#) 


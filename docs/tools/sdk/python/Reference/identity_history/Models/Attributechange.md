---
id: attributechange
title: Attributechange
pagination_label: Attributechange
sidebar_label: Attributechange
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Attributechange', 'Attributechange'] 
slug: /tools/sdk/python/identity-history/models/attributechange
tags: ['SDK', 'Software Development Kit', 'Attributechange', 'Attributechange']
---

# Attributechange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the attribute name | [optional] 
**previous_value** | **str** | the old value of attribute | [optional] 
**new_value** | **str** | the new value of attribute | [optional] 
}

## Example

```python
from sailpoint.identity_history.models.attributechange import Attributechange

attributechange = Attributechange(
name='firstname',
previous_value='adam',
new_value='zampa'
)

```
[[Back to top]](#) 


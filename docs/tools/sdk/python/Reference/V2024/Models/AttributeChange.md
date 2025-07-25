---
id: v2024-attribute-change
title: AttributeChange
pagination_label: AttributeChange
sidebar_label: AttributeChange
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeChange', 'V2024AttributeChange'] 
slug: /tools/sdk/python/v2024/models/attribute-change
tags: ['SDK', 'Software Development Kit', 'AttributeChange', 'V2024AttributeChange']
---

# AttributeChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the attribute name | [optional] 
**previous_value** | **str** | the old value of attribute | [optional] 
**new_value** | **str** | the new value of attribute | [optional] 
}

## Example

```python
from sailpoint.v2024.models.attribute_change import AttributeChange

attribute_change = AttributeChange(
name='firstname',
previous_value='adam',
new_value='zampa'
)

```
[[Back to top]](#) 


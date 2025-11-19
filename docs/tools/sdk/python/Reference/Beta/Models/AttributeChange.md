---
id: beta-attribute-change
title: AttributeChange
pagination_label: AttributeChange
sidebar_label: AttributeChange
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeChange', 'BetaAttributeChange'] 
slug: /tools/sdk/python/beta/models/attribute-change
tags: ['SDK', 'Software Development Kit', 'AttributeChange', 'BetaAttributeChange']
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
from sailpoint.beta.models.attribute_change import AttributeChange

attribute_change = AttributeChange(
name='firstname',
previous_value='adam',
new_value='zampa'
)

```
[[Back to top]](#) 


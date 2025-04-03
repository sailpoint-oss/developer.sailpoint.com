---
id: v2024-attributes-changed
title: AttributesChanged
pagination_label: AttributesChanged
sidebar_label: AttributesChanged
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributesChanged', 'V2024AttributesChanged'] 
slug: /tools/sdk/python/v2024/models/attributes-changed
tags: ['SDK', 'Software Development Kit', 'AttributesChanged', 'V2024AttributesChanged']
---

# AttributesChanged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changes** | [**[]AttributeChange**](attribute-change) |  | [optional] 
**event_type** | **str** | the event type | [optional] 
**identity_id** | **str** | the identity id | [optional] 
**dt** | **str** | the date of event | [optional] 
}

## Example

```python
from sailpoint.v2024.models.attributes_changed import AttributesChanged

attributes_changed = AttributesChanged(
changes=[
                    {name=firstname, previousValue=adam, newValue=zampa}
                    ],
event_type='',
identity_id='',
dt=''
)

```
[[Back to top]](#) 


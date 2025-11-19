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
**attribute_changes** | [**[]AttributeChange**](attribute-change) |  | [required]
**event_type** | **str** | the event type | [optional] 
**identity_id** | **str** | the identity id | [optional] 
**date_time** | **str** | the date of event | [optional] 
}

## Example

```python
from sailpoint.v2024.models.attributes_changed import AttributesChanged

attributes_changed = AttributesChanged(
attribute_changes=[
                    sailpoint.v2024.models.attribute_change.Attribute Change(
                        name = 'firstname', 
                        previous_value = 'adam', 
                        new_value = 'zampa', )
                    ],
event_type='AttributesChanged',
identity_id='8c190e6787aa4ed9a90bd9d5344523fb',
date_time='2019-03-08T22:37:33.901Z'
)

```
[[Back to top]](#) 


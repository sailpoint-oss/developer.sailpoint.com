---
id: beta-attributes-changed
title: AttributesChanged
pagination_label: AttributesChanged
sidebar_label: AttributesChanged
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributesChanged', 'BetaAttributesChanged'] 
slug: /tools/sdk/python/beta/models/attributes-changed
tags: ['SDK', 'Software Development Kit', 'AttributesChanged', 'BetaAttributesChanged']
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
from sailpoint.beta.models.attributes_changed import AttributesChanged

attributes_changed = AttributesChanged(
attribute_changes=[
                    sailpoint.beta.models.attribute_change.Attribute Change(
                        name = 'firstname', 
                        previous_value = 'adam', 
                        new_value = 'zampa', )
                    ],
event_type='AttributesChanged',
identity_id='8a80828f643d484f01643e14202e206f',
date_time='2019-03-08T22:37:33.901Z'
)

```
[[Back to top]](#) 


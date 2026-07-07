---
id: attributeschanged
title: Attributeschanged
pagination_label: Attributeschanged
sidebar_label: Attributeschanged
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Attributeschanged', 'Attributeschanged'] 
slug: /tools/sdk/python/identity-history/models/attributeschanged
tags: ['SDK', 'Software Development Kit', 'Attributeschanged', 'Attributeschanged']
---

# Attributeschanged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_changes** | [**[]Attributechange**](attributechange) |  | [required]
**event_type** | **str** | the event type | [optional] 
**identity_id** | **str** | the identity id | [optional] 
**date_time** | **str** | the date of event | [optional] 
}

## Example

```python
from sailpoint.identity_history.models.attributeschanged import Attributeschanged

attributeschanged = Attributeschanged(
attribute_changes=[
                    sailpoint.identity_history.models.attribute_change.Attribute Change(
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


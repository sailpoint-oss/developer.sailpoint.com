---
id: v2024-display-reference
title: DisplayReference
pagination_label: DisplayReference
sidebar_label: DisplayReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DisplayReference', 'V2024DisplayReference'] 
slug: /tools/sdk/python/v2024/models/display-reference
tags: ['SDK', 'Software Development Kit', 'DisplayReference', 'V2024DisplayReference']
---

# DisplayReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**display_name** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.display_reference import DisplayReference

display_reference = DisplayReference(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
display_name='John Q. Doe'
)

```
[[Back to top]](#) 


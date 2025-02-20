---
id: v2024-transform-definition
title: TransformDefinition
pagination_label: TransformDefinition
sidebar_label: TransformDefinition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TransformDefinition', 'V2024TransformDefinition'] 
slug: /tools/sdk/python/v2024/models/transform-definition
tags: ['SDK', 'Software Development Kit', 'TransformDefinition', 'V2024TransformDefinition']
---

# TransformDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of the transform definition. | [optional] 
**attributes** | **map[string]object** | Arbitrary key-value pairs to store any metadata for the object | [optional] 
}

## Example

```python
from sailpoint.v2024.models.transform_definition import TransformDefinition

transform_definition = TransformDefinition(
type='accountAttribute',
attributes={attributeName=e-mail, sourceName=MySource, sourceId=2c9180877a826e68017a8c0b03da1a53}
)

```
[[Back to top]](#) 


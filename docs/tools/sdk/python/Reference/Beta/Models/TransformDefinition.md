---
id: beta-transform-definition
title: TransformDefinition
pagination_label: TransformDefinition
sidebar_label: TransformDefinition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TransformDefinition', 'BetaTransformDefinition'] 
slug: /tools/sdk/python/beta/models/transform-definition
tags: ['SDK', 'Software Development Kit', 'TransformDefinition', 'BetaTransformDefinition']
---

# TransformDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Transform definition type. | [optional] 
**attributes** | **map[string]object** | Arbitrary key-value pairs to store any metadata for the object | [optional] 
}

## Example

```python
from sailpoint.beta.models.transform_definition import TransformDefinition

transform_definition = TransformDefinition(
type='accountAttribute',
attributes={attributeName=e-mail, sourceName=MySource, sourceId=2c9180877a826e68017a8c0b03da1a53}
)

```
[[Back to top]](#) 


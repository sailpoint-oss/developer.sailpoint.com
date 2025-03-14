---
id: beta-transform-definition1
title: TransformDefinition1
pagination_label: TransformDefinition1
sidebar_label: TransformDefinition1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TransformDefinition1', 'BetaTransformDefinition1'] 
slug: /tools/sdk/python/beta/models/transform-definition1
tags: ['SDK', 'Software Development Kit', 'TransformDefinition1', 'BetaTransformDefinition1']
---

# TransformDefinition1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Transform definition type. | [optional] 
**attributes** | **map[string]object** | Arbitrary key-value pairs to store any metadata for the object | [optional] 
}

## Example

```python
from sailpoint.beta.models.transform_definition1 import TransformDefinition1

transform_definition1 = TransformDefinition1(
type='accountAttribute',
attributes={attributeName=e-mail, sourceName=MySource, sourceId=2c9180877a826e68017a8c0b03da1a53}
)

```
[[Back to top]](#) 


---
id: attributevaluedto
title: Attributevaluedto
pagination_label: Attributevaluedto
sidebar_label: Attributevaluedto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Attributevaluedto', 'Attributevaluedto'] 
slug: /tools/sdk/python/access-model-metadata/models/attributevaluedto
tags: ['SDK', 'Software Development Kit', 'Attributevaluedto', 'Attributevaluedto']
---

# Attributevaluedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Technical name of the Attribute value. This is unique and cannot be changed after creation. | [optional] 
**name** | **str** | The display name of the Attribute value. | [optional] 
**status** | **str** | The status of the Attribute value. | [optional] 
}

## Example

```python
from sailpoint.access_model_metadata.models.attributevaluedto import Attributevaluedto

attributevaluedto = Attributevaluedto(
value='public',
name='Public',
status='active'
)

```
[[Back to top]](#) 


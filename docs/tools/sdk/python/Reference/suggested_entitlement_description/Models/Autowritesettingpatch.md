---
id: autowritesettingpatch
title: Autowritesettingpatch
pagination_label: Autowritesettingpatch
sidebar_label: Autowritesettingpatch
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Autowritesettingpatch', 'Autowritesettingpatch'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/autowritesettingpatch
tags: ['SDK', 'Software Development Kit', 'Autowritesettingpatch', 'Autowritesettingpatch']
---

# Autowritesettingpatch

Patch operation for Auto-Write Setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'replace' ] | The operation to perform. Only \"replace\" is supported. | [required]
**path** | **str** | The field to update. Allowed values: /enabled, /includedSourceIds, /excludedSourceIds | [required]
**value** | [**AutowritesettingpatchValue**](autowritesettingpatch-value) |  | [required]
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.autowritesettingpatch import Autowritesettingpatch

autowritesettingpatch = Autowritesettingpatch(
op='replace',
path='/enabled',
value=true
)

```
[[Back to top]](#) 


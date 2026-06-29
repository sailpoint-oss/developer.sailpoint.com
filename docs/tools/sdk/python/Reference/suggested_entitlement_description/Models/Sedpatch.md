---
id: sedpatch
title: Sedpatch
pagination_label: Sedpatch
sidebar_label: Sedpatch
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sedpatch', 'Sedpatch'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/sedpatch
tags: ['SDK', 'Software Development Kit', 'Sedpatch', 'Sedpatch']
---

# Sedpatch

Patch for Suggested Entitlement Description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **str** | desired operation | [optional] 
**path** | **str** | field to be patched | [optional] 
**value** | **object** | value to replace with | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.sedpatch import Sedpatch

sedpatch = Sedpatch(
op='replace',
path='status',
value=approved
)

```
[[Back to top]](#) 


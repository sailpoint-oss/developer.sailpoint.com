---
id: v2024-sed-patch
title: SedPatch
pagination_label: SedPatch
sidebar_label: SedPatch
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SedPatch', 'V2024SedPatch'] 
slug: /tools/sdk/python/v2024/models/sed-patch
tags: ['SDK', 'Software Development Kit', 'SedPatch', 'V2024SedPatch']
---

# SedPatch

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
from sailpoint.v2024.models.sed_patch import SedPatch

sed_patch = SedPatch(
op='replace',
path='status',
value=approved
)

```
[[Back to top]](#) 


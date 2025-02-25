---
id: beta-sed-patch
title: SedPatch
pagination_label: SedPatch
sidebar_label: SedPatch
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SedPatch', 'BetaSedPatch'] 
slug: /tools/sdk/python/beta/models/sed-patch
tags: ['SDK', 'Software Development Kit', 'SedPatch', 'BetaSedPatch']
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
from sailpoint.beta.models.sed_patch import SedPatch

sed_patch = SedPatch(
op='replace',
path='status',
value=approved
)

```
[[Back to top]](#) 


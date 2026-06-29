---
id: accessmodelmetadata-values-inner
title: AccessmodelmetadataValuesInner
pagination_label: AccessmodelmetadataValuesInner
sidebar_label: AccessmodelmetadataValuesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessmodelmetadataValuesInner', 'AccessmodelmetadataValuesInner'] 
slug: /tools/sdk/python/accounts/models/accessmodelmetadata-values-inner
tags: ['SDK', 'Software Development Kit', 'AccessmodelmetadataValuesInner', 'AccessmodelmetadataValuesInner']
---

# AccessmodelmetadataValuesInner

An individual value to assign to the metadata item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The value to assign to the metdata item | [optional] 
**name** | **str** | Display name of the value | [optional] 
**status** | **str** | The status of the individual value | [optional] 
}

## Example

```python
from sailpoint.accounts.models.accessmodelmetadata_values_inner import AccessmodelmetadataValuesInner

accessmodelmetadata_values_inner = AccessmodelmetadataValuesInner(
value='development',
name='Development',
status='active'
)

```
[[Back to top]](#) 


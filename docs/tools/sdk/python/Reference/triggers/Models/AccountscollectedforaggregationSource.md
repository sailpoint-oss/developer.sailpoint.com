---
id: accountscollectedforaggregation-source
title: AccountscollectedforaggregationSource
pagination_label: AccountscollectedforaggregationSource
sidebar_label: AccountscollectedforaggregationSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountscollectedforaggregationSource', 'AccountscollectedforaggregationSource'] 
slug: /tools/sdk/python/triggers/models/accountscollectedforaggregation-source
tags: ['SDK', 'Software Development Kit', 'AccountscollectedforaggregationSource', 'AccountscollectedforaggregationSource']
---

# AccountscollectedforaggregationSource

Reference to the source that has been aggregated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the object to which this reference applies | [required]
**type** |  **Enum** [  'SOURCE' ] | The type of object that is referenced | [required]
**name** | **str** | Human-readable display name of the object to which this reference applies | [required]
}

## Example

```python
from sailpoint.triggers.models.accountscollectedforaggregation_source import AccountscollectedforaggregationSource

accountscollectedforaggregation_source = AccountscollectedforaggregationSource(
id='4e4d982dddff4267ab12f0f1e72b5a6d',
type='SOURCE',
name='Corporate Active Directory'
)

```
[[Back to top]](#) 


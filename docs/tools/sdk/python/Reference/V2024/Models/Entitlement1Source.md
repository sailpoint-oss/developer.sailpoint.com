---
id: v2024-entitlement1-source
title: Entitlement1Source
pagination_label: Entitlement1Source
sidebar_label: Entitlement1Source
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlement1Source', 'V2024Entitlement1Source'] 
slug: /tools/sdk/python/v2024/models/entitlement1-source
tags: ['SDK', 'Software Development Kit', 'Entitlement1Source', 'V2024Entitlement1Source']
---

# Entitlement1Source


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source ID | [optional] 
**type** | **str** | The source type, will always be \"SOURCE\" | [optional] 
**name** | **str** | The source name | [optional] 
}

## Example

```python
from sailpoint.v2024.models.entitlement1_source import Entitlement1Source

entitlement1_source = Entitlement1Source(
id='2c9180827ca885d7017ca8ce28a000eb',
type='SOURCE',
name='ODS-AD-Source'
)

```
[[Back to top]](#) 


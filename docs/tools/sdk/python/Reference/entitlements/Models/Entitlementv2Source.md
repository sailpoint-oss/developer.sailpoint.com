---
id: entitlementv2-source
title: Entitlementv2Source
pagination_label: Entitlementv2Source
sidebar_label: Entitlementv2Source
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementv2Source', 'Entitlementv2Source'] 
slug: /tools/sdk/python/entitlements/models/entitlementv2-source
tags: ['SDK', 'Software Development Kit', 'Entitlementv2Source', 'Entitlementv2Source']
---

# Entitlementv2Source


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source ID | [optional] 
**type** | **str** | The source type, will always be \"SOURCE\" | [optional] 
**name** | **str** | The source name | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.entitlementv2_source import Entitlementv2Source

entitlementv2_source = Entitlementv2Source(
id='2c9180827ca885d7017ca8ce28a000eb',
type='SOURCE',
name='ODS-AD-Source'
)

```
[[Back to top]](#) 


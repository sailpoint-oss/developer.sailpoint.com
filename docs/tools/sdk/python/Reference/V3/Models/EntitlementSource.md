---
id: entitlement-source
title: EntitlementSource
pagination_label: EntitlementSource
sidebar_label: EntitlementSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementSource', 'EntitlementSource'] 
slug: /tools/sdk/python/v3/models/entitlement-source
tags: ['SDK', 'Software Development Kit', 'EntitlementSource', 'EntitlementSource']
---

# EntitlementSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source ID | [optional] 
**type** | **str** | The source type, will always be \"SOURCE\" | [optional] 
**name** | **str** | The source name | [optional] 
}

## Example

```python
from sailpoint.v3.models.entitlement_source import EntitlementSource

entitlement_source = EntitlementSource(
id='2c9180827ca885d7017ca8ce28a000eb',
type='SOURCE',
name='ODS-AD-Source'
)

```
[[Back to top]](#) 


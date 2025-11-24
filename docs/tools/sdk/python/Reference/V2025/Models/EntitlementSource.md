---
id: v2025-entitlement-source
title: EntitlementSource
pagination_label: EntitlementSource
sidebar_label: EntitlementSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementSource', 'V2025EntitlementSource'] 
slug: /tools/sdk/python/v2025/models/entitlement-source
tags: ['SDK', 'Software Development Kit', 'EntitlementSource', 'V2025EntitlementSource']
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
from sailpoint.v2025.models.entitlement_source import EntitlementSource

entitlement_source = EntitlementSource(
id='2c9180827ca885d7017ca8ce28a000eb',
type='SOURCE',
name='Corporate Active Directory'
)

```
[[Back to top]](#) 


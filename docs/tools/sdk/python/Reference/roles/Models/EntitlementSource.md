---
id: entitlement-source
title: EntitlementSource
pagination_label: EntitlementSource
sidebar_label: EntitlementSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementSource', 'EntitlementSource'] 
slug: /tools/sdk/python/roles/models/entitlement-source
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
from sailpoint.roles.models.entitlement_source import EntitlementSource

entitlement_source = EntitlementSource(
id='2c9180827ca885d7017ca8ce28a000eb',
type='SOURCE',
name='Corporate Active Directory'
)

```
[[Back to top]](#) 


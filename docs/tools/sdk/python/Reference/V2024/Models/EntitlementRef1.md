---
id: v2024-entitlement-ref1
title: EntitlementRef1
pagination_label: EntitlementRef1
sidebar_label: EntitlementRef1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementRef1', 'V2024EntitlementRef1'] 
slug: /tools/sdk/python/v2024/models/entitlement-ref1
tags: ['SDK', 'Software Development Kit', 'EntitlementRef1', 'V2024EntitlementRef1']
---

# EntitlementRef1

Entitlement including a specific set of access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT' ] | Entitlement's DTO type. | [optional] 
**id** | **str** | Entitlement's ID. | [optional] 
**name** | **str** | Entitlement's display name. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.entitlement_ref1 import EntitlementRef1

entitlement_ref1 = EntitlementRef1(
type='ENTITLEMENT',
id='2c91809773dee32014e13e122092014e',
name='CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local'
)

```
[[Back to top]](#) 


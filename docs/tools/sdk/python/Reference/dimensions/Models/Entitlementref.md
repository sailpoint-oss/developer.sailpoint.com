---
id: entitlementref
title: Entitlementref
pagination_label: Entitlementref
sidebar_label: Entitlementref
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementref', 'Entitlementref'] 
slug: /tools/sdk/python/dimensions/models/entitlementref
tags: ['SDK', 'Software Development Kit', 'Entitlementref', 'Entitlementref']
---

# Entitlementref

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
from sailpoint.dimensions.models.entitlementref import Entitlementref

entitlementref = Entitlementref(
type='ENTITLEMENT',
id='2c91809773dee32014e13e122092014e',
name='CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local'
)

```
[[Back to top]](#) 


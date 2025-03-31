---
id: beta-entitlement-ref
title: EntitlementRef
pagination_label: EntitlementRef
sidebar_label: EntitlementRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementRef', 'BetaEntitlementRef'] 
slug: /tools/sdk/python/beta/models/entitlement-ref
tags: ['SDK', 'Software Development Kit', 'EntitlementRef', 'BetaEntitlementRef']
---

# EntitlementRef

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
from sailpoint.beta.models.entitlement_ref import EntitlementRef

entitlement_ref = EntitlementRef(
type='ENTITLEMENT',
id='2c91809773dee32014e13e122092014e',
name='CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local'
)

```
[[Back to top]](#) 


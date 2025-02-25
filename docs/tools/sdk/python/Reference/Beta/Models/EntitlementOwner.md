---
id: beta-entitlement-owner
title: EntitlementOwner
pagination_label: EntitlementOwner
sidebar_label: EntitlementOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementOwner', 'BetaEntitlementOwner'] 
slug: /tools/sdk/python/beta/models/entitlement-owner
tags: ['SDK', 'Software Development Kit', 'EntitlementOwner', 'BetaEntitlementOwner']
---

# EntitlementOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The owner id for the entitlement | [optional] 
**name** | **str** | The owner name for the entitlement | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | The type of the owner. Initially only type IDENTITY is supported | [optional] 
}

## Example

```python
from sailpoint.beta.models.entitlement_owner import EntitlementOwner

entitlement_owner = EntitlementOwner(
id='2a2fdacca5e345f18bf7970cfbb8fec2',
name='identity 1',
type='IDENTITY'
)

```
[[Back to top]](#) 


---
id: entitlement-owner
title: EntitlementOwner
pagination_label: EntitlementOwner
sidebar_label: EntitlementOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementOwner', 'EntitlementOwner'] 
slug: /tools/sdk/python/v3/models/entitlement-owner
tags: ['SDK', 'Software Development Kit', 'EntitlementOwner', 'EntitlementOwner']
---

# EntitlementOwner

The identity that owns the entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identity ID | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | The type of object | [optional] 
**name** | **str** | The display name of the identity | [optional] 
}

## Example

```python
from sailpoint.v3.models.entitlement_owner import EntitlementOwner

entitlement_owner = EntitlementOwner(
id='2c9180827ca885d7017ca8ce28a000eb',
type='IDENTITY',
name='john.doe'
)

```
[[Back to top]](#) 


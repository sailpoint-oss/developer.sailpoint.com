---
id: entitlementv2-owner
title: Entitlementv2Owner
pagination_label: Entitlementv2Owner
sidebar_label: Entitlementv2Owner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementv2Owner', 'Entitlementv2Owner'] 
slug: /tools/sdk/python/entitlements/models/entitlementv2-owner
tags: ['SDK', 'Software Development Kit', 'Entitlementv2Owner', 'Entitlementv2Owner']
---

# Entitlementv2Owner

The identity that owns the entitlementv1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identity ID | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | The type of object | [optional] 
**name** | **str** | The display name of the identity | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.entitlementv2_owner import Entitlementv2Owner

entitlementv2_owner = Entitlementv2Owner(
id='2c9180827ca885d7017ca8ce28a000eb',
type='IDENTITY',
name='john.doe'
)

```
[[Back to top]](#) 


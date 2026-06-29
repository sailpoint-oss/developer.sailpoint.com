---
id: entitlementv2-privilege-level
title: Entitlementv2PrivilegeLevel
pagination_label: Entitlementv2PrivilegeLevel
sidebar_label: Entitlementv2PrivilegeLevel
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementv2PrivilegeLevel', 'Entitlementv2PrivilegeLevel'] 
slug: /tools/sdk/python/entitlements/models/entitlementv2-privilege-level
tags: ['SDK', 'Software Development Kit', 'Entitlementv2PrivilegeLevel', 'Entitlementv2PrivilegeLevel']
---

# Entitlementv2PrivilegeLevel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct** |  **Enum** [  'HIGH',    'LOW',    'MEDIUM',    'NONE' ] | Direct privilege level assigned to the entitlementv1 | [optional] 
**set_by** | **str** | User or process that set the privilege level | [optional] 
**set_by_type** |  **Enum** [  'OVERRIDE',    'CUSTOM_CRITERIA',    'CONNECTOR_CRITERIA',    'SINGLE_LEVEL_CRITERIA' ] | Method by which the privilege level was set | [optional] 
**inherited** |  **Enum** [  'HIGH',    'LOW',    'MEDIUM',    'NONE' ] | Inherited privilege level on the entitlementv1, if any | [optional] 
**effective** |  **Enum** [  'HIGH',    'LOW',    'MEDIUM',    'NONE' ] | Effective privilege level assigned to the entitlementv1 | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.entitlementv2_privilege_level import Entitlementv2PrivilegeLevel

entitlementv2_privilege_level = Entitlementv2PrivilegeLevel(
direct='HIGH',
set_by='SAILPOINT_MIGRATION',
set_by_type='OVERRIDE',
inherited='HIGH',
effective='HIGH'
)

```
[[Back to top]](#) 


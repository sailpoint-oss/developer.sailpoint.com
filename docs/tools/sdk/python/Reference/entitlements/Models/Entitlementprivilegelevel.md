---
id: entitlementprivilegelevel
title: Entitlementprivilegelevel
pagination_label: Entitlementprivilegelevel
sidebar_label: Entitlementprivilegelevel
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementprivilegelevel', 'Entitlementprivilegelevel'] 
slug: /tools/sdk/python/entitlements/models/entitlementprivilegelevel
tags: ['SDK', 'Software Development Kit', 'Entitlementprivilegelevel', 'Entitlementprivilegelevel']
---

# Entitlementprivilegelevel


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
from sailpoint.entitlements.models.entitlementprivilegelevel import Entitlementprivilegelevel

entitlementprivilegelevel = Entitlementprivilegelevel(
direct='HIGH',
set_by='SAILPOINT_MIGRATION',
set_by_type='OVERRIDE',
inherited='HIGH',
effective='HIGH'
)

```
[[Back to top]](#) 


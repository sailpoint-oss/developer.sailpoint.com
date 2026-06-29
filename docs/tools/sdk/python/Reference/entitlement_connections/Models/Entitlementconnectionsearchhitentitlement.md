---
id: entitlementconnectionsearchhitentitlement
title: Entitlementconnectionsearchhitentitlement
pagination_label: Entitlementconnectionsearchhitentitlement
sidebar_label: Entitlementconnectionsearchhitentitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementconnectionsearchhitentitlement', 'Entitlementconnectionsearchhitentitlement'] 
slug: /tools/sdk/python/entitlement-connections/models/entitlementconnectionsearchhitentitlement
tags: ['SDK', 'Software Development Kit', 'Entitlementconnectionsearchhitentitlement', 'Entitlementconnectionsearchhitentitlement']
---

# Entitlementconnectionsearchhitentitlement

Entitlement object embedded in entitlement connection search responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Entitlement identifier. | [optional] 
**name** | **str** | Entitlement name. | [optional] 
**display_name** | **str** | Human-readable entitlement label. | [optional] 
**description** | **str** | Entitlement description. | [optional] 
**attribute** | **str** | Source attribute carrying entitlement values. | [optional] 
**value** | **str** | Source entitlement value. | [optional] 
**source_schema_object_type** | **str** | Source schema object type for the entitlement. | [optional] 
**privilege_level** | [**EntitlementconnectionsearchhitentitlementPrivilegeLevel**](entitlementconnectionsearchhitentitlement-privilege-level) |  | [optional] 
}

## Example

```python
from sailpoint.entitlement_connections.models.entitlementconnectionsearchhitentitlement import Entitlementconnectionsearchhitentitlement

entitlementconnectionsearchhitentitlement = Entitlementconnectionsearchhitentitlement(
id='2c918085804e1a0601806289c30a66de',
name='Launcher',
display_name='Launcher',
description='description of launcher entitlement',
attribute='memberOf',
value='CN=productivity-bryants-org-1,OU=Groups,dc=flatfile,dc=endtoend,dc=com',
source_schema_object_type='ENTITLEMENT',
privilege_level=sailpoint.entitlement_connections.models.entitlementconnectionsearchhitentitlement_privilege_level.entitlementconnectionsearchhitentitlement_privilegeLevel(
                    effective = 'HIGH', )
)

```
[[Back to top]](#) 


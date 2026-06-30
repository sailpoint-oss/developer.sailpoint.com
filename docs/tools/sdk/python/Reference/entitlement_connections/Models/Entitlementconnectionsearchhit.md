---
id: entitlementconnectionsearchhit
title: Entitlementconnectionsearchhit
pagination_label: Entitlementconnectionsearchhit
sidebar_label: Entitlementconnectionsearchhit
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementconnectionsearchhit', 'Entitlementconnectionsearchhit'] 
slug: /tools/sdk/python/entitlement-connections/models/entitlementconnectionsearchhit
tags: ['SDK', 'Software Development Kit', 'Entitlementconnectionsearchhit', 'Entitlementconnectionsearchhit']
---

# Entitlementconnectionsearchhit

Entitlement connection record returned by search-backed list endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Connection ID as represented in search results. | [optional] 
**identity** | **map[string]object** | Identity summary object from search index. | [optional] 
**machine_identity** | **map[string]object** | Machine identity summary object when available. | [optional] 
**account** | **map[string]object** | Account summary object. | [optional] 
**entitlement** | [**Entitlementconnectionsearchhitentitlement**](entitlementconnectionsearchhitentitlement) |  | [optional] 
**source** | **map[string]object** | Source summary object. | [optional] 
**state** | **map[string]object** | Connection state object. | [optional] 
**jit** | **map[string]object** | JIT timestamps for lifecycle events. | [optional] 
**standalone** | **bool** | Indicates whether the connection is marked as standalone. | [optional] [default to False]
**type** |  **Enum** [  'JIT',    'STANDING',    'NA' ] | Connection type classification. | [optional] 
}

## Example

```python
from sailpoint.entitlement_connections.models.entitlementconnectionsearchhit import Entitlementconnectionsearchhit

entitlementconnectionsearchhit = Entitlementconnectionsearchhit(
id='6c692d9972f8400ca4560a68f62c4c5f',
identity={"id":"2c918084804e1a0c0180628967085bc0","type":"IDENTITY","name":"Donna Helpdesk21b7","alias":"Donna.Helpdesk21b7"},
machine_identity={"id":"2c918084804e1a0c0180628967085bc1","type":"MACHINE","name":"service123"},
account={"id":"17a0e011f3fc4b43a19ddf13d6b92ede","name":"account-name123"},
entitlement=sailpoint.entitlement_connections.models.entitlement_connection_search_hit_entitlement.EntitlementConnectionSearchHitEntitlement(
                    id = '2c918085804e1a0601806289c30a66de', 
                    name = 'Launcher', 
                    display_name = 'Launcher', 
                    description = 'description of launcher entitlement', 
                    attribute = 'memberOf', 
                    value = 'CN=productivity-bryants-org-1,OU=Groups,dc=flatfile,dc=endtoend,dc=com', 
                    source_schema_object_type = 'ENTITLEMENT', 
                    privilege_level = sailpoint.entitlement_connections.models.entitlementconnectionsearchhitentitlement_privilege_level.entitlementconnectionsearchhitentitlement_privilegeLevel(
                        effective = 'HIGH', ), ),
source={"id":"a8c0036f95b347d5a3a55a81f515f8ef","name":"ODS-AD-FF-Source"},
state={"value":"Available","changed":"2025-10-30T15:02:12.345-05:00"},
jit={"activation":"2025-12-03T10:15:30+01:00","provisioned":"2025-12-03T10:15:30+01:00","deactivation":"2025-12-03T10:15:30+01:00","deprovisioned":"2025-12-03T10:15:30+01:00","expiration":"2025-12-03T10:15:30+01:00"},
standalone=True,
type='JIT'
)

```
[[Back to top]](#) 


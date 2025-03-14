---
id: v2024-role-mining-entitlement
title: RoleMiningEntitlement
pagination_label: RoleMiningEntitlement
sidebar_label: RoleMiningEntitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningEntitlement', 'V2024RoleMiningEntitlement'] 
slug: /tools/sdk/python/v2024/models/role-mining-entitlement
tags: ['SDK', 'Software Development Kit', 'RoleMiningEntitlement', 'V2024RoleMiningEntitlement']
---

# RoleMiningEntitlement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_ref** | [**RoleMiningEntitlementRef**](role-mining-entitlement-ref) |  | [optional] 
**name** | **str** | Name of the entitlement | [optional] 
**application_name** | **str** | Application name of the entitlement | [optional] 
**identity_count** | **int** | The number of identities with this entitlement in a role. | [optional] 
**popularity** | **float** | The % popularity of this entitlement in a role. | [optional] 
**popularity_in_org** | **float** | The % popularity of this entitlement in the org. | [optional] 
**source_id** | **str** | The ID of the source/application. | [optional] 
**activity_source_state** | **str** | The status of activity data for the source.   Value is complete or notComplete. | [optional] 
**source_usage_percent** | **float** | The percentage of identities in the potential role that have usage of the source/application of this entitlement. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_mining_entitlement import RoleMiningEntitlement

role_mining_entitlement = RoleMiningEntitlement(
entitlement_ref=sailpoint.v2024.models.role_mining_entitlement_ref.RoleMiningEntitlementRef(
                    id = '2c91808a7e95e6e0017e96e2086206c8', 
                    name = 'App.entitlement.1', 
                    description = 'Entitlement 1', 
                    attribute = 'groups', ),
name='Add/modify/delete users',
application_name='AppName',
identity_count=45,
popularity=65.2,
popularity_in_org=35.8,
source_id='2c9180877620c1460176267f336a106f',
activity_source_state='complete',
source_usage_percent=65.6
)

```
[[Back to top]](#) 


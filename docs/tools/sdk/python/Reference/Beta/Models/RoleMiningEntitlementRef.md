---
id: beta-role-mining-entitlement-ref
title: RoleMiningEntitlementRef
pagination_label: RoleMiningEntitlementRef
sidebar_label: RoleMiningEntitlementRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningEntitlementRef', 'BetaRoleMiningEntitlementRef'] 
slug: /tools/sdk/python/beta/models/role-mining-entitlement-ref
tags: ['SDK', 'Software Development Kit', 'RoleMiningEntitlementRef', 'BetaRoleMiningEntitlementRef']
---

# RoleMiningEntitlementRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the entitlement | [optional] 
**name** | **str** | Name of the entitlement | [optional] 
**description** | **str** | Description forthe entitlement | [optional] 
**attribute** | **str** | The entitlement attribute | [optional] 
}

## Example

```python
from sailpoint.beta.models.role_mining_entitlement_ref import RoleMiningEntitlementRef

role_mining_entitlement_ref = RoleMiningEntitlementRef(
id='2c91808a7e95e6e0017e96e2086206c8',
name='App.entitlement.1',
description='Entitlement 1',
attribute='groups'
)

```
[[Back to top]](#) 


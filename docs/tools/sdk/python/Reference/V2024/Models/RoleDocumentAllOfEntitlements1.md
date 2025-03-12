---
id: v2024-role-document-all-of-entitlements1
title: RoleDocumentAllOfEntitlements1
pagination_label: RoleDocumentAllOfEntitlements1
sidebar_label: RoleDocumentAllOfEntitlements1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleDocumentAllOfEntitlements1', 'V2024RoleDocumentAllOfEntitlements1'] 
slug: /tools/sdk/python/v2024/models/role-document-all-of-entitlements1
tags: ['SDK', 'Software Development Kit', 'RoleDocumentAllOfEntitlements1', 'V2024RoleDocumentAllOfEntitlements1']
---

# RoleDocumentAllOfEntitlements1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_permissions** | **bool** | Indicates whether the entitlement has permissions. | [optional] [default to False]
**description** | **str** | Entitlement's description. | [optional] 
**attribute** | **str** | Entitlement attribute's name. | [optional] 
**value** | **str** | Entitlement's value. | [optional] 
**var_schema** | **str** | Entitlement's schema. | [optional] 
**privileged** | **bool** | Indicates whether the entitlement is privileged. | [optional] [default to False]
**id** | **str** | Entitlement's ID. | [optional] 
**name** | **str** | Entitlement's name. | [optional] 
**source_schema_object_type** | **str** | Schema objectType. | [optional] 
**hash** | **str** | Read-only calculated hash value of an entitlement. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_document_all_of_entitlements1 import RoleDocumentAllOfEntitlements1

role_document_all_of_entitlements1 = RoleDocumentAllOfEntitlements1(
has_permissions=False,
description='Cloud engineering',
attribute='memberOf',
value='CN=Cloud Engineering,DC=sailpoint,DC=COM',
var_schema='group',
privileged=False,
id='2c918084575812550157589064f33b89',
name='CN=Cloud Engineering,DC=sailpoint,DC=COM',
source_schema_object_type='group',
hash='c6fab95235584cca98a454a2f51e5683bc77d6a0'
)

```
[[Back to top]](#) 


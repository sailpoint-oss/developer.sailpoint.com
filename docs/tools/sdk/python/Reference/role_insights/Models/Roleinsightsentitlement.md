---
id: roleinsightsentitlement
title: Roleinsightsentitlement
pagination_label: Roleinsightsentitlement
sidebar_label: Roleinsightsentitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleinsightsentitlement', 'Roleinsightsentitlement'] 
slug: /tools/sdk/python/role-insights/models/roleinsightsentitlement
tags: ['SDK', 'Software Development Kit', 'Roleinsightsentitlement', 'Roleinsightsentitlement']
---

# Roleinsightsentitlement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the entitlement | [optional] 
**id** | **str** | Id of the entitlement | [optional] 
**description** | **str** | Description for the entitlement | [optional] 
**source** | **str** | Source or the application for the entitlement | [optional] 
**attribute** | **str** | Attribute for the entitlement | [optional] 
**value** | **str** | Attribute value for the entitlement | [optional] 
}

## Example

```python
from sailpoint.role_insights.models.roleinsightsentitlement import Roleinsightsentitlement

roleinsightsentitlement = Roleinsightsentitlement(
name='Administrator',
id='8c190e67-87aa-4ed9-a90b-d9d5344523fb',
description='Full administrative access to IdentityNow',
source='IdentityNow',
attribute='assignedGroups',
value='ORG_ADMIN'
)

```
[[Back to top]](#) 


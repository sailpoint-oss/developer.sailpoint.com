---
id: roleinsightsentitlementchanges
title: Roleinsightsentitlementchanges
pagination_label: Roleinsightsentitlementchanges
sidebar_label: Roleinsightsentitlementchanges
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleinsightsentitlementchanges', 'Roleinsightsentitlementchanges'] 
slug: /tools/sdk/python/role-insights/models/roleinsightsentitlementchanges
tags: ['SDK', 'Software Development Kit', 'Roleinsightsentitlementchanges', 'Roleinsightsentitlementchanges']
---

# Roleinsightsentitlementchanges


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the entitlement | [optional] 
**id** | **str** | Id of the entitlement | [optional] 
**description** | **str** | Description for the entitlement | [optional] 
**attribute** | **str** | Attribute for the entitlement | [optional] 
**value** | **str** | Attribute value for the entitlement | [optional] 
**source** | **str** | Source or the application for the entitlement | [optional] 
**insight** | [**Roleinsightsinsight**](roleinsightsinsight) |  | [optional] 
}

## Example

```python
from sailpoint.role_insights.models.roleinsightsentitlementchanges import Roleinsightsentitlementchanges

roleinsightsentitlementchanges = Roleinsightsentitlementchanges(
name='Administrator',
id='8c190e67-87aa-4ed9-a90b-d9d5344523fb',
description='Full administrative access to IdentityNow',
attribute='assignedGroups',
value='ORG_ADMIN',
source='IdentityNow',
insight=sailpoint.role_insights.models.role_insights_insight.Role Insights Insight(
                    type = 'ADD', 
                    identities_with_access = 850, 
                    identities_impacted = 150, 
                    total_number_of_identities = 1000, 
                    impacted_identity_names = '', )
)

```
[[Back to top]](#) 


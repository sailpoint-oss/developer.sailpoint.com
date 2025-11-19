---
id: beta-role-insights-entitlement-changes
title: RoleInsightsEntitlementChanges
pagination_label: RoleInsightsEntitlementChanges
sidebar_label: RoleInsightsEntitlementChanges
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleInsightsEntitlementChanges', 'BetaRoleInsightsEntitlementChanges'] 
slug: /tools/sdk/python/beta/models/role-insights-entitlement-changes
tags: ['SDK', 'Software Development Kit', 'RoleInsightsEntitlementChanges', 'BetaRoleInsightsEntitlementChanges']
---

# RoleInsightsEntitlementChanges


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the entitlement | [optional] 
**id** | **str** | Id of the entitlement | [optional] 
**description** | **str** | Description for the entitlement | [optional] 
**attribute** | **str** | Attribute for the entitlement | [optional] 
**value** | **str** | Attribute value for the entitlement | [optional] 
**source** | **str** | Source or the application for the entitlement | [optional] 
**insight** | [**RoleInsightsInsight**](role-insights-insight) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.role_insights_entitlement_changes import RoleInsightsEntitlementChanges

role_insights_entitlement_changes = RoleInsightsEntitlementChanges(
name='',
id='',
description='',
attribute='',
value='',
source='',
insight=sailpoint.beta.models.role_insights_insight.Role Insights Insight(
                    type = 'ADD', 
                    identities_with_access = 850, 
                    identities_impacted = 150, 
                    total_number_of_identities = 1000, 
                    impacted_identity_names = '', )
)

```
[[Back to top]](#) 


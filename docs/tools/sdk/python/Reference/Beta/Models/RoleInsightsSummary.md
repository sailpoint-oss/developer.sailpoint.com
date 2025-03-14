---
id: beta-role-insights-summary
title: RoleInsightsSummary
pagination_label: RoleInsightsSummary
sidebar_label: RoleInsightsSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleInsightsSummary', 'BetaRoleInsightsSummary'] 
slug: /tools/sdk/python/beta/models/role-insights-summary
tags: ['SDK', 'Software Development Kit', 'RoleInsightsSummary', 'BetaRoleInsightsSummary']
---

# RoleInsightsSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_updates** | **int** | Total number of roles with updates | [optional] 
**last_generated** | **datetime** | The date-time role insights were last found. | [optional] 
**entitlements_included_in_roles** | **int** | The number of entitlements included in roles (vs free radicals). | [optional] 
**total_number_of_entitlements** | **int** | The total number of entitlements. | [optional] 
**identities_with_access_via_roles** | **int** | The number of identities in roles vs. identities with just entitlements and not in roles. | [optional] 
**total_number_of_identities** | **int** | The total number of identities. | [optional] 
}

## Example

```python
from sailpoint.beta.models.role_insights_summary import RoleInsightsSummary

role_insights_summary = RoleInsightsSummary(
number_of_updates=56,
last_generated='2020-05-19T13:49:37.385Z',
entitlements_included_in_roles=45,
total_number_of_entitlements=250,
identities_with_access_via_roles=550,
total_number_of_identities=980
)

```
[[Back to top]](#) 


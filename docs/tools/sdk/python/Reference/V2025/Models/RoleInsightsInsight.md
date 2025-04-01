---
id: v2025-role-insights-insight
title: RoleInsightsInsight
pagination_label: RoleInsightsInsight
sidebar_label: RoleInsightsInsight
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleInsightsInsight', 'V2025RoleInsightsInsight'] 
slug: /tools/sdk/python/v2025/models/role-insights-insight
tags: ['SDK', 'Software Development Kit', 'RoleInsightsInsight', 'V2025RoleInsightsInsight']
---

# RoleInsightsInsight


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The number of identities in this role with the entitlement. | [optional] 
**identities_with_access** | **int** | The number of identities in this role with the entitlement. | [optional] 
**identities_impacted** | **int** | The number of identities in this role that do not have the specified entitlement. | [optional] 
**total_number_of_identities** | **int** | The total number of identities. | [optional] 
**impacted_identity_names** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role_insights_insight import RoleInsightsInsight

role_insights_insight = RoleInsightsInsight(
type='ADD',
identities_with_access=850,
identities_impacted=150,
total_number_of_identities=1000,
impacted_identity_names=''
)

```
[[Back to top]](#) 


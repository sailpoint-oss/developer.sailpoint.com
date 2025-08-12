---
id: v2024-role-insight
title: RoleInsight
pagination_label: RoleInsight
sidebar_label: RoleInsight
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleInsight', 'V2024RoleInsight'] 
slug: /tools/sdk/python/v2024/models/role-insight
tags: ['SDK', 'Software Development Kit', 'RoleInsight', 'V2024RoleInsight']
---

# RoleInsight


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Insight id | [optional] 
**number_of_updates** | **int** | Total number of updates for this role | [optional] 
**created_date** | **datetime** | The date-time insights were last created for this role. | [optional] 
**modified_date** | **datetime** | The date-time insights were last modified for this role. | [optional] 
**role** | [**RoleInsightsRole**](role-insights-role) |  | [optional] 
**insight** | [**RoleInsightsInsight**](role-insights-insight) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_insight import RoleInsight

role_insight = RoleInsight(
id='1467e61e-f284-439c-ba2d-c6cc11cf0941',
number_of_updates=5,
created_date=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
modified_date='2020-05-19T13:49:37.385Z',
role=sailpoint.v2024.models.role_insights_role.Role Insights Role(
                    name = 'Software Engineer', 
                    id = '1467e61e-f284-439c-ba2d-c6cc11cf0941', 
                    description = 'Person who develops software', 
                    owner_name = 'Bob', 
                    owner_id = '1467e61e-f284-439c-ba2d-c6cc11cf0941', ),
insight=sailpoint.v2024.models.role_insights_insight.Role Insights Insight(
                    type = 'ADD', 
                    identities_with_access = 850, 
                    identities_impacted = 150, 
                    total_number_of_identities = 1000, 
                    impacted_identity_names = '', )
)

```
[[Back to top]](#) 


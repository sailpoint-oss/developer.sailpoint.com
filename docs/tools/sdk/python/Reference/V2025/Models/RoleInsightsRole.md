---
id: v2025-role-insights-role
title: RoleInsightsRole
pagination_label: RoleInsightsRole
sidebar_label: RoleInsightsRole
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleInsightsRole', 'V2025RoleInsightsRole'] 
slug: /tools/sdk/python/v2025/models/role-insights-role
tags: ['SDK', 'Software Development Kit', 'RoleInsightsRole', 'V2025RoleInsightsRole']
---

# RoleInsightsRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Role name | [optional] 
**id** | **str** | Role id | [optional] 
**description** | **str** | Role description | [optional] 
**owner_name** | **str** | Role owner name | [optional] 
**owner_id** | **str** | Role owner id | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role_insights_role import RoleInsightsRole

role_insights_role = RoleInsightsRole(
name='Software Engineer',
id='1467e61e-f284-439c-ba2d-c6cc11cf0941',
description='Person who develops software',
owner_name='Bob',
owner_id='1467e61e-f284-439c-ba2d-c6cc11cf0941'
)

```
[[Back to top]](#) 


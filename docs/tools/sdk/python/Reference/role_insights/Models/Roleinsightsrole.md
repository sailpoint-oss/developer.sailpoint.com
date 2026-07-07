---
id: roleinsightsrole
title: Roleinsightsrole
pagination_label: Roleinsightsrole
sidebar_label: Roleinsightsrole
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleinsightsrole', 'Roleinsightsrole'] 
slug: /tools/sdk/python/role-insights/models/roleinsightsrole
tags: ['SDK', 'Software Development Kit', 'Roleinsightsrole', 'Roleinsightsrole']
---

# Roleinsightsrole


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
from sailpoint.role_insights.models.roleinsightsrole import Roleinsightsrole

roleinsightsrole = Roleinsightsrole(
name='Software Engineer',
id='1467e61e-f284-439c-ba2d-c6cc11cf0941',
description='Person who develops software',
owner_name='Bob',
owner_id='1467e61e-f284-439c-ba2d-c6cc11cf0941'
)

```
[[Back to top]](#) 


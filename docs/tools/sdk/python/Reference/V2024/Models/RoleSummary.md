---
id: v2024-role-summary
title: RoleSummary
pagination_label: RoleSummary
sidebar_label: RoleSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleSummary', 'V2024RoleSummary'] 
slug: /tools/sdk/python/v2024/models/role-summary
tags: ['SDK', 'Software Development Kit', 'RoleSummary', 'V2024RoleSummary']
---

# RoleSummary

Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**display_name** | **str** |  | [optional] 
**type** | [**DtoType**](dto-type) |  | [optional] 
**description** | **str** |  | [optional] 
**owner** | [**DisplayReference**](display-reference) |  | [optional] 
**disabled** | **bool** |  | [optional] 
**revocable** | **bool** |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_summary import RoleSummary

role_summary = RoleSummary(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
display_name='John Q. Doe',
type='IDENTITY',
description='',
owner=,
disabled=True,
revocable=True
)

```
[[Back to top]](#) 


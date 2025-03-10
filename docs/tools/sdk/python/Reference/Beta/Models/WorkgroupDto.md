---
id: beta-workgroup-dto
title: WorkgroupDto
pagination_label: WorkgroupDto
sidebar_label: WorkgroupDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkgroupDto', 'BetaWorkgroupDto'] 
slug: /tools/sdk/python/beta/models/workgroup-dto
tags: ['SDK', 'Software Development Kit', 'WorkgroupDto', 'BetaWorkgroupDto']
---

# WorkgroupDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | [**WorkgroupDtoOwner**](workgroup-dto-owner) |  | [optional] 
**id** | **str** | Governance group ID. | [optional] [readonly] 
**name** | **str** | Governance group name. | [optional] 
**description** | **str** | Governance group description. | [optional] 
**member_count** | **int** | Number of members in the governance group. | [optional] [readonly] 
**connection_count** | **int** | Number of connections in the governance group. | [optional] [readonly] 
**created** | **datetime** |  | [optional] 
**modified** | **datetime** |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.workgroup_dto import WorkgroupDto

workgroup_dto = WorkgroupDto(
owner=,
id='2c91808568c529c60168cca6f90c1313',
name='DB Access Governance Group',
description='Description of the Governance Group',
member_count=1641498673000,
connection_count=1641498673000,
created='2022-01-06T19:51:13Z',
modified='2022-01-06T19:51:13Z'
)

```
[[Back to top]](#) 


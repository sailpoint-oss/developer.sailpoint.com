---
id: workgroupdto
title: Workgroupdto
pagination_label: Workgroupdto
sidebar_label: Workgroupdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workgroupdto', 'Workgroupdto'] 
slug: /tools/sdk/python/governance-groups/models/workgroupdto
tags: ['SDK', 'Software Development Kit', 'Workgroupdto', 'Workgroupdto']
---

# Workgroupdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | [**WorkgroupdtoOwner**](workgroupdto-owner) |  | [optional] 
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
from sailpoint.governance_groups.models.workgroupdto import Workgroupdto

workgroupdto = Workgroupdto(
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


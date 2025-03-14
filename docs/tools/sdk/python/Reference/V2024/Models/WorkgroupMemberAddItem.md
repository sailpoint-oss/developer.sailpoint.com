---
id: v2024-workgroup-member-add-item
title: WorkgroupMemberAddItem
pagination_label: WorkgroupMemberAddItem
sidebar_label: WorkgroupMemberAddItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkgroupMemberAddItem', 'V2024WorkgroupMemberAddItem'] 
slug: /tools/sdk/python/v2024/models/workgroup-member-add-item
tags: ['SDK', 'Software Development Kit', 'WorkgroupMemberAddItem', 'V2024WorkgroupMemberAddItem']
---

# WorkgroupMemberAddItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of identity in bulk member add request. | [required]
**status** | **int** |  The HTTP response status code returned for an individual member that is requested for addition during a bulk add operation. The HTTP response status code returned for an individual Governance Group is requested for deletion.  > 201   - Identity is added into Governance Group members list.  > 409   - Identity is already member of  Governance Group.  | [required]
**description** | **str** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.workgroup_member_add_item import WorkgroupMemberAddItem

workgroup_member_add_item = WorkgroupMemberAddItem(
id='464ae7bf791e49fdb74606a2e4a89635',
status=201,
description='
> Identity is added into Governance Group members list.

> Unable to set Membership of Identity "3244d5f2d04447498520f54c6789ae33" to Governance Group "f80bba83-98c4-4ec2-81c8-373c00e9663b"; the relationship already exists.
'
)

```
[[Back to top]](#) 


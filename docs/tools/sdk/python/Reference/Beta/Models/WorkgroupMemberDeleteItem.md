---
id: beta-workgroup-member-delete-item
title: WorkgroupMemberDeleteItem
pagination_label: WorkgroupMemberDeleteItem
sidebar_label: WorkgroupMemberDeleteItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkgroupMemberDeleteItem', 'BetaWorkgroupMemberDeleteItem'] 
slug: /tools/sdk/python/beta/models/workgroup-member-delete-item
tags: ['SDK', 'Software Development Kit', 'WorkgroupMemberDeleteItem', 'BetaWorkgroupMemberDeleteItem']
---

# WorkgroupMemberDeleteItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of identity in bulk member add /remove request. | [required]
**status** | **int** | The HTTP response status code returned for an individual  member that is requested for deletion during a bulk delete operation.  > 204   - Identity is removed from Governance Group members list.  > 404   - Identity is not member of Governance Group.  | [required]
**description** | **str** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 
}

## Example

```python
from sailpoint.beta.models.workgroup_member_delete_item import WorkgroupMemberDeleteItem

workgroup_member_delete_item = WorkgroupMemberDeleteItem(
id='464ae7bf791e49fdb74606a2e4a89635',
status=204,
description='
> Identity deleted from Governance Group members list.

> Referenced Governance Group Member with Identity Id "bc3a744678534eb78a8002ee2085df64" was not found.
'
)

```
[[Back to top]](#) 


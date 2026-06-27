---
id: bulkworkgroupmembersrequest-inner
title: BulkworkgroupmembersrequestInner
pagination_label: BulkworkgroupmembersrequestInner
sidebar_label: BulkworkgroupmembersrequestInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkworkgroupmembersrequestInner', 'BulkworkgroupmembersrequestInner'] 
slug: /tools/sdk/python/governance-groups/models/bulkworkgroupmembersrequest-inner
tags: ['SDK', 'Software Development Kit', 'BulkworkgroupmembersrequestInner', 'BulkworkgroupmembersrequestInner']
---

# BulkworkgroupmembersrequestInner

Identity's basic details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Identity's DTO type. | [optional] 
**id** | **str** | Identity ID. | [optional] 
**name** | **str** | Identity's display name. | [optional] 
}

## Example

```python
from sailpoint.governance_groups.models.bulkworkgroupmembersrequest_inner import BulkworkgroupmembersrequestInner

bulkworkgroupmembersrequest_inner = BulkworkgroupmembersrequestInner(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 


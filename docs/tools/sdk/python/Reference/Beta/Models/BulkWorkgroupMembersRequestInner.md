---
id: beta-bulk-workgroup-members-request-inner
title: BulkWorkgroupMembersRequestInner
pagination_label: BulkWorkgroupMembersRequestInner
sidebar_label: BulkWorkgroupMembersRequestInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkWorkgroupMembersRequestInner', 'BetaBulkWorkgroupMembersRequestInner'] 
slug: /tools/sdk/python/beta/models/bulk-workgroup-members-request-inner
tags: ['SDK', 'Software Development Kit', 'BulkWorkgroupMembersRequestInner', 'BetaBulkWorkgroupMembersRequestInner']
---

# BulkWorkgroupMembersRequestInner

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
from sailpoint.beta.models.bulk_workgroup_members_request_inner import BulkWorkgroupMembersRequestInner

bulk_workgroup_members_request_inner = BulkWorkgroupMembersRequestInner(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 


---
id: list-workgroup-members-v1200-response-inner
title: ListWorkgroupMembersV1200ResponseInner
pagination_label: ListWorkgroupMembersV1200ResponseInner
sidebar_label: ListWorkgroupMembersV1200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ListWorkgroupMembersV1200ResponseInner', 'ListWorkgroupMembersV1200ResponseInner'] 
slug: /tools/sdk/python/governance-groups/models/list-workgroup-members-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListWorkgroupMembersV1200ResponseInner', 'ListWorkgroupMembersV1200ResponseInner']
---

# ListWorkgroupMembersV1200ResponseInner

Identity of workgroup member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Workgroup member identity DTO type. | [optional] 
**id** | **str** | Workgroup member identity ID. | [optional] 
**name** | **str** | Workgroup member identity display name. | [optional] 
**email** | **str** | Workgroup member identity email. | [optional] 
}

## Example

```python
from sailpoint.governance_groups.models.list_workgroup_members_v1200_response_inner import ListWorkgroupMembersV1200ResponseInner

list_workgroup_members_v1200_response_inner = ListWorkgroupMembersV1200ResponseInner(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels',
email='michael.michaels@sailpoint.com'
)

```
[[Back to top]](#) 


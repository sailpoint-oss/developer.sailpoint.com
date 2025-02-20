---
id: v2024-list-workgroup-members200-response-inner
title: ListWorkgroupMembers200ResponseInner
pagination_label: ListWorkgroupMembers200ResponseInner
sidebar_label: ListWorkgroupMembers200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ListWorkgroupMembers200ResponseInner', 'V2024ListWorkgroupMembers200ResponseInner'] 
slug: /tools/sdk/python/v2024/models/list-workgroup-members200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListWorkgroupMembers200ResponseInner', 'V2024ListWorkgroupMembers200ResponseInner']
---

# ListWorkgroupMembers200ResponseInner

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
from sailpoint.v2024.models.list_workgroup_members200_response_inner import ListWorkgroupMembers200ResponseInner

list_workgroup_members200_response_inner = ListWorkgroupMembers200ResponseInner(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels',
email='michael.michaels@sailpoint.com'
)

```
[[Back to top]](#) 


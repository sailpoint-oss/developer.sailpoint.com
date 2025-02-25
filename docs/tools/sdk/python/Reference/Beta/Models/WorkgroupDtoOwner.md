---
id: beta-workgroup-dto-owner
title: WorkgroupDtoOwner
pagination_label: WorkgroupDtoOwner
sidebar_label: WorkgroupDtoOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkgroupDtoOwner', 'BetaWorkgroupDtoOwner'] 
slug: /tools/sdk/python/beta/models/workgroup-dto-owner
tags: ['SDK', 'Software Development Kit', 'WorkgroupDtoOwner', 'BetaWorkgroupDtoOwner']
---

# WorkgroupDtoOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Owner's DTO type. | [optional] 
**id** | **str** | Owner's identity ID. | [optional] 
**name** | **str** | Owner's name. | [optional] 
**display_name** | **str** | The display name of the identity | [optional] [readonly] 
**email_address** | **str** | The primary email address of the identity | [optional] [readonly] 
}

## Example

```python
from sailpoint.beta.models.workgroup_dto_owner import WorkgroupDtoOwner

workgroup_dto_owner = WorkgroupDtoOwner(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support',
display_name='Support',
email_address='support@sailpoint.com'
)

```
[[Back to top]](#) 


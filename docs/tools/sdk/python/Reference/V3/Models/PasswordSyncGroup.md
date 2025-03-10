---
id: password-sync-group
title: PasswordSyncGroup
pagination_label: PasswordSyncGroup
sidebar_label: PasswordSyncGroup
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordSyncGroup', 'PasswordSyncGroup'] 
slug: /tools/sdk/python/v3/models/password-sync-group
tags: ['SDK', 'Software Development Kit', 'PasswordSyncGroup', 'PasswordSyncGroup']
---

# PasswordSyncGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the sync group | [optional] 
**name** | **str** | Name of the sync group | [optional] 
**password_policy_id** | **str** | ID of the password policy | [optional] 
**source_ids** | **[]str** | List of password managed sources IDs | [optional] 
**created** | **datetime** | The date and time this sync group was created | [optional] 
**modified** | **datetime** | The date and time this sync group was last modified | [optional] 
}

## Example

```python
from sailpoint.v3.models.password_sync_group import PasswordSyncGroup

password_sync_group = PasswordSyncGroup(
id='6881f631-3bd5-4213-9c75-8e05cc3e35dd',
name='Password Sync Group 1',
password_policy_id='2c91808d744ba0ce01746f93b6204501',
source_ids=[2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500],
created='2023-03-16T04:00Z',
modified='2023-03-16T04:00Z'
)

```
[[Back to top]](#) 


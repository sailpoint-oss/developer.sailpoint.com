---
id: v2025-user-app-owner
title: UserAppOwner
pagination_label: UserAppOwner
sidebar_label: UserAppOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserAppOwner', 'V2025UserAppOwner'] 
slug: /tools/sdk/python/v2025/models/user-app-owner
tags: ['SDK', 'Software Development Kit', 'UserAppOwner', 'V2025UserAppOwner']
---

# UserAppOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identity ID | [optional] 
**type** | **str** | It will always be \"IDENTITY\" | [optional] 
**name** | **str** | The identity name | [optional] 
**alias** | **str** | The identity alias | [optional] 
}

## Example

```python
from sailpoint.v2025.models.user_app_owner import UserAppOwner

user_app_owner = UserAppOwner(
id='2c9180827ca885d7017ca8ce28a000eb',
type='IDENTITY',
name='John',
alias='John.Doe'
)

```
[[Back to top]](#) 


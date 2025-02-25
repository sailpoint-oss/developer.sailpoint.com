---
id: v2024-user-app-account
title: UserAppAccount
pagination_label: UserAppAccount
sidebar_label: UserAppAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserAppAccount', 'V2024UserAppAccount'] 
slug: /tools/sdk/python/v2024/models/user-app-account
tags: ['SDK', 'Software Development Kit', 'UserAppAccount', 'V2024UserAppAccount']
---

# UserAppAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the account ID | [optional] 
**type** | **str** | It will always be \"ACCOUNT\" | [optional] 
**name** | **str** | the account name | [optional] 
}

## Example

```python
from sailpoint.v2024.models.user_app_account import UserAppAccount

user_app_account = UserAppAccount(
id='85d173e7d57e496569df763231d6deb6a',
type='ACCOUNT',
name='test account'
)

```
[[Back to top]](#) 


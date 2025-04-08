---
id: beta-user-app-account
title: UserAppAccount
pagination_label: UserAppAccount
sidebar_label: UserAppAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserAppAccount', 'BetaUserAppAccount'] 
slug: /tools/sdk/python/beta/models/user-app-account
tags: ['SDK', 'Software Development Kit', 'UserAppAccount', 'BetaUserAppAccount']
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
from sailpoint.beta.models.user_app_account import UserAppAccount

user_app_account = UserAppAccount(
id='85d173e7d57e496569df763231d6deb6a',
type='ACCOUNT',
name='test account'
)

```
[[Back to top]](#) 


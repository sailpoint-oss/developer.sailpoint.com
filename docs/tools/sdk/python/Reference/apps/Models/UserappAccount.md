---
id: userapp-account
title: UserappAccount
pagination_label: UserappAccount
sidebar_label: UserappAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserappAccount', 'UserappAccount'] 
slug: /tools/sdk/python/apps/models/userapp-account
tags: ['SDK', 'Software Development Kit', 'UserappAccount', 'UserappAccount']
---

# UserappAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the account ID | [optional] 
**type** | **str** | It will always be \"ACCOUNT\" | [optional] 
**name** | **str** | the account name | [optional] 
}

## Example

```python
from sailpoint.apps.models.userapp_account import UserappAccount

userapp_account = UserappAccount(
id='85d173e7d57e496569df763231d6deb6a',
type='ACCOUNT',
name='test account'
)

```
[[Back to top]](#) 


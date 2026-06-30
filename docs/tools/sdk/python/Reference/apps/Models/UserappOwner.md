---
id: userapp-owner
title: UserappOwner
pagination_label: UserappOwner
sidebar_label: UserappOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserappOwner', 'UserappOwner'] 
slug: /tools/sdk/python/apps/models/userapp-owner
tags: ['SDK', 'Software Development Kit', 'UserappOwner', 'UserappOwner']
---

# UserappOwner


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
from sailpoint.apps.models.userapp_owner import UserappOwner

userapp_owner = UserappOwner(
id='2c9180827ca885d7017ca8ce28a000eb',
type='IDENTITY',
name='John',
alias='John.Doe'
)

```
[[Back to top]](#) 


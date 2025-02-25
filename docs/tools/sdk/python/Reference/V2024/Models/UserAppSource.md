---
id: v2024-user-app-source
title: UserAppSource
pagination_label: UserAppSource
sidebar_label: UserAppSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserAppSource', 'V2024UserAppSource'] 
slug: /tools/sdk/python/v2024/models/user-app-source
tags: ['SDK', 'Software Development Kit', 'UserAppSource', 'V2024UserAppSource']
---

# UserAppSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the source ID | [optional] 
**type** | **str** | It will always be \"SOURCE\" | [optional] 
**name** | **str** | the source name | [optional] 
}

## Example

```python
from sailpoint.v2024.models.user_app_source import UserAppSource

user_app_source = UserAppSource(
id='9870808a7190d06e01719938fcd20792',
type='SOURCE',
name='test-source'
)

```
[[Back to top]](#) 


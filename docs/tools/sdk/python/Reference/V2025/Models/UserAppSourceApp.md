---
id: v2025-user-app-source-app
title: UserAppSourceApp
pagination_label: UserAppSourceApp
sidebar_label: UserAppSourceApp
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserAppSourceApp', 'V2025UserAppSourceApp'] 
slug: /tools/sdk/python/v2025/models/user-app-source-app
tags: ['SDK', 'Software Development Kit', 'UserAppSourceApp', 'V2025UserAppSourceApp']
---

# UserAppSourceApp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the source app ID | [optional] 
**type** | **str** | It will always be \"APPLICATION\" | [optional] 
**name** | **str** | the source app name | [optional] 
}

## Example

```python
from sailpoint.v2025.models.user_app_source_app import UserAppSourceApp

user_app_source_app = UserAppSourceApp(
id='edcb0951812949d085b60cd8bf35bc78',
type='APPLICATION',
name='test-app'
)

```
[[Back to top]](#) 


---
id: userapp-source-app
title: UserappSourceApp
pagination_label: UserappSourceApp
sidebar_label: UserappSourceApp
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserappSourceApp', 'UserappSourceApp'] 
slug: /tools/sdk/python/apps/models/userapp-source-app
tags: ['SDK', 'Software Development Kit', 'UserappSourceApp', 'UserappSourceApp']
---

# UserappSourceApp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the source app ID | [optional] 
**type** | **str** | It will always be \"APPLICATION\" | [optional] 
**name** | **str** | the source app name | [optional] 
}

## Example

```python
from sailpoint.apps.models.userapp_source_app import UserappSourceApp

userapp_source_app = UserappSourceApp(
id='edcb0951812949d085b60cd8bf35bc78',
type='APPLICATION',
name='test-app'
)

```
[[Back to top]](#) 


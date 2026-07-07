---
id: userapp-source
title: UserappSource
pagination_label: UserappSource
sidebar_label: UserappSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserappSource', 'UserappSource'] 
slug: /tools/sdk/python/apps/models/userapp-source
tags: ['SDK', 'Software Development Kit', 'UserappSource', 'UserappSource']
---

# UserappSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the source ID | [optional] 
**type** | **str** | It will always be \"SOURCE\" | [optional] 
**name** | **str** | the source name | [optional] 
}

## Example

```python
from sailpoint.apps.models.userapp_source import UserappSource

userapp_source = UserappSource(
id='9870808a7190d06e01719938fcd20792',
type='SOURCE',
name='test-source'
)

```
[[Back to top]](#) 


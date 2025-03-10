---
id: v2024-base-access
title: BaseAccess
pagination_label: BaseAccess
sidebar_label: BaseAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseAccess', 'V2024BaseAccess'] 
slug: /tools/sdk/python/v2024/models/base-access
tags: ['SDK', 'Software Development Kit', 'BaseAccess', 'V2024BaseAccess']
---

# BaseAccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Access item's description. | [optional] 
**created** | **datetime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**modified** | **datetime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**synced** | **datetime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**enabled** | **bool** | Indicates whether the access item is currently enabled. | [optional] [default to False]
**requestable** | **bool** | Indicates whether the access item can be requested. | [optional] [default to True]
**request_comments_required** | **bool** | Indicates whether comments are required for requests to access the item. | [optional] [default to False]
**owner** | [**BaseAccessOwner**](base-access-owner) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.base_access import BaseAccess

base_access = BaseAccess(
description='Admin access',
created='2018-06-25T20:22:28.104Z',
modified='2018-06-25T20:22:28.104Z',
synced='2018-06-25T20:22:33.104Z',
enabled=True,
requestable=True,
request_comments_required=False,
owner=sailpoint.v2024.models.base_access_owner.BaseAccess_owner(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', 
                    email = 'cloud-support@sailpoint.com', )
)

```
[[Back to top]](#) 


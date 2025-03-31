---
id: v2024-common-access-item-access
title: CommonAccessItemAccess
pagination_label: CommonAccessItemAccess
sidebar_label: CommonAccessItemAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommonAccessItemAccess', 'V2024CommonAccessItemAccess'] 
slug: /tools/sdk/python/v2024/models/common-access-item-access
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemAccess', 'V2024CommonAccessItemAccess']
---

# CommonAccessItemAccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Common access ID | [optional] 
**type** | [**CommonAccessType**](common-access-type) |  | [optional] 
**name** | **str** | Common access name | [optional] 
**description** | **str** | Common access description | [optional] 
**owner_name** | **str** | Common access owner name | [optional] 
**owner_id** | **str** | Common access owner ID | [optional] 
}

## Example

```python
from sailpoint.v2024.models.common_access_item_access import CommonAccessItemAccess

common_access_item_access = CommonAccessItemAccess(
id='',
type='ACCESS_PROFILE',
name='',
description='',
owner_name='',
owner_id=''
)

```
[[Back to top]](#) 


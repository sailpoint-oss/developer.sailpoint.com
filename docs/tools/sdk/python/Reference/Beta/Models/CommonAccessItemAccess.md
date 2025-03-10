---
id: beta-common-access-item-access
title: CommonAccessItemAccess
pagination_label: CommonAccessItemAccess
sidebar_label: CommonAccessItemAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommonAccessItemAccess', 'BetaCommonAccessItemAccess'] 
slug: /tools/sdk/python/beta/models/common-access-item-access
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemAccess', 'BetaCommonAccessItemAccess']
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
from sailpoint.beta.models.common_access_item_access import CommonAccessItemAccess

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


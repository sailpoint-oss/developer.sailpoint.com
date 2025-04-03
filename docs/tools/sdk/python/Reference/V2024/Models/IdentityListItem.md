---
id: v2024-identity-list-item
title: IdentityListItem
pagination_label: IdentityListItem
sidebar_label: IdentityListItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityListItem', 'V2024IdentityListItem'] 
slug: /tools/sdk/python/v2024/models/identity-list-item
tags: ['SDK', 'Software Development Kit', 'IdentityListItem', 'V2024IdentityListItem']
---

# IdentityListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the identity ID | [optional] 
**display_name** | **str** | the display name of the identity | [optional] 
**first_name** | **str** | the first name of the identity | [optional] 
**last_name** | **str** | the last name of the identity | [optional] 
**active** | **bool** | indicates if an identity is active or not | [optional] [default to True]
**deleted_date** | **str** | the date when the identity was deleted | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_list_item import IdentityListItem

identity_list_item = IdentityListItem(
id='bc693f07e7b645539626c25954c58554',
display_name='Adam Zampa',
first_name='Adam',
last_name='Zampa',
active=True,
deleted_date='2007-03-01T13:00:00.000Z'
)

```
[[Back to top]](#) 


---
id: v2024-base-account
title: BaseAccount
pagination_label: BaseAccount
sidebar_label: BaseAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseAccount', 'V2024BaseAccount'] 
slug: /tools/sdk/python/v2024/models/base-account
tags: ['SDK', 'Software Development Kit', 'BaseAccount', 'V2024BaseAccount']
---

# BaseAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**account_id** | **str** | Account ID. | [optional] 
**source** | [**AccountSource**](account-source) |  | [optional] 
**disabled** | **bool** | Indicates whether the account is disabled. | [optional] [default to False]
**locked** | **bool** | Indicates whether the account is locked. | [optional] [default to False]
**privileged** | **bool** | Indicates whether the account is privileged. | [optional] [default to False]
**manually_correlated** | **bool** | Indicates whether the account has been manually correlated to an identity. | [optional] [default to False]
**password_last_set** | **datetime** | A date-time in ISO-8601 format | [optional] 
**entitlement_attributes** | **map[string]object** | Map or dictionary of key/value pairs. | [optional] 
**created** | **datetime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**supports_password_change** | **bool** | Indicates whether the account supports password change. | [optional] [default to False]
**account_attributes** | **map[string]object** | Map or dictionary of key/value pairs. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.base_account import BaseAccount

base_account = BaseAccount(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
account_id='John.Doe',
source=,
disabled=False,
locked=False,
privileged=False,
manually_correlated=False,
password_last_set='2018-06-25T20:22:28.104Z',
entitlement_attributes={moderator=true, admin=true, trust_level=4},
created='2018-06-25T20:22:28.104Z',
supports_password_change=False,
account_attributes={type=global, admin=true, trust_level=4}
)

```
[[Back to top]](#) 


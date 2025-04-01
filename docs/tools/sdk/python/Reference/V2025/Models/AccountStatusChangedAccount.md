---
id: v2025-account-status-changed-account
title: AccountStatusChangedAccount
pagination_label: AccountStatusChangedAccount
sidebar_label: AccountStatusChangedAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountStatusChangedAccount', 'V2025AccountStatusChangedAccount'] 
slug: /tools/sdk/python/v2025/models/account-status-changed-account
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedAccount', 'V2025AccountStatusChangedAccount']
---

# AccountStatusChangedAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the ID of the account in the database | [optional] 
**native_identity** | **str** | the native identifier of the account | [optional] 
**display_name** | **str** | the display name of the account | [optional] 
**source_id** | **str** | the ID of the source for this account | [optional] 
**source_name** | **str** | the name of the source for this account | [optional] 
**entitlement_count** | **int** | the number of entitlements on this account | [optional] 
**access_type** | **str** | this value is always \"account\" | [optional] 
}

## Example

```python
from sailpoint.v2025.models.account_status_changed_account import AccountStatusChangedAccount

account_status_changed_account = AccountStatusChangedAccount(
id='',
native_identity='',
display_name='',
source_id='',
source_name='',
entitlement_count=56,
access_type=''
)

```
[[Back to top]](#) 


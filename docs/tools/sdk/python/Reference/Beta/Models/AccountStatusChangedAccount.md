---
id: beta-account-status-changed-account
title: AccountStatusChangedAccount
pagination_label: AccountStatusChangedAccount
sidebar_label: AccountStatusChangedAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountStatusChangedAccount', 'BetaAccountStatusChangedAccount'] 
slug: /tools/sdk/python/beta/models/account-status-changed-account
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedAccount', 'BetaAccountStatusChangedAccount']
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
from sailpoint.beta.models.account_status_changed_account import AccountStatusChangedAccount

account_status_changed_account = AccountStatusChangedAccount(
id='2c91808a77ff216301782327a50f09bf',
native_identity='dr.arden.ogahn.d',
display_name='Adam Archer',
source_id='8a80828f643d484f01643e14202e206f',
source_name='JDBC Entitlements Source',
entitlement_count=2,
access_type='account'
)

```
[[Back to top]](#) 


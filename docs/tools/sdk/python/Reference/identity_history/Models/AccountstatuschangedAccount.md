---
id: accountstatuschanged-account
title: AccountstatuschangedAccount
pagination_label: AccountstatuschangedAccount
sidebar_label: AccountstatuschangedAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountstatuschangedAccount', 'AccountstatuschangedAccount'] 
slug: /tools/sdk/python/identity-history/models/accountstatuschanged-account
tags: ['SDK', 'Software Development Kit', 'AccountstatuschangedAccount', 'AccountstatuschangedAccount']
---

# AccountstatuschangedAccount


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
from sailpoint.identity_history.models.accountstatuschanged_account import AccountstatuschangedAccount

accountstatuschanged_account = AccountstatuschangedAccount(
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


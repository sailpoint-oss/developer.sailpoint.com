---
id: beta-account-uncorrelated-account
title: AccountUncorrelatedAccount
pagination_label: AccountUncorrelatedAccount
sidebar_label: AccountUncorrelatedAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountUncorrelatedAccount', 'BetaAccountUncorrelatedAccount'] 
slug: /tools/sdk/python/beta/models/account-uncorrelated-account
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelatedAccount', 'BetaAccountUncorrelatedAccount']
---

# AccountUncorrelatedAccount

Uncorrelated account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT' ] | Uncorrelated account's DTO type. | [required]
**id** | **str** | Uncorrelated account's ID. | [required]
**name** | **str** | Uncorrelated account's display name. | [required]
**native_identity** | **str** | Unique ID of the account on the source. | [required]
**uuid** | **str** | The source's unique identifier for the account. UUID is generated by the source system. | [optional] 
}

## Example

```python
from sailpoint.beta.models.account_uncorrelated_account import AccountUncorrelatedAccount

account_uncorrelated_account = AccountUncorrelatedAccount(
type=ACCOUNT,
id='4dd497e3723e439991cb6d0e478375dd',
name='Sadie Jensen',
native_identity='cn=john.doe,ou=users,dc=acme,dc=com',
uuid='1cb1f07d-3e5a-4431-becd-234fa4306108'
)

```
[[Back to top]](#) 


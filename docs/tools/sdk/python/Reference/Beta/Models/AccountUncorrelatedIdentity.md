---
id: beta-account-uncorrelated-identity
title: AccountUncorrelatedIdentity
pagination_label: AccountUncorrelatedIdentity
sidebar_label: AccountUncorrelatedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountUncorrelatedIdentity', 'BetaAccountUncorrelatedIdentity'] 
slug: /tools/sdk/python/beta/models/account-uncorrelated-identity
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelatedIdentity', 'BetaAccountUncorrelatedIdentity']
---

# AccountUncorrelatedIdentity

Identity the account is uncorrelated with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the identity the account is uncorrelated with. | [required]
**id** | **str** | ID of the identity the account is uncorrelated with. | [required]
**name** | **str** | Display name of the identity the account is uncorrelated with. | [required]
}

## Example

```python
from sailpoint.beta.models.account_uncorrelated_identity import AccountUncorrelatedIdentity

account_uncorrelated_identity = AccountUncorrelatedIdentity(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 


---
id: v2025-account-correlated-identity
title: AccountCorrelatedIdentity
pagination_label: AccountCorrelatedIdentity
sidebar_label: AccountCorrelatedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountCorrelatedIdentity', 'V2025AccountCorrelatedIdentity'] 
slug: /tools/sdk/python/v2025/models/account-correlated-identity
tags: ['SDK', 'Software Development Kit', 'AccountCorrelatedIdentity', 'V2025AccountCorrelatedIdentity']
---

# AccountCorrelatedIdentity

Identity the account is correlated with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the identity the account is correlated with. | [required]
**id** | **str** | ID of the identity the account is correlated with. | [required]
**name** | **str** | Display name of the identity the account is correlated with. | [required]
}

## Example

```python
from sailpoint.v2025.models.account_correlated_identity import AccountCorrelatedIdentity

account_correlated_identity = AccountCorrelatedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 


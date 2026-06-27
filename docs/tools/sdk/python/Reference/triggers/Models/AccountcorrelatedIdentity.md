---
id: accountcorrelated-identity
title: AccountcorrelatedIdentity
pagination_label: AccountcorrelatedIdentity
sidebar_label: AccountcorrelatedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountcorrelatedIdentity', 'AccountcorrelatedIdentity'] 
slug: /tools/sdk/python/triggers/models/accountcorrelated-identity
tags: ['SDK', 'Software Development Kit', 'AccountcorrelatedIdentity', 'AccountcorrelatedIdentity']
---

# AccountcorrelatedIdentity

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
from sailpoint.triggers.models.accountcorrelated_identity import AccountcorrelatedIdentity

accountcorrelated_identity = AccountcorrelatedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 


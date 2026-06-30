---
id: accountuncorrelated-identity
title: AccountuncorrelatedIdentity
pagination_label: AccountuncorrelatedIdentity
sidebar_label: AccountuncorrelatedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountuncorrelatedIdentity', 'AccountuncorrelatedIdentity'] 
slug: /tools/sdk/python/triggers/models/accountuncorrelated-identity
tags: ['SDK', 'Software Development Kit', 'AccountuncorrelatedIdentity', 'AccountuncorrelatedIdentity']
---

# AccountuncorrelatedIdentity

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
from sailpoint.triggers.models.accountuncorrelated_identity import AccountuncorrelatedIdentity

accountuncorrelated_identity = AccountuncorrelatedIdentity(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 


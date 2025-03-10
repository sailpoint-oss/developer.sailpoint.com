---
id: account-all-of-identity
title: AccountAllOfIdentity
pagination_label: AccountAllOfIdentity
sidebar_label: AccountAllOfIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAllOfIdentity', 'AccountAllOfIdentity'] 
slug: /tools/sdk/python/v3/models/account-all-of-identity
tags: ['SDK', 'Software Development Kit', 'AccountAllOfIdentity', 'AccountAllOfIdentity']
---

# AccountAllOfIdentity

The identity this account is correlated to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the identity | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | The type of object being referenced | [optional] 
**name** | **str** | display name of identity | [optional] 
}

## Example

```python
from sailpoint.v3.models.account_all_of_identity import AccountAllOfIdentity

account_all_of_identity = AccountAllOfIdentity(
id='2c918084660f45d6016617daa9210584',
type='IDENTITY',
name='John Doe'
)

```
[[Back to top]](#) 


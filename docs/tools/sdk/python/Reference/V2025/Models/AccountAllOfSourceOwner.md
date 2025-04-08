---
id: v2025-account-all-of-source-owner
title: AccountAllOfSourceOwner
pagination_label: AccountAllOfSourceOwner
sidebar_label: AccountAllOfSourceOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAllOfSourceOwner', 'V2025AccountAllOfSourceOwner'] 
slug: /tools/sdk/python/v2025/models/account-all-of-source-owner
tags: ['SDK', 'Software Development Kit', 'AccountAllOfSourceOwner', 'V2025AccountAllOfSourceOwner']
---

# AccountAllOfSourceOwner

The owner of the source this account belongs to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the identity | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | The type of object being referenced | [optional] 
**name** | **str** | display name of identity | [optional] 
}

## Example

```python
from sailpoint.v2025.models.account_all_of_source_owner import AccountAllOfSourceOwner

account_all_of_source_owner = AccountAllOfSourceOwner(
id='2c918084660f45d6016617daa9210584',
type='IDENTITY',
name='Adam Kennedy'
)

```
[[Back to top]](#) 


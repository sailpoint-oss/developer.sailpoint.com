---
id: v2024-access-requested-account
title: AccessRequestedAccount
pagination_label: AccessRequestedAccount
sidebar_label: AccessRequestedAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestedAccount', 'V2024AccessRequestedAccount'] 
slug: /tools/sdk/python/v2024/models/access-requested-account
tags: ['SDK', 'Software Development Kit', 'AccessRequestedAccount', 'V2024AccessRequestedAccount']
---

# AccessRequestedAccount


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
from sailpoint.v2024.models.access_requested_account import AccessRequestedAccount

access_requested_account = AccessRequestedAccount(
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


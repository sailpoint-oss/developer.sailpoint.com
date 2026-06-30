---
id: accountactionrequestdto-correlated-identity
title: AccountactionrequestdtoCorrelatedIdentity
pagination_label: AccountactionrequestdtoCorrelatedIdentity
sidebar_label: AccountactionrequestdtoCorrelatedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountactionrequestdtoCorrelatedIdentity', 'AccountactionrequestdtoCorrelatedIdentity'] 
slug: /tools/sdk/python/account-deletion-requests/models/accountactionrequestdto-correlated-identity
tags: ['SDK', 'Software Development Kit', 'AccountactionrequestdtoCorrelatedIdentity', 'AccountactionrequestdtoCorrelatedIdentity']
---

# AccountactionrequestdtoCorrelatedIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | Identity id | [optional] 
**name** | **str** | Human-readable display name of identity. | [optional] 
}

## Example

```python
from sailpoint.account_deletion_requests.models.accountactionrequestdto_correlated_identity import AccountactionrequestdtoCorrelatedIdentity

accountactionrequestdto_correlated_identity = AccountactionrequestdtoCorrelatedIdentity(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Thomas Edison'
)

```
[[Back to top]](#) 


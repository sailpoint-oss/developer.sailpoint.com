---
id: v2025-account-all-of-owner-identity
title: AccountAllOfOwnerIdentity
pagination_label: AccountAllOfOwnerIdentity
sidebar_label: AccountAllOfOwnerIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAllOfOwnerIdentity', 'V2025AccountAllOfOwnerIdentity'] 
slug: /tools/sdk/python/v2025/models/account-all-of-owner-identity
tags: ['SDK', 'Software Development Kit', 'AccountAllOfOwnerIdentity', 'V2025AccountAllOfOwnerIdentity']
---

# AccountAllOfOwnerIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**DtoType**](dto-type) |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.v2025.models.account_all_of_owner_identity import AccountAllOfOwnerIdentity

account_all_of_owner_identity = AccountAllOfOwnerIdentity(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 


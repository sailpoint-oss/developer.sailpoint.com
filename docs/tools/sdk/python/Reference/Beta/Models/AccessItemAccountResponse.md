---
id: beta-access-item-account-response
title: AccessItemAccountResponse
pagination_label: AccessItemAccountResponse
sidebar_label: AccessItemAccountResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemAccountResponse', 'BetaAccessItemAccountResponse'] 
slug: /tools/sdk/python/beta/models/access-item-account-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAccountResponse', 'BetaAccessItemAccountResponse']
---

# AccessItemAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the access item id | [optional] 
**access_type** | **str** | the access item type. account in this case | [optional] 
**display_name** | **str** | the display name of the identity | [optional] 
**source_name** | **str** | the name of the source | [optional] 
**native_identity** | **str** | the native identifier used to uniquely identify an acccount | [required]
**source_id** | **str** | the id of the source | [optional] 
**entitlement_count** | **int** | the number of entitlements the account will create | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_item_account_response import AccessItemAccountResponse

access_item_account_response = AccessItemAccountResponse(
id='2c918087763e69d901763e72e97f006f',
access_type='account',
display_name='Dr. Arden Rogahn MD',
source_name='DataScienceDataset',
native_identity='dr.arden.ogahn.d',
source_id='2793o32dwd',
entitlement_count=12
)

```
[[Back to top]](#) 


---
id: v2024-list-identity-access-items200-response-inner
title: ListIdentityAccessItems200ResponseInner
pagination_label: ListIdentityAccessItems200ResponseInner
sidebar_label: ListIdentityAccessItems200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ListIdentityAccessItems200ResponseInner', 'V2024ListIdentityAccessItems200ResponseInner'] 
slug: /tools/sdk/python/v2024/models/list-identity-access-items200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListIdentityAccessItems200ResponseInner', 'V2024ListIdentityAccessItems200ResponseInner']
---

# ListIdentityAccessItems200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the access item id | [optional] 
**access_type** | **str** | the access item type. entitlement in this case | [optional] 
**display_name** | **str** | the access item display name | [optional] 
**source_name** | **str** | the associated source name if it exists | [optional] 
**attribute** | **str** | the entitlement attribute | [required]
**value** | **str** | the associated value | [required]
**type** | **str** | the type of entitlement | [required]
**description** | **str** | the description for the role | [optional] 
**source_id** | **str** | the id of the source | [optional] 
**standalone** | **bool** | indicates whether the access profile is standalone | [required]
**privileged** | **bool** | indicates whether the entitlement is privileged | [required]
**cloud_governed** | **bool** | indicates whether the entitlement is cloud governed | [required]
**entitlement_count** | **int** | the number of entitlements the account will create | [required]
**app_refs** | [**[]AccessItemAccessProfileResponseAppRefsInner**](access-item-access-profile-response-app-refs-inner) | the list of app ids associated with the access profile | [required]
**remove_date** | **str** | the date the role is no longer assigned to the specified identity | [optional] 
**revocable** | **bool** | indicates whether the role is revocable | [required]
**native_identity** | **str** | the native identifier used to uniquely identify an acccount | [required]
**app_role_id** | **str** | the app role id | [required]
}

## Example

```python
from sailpoint.v2024.models.list_identity_access_items200_response_inner import ListIdentityAccessItems200ResponseInner

list_identity_access_items200_response_inner = ListIdentityAccessItems200ResponseInner(
id='2c918087763e69d901763e72e97f006f',
access_type='app',
display_name='Display Name',
source_name='appName',
attribute='groups',
value='Upward mobility access',
type='ENTITLEMENT',
description='Role - Workday/Citizenship access',
source_id='2793o32dwd',
standalone=False,
privileged=False,
cloud_governed=True,
entitlement_count=12,
app_refs=[{cloudAppId=8c190e6787aa4ed9a90bd9d5344523fb, cloudAppName=Sample App}, {cloudAppId=2c91808a77ff216301782327a50f09bf, cloudAppName=Another App}],
remove_date='2024-07-01T06:00:00.00Z',
revocable=True,
native_identity='dr.arden.ogahn.d',
app_role_id='2c918087763e69d901763e72e97f006f'
)

```
[[Back to top]](#) 


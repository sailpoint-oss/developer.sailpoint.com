---
id: v2025-access-item-associated-access-item
title: AccessItemAssociatedAccessItem
pagination_label: AccessItemAssociatedAccessItem
sidebar_label: AccessItemAssociatedAccessItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemAssociatedAccessItem', 'V2025AccessItemAssociatedAccessItem'] 
slug: /tools/sdk/python/v2025/models/access-item-associated-access-item
tags: ['SDK', 'Software Development Kit', 'AccessItemAssociatedAccessItem', 'V2025AccessItemAssociatedAccessItem']
---

# AccessItemAssociatedAccessItem


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
from sailpoint.v2025.models.access_item_associated_access_item import AccessItemAssociatedAccessItem

access_item_associated_access_item = AccessItemAssociatedAccessItem(
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


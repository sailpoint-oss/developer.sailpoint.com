---
id: accessitemassociated-access-item
title: AccessitemassociatedAccessItem
pagination_label: AccessitemassociatedAccessItem
sidebar_label: AccessitemassociatedAccessItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessitemassociatedAccessItem', 'AccessitemassociatedAccessItem'] 
slug: /tools/sdk/python/identity-history/models/accessitemassociated-access-item
tags: ['SDK', 'Software Development Kit', 'AccessitemassociatedAccessItem', 'AccessitemassociatedAccessItem']
---

# AccessitemassociatedAccessItem


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
**app_refs** | [**[]AccessitemaccessprofileresponseAppRefsInner**](accessitemaccessprofileresponse-app-refs-inner) | the list of app ids associated with the access profile | [required]
**start_date** | **str** | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [optional] 
**remove_date** | **str** | the date the role is no longer assigned to the specified identity | [optional] 
**revocable** | **bool** | indicates whether the role is revocable | [required]
**native_identity** | **str** | the native identifier used to uniquely identify an acccount | [required]
**app_role_id** | **str** | the app role id | [required]
}

## Example

```python
from sailpoint.identity_history.models.accessitemassociated_access_item import AccessitemassociatedAccessItem

accessitemassociated_access_item = AccessitemassociatedAccessItem(
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
start_date='2024-07-01T05:00:00.00Z',
remove_date='2024-07-01T06:00:00.00Z',
revocable=True,
native_identity='dr.arden.ogahn.d',
app_role_id='2c918087763e69d901763e72e97f006f'
)

```
[[Back to top]](#) 


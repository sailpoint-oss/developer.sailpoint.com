---
id: v2024-list-identity-snapshot-access-items200-response-inner
title: ListIdentitySnapshotAccessItems200ResponseInner
pagination_label: ListIdentitySnapshotAccessItems200ResponseInner
sidebar_label: ListIdentitySnapshotAccessItems200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ListIdentitySnapshotAccessItems200ResponseInner', 'V2024ListIdentitySnapshotAccessItems200ResponseInner'] 
slug: /tools/sdk/python/v2024/models/list-identity-snapshot-access-items200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListIdentitySnapshotAccessItems200ResponseInner', 'V2024ListIdentitySnapshotAccessItems200ResponseInner']
---

# ListIdentitySnapshotAccessItems200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the access item id | [optional] 
**access_type** | **str** | the access item type. role in this case | [optional] 
**display_name** | **str** | the role display name | [optional] 
**source_name** | **str** | the associated source name if it exists | [optional] 
**entitlement_count** | **int** | the number of entitlements the account will create | [required]
**description** | **str** | the description for the role | [optional] 
**source_id** | **str** | the id of the source | [optional] 
**app_refs** | [**[]AccessItemAccessProfileResponseAppRefsInner**](access-item-access-profile-response-app-refs-inner) | the list of app ids associated with the access profile | [required]
**remove_date** | **str** | the date the role is no longer assigned to the specified identity | [optional] 
**standalone** | **bool** | indicates whether the entitlement is standalone | [required]
**revocable** | **bool** | indicates whether the role is revocable | [required]
**native_identity** | **str** | the native identifier used to uniquely identify an acccount | [required]
**app_role_id** | **str** | the app role id | [required]
**attribute** | **str** | the entitlement attribute | [required]
**value** | **str** | the associated value | [required]
**type** | **str** | the type of entitlement | [required]
**privileged** | **bool** | indicates whether the entitlement is privileged | [required]
**cloud_governed** | **bool** | indicates whether the entitlement is cloud governed | [required]
}

## Example

```python
from sailpoint.v2024.models.list_identity_snapshot_access_items200_response_inner import ListIdentitySnapshotAccessItems200ResponseInner

list_identity_snapshot_access_items200_response_inner = ListIdentitySnapshotAccessItems200ResponseInner(
id='2c918087763e69d901763e72e97f006f',
access_type='role',
display_name='sample',
source_name='Source Name',
entitlement_count=12,
description='Role - Workday/Citizenship access',
source_id='2793o32dwd',
app_refs=[{cloudAppId=8c190e6787aa4ed9a90bd9d5344523fb, cloudAppName=Sample App}, {cloudAppId=2c91808a77ff216301782327a50f09bf, cloudAppName=Another App}],
remove_date='2024-07-01T06:00:00.00Z',
standalone=True,
revocable=True,
native_identity='dr.arden.ogahn.d',
app_role_id='2c918087763e69d901763e72e97f006f',
attribute='groups',
value='Upward mobility access',
type='ENTITLEMENT',
privileged=False,
cloud_governed=True
)

```
[[Back to top]](#) 


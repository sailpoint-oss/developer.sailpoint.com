---
id: beta-access-item-associated-access-item
title: AccessItemAssociatedAccessItem
pagination_label: AccessItemAssociatedAccessItem
sidebar_label: AccessItemAssociatedAccessItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemAssociatedAccessItem', 'BetaAccessItemAssociatedAccessItem'] 
slug: /tools/sdk/python/beta/models/access-item-associated-access-item
tags: ['SDK', 'Software Development Kit', 'AccessItemAssociatedAccessItem', 'BetaAccessItemAssociatedAccessItem']
---

# AccessItemAssociatedAccessItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **str** | the access item type. role in this case | [optional] 
**id** | **str** | the access item id | [optional] 
**name** | **str** | the access profile name | [optional] 
**source_name** | **str** | the associated source name if it exists | [optional] 
**source_id** | **str** | the id of the source | [optional] 
**description** | **str** | the description for the role | [optional] 
**display_name** | **str** | the role display name | [optional] 
**entitlement_count** | **str** | the number of entitlements the account will create | [optional] 
**app_display_name** | **str** | the name of | [optional] 
**remove_date** | **str** | the date the role is no longer assigned to the specified identity | [optional] 
**standalone** | **bool** | indicates whether the entitlement is standalone | [required]
**revocable** | **bool** | indicates whether the role is revocable | [required]
**native_identity** | **str** | the native identifier used to uniquely identify an acccount | [optional] 
**app_role_id** | **str** | the app role id | [optional] 
**attribute** | **str** | the entitlement attribute | [optional] 
**value** | **str** | the associated value | [optional] 
**entitlement_type** | **str** | the type of entitlement | [optional] 
**privileged** | **bool** | indicates whether the entitlement is privileged | [required]
**cloud_governed** | **bool** | indicates whether the entitlement is cloud governed | [required]
}

## Example

```python
from sailpoint.beta.models.access_item_associated_access_item import AccessItemAssociatedAccessItem

access_item_associated_access_item = AccessItemAssociatedAccessItem(
access_type='role',
id='2c918087763e69d901763e72e97f006f',
name='sample',
source_name='Source Name',
source_id='2793o32dwd',
description='Role - Workday/Citizenship access',
display_name='sample',
entitlement_count='12',
app_display_name='AppName',
remove_date='2024-07-01T06:00:00.00Z',
standalone=True,
revocable=True,
native_identity='dr.arden.ogahn.d',
app_role_id='2c918087763e69d901763e72e97f006f',
attribute='groups',
value='Upward mobility access',
entitlement_type='entitlement',
privileged=False,
cloud_governed=True
)

```
[[Back to top]](#) 


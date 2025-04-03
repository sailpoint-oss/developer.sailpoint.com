---
id: v2025-access-item-access-profile-response
title: AccessItemAccessProfileResponse
pagination_label: AccessItemAccessProfileResponse
sidebar_label: AccessItemAccessProfileResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemAccessProfileResponse', 'V2025AccessItemAccessProfileResponse'] 
slug: /tools/sdk/python/v2025/models/access-item-access-profile-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAccessProfileResponse', 'V2025AccessItemAccessProfileResponse']
---

# AccessItemAccessProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **str** | the access item type. accessProfile in this case | [optional] 
**id** | **str** | the access item id | [optional] 
**name** | **str** | the access profile name | [optional] 
**source_name** | **str** | the name of the source | [optional] 
**source_id** | **str** | the id of the source | [optional] 
**description** | **str** | the description for the access profile | [optional] 
**display_name** | **str** | the display name of the identity | [optional] 
**entitlement_count** | **str** | the number of entitlements the access profile will create | [optional] 
**app_display_name** | **str** | the name of | [optional] 
**remove_date** | **str** | the date the access profile is no longer assigned to the specified identity | [optional] 
**standalone** | **bool** | indicates whether the access profile is standalone | [required]
**revocable** | **bool** | indicates whether the access profile is | [required]
}

## Example

```python
from sailpoint.v2025.models.access_item_access_profile_response import AccessItemAccessProfileResponse

access_item_access_profile_response = AccessItemAccessProfileResponse(
access_type='accessProfile',
id='2c918087763e69d901763e72e97f006f',
name='sample',
source_name='DataScienceDataset',
source_id='2793o32dwd',
description='AccessProfile - Workday/Citizenship access',
display_name='Dr. Arden Rogahn MD',
entitlement_count='12',
app_display_name='AppName',
remove_date='2024-07-01T06:00:00.00Z',
standalone=False,
revocable=True
)

```
[[Back to top]](#) 


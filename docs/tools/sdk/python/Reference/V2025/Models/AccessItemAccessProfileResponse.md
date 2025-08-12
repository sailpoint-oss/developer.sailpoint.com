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
**id** | **str** | the access item id | [optional] 
**access_type** | **str** | the access item type. accessProfile in this case | [optional] 
**display_name** | **str** | the display name of the identity | [optional] 
**source_name** | **str** | the name of the source | [optional] 
**entitlement_count** | **int** | the number of entitlements the access profile will create | [required]
**description** | **str** | the description for the access profile | [optional] 
**source_id** | **str** | the id of the source | [optional] 
**app_refs** | [**[]AccessItemAccessProfileResponseAppRefsInner**](access-item-access-profile-response-app-refs-inner) | the list of app ids associated with the access profile | [required]
**remove_date** | **str** | the date the access profile is no longer assigned to the specified identity | [optional] 
**standalone** | **bool** | indicates whether the access profile is standalone | [required]
**revocable** | **bool** | indicates whether the access profile is revocable | [required]
}

## Example

```python
from sailpoint.v2025.models.access_item_access_profile_response import AccessItemAccessProfileResponse

access_item_access_profile_response = AccessItemAccessProfileResponse(
id='2c918087763e69d901763e72e97f006f',
access_type='accessProfile',
display_name='Dr. Arden Rogahn MD',
source_name='DataScienceDataset',
entitlement_count=12,
description='AccessProfile - Workday/Citizenship access',
source_id='2793o32dwd',
app_refs=[{cloudAppId=8c190e6787aa4ed9a90bd9d5344523fb, cloudAppName=Sample App}, {cloudAppId=2c91808a77ff216301782327a50f09bf, cloudAppName=Another App}],
remove_date='2024-07-01T06:00:00.00Z',
standalone=False,
revocable=True
)

```
[[Back to top]](#) 


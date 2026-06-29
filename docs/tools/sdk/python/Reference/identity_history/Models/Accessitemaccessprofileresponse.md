---
id: accessitemaccessprofileresponse
title: Accessitemaccessprofileresponse
pagination_label: Accessitemaccessprofileresponse
sidebar_label: Accessitemaccessprofileresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessitemaccessprofileresponse', 'Accessitemaccessprofileresponse'] 
slug: /tools/sdk/python/identity-history/models/accessitemaccessprofileresponse
tags: ['SDK', 'Software Development Kit', 'Accessitemaccessprofileresponse', 'Accessitemaccessprofileresponse']
---

# Accessitemaccessprofileresponse


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
**app_refs** | [**[]AccessitemaccessprofileresponseAppRefsInner**](accessitemaccessprofileresponse-app-refs-inner) | the list of app ids associated with the access profile | [required]
**start_date** | **str** | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [optional] 
**remove_date** | **str** | the date the access profile is no longer assigned to the specified identity | [optional] 
**standalone** | **bool** | indicates whether the access profile is standalone | [required]
**revocable** | **bool** | indicates whether the access profile is revocable | [required]
}

## Example

```python
from sailpoint.identity_history.models.accessitemaccessprofileresponse import Accessitemaccessprofileresponse

accessitemaccessprofileresponse = Accessitemaccessprofileresponse(
id='2c918087763e69d901763e72e97f006f',
access_type='accessProfile',
display_name='Dr. Arden Rogahn MD',
source_name='DataScienceDataset',
entitlement_count=12,
description='AccessProfile - Workday/Citizenship access',
source_id='2793o32dwd',
app_refs=[{"cloudAppId":"8c190e6787aa4ed9a90bd9d5344523fb","cloudAppName":"Sample App"},{"cloudAppId":"2c91808a77ff216301782327a50f09bf","cloudAppName":"Another App"}],
start_date='2024-07-01T05:00:00.00Z',
remove_date='2024-07-01T06:00:00.00Z',
standalone=False,
revocable=True
)

```
[[Back to top]](#) 


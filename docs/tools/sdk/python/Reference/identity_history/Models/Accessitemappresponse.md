---
id: accessitemappresponse
title: Accessitemappresponse
pagination_label: Accessitemappresponse
sidebar_label: Accessitemappresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessitemappresponse', 'Accessitemappresponse'] 
slug: /tools/sdk/python/identity-history/models/accessitemappresponse
tags: ['SDK', 'Software Development Kit', 'Accessitemappresponse', 'Accessitemappresponse']
---

# Accessitemappresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the access item id | [optional] 
**access_type** | **str** | the access item type. entitlement in this case | [optional] 
**display_name** | **str** | the access item display name | [optional] 
**source_name** | **str** | the associated source name if it exists | [optional] 
**app_role_id** | **str** | the app role id | [required]
}

## Example

```python
from sailpoint.identity_history.models.accessitemappresponse import Accessitemappresponse

accessitemappresponse = Accessitemappresponse(
id='2c918087763e69d901763e72e97f006f',
access_type='app',
display_name='Display Name',
source_name='appName',
app_role_id='2c918087763e69d901763e72e97f006f'
)

```
[[Back to top]](#) 


---
id: identityhistoryresponse
title: Identityhistoryresponse
pagination_label: Identityhistoryresponse
sidebar_label: Identityhistoryresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityhistoryresponse', 'Identityhistoryresponse'] 
slug: /tools/sdk/python/identity-history/models/identityhistoryresponse
tags: ['SDK', 'Software Development Kit', 'Identityhistoryresponse', 'Identityhistoryresponse']
---

# Identityhistoryresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the identity ID | [optional] 
**display_name** | **str** | the display name of the identity | [optional] 
**snapshot** | **str** | the date when the identity record was created | [optional] 
**deleted_date** | **str** | the date when the identity was deleted | [optional] 
**access_item_count** | **map[string]int** | A map containing the count of each access item | [optional] 
**attributes** | **map[string]object** | A map containing the identity attributes | [optional] 
}

## Example

```python
from sailpoint.identity_history.models.identityhistoryresponse import Identityhistoryresponse

identityhistoryresponse = Identityhistoryresponse(
id='bc693f07e7b645539626c25954c58554',
display_name='Adam Zampa',
snapshot='2007-03-01T13:00:00.000Z',
deleted_date='2007-03-01T13:00:00.000Z',
access_item_count={"app":0,"role":2,"entitlement":4,"accessProfile":3,"account":1},
attributes={"jobTitle":"HR Manager","location":"NYC","firstname":"Adam","lastname":"Zampa","department":"HR"}
)

```
[[Back to top]](#) 


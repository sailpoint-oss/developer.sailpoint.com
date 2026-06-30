---
id: roleminingsessiondraftroledto
title: Roleminingsessiondraftroledto
pagination_label: Roleminingsessiondraftroledto
sidebar_label: Roleminingsessiondraftroledto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleminingsessiondraftroledto', 'Roleminingsessiondraftroledto'] 
slug: /tools/sdk/python/iai-role-mining/models/roleminingsessiondraftroledto
tags: ['SDK', 'Software Development Kit', 'Roleminingsessiondraftroledto', 'Roleminingsessiondraftroledto']
---

# Roleminingsessiondraftroledto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the draft role | [optional] 
**description** | **str** | Draft role description | [optional] 
**identity_ids** | **[]str** | The list of identities for this role mining session. | [optional] 
**entitlement_ids** | **[]str** | The list of entitlement ids for this role mining session. | [optional] 
**excluded_entitlements** | **[]str** | The list of excluded entitlement ids. | [optional] 
**modified** | **datetime** | Last modified date | [optional] 
**type** | [**Roleminingroletype**](roleminingroletype) |  | [optional] 
**id** | **str** | Id of the potential draft role | [optional] 
**created_date** | **datetime** | The date-time when this potential draft role was created. | [optional] 
**modified_date** | **datetime** | The date-time when this potential draft role was modified. | [optional] 
}

## Example

```python
from sailpoint.iai_role_mining.models.roleminingsessiondraftroledto import Roleminingsessiondraftroledto

roleminingsessiondraftroledto = Roleminingsessiondraftroledto(
name='Saved RM Session - 07/10',
description='Person who develops software',
identity_ids=["2c918090761a5aac0176215c46a62d58","2c918090761a5aac01722015c46a62d42"],
entitlement_ids=["2c91808a7624751a01762f19d665220d","2c91808a7624751a01762f19d67c220e"],
excluded_entitlements=["07a0b4e2","13b4e2a0"],
modified='2020-09-16T18:49:32.150Z',
type='SPECIALIZED',
id='e0cc5d7d-bf7f-4f81-b2af-8885b09d9923',
created_date=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
modified_date=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f')
)

```
[[Back to top]](#) 


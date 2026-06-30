---
id: approvalrequestedtarget
title: Approvalrequestedtarget
pagination_label: Approvalrequestedtarget
sidebar_label: Approvalrequestedtarget
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalrequestedtarget', 'Approvalrequestedtarget'] 
slug: /tools/sdk/python/approvals/models/approvalrequestedtarget
tags: ['SDK', 'Software Development Kit', 'Approvalrequestedtarget', 'Approvalrequestedtarget']
---

# Approvalrequestedtarget

Represents a requested target in an approval process, including details such as ID, name, reauthentication requirements, and removal date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forced_auth_signature** | **str** | Signature required for forced authentication. | [optional] 
**id** | **str** | ID of the requested target. | [optional] 
**name** | **str** | Name of the requested target. | [optional] 
**reauth_required** | **bool** | Indicates if reauthentication is required. | [optional] [default to False]
**removal_date** | **datetime** | Date when the target will be removed. | [optional] 
**request_type** | **str** | Type of the request. | [optional] 
**target_type** | **str** | Type of the target. | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalrequestedtarget import Approvalrequestedtarget

approvalrequestedtarget = Approvalrequestedtarget(
forced_auth_signature='string',
id='string',
name='string',
reauth_required=True,
removal_date='2025-07-07T18:10:13.687Z',
request_type='string',
target_type='string'
)

```
[[Back to top]](#) 


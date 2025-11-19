---
id: v2025-approval-requested-target
title: ApprovalRequestedTarget
pagination_label: ApprovalRequestedTarget
sidebar_label: ApprovalRequestedTarget
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalRequestedTarget', 'V2025ApprovalRequestedTarget'] 
slug: /tools/sdk/python/v2025/models/approval-requested-target
tags: ['SDK', 'Software Development Kit', 'ApprovalRequestedTarget', 'V2025ApprovalRequestedTarget']
---

# ApprovalRequestedTarget

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
from sailpoint.v2025.models.approval_requested_target import ApprovalRequestedTarget

approval_requested_target = ApprovalRequestedTarget(
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


---
id: pendingapproval-owner
title: PendingapprovalOwner
pagination_label: PendingapprovalOwner
sidebar_label: PendingapprovalOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PendingapprovalOwner', 'PendingapprovalOwner'] 
slug: /tools/sdk/python/access-request-approvals/models/pendingapproval-owner
tags: ['SDK', 'Software Development Kit', 'PendingapprovalOwner', 'PendingapprovalOwner']
---

# PendingapprovalOwner

Access item owner's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Access item owner's DTO type. | [optional] 
**id** | **str** | Access item owner's identity ID. | [optional] 
**name** | **str** | Access item owner's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.pendingapproval_owner import PendingapprovalOwner

pendingapproval_owner = PendingapprovalOwner(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 


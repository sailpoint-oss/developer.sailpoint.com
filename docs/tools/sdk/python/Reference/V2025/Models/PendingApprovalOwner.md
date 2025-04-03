---
id: v2025-pending-approval-owner
title: PendingApprovalOwner
pagination_label: PendingApprovalOwner
sidebar_label: PendingApprovalOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PendingApprovalOwner', 'V2025PendingApprovalOwner'] 
slug: /tools/sdk/python/v2025/models/pending-approval-owner
tags: ['SDK', 'Software Development Kit', 'PendingApprovalOwner', 'V2025PendingApprovalOwner']
---

# PendingApprovalOwner

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
from sailpoint.v2025.models.pending_approval_owner import PendingApprovalOwner

pending_approval_owner = PendingApprovalOwner(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 


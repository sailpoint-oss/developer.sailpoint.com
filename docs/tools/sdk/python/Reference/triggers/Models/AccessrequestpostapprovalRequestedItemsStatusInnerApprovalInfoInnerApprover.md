---
id: accessrequestpostapproval-requested-items-status-inner-approval-info-inner-approver
title: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover
pagination_label: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover
sidebar_label: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover'] 
slug: /tools/sdk/python/triggers/models/accessrequestpostapproval-requested-items-status-inner-approval-info-inner-approver
tags: ['SDK', 'Software Development Kit', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover']
---

# AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover

The identity of the approver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | The type of object that is referenced | [required]
**id** | **str** | ID of identity who approved the access item request. | [required]
**name** | **str** | Human-readable display name of identity who approved the access item request. | [required]
}

## Example

```python
from sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner_approval_info_inner_approver import AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover

accessrequestpostapproval_requested_items_status_inner_approval_info_inner_approver = AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 


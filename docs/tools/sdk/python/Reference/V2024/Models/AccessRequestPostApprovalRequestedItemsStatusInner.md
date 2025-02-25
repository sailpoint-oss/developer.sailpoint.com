---
id: v2024-access-request-post-approval-requested-items-status-inner
title: AccessRequestPostApprovalRequestedItemsStatusInner
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInner', 'V2024AccessRequestPostApprovalRequestedItemsStatusInner'] 
slug: /tools/sdk/python/v2024/models/access-request-post-approval-requested-items-status-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInner', 'V2024AccessRequestPostApprovalRequestedItemsStatusInner']
---

# AccessRequestPostApprovalRequestedItemsStatusInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the access item being requested. | [required]
**name** | **str** | The human friendly name of the access item. | [required]
**description** | **str** | Detailed description of the access item. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | The type of access item. | [required]
**operation** |  **Enum** [  'Add',    'Remove' ] | The action to perform on the access item. | [required]
**comment** | **str** | A comment from the identity requesting the access. | [optional] 
**client_metadata** | **map[string]object** | Additional customer defined metadata about the access item. | [optional] 
**approval_info** | [**[]AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner**](access-request-post-approval-requested-items-status-inner-approval-info-inner) | A list of one or more approvers for the access request. | [required]
}

## Example

```python
from sailpoint.v2024.models.access_request_post_approval_requested_items_status_inner import AccessRequestPostApprovalRequestedItemsStatusInner

access_request_post_approval_requested_items_status_inner = AccessRequestPostApprovalRequestedItemsStatusInner(
id='2c91808b6ef1d43e016efba0ce470904',
name='Engineering Access',
description='Access to engineering database',
type=ACCESS_PROFILE,
operation=Add,
comment='William needs this access to do his job.',
client_metadata={applicationName=My application},
approval_info=[
                    sailpoint.v2024.models.access_request_post_approval_requested_items_status_inner_approval_info_inner.AccessRequestPostApproval_requestedItemsStatus_inner_approvalInfo_inner(
                        approval_comment = 'This access looks good.  Approved.', 
                        approval_decision = APPROVED, 
                        approver_name = 'Stephen.Austin', 
                        approver = sailpoint.v2024.models.access_request_post_approval_requested_items_status_inner_approval_info_inner_approver.AccessRequestPostApproval_requestedItemsStatus_inner_approvalInfo_inner_approver(
                            type = IDENTITY, ), )
                    ]
)

```
[[Back to top]](#) 


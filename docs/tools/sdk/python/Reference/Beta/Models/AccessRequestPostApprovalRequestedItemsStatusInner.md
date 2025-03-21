---
id: beta-access-request-post-approval-requested-items-status-inner
title: AccessRequestPostApprovalRequestedItemsStatusInner
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInner', 'BetaAccessRequestPostApprovalRequestedItemsStatusInner'] 
slug: /tools/sdk/python/beta/models/access-request-post-approval-requested-items-status-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInner', 'BetaAccessRequestPostApprovalRequestedItemsStatusInner']
---

# AccessRequestPostApprovalRequestedItemsStatusInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Access item's unique ID. | [required]
**name** | **str** | Access item's name. | [required]
**description** | **str** | Access item's description. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | Access item's type. | [required]
**operation** |  **Enum** [  'Add',    'Remove' ] | Action to perform on the requested access item. | [required]
**comment** | **str** | Comment from the identity requesting access. | [optional] 
**client_metadata** | **map[string]object** | Additional customer defined metadata about the access item. | [optional] 
**approval_info** | [**[]AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner**](access-request-post-approval-requested-items-status-inner-approval-info-inner) | List of approvers for the access request. | [required]
}

## Example

```python
from sailpoint.beta.models.access_request_post_approval_requested_items_status_inner import AccessRequestPostApprovalRequestedItemsStatusInner

access_request_post_approval_requested_items_status_inner = AccessRequestPostApprovalRequestedItemsStatusInner(
id='2c91808b6ef1d43e016efba0ce470904',
name='Engineering Access',
description='Access to engineering database',
type=ACCESS_PROFILE,
operation=Add,
comment='William needs this access to do his job.',
client_metadata={applicationName=My application},
approval_info=[
                    sailpoint.beta.models.access_request_post_approval_requested_items_status_inner_approval_info_inner.AccessRequestPostApproval_requestedItemsStatus_inner_approvalInfo_inner(
                        approval_comment = 'This access looks good. Approved.', 
                        approval_decision = APPROVED, 
                        approver_name = 'Stephen.Austin', 
                        approver = null, )
                    ]
)

```
[[Back to top]](#) 


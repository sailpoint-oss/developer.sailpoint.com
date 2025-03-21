---
id: beta-access-request-post-approval-requested-items-status-inner-approval-info-inner
title: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner', 'BetaAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner'] 
slug: /tools/sdk/python/beta/models/access-request-post-approval-requested-items-status-inner-approval-info-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner', 'BetaAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner']
---

# AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_comment** | **str** | Approver's comment. | [optional] 
**approval_decision** |  **Enum** [  'APPROVED',    'DENIED' ] | Approver's final decision. | [required]
**approver_name** | **str** | Approver's name. | [required]
**approver** | [**AccessItemApproverDto**](access-item-approver-dto) | Approver's identity. | [required]
}

## Example

```python
from sailpoint.beta.models.access_request_post_approval_requested_items_status_inner_approval_info_inner import AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner

access_request_post_approval_requested_items_status_inner_approval_info_inner = AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner(
approval_comment='This access looks good. Approved.',
approval_decision=APPROVED,
approver_name='Stephen.Austin',
approver=sailpoint.beta.models.access_item_approver_dto.AccessItemApproverDto(
                    type = 'IDENTITY', 
                    id = '2c3780a46faadee4016fb4e018c20652', 
                    name = 'Allen Albertson', )
)

```
[[Back to top]](#) 


---
id: v2025-access-request-post-approval-requested-items-status-inner-approval-info-inner
title: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner', 'V2025AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner'] 
slug: /tools/sdk/python/v2025/models/access-request-post-approval-requested-items-status-inner-approval-info-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner', 'V2025AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner']
---

# AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_comment** | **str** | A comment left by the approver. | [optional] 
**approval_decision** |  **Enum** [  'APPROVED',    'DENIED' ] | The final decision of the approver. | [required]
**approver_name** | **str** | The name of the approver | [required]
**approver** | [**AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover**](access-request-post-approval-requested-items-status-inner-approval-info-inner-approver) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.access_request_post_approval_requested_items_status_inner_approval_info_inner import AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner

access_request_post_approval_requested_items_status_inner_approval_info_inner = AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner(
approval_comment='This access looks good.  Approved.',
approval_decision=APPROVED,
approver_name='Stephen.Austin',
approver=sailpoint.v2025.models.access_request_post_approval_requested_items_status_inner_approval_info_inner_approver.AccessRequestPostApproval_requestedItemsStatus_inner_approvalInfo_inner_approver(
                    type = IDENTITY, )
)

```
[[Back to top]](#) 


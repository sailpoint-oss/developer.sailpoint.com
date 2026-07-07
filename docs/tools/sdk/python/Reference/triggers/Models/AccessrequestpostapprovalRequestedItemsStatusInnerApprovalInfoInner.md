---
id: accessrequestpostapproval-requested-items-status-inner-approval-info-inner
title: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner
pagination_label: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_label: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner'] 
slug: /tools/sdk/python/triggers/models/accessrequestpostapproval-requested-items-status-inner-approval-info-inner
tags: ['SDK', 'Software Development Kit', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner']
---

# AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_comment** | **str** | A comment left by the approver. | [optional] 
**approval_decision** |  **Enum** [  'APPROVED',    'DENIED' ] | The final decision of the approver. | [required]
**approver_name** | **str** | The name of the approver | [required]
**approver** | [**AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover**](accessrequestpostapproval-requested-items-status-inner-approval-info-inner-approver) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner_approval_info_inner import AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner

accessrequestpostapproval_requested_items_status_inner_approval_info_inner = AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner(
approval_comment='This access looks good.  Approved.',
approval_decision='APPROVED',
approver_name='Stephen.Austin',
approver=sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner_approval_info_inner_approver.accessrequestpostapproval_requestedItemsStatus_inner_approvalInfo_inner_approver(
                    type = 'IDENTITY', )
)

```
[[Back to top]](#) 


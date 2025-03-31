---
id: v2024-requested-item-status-pre-approval-trigger-details
title: RequestedItemStatusPreApprovalTriggerDetails
pagination_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedItemStatusPreApprovalTriggerDetails', 'V2024RequestedItemStatusPreApprovalTriggerDetails'] 
slug: /tools/sdk/python/v2024/models/requested-item-status-pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusPreApprovalTriggerDetails', 'V2024RequestedItemStatusPreApprovalTriggerDetails']
---

# RequestedItemStatusPreApprovalTriggerDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment left for the pre-approval decision | [optional] 
**reviewer** | **str** | The reviewer of the pre-approval decision | [optional] 
**decision** |  **Enum** [  'APPROVED',    'REJECTED' ] | The decision of the pre-approval trigger | [optional] 
}

## Example

```python
from sailpoint.v2024.models.requested_item_status_pre_approval_trigger_details import RequestedItemStatusPreApprovalTriggerDetails

requested_item_status_pre_approval_trigger_details = RequestedItemStatusPreApprovalTriggerDetails(
comment='Access is Approved',
reviewer='John Doe',
decision='APPROVED'
)

```
[[Back to top]](#) 


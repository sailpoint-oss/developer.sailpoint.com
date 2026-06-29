---
id: requesteditemstatus-pre-approval-trigger-details
title: RequesteditemstatusPreApprovalTriggerDetails
pagination_label: RequesteditemstatusPreApprovalTriggerDetails
sidebar_label: RequesteditemstatusPreApprovalTriggerDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequesteditemstatusPreApprovalTriggerDetails', 'RequesteditemstatusPreApprovalTriggerDetails'] 
slug: /tools/sdk/python/access-requests/models/requesteditemstatus-pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusPreApprovalTriggerDetails', 'RequesteditemstatusPreApprovalTriggerDetails']
---

# RequesteditemstatusPreApprovalTriggerDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment left for the pre-approval decision | [optional] 
**reviewer** | **str** | The reviewer of the pre-approval decision | [optional] 
**decision** |  **Enum** [  'APPROVED',    'REJECTED' ] | The decision of the pre-approval trigger | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.requesteditemstatus_pre_approval_trigger_details import RequesteditemstatusPreApprovalTriggerDetails

requesteditemstatus_pre_approval_trigger_details = RequesteditemstatusPreApprovalTriggerDetails(
comment='Access is Approved',
reviewer='John Doe',
decision='APPROVED'
)

```
[[Back to top]](#) 


---
id: v2025-pre-approval-trigger-details
title: PreApprovalTriggerDetails
pagination_label: PreApprovalTriggerDetails
sidebar_label: PreApprovalTriggerDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PreApprovalTriggerDetails', 'V2025PreApprovalTriggerDetails'] 
slug: /tools/sdk/python/v2025/models/pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'PreApprovalTriggerDetails', 'V2025PreApprovalTriggerDetails']
---

# PreApprovalTriggerDetails

Provides additional details about the pre-approval trigger for this request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment left for the pre-approval decision | [optional] 
**reviewer** | **str** | The reviewer of the pre-approval decision | [optional] 
**decision** |  **Enum** [  'APPROVED',    'REJECTED' ] | The decision of the pre-approval trigger | [optional] 
}

## Example

```python
from sailpoint.v2025.models.pre_approval_trigger_details import PreApprovalTriggerDetails

pre_approval_trigger_details = PreApprovalTriggerDetails(
comment='Access is Approved',
reviewer='John Doe',
decision='APPROVED'
)

```
[[Back to top]](#) 


---
id: v2025-approval-approval-criteria-rejection
title: ApprovalApprovalCriteriaRejection
pagination_label: ApprovalApprovalCriteriaRejection
sidebar_label: ApprovalApprovalCriteriaRejection
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalApprovalCriteriaRejection', 'V2025ApprovalApprovalCriteriaRejection'] 
slug: /tools/sdk/python/v2025/models/approval-approval-criteria-rejection
tags: ['SDK', 'Software Development Kit', 'ApprovalApprovalCriteriaRejection', 'V2025ApprovalApprovalCriteriaRejection']
---

# ApprovalApprovalCriteriaRejection

Criteria for rejection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculation_type** |  **Enum** [  'COUNT',    'PERCENT' ] | This defines what the field \"value\" will be used as, either a count or percentage of the total approvers that need to reject | [optional] 
**value** | **int** | The value that needs to be met for the rejection criteria | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_approval_criteria_rejection import ApprovalApprovalCriteriaRejection

approval_approval_criteria_rejection = ApprovalApprovalCriteriaRejection(
calculation_type='COUNT',
value=30
)

```
[[Back to top]](#) 


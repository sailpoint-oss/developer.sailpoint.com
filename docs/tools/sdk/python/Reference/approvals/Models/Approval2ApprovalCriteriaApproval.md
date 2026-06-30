---
id: approval2-approval-criteria-approval
title: Approval2ApprovalCriteriaApproval
pagination_label: Approval2ApprovalCriteriaApproval
sidebar_label: Approval2ApprovalCriteriaApproval
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approval2ApprovalCriteriaApproval', 'Approval2ApprovalCriteriaApproval'] 
slug: /tools/sdk/python/approvals/models/approval2-approval-criteria-approval
tags: ['SDK', 'Software Development Kit', 'Approval2ApprovalCriteriaApproval', 'Approval2ApprovalCriteriaApproval']
---

# Approval2ApprovalCriteriaApproval

Criteria for approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculation_type** |  **Enum** [  'COUNT',    'PERCENT' ] | This defines what the field \"value\" will be used as, either a count or percentage of the total approvers that need to approve | [optional] 
**value** | **int** | The value that needs to be met for the approval criteria | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approval2_approval_criteria_approval import Approval2ApprovalCriteriaApproval

approval2_approval_criteria_approval = Approval2ApprovalCriteriaApproval(
calculation_type='COUNT',
value=70
)

```
[[Back to top]](#) 


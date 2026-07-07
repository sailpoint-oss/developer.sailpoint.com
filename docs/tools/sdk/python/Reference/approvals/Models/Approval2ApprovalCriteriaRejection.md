---
id: approval2-approval-criteria-rejection
title: Approval2ApprovalCriteriaRejection
pagination_label: Approval2ApprovalCriteriaRejection
sidebar_label: Approval2ApprovalCriteriaRejection
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approval2ApprovalCriteriaRejection', 'Approval2ApprovalCriteriaRejection'] 
slug: /tools/sdk/python/approvals/models/approval2-approval-criteria-rejection
tags: ['SDK', 'Software Development Kit', 'Approval2ApprovalCriteriaRejection', 'Approval2ApprovalCriteriaRejection']
---

# Approval2ApprovalCriteriaRejection

Criteria for rejection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculation_type** |  **Enum** [  'COUNT',    'PERCENT' ] | This defines what the field \"value\" will be used as, either a count or percentage of the total approvers that need to reject | [optional] 
**value** | **int** | The value that needs to be met for the rejection criteria | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approval2_approval_criteria_rejection import Approval2ApprovalCriteriaRejection

approval2_approval_criteria_rejection = Approval2ApprovalCriteriaRejection(
calculation_type='COUNT',
value=30
)

```
[[Back to top]](#) 


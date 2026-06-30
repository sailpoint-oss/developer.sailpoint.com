---
id: approval2-approval-criteria
title: Approval2ApprovalCriteria
pagination_label: Approval2ApprovalCriteria
sidebar_label: Approval2ApprovalCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approval2ApprovalCriteria', 'Approval2ApprovalCriteria'] 
slug: /tools/sdk/python/approvals/models/approval2-approval-criteria
tags: ['SDK', 'Software Development Kit', 'Approval2ApprovalCriteria', 'Approval2ApprovalCriteria']
---

# Approval2ApprovalCriteria

Criteria that needs to be met for an approval or rejection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of approval criteria, such as SERIAL or PARALLEL | [optional] 
**approval** | [**Approval2ApprovalCriteriaApproval**](approval2-approval-criteria-approval) |  | [optional] 
**rejection** | [**Approval2ApprovalCriteriaRejection**](approval2-approval-criteria-rejection) |  | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approval2_approval_criteria import Approval2ApprovalCriteria

approval2_approval_criteria = Approval2ApprovalCriteria(
type='SERIAL',
approval=sailpoint.approvals.models.approval_2_approval_criteria_approval.approval_2_approvalCriteria_approval(
                    calculation_type = 'COUNT', 
                    value = 70, ),
rejection=sailpoint.approvals.models.approval_2_approval_criteria_rejection.approval_2_approvalCriteria_rejection(
                    calculation_type = 'COUNT', 
                    value = 30, )
)

```
[[Back to top]](#) 


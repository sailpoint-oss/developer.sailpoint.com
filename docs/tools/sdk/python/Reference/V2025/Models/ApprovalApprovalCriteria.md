---
id: v2025-approval-approval-criteria
title: ApprovalApprovalCriteria
pagination_label: ApprovalApprovalCriteria
sidebar_label: ApprovalApprovalCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalApprovalCriteria', 'V2025ApprovalApprovalCriteria'] 
slug: /tools/sdk/python/v2025/models/approval-approval-criteria
tags: ['SDK', 'Software Development Kit', 'ApprovalApprovalCriteria', 'V2025ApprovalApprovalCriteria']
---

# ApprovalApprovalCriteria

Criteria that needs to be met for an approval or rejection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of approval criteria, such as SERIAL or PARALLEL | [optional] 
**approval** | [**ApprovalApprovalCriteriaApproval**](approval-approval-criteria-approval) |  | [optional] 
**rejection** | [**ApprovalApprovalCriteriaRejection**](approval-approval-criteria-rejection) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_approval_criteria import ApprovalApprovalCriteria

approval_approval_criteria = ApprovalApprovalCriteria(
type='SERIAL',
approval=sailpoint.v2025.models.approval_approval_criteria_approval.Approval_approvalCriteria_approval(
                    calculation_type = 'COUNT', 
                    value = 70, ),
rejection=sailpoint.v2025.models.approval_approval_criteria_rejection.Approval_approvalCriteria_rejection(
                    calculation_type = 'COUNT', 
                    value = 30, )
)

```
[[Back to top]](#) 


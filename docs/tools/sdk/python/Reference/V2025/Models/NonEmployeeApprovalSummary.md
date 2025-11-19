---
id: v2025-non-employee-approval-summary
title: NonEmployeeApprovalSummary
pagination_label: NonEmployeeApprovalSummary
sidebar_label: NonEmployeeApprovalSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeApprovalSummary', 'V2025NonEmployeeApprovalSummary'] 
slug: /tools/sdk/python/v2025/models/non-employee-approval-summary
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalSummary', 'V2025NonEmployeeApprovalSummary']
---

# NonEmployeeApprovalSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **int** | The number of approved non-employee approval requests. | [optional] 
**pending** | **int** | The number of pending non-employee approval requests. | [optional] 
**rejected** | **int** | The number of rejected non-employee approval requests. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.non_employee_approval_summary import NonEmployeeApprovalSummary

non_employee_approval_summary = NonEmployeeApprovalSummary(
approved=2,
pending=2,
rejected=2
)

```
[[Back to top]](#) 


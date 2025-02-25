---
id: beta-non-employee-approval-summary
title: NonEmployeeApprovalSummary
pagination_label: NonEmployeeApprovalSummary
sidebar_label: NonEmployeeApprovalSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeApprovalSummary', 'BetaNonEmployeeApprovalSummary'] 
slug: /tools/sdk/python/beta/models/non-employee-approval-summary
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalSummary', 'BetaNonEmployeeApprovalSummary']
---

# NonEmployeeApprovalSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **float** | The number of approved non-employee approval requests. | [optional] 
**pending** | **float** | The number of pending non-employee approval requests. | [optional] 
**rejected** | **float** | The number of rejected non-employee approval requests. | [optional] 
}

## Example

```python
from sailpoint.beta.models.non_employee_approval_summary import NonEmployeeApprovalSummary

non_employee_approval_summary = NonEmployeeApprovalSummary(
approved=1.337,
pending=1.337,
rejected=1.337
)

```
[[Back to top]](#) 


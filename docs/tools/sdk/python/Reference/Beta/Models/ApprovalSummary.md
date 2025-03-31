---
id: beta-approval-summary
title: ApprovalSummary
pagination_label: ApprovalSummary
sidebar_label: ApprovalSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalSummary', 'BetaApprovalSummary'] 
slug: /tools/sdk/python/beta/models/approval-summary
tags: ['SDK', 'Software Development Kit', 'ApprovalSummary', 'BetaApprovalSummary']
---

# ApprovalSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pending** | **int** | The number of pending access requests approvals. | [optional] 
**approved** | **int** | The number of approved access requests approvals. | [optional] 
**rejected** | **int** | The number of rejected access requests approvals. | [optional] 
}

## Example

```python
from sailpoint.beta.models.approval_summary import ApprovalSummary

approval_summary = ApprovalSummary(
pending=56,
approved=56,
rejected=56
)

```
[[Back to top]](#) 


---
id: v2025-approval-summary
title: ApprovalSummary
pagination_label: ApprovalSummary
sidebar_label: ApprovalSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalSummary', 'V2025ApprovalSummary'] 
slug: /tools/sdk/python/v2025/models/approval-summary
tags: ['SDK', 'Software Development Kit', 'ApprovalSummary', 'V2025ApprovalSummary']
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
from sailpoint.v2025.models.approval_summary import ApprovalSummary

approval_summary = ApprovalSummary(
pending=0,
approved=0,
rejected=0
)

```
[[Back to top]](#) 


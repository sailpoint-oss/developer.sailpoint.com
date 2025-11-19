---
id: beta-sed-approval-status
title: SedApprovalStatus
pagination_label: SedApprovalStatus
sidebar_label: SedApprovalStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SedApprovalStatus', 'BetaSedApprovalStatus'] 
slug: /tools/sdk/python/beta/models/sed-approval-status
tags: ['SDK', 'Software Development Kit', 'SedApprovalStatus', 'BetaSedApprovalStatus']
---

# SedApprovalStatus

SED Approval Status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_reason** | **str** | failed reason will be display if status is failed | [optional] 
**id** | **str** | Sed id | [optional] 
**status** | **str** | SUCCESS | FAILED | [optional] 
}

## Example

```python
from sailpoint.beta.models.sed_approval_status import SedApprovalStatus

sed_approval_status = SedApprovalStatus(
failed_reason='invalid status',
id='016629d1-1d25-463f-97f3-0c6686846650',
status='SUCCESS'
)

```
[[Back to top]](#) 


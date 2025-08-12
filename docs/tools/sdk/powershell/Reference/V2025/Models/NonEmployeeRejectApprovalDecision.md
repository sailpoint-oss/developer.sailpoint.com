---
id: v2025-non-employee-reject-approval-decision
title: NonEmployeeRejectApprovalDecision
pagination_label: NonEmployeeRejectApprovalDecision
sidebar_label: NonEmployeeRejectApprovalDecision
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRejectApprovalDecision', 'V2025NonEmployeeRejectApprovalDecision'] 
slug: /tools/sdk/powershell/v2025/models/non-employee-reject-approval-decision
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRejectApprovalDecision', 'V2025NonEmployeeRejectApprovalDecision']
---


# NonEmployeeRejectApprovalDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment on the approval item. | [required]

## Examples

- Prepare the resource
```powershell
$NonEmployeeRejectApprovalDecision = Initialize-V2025NonEmployeeRejectApprovalDecision  -Comment approved
```

- Convert the resource to JSON
```powershell
$NonEmployeeRejectApprovalDecision | ConvertTo-JSON
```


[[Back to top]](#) 


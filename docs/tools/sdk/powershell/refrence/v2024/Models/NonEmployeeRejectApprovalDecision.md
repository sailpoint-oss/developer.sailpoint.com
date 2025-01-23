---
id: non-employee-reject-approval-decision
title: NonEmployeeRejectApprovalDecision
pagination_label: NonEmployeeRejectApprovalDecision
sidebar_label: NonEmployeeRejectApprovalDecision
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRejectApprovalDecision'] 
slug: /tools/sdk/powershell/v2024/models/non-employee-reject-approval-decision
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRejectApprovalDecision']
---


# NonEmployeeRejectApprovalDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  **String** | Comment on the approval item. | [required]

## Examples

- Prepare the resource
```powershell
$NonEmployeeRejectApprovalDecision = Initialize-PSSailpoint.V2024NonEmployeeRejectApprovalDecision  -Comment approved
```

- Convert the resource to JSON
```powershell
$NonEmployeeRejectApprovalDecision | ConvertTo-JSON
```


[[Back to top]](#) 


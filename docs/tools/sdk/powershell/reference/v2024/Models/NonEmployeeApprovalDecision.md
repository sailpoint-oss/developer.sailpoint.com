---
id: v2024-non-employee-approval-decision
title: NonEmployeeApprovalDecision
pagination_label: NonEmployeeApprovalDecision
sidebar_label: NonEmployeeApprovalDecision
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeApprovalDecision', 'V2024NonEmployeeApprovalDecision'] 
slug: /tools/sdk/powershell/v2024/models/non-employee-approval-decision
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalDecision', 'V2024NonEmployeeApprovalDecision']
---


# NonEmployeeApprovalDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | Comment on the approval item. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeApprovalDecision = Initialize-PSSailpoint.V2024NonEmployeeApprovalDecision  -Comment Approved by manager
```

- Convert the resource to JSON
```powershell
$NonEmployeeApprovalDecision | ConvertTo-JSON
```


[[Back to top]](#) 


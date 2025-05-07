---
id: non-employee-reject-approval-decision
title: NonEmployeeRejectApprovalDecision
pagination_label: NonEmployeeRejectApprovalDecision
sidebar_label: NonEmployeeRejectApprovalDecision
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRejectApprovalDecision', 'NonEmployeeRejectApprovalDecision'] 
slug: /tools/sdk/powershell/v3/models/non-employee-reject-approval-decision
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRejectApprovalDecision', 'NonEmployeeRejectApprovalDecision']
---


# NonEmployeeRejectApprovalDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment on the approval item. | [required]

## Examples

- Prepare the resource
```powershell
$NonEmployeeRejectApprovalDecision = Initialize-NonEmployeeRejectApprovalDecision  -Comment approved
```

- Convert the resource to JSON
```powershell
$NonEmployeeRejectApprovalDecision | ConvertTo-JSON
```


[[Back to top]](#) 


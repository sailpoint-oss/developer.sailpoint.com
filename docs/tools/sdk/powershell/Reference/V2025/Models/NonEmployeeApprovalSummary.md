---
id: v2025-non-employee-approval-summary
title: NonEmployeeApprovalSummary
pagination_label: NonEmployeeApprovalSummary
sidebar_label: NonEmployeeApprovalSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeApprovalSummary', 'V2025NonEmployeeApprovalSummary'] 
slug: /tools/sdk/powershell/v2025/models/non-employee-approval-summary
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalSummary', 'V2025NonEmployeeApprovalSummary']
---


# NonEmployeeApprovalSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | **Int32** | The number of approved non-employee approval requests. | [optional] 
**Pending** | **Int32** | The number of pending non-employee approval requests. | [optional] 
**Rejected** | **Int32** | The number of rejected non-employee approval requests. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeApprovalSummary = Initialize-V2025NonEmployeeApprovalSummary  -Approved 2 `
 -Pending 2 `
 -Rejected 2
```

- Convert the resource to JSON
```powershell
$NonEmployeeApprovalSummary | ConvertTo-JSON
```


[[Back to top]](#) 


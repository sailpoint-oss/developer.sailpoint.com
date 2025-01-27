---
id: non-employee-approval-summary
title: NonEmployeeApprovalSummary
pagination_label: NonEmployeeApprovalSummary
sidebar_label: NonEmployeeApprovalSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeApprovalSummary'] 
slug: /tools/sdk/powershell/beta/models/non-employee-approval-summary
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalSummary']
---


# NonEmployeeApprovalSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** |  Pointer to **Decimal** | The number of approved non-employee approval requests. | [optional] 
**Pending** |  Pointer to **Decimal** | The number of pending non-employee approval requests. | [optional] 
**Rejected** |  Pointer to **Decimal** | The number of rejected non-employee approval requests. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeApprovalSummary = Initialize-PSSailpoint.BetaNonEmployeeApprovalSummary  -Approved null `
 -Pending null `
 -Rejected null
```

- Convert the resource to JSON
```powershell
$NonEmployeeApprovalSummary | ConvertTo-JSON
```


[[Back to top]](#) 


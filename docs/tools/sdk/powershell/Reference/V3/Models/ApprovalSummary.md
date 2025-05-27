---
id: approval-summary
title: ApprovalSummary
pagination_label: ApprovalSummary
sidebar_label: ApprovalSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalSummary', 'ApprovalSummary'] 
slug: /tools/sdk/powershell/v3/models/approval-summary
tags: ['SDK', 'Software Development Kit', 'ApprovalSummary', 'ApprovalSummary']
---


# ApprovalSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pending** | **Int32** | The number of pending access requests approvals. | [optional] 
**Approved** | **Int32** | The number of approved access requests approvals. | [optional] 
**Rejected** | **Int32** | The number of rejected access requests approvals. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalSummary = Initialize-ApprovalSummary  -Pending 0 `
 -Approved 0 `
 -Rejected 0
```

- Convert the resource to JSON
```powershell
$ApprovalSummary | ConvertTo-JSON
```


[[Back to top]](#) 


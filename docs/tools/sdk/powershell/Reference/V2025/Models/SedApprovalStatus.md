---
id: v2025-sed-approval-status
title: SedApprovalStatus
pagination_label: SedApprovalStatus
sidebar_label: SedApprovalStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedApprovalStatus', 'V2025SedApprovalStatus'] 
slug: /tools/sdk/powershell/v2025/models/sed-approval-status
tags: ['SDK', 'Software Development Kit', 'SedApprovalStatus', 'V2025SedApprovalStatus']
---


# SedApprovalStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FailedReason** | **String** | failed reason will be display if status is failed | [optional] 
**Id** | **String** | Sed id | [optional] 
**Status** | **String** | SUCCESS | FAILED | [optional] 

## Examples

- Prepare the resource
```powershell
$SedApprovalStatus = Initialize-PSSailpoint.V2025SedApprovalStatus  -FailedReason invalid status `
 -Id 016629d1-1d25-463f-97f3-0c6686846650 `
 -Status SUCCESS
```

- Convert the resource to JSON
```powershell
$SedApprovalStatus | ConvertTo-JSON
```


[[Back to top]](#) 


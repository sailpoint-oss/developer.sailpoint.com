---
id: beta-sed-approval-status
title: SedApprovalStatus
pagination_label: SedApprovalStatus
sidebar_label: SedApprovalStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedApprovalStatus', 'BetaSedApprovalStatus'] 
slug: /tools/sdk/powershell/beta/models/sed-approval-status
tags: ['SDK', 'Software Development Kit', 'SedApprovalStatus', 'BetaSedApprovalStatus']
---


# SedApprovalStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FailedReason** |  Pointer to **String** | failed reason will be display if status is failed | [optional] 
**Id** |  Pointer to **String** | Sed id | [optional] 
**Status** |  Pointer to **String** | SUCCESS | FAILED | [optional] 

## Examples

- Prepare the resource
```powershell
$SedApprovalStatus = Initialize-PSSailpoint.BetaSedApprovalStatus  -FailedReason invalid status `
 -Id 016629d1-1d25-463f-97f3-0c6686846650 `
 -Status SUCCESS
```

- Convert the resource to JSON
```powershell
$SedApprovalStatus | ConvertTo-JSON
```


[[Back to top]](#) 


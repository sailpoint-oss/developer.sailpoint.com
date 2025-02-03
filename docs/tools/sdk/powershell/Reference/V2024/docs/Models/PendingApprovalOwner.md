---
id: v2024-pending-approval-owner
title: PendingApprovalOwner
pagination_label: PendingApprovalOwner
sidebar_label: PendingApprovalOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PendingApprovalOwner', 'V2024PendingApprovalOwner'] 
slug: /tools/sdk/powershell/v2024/models/pending-approval-owner
tags: ['SDK', 'Software Development Kit', 'PendingApprovalOwner', 'V2024PendingApprovalOwner']
---


# PendingApprovalOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Access item owner's DTO type. | [optional] 
**Id** |  Pointer to **String** | Access item owner's identity ID. | [optional] 
**Name** |  Pointer to **String** | Access item owner's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$PendingApprovalOwner = Initialize-PSSailpoint.V2024PendingApprovalOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$PendingApprovalOwner | ConvertTo-JSON
```


[[Back to top]](#) 

